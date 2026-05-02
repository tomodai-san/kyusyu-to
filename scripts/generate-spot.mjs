#!/usr/bin/env node
/**
 * Tourist Spot Content Generator  (no API keys required)
 *
 * ── Phase 1: generate a prompt to paste into Claude.ai ──────────────────────
 *   node scripts/generate-spot.mjs "Dazaifu Tenmangu Shrine"
 *   npm run generate "Dazaifu Tenmangu Shrine"
 *
 *   Outputs the Claude.ai prompt to your terminal and writes a template JSON
 *   to scripts/input/<slug>.json.
 *
 * ── Phase 2: process Claude's response ──────────────────────────────────────
 *   node scripts/generate-spot.mjs --process <slug>
 *   npm run generate -- --process dazaifu-tenmangu-shrine
 *
 *   Reads scripts/input/<slug>.json, validates location via Nominatim
 *   (OpenStreetMap, no key needed), searches Wikimedia Commons for
 *   free-license photos, scores them, and outputs a TypeScript snippet.
 *
 * No paid services. No API keys. No account registration.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve } from 'path';
import { buildPrompt, buildTemplateJson } from './lib/prompt-builder.mjs';
import { validateLocation } from './lib/location-validator.mjs';
import { searchImages } from './lib/image-searcher.mjs';
import { scoreImages } from './lib/image-scorer.mjs';
import { formatOutput } from './lib/output-formatter.mjs';

const args = process.argv.slice(2);

if (args[0] === '--process') {
  const slug = args[1]?.trim();
  if (!slug) {
    console.error('Usage: node scripts/generate-spot.mjs --process <slug>');
    process.exit(1);
  }
  await processSpot(slug);
} else {
  const spotName = args.join(' ').trim();
  if (!spotName) {
    console.error('Usage:');
    console.error('  node scripts/generate-spot.mjs "Spot Name"          ← Phase 1');
    console.error('  node scripts/generate-spot.mjs --process <slug>     ← Phase 2');
    process.exit(1);
  }
  await generatePrompt(spotName);
}

// ── Phase 1 ──────────────────────────────────────────────────────────────────

async function generatePrompt(spotName) {
  const slug = toSlug(spotName);
  const inputDir = resolve(process.cwd(), 'scripts/input');
  const inputPath = resolve(inputDir, `${slug}.json`);

  mkdirSync(inputDir, { recursive: true });

  if (existsSync(inputPath)) {
    console.log(`\n⚠️  Input file already exists: scripts/input/${slug}.json`);
    console.log(`   To process it: node scripts/generate-spot.mjs --process ${slug}`);
    console.log(`   To start over: delete the file and re-run.\n`);
    return;
  }

  writeFileSync(inputPath, JSON.stringify(buildTemplateJson(spotName), null, 2));

  const prompt = buildPrompt(spotName);
  const divider = '═'.repeat(62);

  console.log(`\n🗾  Kyushu Tourism — Spot Generator`);
  console.log(`    Spot: "${spotName}"\n`);
  console.log(divider);
  console.log('📋  PASTE THIS PROMPT INTO CLAUDE.AI  (claude.ai/new)');
  console.log(divider);
  console.log(prompt);
  console.log(divider);
  console.log('\n✅  Next steps:');
  console.log(`   1. Copy the prompt above → paste into claude.ai → hit Send`);
  console.log(`   2. Copy Claude's entire JSON response`);
  console.log(`   3. Open:  scripts/input/${slug}.json`);
  console.log(`   4. Replace all content with Claude's JSON`);
  console.log(`   5. Run:   node scripts/generate-spot.mjs --process ${slug}\n`);
}

// ── Phase 2 ──────────────────────────────────────────────────────────────────

async function processSpot(slug) {
  const inputPath = resolve(process.cwd(), 'scripts/input', `${slug}.json`);

  if (!existsSync(inputPath)) {
    console.error(`\n❌  Input file not found: scripts/input/${slug}.json`);
    console.error(`    Run phase 1 first: node scripts/generate-spot.mjs "Spot Name"\n`);
    process.exit(1);
  }

  let spotInfo;
  try {
    const raw = JSON.parse(readFileSync(inputPath, 'utf8'));
    // Strip internal template keys before processing
    const { _instructions: _, _input: __, ...data } = raw;
    spotInfo = data;
  } catch (err) {
    console.error(`\n❌  Cannot parse ${inputPath}: ${err.message}\n`);
    process.exit(1);
  }

  if (!spotInfo.slug || !spotInfo.lat || !spotInfo.lng) {
    console.error('\n❌  JSON looks incomplete (missing slug, lat, or lng).');
    console.error('    Make sure you pasted Claude\'s full JSON response into the file.\n');
    process.exit(1);
  }

  console.log(`\n🗾  Kyushu Tourism — Processing: ${spotInfo.fullName ?? slug}\n`);

  // Step 1: Nominatim location validation
  console.log('📍  [1/3] Validating location via Nominatim (OpenStreetMap)...');
  const validatedLocation = await validateLocation(spotInfo);
  if (validatedLocation.validated) {
    const icon = validatedLocation.accurate ? '✓ ' : '⚠️ ';
    console.log(`    ${icon} ${validatedLocation.accurate ? 'Matches OSM' : 'MISMATCH'} — offset ${validatedLocation.distanceKm} km`);
  } else {
    console.log(`    ○  ${validatedLocation.reason}`);
  }

  // Step 2: Wikimedia Commons image search
  console.log('🖼️   [2/3] Searching Wikimedia Commons for free-license images...');
  const rawImages = await searchImages(spotInfo.photoKeywords);
  console.log(`    ✓  ${rawImages.length} candidates retrieved`);

  // Step 3: Score and rank
  console.log('⭐  [3/3] Scoring and ranking images...');
  const scoredImages = scoreImages(rawImages, spotInfo);
  console.log(`    ✓  Top score: ${scoredImages[0]?.score ?? 'N/A'}/100`);

  formatOutput(spotInfo, validatedLocation, scoredImages);
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function toSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}
