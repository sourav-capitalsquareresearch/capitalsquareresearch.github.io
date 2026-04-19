# define_blog — Permanent Publishing Protocol
**Capital Square Research | Blog Automation Workflow**

This protocol is triggered whenever the user provides raw research text and data tables. Execute ALL steps automatically with no additional confirmation required.

---

## 1. Narrative Style (The Finshots DNA)

- **Tone:** Conversational, story-driven, punchy. Write like you're explaining to a smart friend, not a textbook.
- **Structure — always 3 acts:**
  - **Hook** — "Why should we care?" Opens with a surprising stat, a relatable scenario, or a provocative question.
  - **The Crux** — The data analysis. Walk through the numbers with context. Tables go here.
  - **The Bottom Line** — "What happens next?" Forward-looking. What should the reader take away?
- **Paragraphs:** Max 3 sentences each. Use `<strong>` bolding to highlight key financial insights inline.

---

## 2. Visual & Image Automation

**Thumbnail source:** Unsplash Source API (no API key needed).

| Post Topic | Image URL |
|---|---|
| Hospitals / Healthcare | `https://source.unsplash.com/1600x900/?medical,blue,minimalist` |
| Logistics / Supply Chain | `https://source.unsplash.com/1600x900/?warehouse,logistics,abstract` |
| Banking / Finance | `https://source.unsplash.com/1600x900/?finance,banking,abstract` |
| Technology / Data | `https://source.unsplash.com/1600x900/?technology,data,dark` |
| Energy / Infrastructure | `https://source.unsplash.com/1600x900/?energy,infrastructure,minimal` |
| Consumer / FMCG | `https://source.unsplash.com/1600x900/?retail,consumer,minimal` |
| **Default (any other)** | `https://source.unsplash.com/1600x900/?finance,chart,professional` |

**Hero Section:**
- Image as `background-image` of the hero `<section>`.
- Dark gradient overlay: `background: linear-gradient(rgba(6,11,25,0.7), rgba(6,11,25,0.85)), url(...)`
- Title + meta in white text, centered over the image.

---

## 3. Institutional Data Formatting

**Tables:**
- Wrap all data tables in `<div class="table-wrapper overflow-x-auto my-8">`.
- Apply class `institutional-table` to the `<table>` element.
- `<thead>` cells: background `#060B19` (navy), text `#00E676` (alpha-green), font `Roboto Mono`, bold, uppercase.
- `<tbody>` rows: alternate between `bg-white` and `bg-gray-50`.
- All number/currency/percentage cells: `text-right font-mono`.
- All label/name cells: `text-left`.

---

## 4. Technical Deployment

**File path:** `c:\Users\SOURAV\capitalsquareresearch.github.io\blog\{slug}\index.html`

**URL slug rules:**
- Lowercase, hyphens only, no special characters.
- Max 5 words. Example: `delhivery-logistics-deepdive.html`

**Required meta tags (auto-generate for every post):**
```html
<title>{Post Title} | Capital Square Research</title>
<meta name="description" content="{1-sentence summary of the post}">
<meta property="og:title" content="{Post Title} | Capital Square Research">
<meta property="og:description" content="{1-sentence summary}">
<meta property="og:image" content="{Unsplash image URL}">
<meta property="og:type" content="article">
<meta property="og:url" content="https://capitalsquareresearch.github.io/research/{slug}.html">
<meta name="twitter:card" content="summary_large_image">
```

**Standard page template to use:**
- Inherit the global navbar, footer, and `style.css` from the main site.
- Use `glass-panel`, `font-heading` (Montserrat), `font-mono` (Roboto Mono) classes consistently.
- Add a "Back to Blog" link at the top of the article body.
- Add a "Related Insights" section at the bottom linking to 2 other blog posts.

---

## Checklist (run for every define_blog execution)

- [ ] Narrative written in 3-act structure (Hook / Crux / Bottom Line)
- [ ] Unsplash image URL matched to topic
- [ ] Hero section has dark gradient overlay
- [ ] All raw tables converted to `institutional-table` HTML
- [ ] Numbers right-aligned, headers Alpha Green
- [ ] File saved to `/research/{slug}.html`
- [ ] All SEO + OG meta tags generated
- [ ] Global nav and footer inherited
- [ ] "Back to Blog" link present
- [ ] "Related Insights" section at the bottom
