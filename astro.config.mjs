// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // 本番ドメインが決まったら変更する
  site: 'https://realkyushu.com',

  // 静的出力（Cloudflare Pages はこれで動く）
  output: 'static',

  integrations: [
    sitemap(),
  ],

  vite: {
    plugins: [tailwindcss()],
    build: {
      // Cloudflare Workers の 25MB 制限に対応
      assetsInlineLimit: 0,
    },
  },

  adapter: cloudflare(),
});