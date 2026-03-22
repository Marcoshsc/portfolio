# Design System Documentation: The Luminescent Architect

## 1. Overview & Creative North Star

This design system is built to transform a software engineer's portfolio from a static resume into a high-end editorial experience. We are moving away from the "template" look of modern SaaS and toward a signature visual identity termed **"The Luminescent Architect."**

The North Star of this system is the tension between **Rigid Logic** (geometric typography and grid-based alignment) and **Fluid Energy** (vivid mesh gradients and glassmorphism). We break the traditional "boxed-in" web layout by using intentional asymmetry, overlapping elements, and high-contrast typography scales. The UI should feel like a series of sophisticated, glowing layers floating in a deep, digital ether.

## 2. Colors & Surface Philosophy

The palette is rooted in a deep, midnight foundation, allowing vibrant accent colors to "pop" with maximum luminance.

- **Foundation:** The `background` (`#0c0c1f`) is our canvas. It is not "black," but a deep, saturated violet that maintains depth.
- **The Accents:** `primary` (`#ff86c2`), `secondary` (`#00e3fd`), and `tertiary` (`#ffb151`) represent the fluid mesh gradients. These should be used for high-impact moments: CTAs, active states, and decorative background blurs.

### The "No-Line" Rule

To maintain a premium, custom feel, **1px solid borders for sectioning are strictly prohibited.** Boundaries must be defined through:

1. **Background Color Shifts:** Use `surface-container-low` for large sections sitting on the `background`.
2. **Tonal Transitions:** Use a subtle shift from `surface` to `surface-bright` to define a header or footer.
3. **Negative Space:** Leverage the Spacing Scale (e.g., `16` or `20`) to create "invisible" boundaries.

### Surface Hierarchy & Nesting

Treat the UI as physical layers of frosted glass.

- **Level 0:** `surface-dim` (Background).
- **Level 1:** `surface-container-low` (Main content areas).
- **Level 2:** `surface-container-high` (Cards or modals).

Each inner container should use a slightly higher tier to define its importance, creating a natural, nested depth without the need for heavy outlines.

### Signature Textures

Avoid flat primary colors for large areas. Instead, use linear gradients transitioning from `primary` to `primary-container` at a 135-degree angle. This adds "visual soul" and mimics the way light hits a physical surface.

## 3. Typography

The typography system uses a high-contrast pairing to balance technical precision with modern elegance.

- **The Display Face (Space Grotesk):** Used for `display` and `headline` levels. This font conveys "Engineering" through its geometric construction but remains "High-End" through its generous tracking and exaggerated scale. Use `display-lg` (`3.5rem`) for hero statements to command attention.
- **The Interface Face (Inter):** Used for `title`, `body`, and `label`. Inter provides the "Professional" legibility required for technical documentation and project descriptions.
- **Editorial Intent:** Use `display-md` for section titles, but place them asymmetrically (for example, left-aligned with a large `spacing-20` offset) to break the standard centered-column rhythm.

## 4. Elevation & Depth

In this design system, depth is a product of light and layering, not artificial structure.

- **The Layering Principle:** Stack `surface-container-lowest` cards on a `surface-container-low` section. This creates a soft, natural lift.
- **Ambient Shadows:** When an element must "float" (like a primary project card), use an extra-diffused shadow.
- **Shadow Specs:** Blur `40px-60px`, opacity `6%`, color `surface-tint` (`#ff86c2`). This makes the shadow feel like a colored glow rather than a grey smudge.
- **The "Ghost Border" Fallback:** If a container requires a border for accessibility, it must be a **Ghost Border**. Use the `outline-variant` token at `15%` opacity. Never use `100%` opaque borders.
- **Glassmorphism:** Apply `backdrop-filter: blur(20px)` to any floating `surface` element. This allows the background mesh gradients to bleed through, integrating the component into the environment.

## 5. Components

### Buttons

- **Primary:** A solid fill of `primary-fixed` with a subtle `secondary` outer glow (`4px` blur). Text uses `on-primary-fixed`.
- **Secondary (Glass):** A `surface-variant` background at `40%` opacity with a `backdrop-filter`. The border is a `1px` Ghost Border using `primary-dim`.
- **Tertiary:** No background. Text uses `primary`. Underline on hover using a `2px` `secondary` stroke.

### Cards & Lists

- **Rule:** Forbid divider lines.
- **Implementation:** Use `surface-container-highest` for the card body. Separate internal list items using a `spacing-3` vertical gap. For project lists, use alternating `surface-container-low` and `surface-container-lowest` backgrounds to differentiate rows.

### Chips

- **Tech Stack Chips:** Use `secondary-container` backgrounds with `on-secondary-container` text. Apply a `full` roundedness scale. These should feel like small, smooth stones.

### Input Fields

- **Base:** `surface-container-low` background with a bottom-only Ghost Border (`20%` `outline`).
- **Focus State:** The border transitions to a `2px` `primary` stroke with a soft `primary-dim` glow.

### Additional Signature Component: The "Luminescent Pulse"

For the software engineer's "Status" (for example, "Available for Work"), use a `label-md` with an `8px` circle. The circle should have a keyframe animation pulsing between `secondary` and `secondary-dim` with a `12px` blur spread.

## 6. Do's and Don'ts

### Do

- **Do** use asymmetrical spacing. If the left margin is `spacing-8`, try making the right margin `spacing-16` for an editorial feel.
- **Do** overlap elements. Let a `display-lg` headline slightly overlap the edge of a floating project card.
- **Do** use the `tertiary` (orange) color sparingly as a highlight for key metrics (for example, "5+ years experience").

### Don't

- **Don't** use standard dark-mode greys like `#121212`. Always stay within the indigo-violet spectrum of the `surface` tokens.
- **Don't** use `100%` opaque white for body text. Use `on-surface-variant` (`#aaa8c3`) to reduce eye strain and maintain the atmospheric vibe.
- **Don't** use sharp corners. Always refer to the Roundedness Scale; `lg` (`1rem`) is the standard for cards to keep the vibe approachable yet professional.
