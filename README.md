# SyncSolved

A website for founders ready to escape the dependency trap.

---

## Visual Identity

### The Three Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **Void** | `#0A0A0A` | 80% — the canvas, the background |
| **Warm White** | `#FAFAFA` | 15% — text, the words |
| **Neon Green** | `#00ff9d` | 5% — the signal, the accent |

No gradients. No shadows. No blur effects.

### Typography

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Headlines | Inter Tight | 800 | 72px desktop, 40px mobile |
| Body | Inter | 400 | 16-18px |
| Labels | Inter | 500 | 12-14px uppercase |

Letter-spacing on headlines: `-0.04em` (tight, confident)
Line-height on headlines: `0.95` (vertical density)
Line-height on body: `1.6` (breathable)

### Spacing System

- Base unit: 8px
- Section padding: 160px (desktop), 80px (mobile)
- Content max-width: 1200px
- Negative space target: 60% of screen

### The Signature Element

The four-square logo mark (three warm white, one neon green) appears:
- In the navigation
- Large in the hero
- Small in the footer
- As section dividers
- As hover indicators

It is the only element that moves, that glows, that lives.

### Sharp Edges

Every element has 0px border-radius. No rounded corners anywhere. No exceptions.

---

## 50 Visual Design Questions (Applied)

### Color & Palette
1. What is THE dominant color? → Void black (#0A0A0A)
2. What is the supporting neutral? → Warm white (#FAFAFA)
3. How many colors total? → Three
4. What does the neon green signify? → Forward motion, systems running
5. What happens on hover? → Shift to neon or glow
6. What is the color hierarchy? → 80% void, 15% white, 5% neon
7. Are there gradients? → No
8. What is the border color? → Darker void (#141414)

### Typography
9. What is the headline font? → Inter Tight 800
10. What is the body font? → Inter 400
11. Headline size desktop? → 72px minimum
12. Headline size mobile? → 40px
13. Line height headlines? → 0.95
14. Line height body? → 1.6
15. ALL CAPS? → No
16. Italic? → No
17. Paragraph max-width? → 65 characters
18. Text alignment? → Left (except hero)

### Layout & Grid
19. Base grid unit? → 8px
20. Section vertical rhythm? → 160px desktop, 80px mobile
21. Max content width? → 1200px
22. Columns? → 12
23. Gutter size? → 24px
24. Sidebars? → No
25. Navigation position? → Fixed top, fades in on scroll
26. Hero space usage? → 60% negative space
27. Cards? → No cards with shadows or rounded corners
28. Footer height? → 80px minimal

### Spacing & Negative Space
29. Section separator? → Single 1px line in #141414
30. Headline to subhead space? → 24px
31. Paragraph spacing? → 24px
32. Between sections? → 160px
33. Whitespace inside sections? → Massive
34. Mobile padding? → 16px
35. Crowded elements? → Never
36. Eye comfort zone? → 40% void at all times

### Interaction & Motion
37. Scroll behavior? → Smooth, 400ms
38. Load animations? → None
39. Link hover? → Color shift to neon, 150ms
40. Button hover? → Background inverts or glows
41. Loading states? → Single pulsing dot if needed
42. Parallax? → No
43. Video backgrounds? → No
44. Custom cursor? → No

### Components & UI
45. Button style? → Sharp corners, 1px border, transparent bg
46. Input fields? → Bottom border only, sharp corners
47. Testimonials? → No quotation marks, no card, just text with neon left border
48. Navigation links? → Lowercase, no underlines, 48px gap
49. Logo treatment? → Mark alone in nav, wordmark on scroll
50. The signature? → The neon square appears everywhere

---

## The Inversion (What We Avoided)

| Failure Mode | What We Built |
|--------------|---------------|
| 47 colors | 3 colors |
| 12 fonts | 2 fonts |
| Rounded corners | Sharp edges everywhere |
| Gradients, shadows, blur | Flat, clean, present |
| Animations on load | Static arrival |
| Parallax scrolling | Smooth, direct scroll |
| Cards with shadows | Void separation |
| Centered everything | Left-aligned (except hero) |
| Busy, crowded sections | 60% negative space |
| Stock imagery | No imagery. Void is the image. |
| Video backgrounds | Void |
| Popups, modals, chat widgets | None. Ever. |
| Business jargon | Plain language |
| Throat-clearing copy | Direct statements |

---

## Content Principles (No AI Slop)

**Removed:**
- "architecture"
- "infrastructure"
- "leverage"
- "streamline"
- "navigate (challenges)"
- "unpack"
- "deep dive"
- "double down"
- "at the end of the day"
- "here's the thing"
- "the uncomfortable truth is"
- "not X, but Y" contrasts
- All adverbs (-ly words)
- Binary contrasts
- Throat-clearing openers

**What we use instead:**
- Direct statements
- Specific examples
- Active voice with human subjects
- Varied sentence lengths
- No em dashes
- No ALL CAPS for emphasis
- Short paragraphs (1-3 sentences)

---

## Pages

- `/` — 9-section sales page
- `/about` — Philosophy, principles, investment
- `/audit-requested` — Success state after form submission

---

## Deployment

### To Surge.sh

```bash
bun run build
cd dist && npx surge . https://www.syncsolved.com
```

### To Cloudflare Pages

```bash
bun run build
# Upload dist/ folder via Cloudflare Dashboard
```

---

## Development

```bash
bun install
bun run dev
```

---

## The One Word

**Void.**

Everything lives in it. Everything breathes because of it. The neon green is the signal that something is alive, moving, working. The warm white is what we say. The void is where we say it.
