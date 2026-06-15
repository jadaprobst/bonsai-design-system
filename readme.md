# BonsAI Design System

> *"Tend your mind like a bonsai — with patience, care, and daily attention."*

---

## What is BonsAI?

**BonsAI** is an AI-assisted wellness app built for teens. It bridges the gap between academic productivity and mental health by connecting a student's real schedule (Canvas, Google Classroom, calendar) to personalized wellbeing interventions. The core insight: burnout is *contextual* — it emerges from the intersection of deadlines, sleep deficits, and declining mood, not from any single factor in isolation.

BonsAI's signature mechanic is the **bonsai growth tree**: consistent daily check-ins, good habits, and journaling literally grow the user's virtual bonsai — visualizing mental health as something you tend over time, not something that just happens to you.

### Core Features
- **Life-aware scheduling** — Syncs Canvas, Google Classroom, Aura, and personal calendars
- **Daily wellness log** — Mood + stress tracking, journaling prompts, friend check-ins
- **Burnout detection** — Pattern recognition (high deadlines + low sleep + declining mood) with gentle early interventions
- **Bonsai growth mechanic** — Gamification layer: habits and check-ins grow the user's tree
- **Good habits toolkit** — Sleep, screen time, alarms, meals, workouts
- **Relationship nudges** — Prompts to reach out to friends and family
- **Reflective media** — Guided journaling, breathing exercises, short video reflections
- **AI wellness assistant** — Personalized, schedule-aware, HIPAA-conscious nudges

### Target Audience
Teens ages 14–19, balancing school, sports, relationships, and identity formation. They are digitally fluent, skeptical of anything that feels clinical or preachy, and respond to warmth, authenticity, and beautiful design.

---

## Sources

This design system was built from the BonsAI product description and feature specification provided at project inception (June 2026). No external codebase, Figma file, or existing UI was provided.

*If the team has a Figma workspace, GitHub repository, or existing app build, please share them so this system can be updated to match the real implementation.*

---

## SOURCE REFERENCE

This design system was built from:
- **Whimsical Intuition App** — the actual BonsAI product codebase (React/TypeScript, Vite, Tailwind). Located at `src/` in the attached folder.
- Key files: `src/styles/theme.css` (color tokens), `src/styles/fonts.css` (Google Fonts), `src/app/App.tsx` (shell), `src/app/components/*.tsx` (screens)
- Fonts: Google Fonts — Fraunces + DM Sans (confirmed from `fonts.css`)
- Icons: Lucide React (confirmed from imports)

---

## CONTENT FUNDAMENTALS

### Voice & Tone
BonsAI speaks like **a wise, warm older friend** — not a therapist, not a productivity app, not a self-help book. The voice is:

- **Warm but not saccharine.** Caring without being over-the-top enthusiastic.
- **Honest and grounded.** Never dismissive of hard feelings. "It sounds like today was rough" not "Every day is a gift!"
- **Curious, not prescriptive.** Asks questions rather than dispensing advice. "What's on your mind?" not "You should journal more."
- **Gentle humor.** Light, never sarcastic. Teens smell fake instantly.
- **Teen-fluent but not try-hard.** Uses natural language. Never forces slang.

### Copy Rules
- **First person plural for the product**: "Let's tend your tree today."
- **Second person for the user**: "You've kept your streak going — that's real."
- **Casing**: Sentence case everywhere. No title case in UI (buttons, labels, nav items).
- **Punctuation**: Periods on standalone messages. No period on short labels or buttons.
- **Exclamation marks**: Used sparingly, only for genuine milestones (streak records, level-up).
- **Emoji**: Used tastefully in celebratory moments and the mood selector. Never as a substitute for real copy. Bonsai-adjacent: 🌿 🌱 ✨ are acceptable in context.
- **Journaling prompts**: Open-ended, non-judgmental. "What made today feel heavy?" not "List three things that went wrong."
- **Burnout warnings**: Gentle and non-alarmist. "We noticed your week is getting intense. Want to check in?" not "WARNING: Burnout risk detected."

