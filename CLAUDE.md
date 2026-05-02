# Kyushu Tourism — Claude Code Instructions

## Article & Photo Generation Workflow

**すべての新規スポット記事・写真差し替えは必ずこのロジックで行う。**

### Phase 1: 構造化データ生成

```bash
node scripts/generate-spot.mjs "スポット名（英語）"
# 例: node scripts/generate-spot.mjs "Dazaifu Tenmangu Shrine"
```

- ターミナルに Claude.ai 用プロンプトを出力する
- `scripts/input/<slug>.json` にテンプレートを作成する
- プロンプトを [claude.ai](https://claude.ai) に貼り付けて JSON 回答を取得
- JSON 回答をテンプレートファイルに上書き保存する

### Phase 2: 位置検証 + 画像検索

```bash
node scripts/generate-spot.mjs --process <slug>
# 例: node scripts/generate-spot.mjs --process dazaifu-tenmangu-shrine
```

実行内容:
1. **Nominatim (OpenStreetMap)** で座標を照合 — 5km超のズレは警告
2. **Wikimedia Commons** でフリーライセンス画像を検索・スコアリング
3. TypeScript スニペットと全データを `scripts/output/<slug>-<timestamp>.json` に保存

### 画像選定ルール（必須）

1. **ファイル名で確認する** — スポット名がファイル名に含まれているもののみ採用
2. **別の場所の写真を除外** — ファイル名から別スポットと判断できるものは使わない
3. **UTM パラメータを除去** — Wikimedia URL から `?utm_source=...` 以降を削除
4. **複数確認できたらギャラリーを追加** — 2〜3枚

#### Wikimedia URL の正しい形式
```
# 1280px 版（メイン画像用）
https://upload.wikimedia.org/wikipedia/commons/thumb/{h1}/{h2}/{filename}/1280px-{filename}

# 300px 版（サムネイル用）
https://upload.wikimedia.org/wikipedia/commons/thumb/{h1}/{h2}/{filename}/300px-{filename}
```

### 神社特集ページの構成

`src/pages/saga-shrines.astro` または `src/pages/nagasaki-shrines.astro` を参照。
3〜4スポットを1ページにまとめる構成:

```
Hero（Wikimedia Commons 画像）
Intro（地域の shrine 文化説明）
各 shrine セクション（画像 + ギャラリー + 説明 + アクセス）
エチケット tips + 日帰りルート
AffiliateBox × 2（Booking.com + Klook）
Related links
Lightbox スクリプト
```

### 3社を並列処理する場合

```bash
# 入力 JSON を作成後、並列実行
node scripts/generate-spot.mjs --process shrine-a &
node scripts/generate-spot.mjs --process shrine-b &
node scripts/generate-spot.mjs --process shrine-c &
wait
```

---

## プロジェクト概要

- **本番 URL**: https://realkyushu.com
- **GitHub**: https://github.com/tomodai-san/kyusyu-to (Cloudflare Pages 自動デプロイ)
- **スタック**: Astro 5 + Tailwind CSS v4 + @astrojs/sitemap
- **デザイン**: Navy `#1a2744` / Japan red `#bc002d` / Gold `#c9a84c` / Cream `#faf8f3`
- **フォント**: Playfair Display (serif) + Inter (sans)

### データレイヤー

```
src/data/
  destinations.ts   — 10 destinations
  ryokan.ts         — 6 ryokan
  itineraries.ts    — 5 itineraries
  blogPosts.ts      — 6 blog posts
```

### コンポーネント

- `AffiliateBox.astro` — Booking.com / Klook CTA
- `PhotoFrame.astro` — shimmer skeleton + credit overlay

### アフィリエイト

- AWIN Publisher ID: **2875141**
- Booking.com: Booking.com North America / Australia (承認待ち)
- AWIN リンクベース: `http://www.awin1.com/awclick.php?mid=6776&id=2875141`
- コード内のプレースホルダー URL は承認後に差し替える

### よく使うコマンド

```bash
npm run dev              # 開発サーバー (localhost:4321)
npm run build            # 本番ビルド
npm run generate "名前"  # スポット生成 Phase 1
```
