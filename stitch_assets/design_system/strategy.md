# Design System Strategy: Tactical Cyber-Intelligence

## 1. Overview & Creative North Star: "The Sentinel Protocol"

The Creative North Star for this design system is **The Sentinel Protocol**. This is not a standard corporate interface; it is a high-stakes, tactical command center. It transitions away from the friendly, rounded "SaaS" aesthetic toward a look that is **Authoritative, Technical, and Urgent**.

The design breaks the "template" mold through **intentional asymmetry**, where technical data points and code snippets bleed into the margins, and **editorial-grade typography** that commands attention. We utilize a "Terminal-First" philosophy, where the precision of a code editor meets the high-end polish of a modern cybersecurity firm.

## 2. Colors

The palette is rooted in a deep, void-like foundation to ensure maximum contrast for neon tactical overlays.

### Palette Tokens
*   **Background:** `#0a0e14` (Deep Deep Void)
*   **Primary (Terminal Green):** `#9cff93` | **Container:** `#00fc40`
*   **Secondary (Neon Blue):** `#00cffc` | **Container:** `#00677f`
*   **Tertiary (Alert Red):** `#ff7073` | **Container:** `#fc003b`
*   **Surface Hierarchy:**
    *   `surface-container-lowest`: `#000000` (Pure black for deep nesting)
    *   `surface-container-low`: `#0f141a` (Standard sectioning)
    *   `surface-container-high`: `#1b2028` (Card elevation)

### The "No-Line" Rule
Standard 1px solid borders are prohibited for sectioning. Structural boundaries must be defined solely through background color shifts. Use `surface-container-low` for large content blocks sitting on a `background` base. This creates a sophisticated, "machined" look rather than a boxed-in layout.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. A code snippet (Surface Lowest) should feel "recessed" into a card (Surface High), which itself sits on a section (Surface Low). This nesting creates depth without visual clutter.

### The "Glass & Gradient" Rule
To achieve a premium "Hacker Modern" feel, interactive floating elements must use **Glassmorphism**. Apply a semi-transparent surface color with a `backdrop-blur` of 12px-20px. 
*   **Signature Texture:** Main CTAs should not be flat. Use a subtle linear gradient from `primary` to `primary-container` (at a 135-degree angle) to give the button a "powered-on" energy.

## 3. Typography

The typography strategy leverages the tension between human-centric Sans-Serif and machine-centric Monospace.

*   **Display & Headlines (Space Grotesk):** This font provides a technical yet high-end editorial feel. It should be used with tight letter-spacing (-2%) for an authoritative "breaking news" impact.
*   **Titles & Body (Inter):** Chosen for its extreme legibility at small sizes. Used for all core instructional content.
*   **Technical Labels (JetBrains Mono / Fira Code):** Mandatory for all "meta-data," code snippets, and section tags (e.g., `01 // ARCHITECTURE`). This reinforces the "Dev" in DevSec Pro.

The hierarchy conveys urgency: Display-LG is massive (3.5rem) to highlight critical statistics or "Urgent" headlines, while Labels are tiny (0.6875rem) and uppercase to mimic hardware chassis markings.

## 4. Elevation & Depth

### The Layering Principle
Hierarchy is achieved through **Tonal Layering**. Avoid shadows for standard cards. Instead, use the `surface-container` tiers to create a "stepping" effect. 

### Ambient Shadows
For floating Modals or high-priority CTAs, use an **Ambient Shadow**:
*   **Color:** Tinted version of the `primary` (Green) or `secondary` (Blue) at 5% opacity.
*   **Blur:** Extra-diffused (40px - 80px blur). This creates a "glow" rather than a shadow, making the element look like it is emitting light.

### The "Ghost Border" Fallback
If accessibility requires a border, use the **Ghost Border**: The `outline-variant` token at 15% opacity. It should be barely perceptible, serving as a suggestion of a boundary rather than a hard wall.

### Glassmorphism
Apply `backdrop-filter: blur(10px)` to all tooltips and navigation overlays. This allows the neon highlights of the background to bleed through, maintaining the "Cyber/Tech" immersion.

## 5. Components

### Buttons
*   **Primary:** Sharp corners (`0px` radius). Gradient fill (`primary` to `primary_container`). Box-shadow "glow" (0px 0px 15px `#00fc40` at 30% opacity) on hover.
*   **Secondary:** Ghost style. Transparent background, `secondary` text, and a 1px "Ghost Border" on hover only.

### Cards
*   **Style:** No borders. Background: `surface-container-high`. 
*   **Interaction:** On hover, the background shifts to `surface-bright`, and a subtle 2px top-accent line in `secondary` (Blue) appears.

### Input Fields
*   **Base:** `surface-container-lowest` background. 
*   **Focus State:** The bottom border transforms into a 2px `secondary` (Blue) line with a subtle neon glow.
*   **Monospace Labels:** Use `label-sm` in Monospace for field titles to maintain the technical aesthetic.

### Additional: The \"Data-Ticker\" Component
A relevant component for DevSec Pro is the \"Live Status Ticker\"—a small, horizontal scrolling banner at the top or bottom of the screen showing \"Live Vulnerability Patches\" or \"Security Protocols Active,\" utilizing Monospace fonts and `primary` (Green) text.

## 6. Do's and Don'ts

### Do's
*   **DO** use Monospace for all numbers and technical tags.
*   **DO** leave ample white space (using the `20` or `24` spacing scale) to allow the "Urgent" headlines to breathe.
*   **DO** use 0px border-radii for everything. Sharp corners equate to precision and authority.
*   **DO** use \"Cyber-Red\" (`tertiary`) sparingly but aggressively for error states and \"Critical\" alerts.

### Don'ts
*   **DON'T** use rounded corners. It softens the brand and loses the \"Pro\" technical edge.
*   **DON'T** use 100% opaque borders. They clutter the UI and look \"out of the box.\"
*   **DON'T** use generic icons. Use thin-stroke, technical icons that look like architectural symbols or circuit paths.
*   **DON'T** use standard grey shadows. Shadows must be \"light-emissions\" using the brand's neon colors.