### Examples
| ✅ BonsAI copy | ❌ Avoid |
|---|---|
| "How are you feeling right now?" | "Rate your mood on a scale of 1–10" |
| "Your bonsai grew a new branch today." | "Congratulations! Achievement Unlocked!" |
| "Looks like a big week ahead — want to plan a reset?" | "High deadline density detected. Intervention recommended." |
| "Good morning. Yesterday you noted feeling low. How are you now?" | "Daily check-in reminder" |
| "Reach out to someone today." | "Social interaction goal incomplete" |

---

## VISUAL FOUNDATIONS

### Theme
BonsAI is **dark-mode first** — the enchanted forest aesthetic. The app lives on a near-black deep purple (`#0e0b1a`), not white or cream. Everything feels like a moonlit grove: luminous violets, sage greens, and blue-plum accents glowing against the dark.

### Color Philosophy
**Primary / Interactive**: Violet `#a78bfa` — all buttons, active states, focus rings, the nav highlight bar. This is the "AI" color — mystical, creative, tech.
**Accent**: Sage green `#34d399` — the bonsai's life force. Used for success states, the bonsai tree foliage apex, the "Online" dot in chat, save confirmations.
**Background**: Near-black purple `#0e0b1a` — the page canvas.
**Card surface**: Deep purple `#17122a` — all card backgrounds.
**Raised surface**: `#1e1836` — secondary/muted backgrounds.
**Text**: Soft lavender-white `#e4dff5` (primary), `#c4b8f0` (secondary), `#7e72a8` (muted).
**Blue** `#60a5fa` — academic/schedule events.
**Plum** `#c084fc` — creative events, social attention.
**Border**: `rgba(167, 139, 250, 0.12)` — violet at very low opacity.

In **light mode** (design system tooling), the palette shifts to earthy creams and forest greens — see `tokens/colors.css`. Apply `class="dark"` to activate the enchanted forest theme.

See `guidelines/` for full color specimen cards. The `colors-whimsy.card.html` covers Violet, Ocean, and Indigo scales.

### Typography
Two families sourced from the real codebase. **Fraunces** (variable serif, optical size 9–144) for all display headings and editorial moments — used at weight 300 (light) for screen titles, giving a refined, slightly poetic quality. **DM Sans** (variable sans, optical size 9–40) for all UI text — labels, body, buttons, nav. Never swapped or mixed with other fonts.

- Display headings: light–regular weight, wide tracking, generous line-height
- UI headings: semibold, tight tracking
- Body: regular weight, normal line-height (1.5)
- Labels/captions: medium weight, slightly wider tracking for readability at small sizes
- All caps: reserved for eyebrow labels only, with `--tracking-widest`

### Spacing
4px base grid. Components align to the 4px unit. Sections use multiples of 8 (8, 16, 24, 32…). Generous internal padding — the app should breathe, never feel cramped.

### Corner Radius
**Pill buttons** are the signature shape — fully rounded (`border-radius: 9999px`). Cards use `20px` radius. Inputs use `12px`. The language is consistently rounded and organic; no sharp corners anywhere.

### Shadows
Warm-tinted (sepia) shadows only — derived from `#2C1810` (earth-900), not neutral grey. This keeps the depth system harmonious with the earthy palette. Shadows are soft and diffuse, never harsh. Cards sit at `--shadow-md`; modals/sheets at `--shadow-xl`.

### Motion
Gentle and organic. Standard transitions: `220ms ease-out`. The bonsai growth animation is the hero motion — `700ms` with a slight overshoot (`--ease-growth`) to feel alive. Achievement pops use `--ease-elastic`. **Press states** scale interactive elements to `0.96` on tap for satisfying physical feedback. Never use infinite loops on meaningful content; decorative loops (leaf shimmer, etc.) must respect `prefers-reduced-motion`.

### Backgrounds
Page background is cream (`--color-bg-base`). Cards are white. Section headers may use `--color-bg-brand` (pale green) for visual rhythm. No full-bleed photographic backgrounds in the core app — the bonsai tree IS the hero visual. Subtle texture (paper grain) can be layered at very low opacity for warmth.

### Imagery
When photography is used (e.g. marketing): warm, golden-hour tones, natural settings, candid teens (not posed). Avoid stock-photo aesthetic. Color-grade toward the earth palette — slightly desaturated, warm shadows.

### Icons
Line icons at 1.5px stroke weight (see ICONOGRAPHY section). Lucide Icons via CDN for the UI kit.

### Card Anatomy
- Background: `--color-bg-surface` (white)
- Border-radius: `--radius-card` (20px)
- Shadow: `--shadow-card` (`--shadow-md`)
- Padding: `--padding-card-md` (20px) standard, `--padding-card-lg` (24px) for featured
- No borders on default cards (shadow provides separation)
- Subtle `--color-border` border on bordered variant only

### Interactive States
- **Hover**: subtle background tint + cursor pointer. Buttons darken slightly.
- **Focus**: `--shadow-focus-brand` ring (3px green glow). Always visible for accessibility.
- **Active/Press**: `scale(0.96)` transform + darkened bg.
- **Disabled**: `--color-interactive-disabled` (earth-300), `cursor: not-allowed`, `opacity: 0.6`.

---

## ICONOGRAPHY

**Primary source**: [Lucide Icons](https://lucide.dev/) — loaded via CDN (`https://unpkg.com/lucide@latest`). Lucide's clean 2px stroke, 24×24 viewBox, and rounded line-caps match BonsAI's organic aesthetic perfectly.

**Usage rules**:
- Default size: 20px in UI (nav, buttons), 24px in headers
- Stroke width: `1.75px` (slightly lighter than Lucide default of 2px)
- Color: inherits from text color. Never use independent icon colors except for wellness-state icons.
- Filled icons: only for active/selected states (e.g. filled heart for favorited)

**Wellness icons** (custom, in `assets/`):
- `bonsai-icon.svg` — the app's signature mark
- `logo.svg` — full wordmark
- `logo-dark.svg` — light-on-dark variant

**Never** use emoji as icons in the core UI. Emoji may appear in journaling prompts and mood selector faces, but not as navigation icons or action affordances.

---

## FILE INDEX

```
styles.css                    ← Global CSS entry point (imports only)
tokens/
  colors.css                  ← Full color token system
  typography.css              ← Font imports + type scale
  spacing.css                 ← Spacing scale + component padding
  radii.css                   ← Border-radius tokens
  shadows.css                 ← Shadow system (warm-tinted)
  motion.css                  ← Duration + easing tokens
assets/
  logo.svg                    ← BonsAI wordmark (color)
  logo-dark.svg               ← BonsAI wordmark (white)
  logo-icon.svg               ← Bonsai icon mark only
components/
  core/                       ← Button, Card, Badge, Input, Avatar, Tag
  feedback/                   ← MoodSelector, ProgressRing, Toast
  gamification/               ← BonsaiTree, HabitCard, StreakBadge
guidelines/
  (specimen cards for Design System tab)
ui_kits/
  mobile_app/                 ← Full iOS app prototype (Home, CheckIn, Habits, Schedule)
SKILL.md                      ← Agent skill definition
```

### Components
| Component | Directory | Description |
|---|---|---|
| Button | core | Primary, secondary, ghost, danger variants |
| Card | core | Content container with variants |
| Badge | core | Status / category label |
| Input | core | Text input with label + validation |
| Avatar | core | User avatar with wellness ring |
| Tag | core | Category/habit tag chip |
| MoodSelector | feedback | 5-level mood picker |
| ProgressRing | feedback | Circular habit progress indicator |
| Toast | feedback | Notification toast |
| BonsaiTree | gamification | SVG bonsai at 5 growth levels |
| HabitCard | gamification | Habit tracking card |
| StreakBadge | gamification | Streak counter display |

---

*Last updated: June 2026 — built from product spec. Awaiting real Figma + codebase for iteration.*
