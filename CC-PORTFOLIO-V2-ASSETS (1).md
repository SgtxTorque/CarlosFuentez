# CC-PORTFOLIO-V2-ASSETS — Final Asset Drop

## What This Is
This is the final asset addendum for the portfolio V2 build. Apply after V2 and V2-ADDENDUM. This covers: CliftonStrengths 6-10, Lynx logo/mascot images, Discovery Conversation Job Aid redesign, and additional video files.

---

## CLIFTONSTRENGTHS — FULL TOP 10 (CONFIRMED)

Replace the placeholder slots for 6-10 with the actual strengths. Here is the complete top 10 with official Gallup domain colors:

```
TOP 5 (large cards):
1.  Communication      | Influencing           | Orange  #E88D2A
2.  Arranger           | Executing             | Purple  #7B68A5
3.  Individualization   | Relationship Building | Blue    #0070CD
4.  Strategic          | Strategic Thinking    | Green   #3B9C5A
5.  Relator            | Relationship Building | Blue    #0070CD

6-10 (smaller row below):
6.  Futuristic         | Strategic Thinking    | Green   #3B9C5A
7.  Intellection       | Strategic Thinking    | Green   #3B9C5A
8.  Restorative        | Executing             | Purple  #7B68A5
9.  Achiever           | Executing             | Purple  #7B68A5
10. Includer           | Relationship Building | Blue    #0070CD
```

**One-line descriptions for 6-10:**
6. **Futuristic** — Sees what's coming and builds toward it
7. **Intellection** — Thinks deeply before acting
8. **Restorative** — Finds what's broken and fixes it
9. **Achiever** — Driven by a constant need to accomplish
10. **Includer** — Makes sure nobody gets left behind

**Visual note:** Carlos's DNA shows heavy Strategic Thinking (3 of 10 are green), strong Executing (3 purple), strong Relationship Building (3 blue), and Influencing leading it all (1 orange at #1). This is a balanced, leadership-oriented profile. Consider adding a small visual summary like "3 Strategic Thinking | 3 Executing | 3 Relationship Building | 1 Influencing" as a domain breakdown below the strengths.

---

## LYNX PAGE (lynx.html) — LOGO, MASCOT, AND BRANDING ASSETS

### New image files to copy to `/images/`:
```
lynx-logo.png          ← The official Lynx logo (navy/sky blue cat head + "lynx" text, black background)
lynx-mascot-coach.png  ← coachlynxmale.png (coach mascot in navy tracksuit with clipboard)
lynx-mascot-player.png ← Meet-Lynx.png (player mascot cub in blue jersey #10, thumbs up)
```

### How to use on lynx.html:
1. **Lynx logo** should appear at the top of the Lynx case study page, either in the hero section or right below it. Use it as the primary visual identifier for the product. Since the logo has a black background, either crop/mask it or place it on a dark section where the black blends naturally.

2. **Coach mascot** (`lynx-mascot-coach.png`) — Use on the Lynx page in the "Coach Workflow" problem/solution card or as a decorative element. This is the adult coach character. Has a black/transparent background.

3. **Player mascot** (`lynx-mascot-player.png`) — Use on the Lynx page in the "Player Development & Motivation" problem/solution card. This is the youth player cub. Has a black/transparent background.

4. **Home page Lynx card** — The V2 spec says to use the Lynx logo as background on the work card. Now that we have the actual logo file, use `lynx-logo.png` as a semi-transparent background watermark behind the card content. Since it's on a black background, set it at about 15-20% opacity on a dark navy card.

### Lynx web address
Add `thelynxapp.com` as a clickable link in the metadata bar of lynx.html AND somewhere visible on the Lynx work card on the home page. Format it subtly, like a small line under the card description.

---

## STUDIO PAGE (studio.html) — DISCOVERY CONVERSATION JOB AID

### The Amtel Discovery Conversation Job Aid

The PDF (`Amtel_Discovery_Conversation_JobAid.pdf`) is a 2-page job aid Carlos designed for Amtel/T-Mobile sales reps. It teaches the Discovery Conversation methodology: Connect → Discover → Recommend → Add Value → Close & Set Up. It includes a question bank and a "Why Discovery Pays — The Math" comparison showing 3x higher ticket with discovery vs. without.

**The current PDF doesn't look great.** CC should recreate it as a clean, high-quality HTML page branded to the Amtel/T-Mobile magenta design system, then **render it as a static image** (or a pair of images for page 1 and page 2) to embed on the studio page. NOT an interactive module. Just a beautiful, clean visual of the job aid.

**Amtel/T-Mobile brand system for the redesign:**
```
--tmobile-magenta: #E20074
--tmobile-magenta-dark: #B8005C
--tmobile-black: #111827
--tmobile-white: #FFFFFF
--tmobile-gray: #F7F8FA
Font: Use a bold condensed font for headers, clean sans-serif for body
Logo: Use the "Amtel-NATION" branding (reference the existing amtel-nation photos)
```

**Content to recreate (from the PDF):**

**Page 1 — The Discovery Conversation:**
- Header: Amtel-Nation logo + "JOB AID | ALL TEAMMATES | PRINT & LAMINATE"
- Title: "THE DISCOVERY CONVERSATION"
- Callout box: "THE #1 REVENUE LEAK IN WIRELESS RETAIL — Most reps jump straight to 'What phone do you want?' instead of 'What do you use your phone for?' Discovery drives: higher plans | more accessories | better retention"
- 5 numbered steps with timing, description, "SAY THIS" examples, "NOT THIS" anti-patterns, and "PRO TIP":
  1. CONNECT (First 30 sec)
  2. DISCOVER (2-4 min)
  3. RECOMMEND (2-3 min)
  4. ADD VALUE (1-2 min)
  5. CLOSE & SET UP (Wrap-up)

**Page 2 — Discovery Question Bank & The Math:**
- Header: "DISCOVERY QUESTION BANK"
- 4 categories in a 2x2 grid: Lifestyle, Pain Points, Family & Plan, Accessories (4 questions each)
- "WHY DISCOVERY PAYS — THE MATH" comparison:
  - Without Discovery: ~$60 avg ticket
  - With Discovery: ~$183+ avg ticket
  - "3x HIGHER TICKET | BETTER RETENTION | STRONGER SURVEY SCORES"
  - Footer: "Same customer. Same store. The only difference is whether you asked the right questions first."

**Output:** Save as `amtel-discovery-jobaid.html` in the project root. CC should also take a screenshot or render it as `discovery-jobaid-page1.png` and `discovery-jobaid-page2.png` in `/images/` for embedding on the studio page as static images.

**How to present on studio.html:**
- Add a section called "Job Aids & Visual Design" or integrate into the Content Engine section
- Show the two redesigned job aid images side by side or in a scrollable container
- Caption: "Discovery Conversation Job Aid — designed to be printed, laminated, and posted at every register. Teaches the 5-step discovery sales methodology that drove 3x higher average ticket."
- These are static images, not a clickable demo

---

## VIDEO FILES

Carlos mentioned two video files visible in his Downloads folder:
- `20241216_203458.mp4`
- `20250210_212102.mp4`

These are NOT in the uploads yet. Carlos will need to copy these into `carlos-portfolio/images/videos/` manually. Once they're there, CC can embed them using HTML5 `<video>` tags on the appropriate pages (likely studio.html or fun.html depending on content).

For now, add placeholder video containers on studio.html in the "Featured Content" section with comments:
```html
<!-- VIDEO PLACEHOLDER: Carlos will add 20241216_203458.mp4 and 20250210_212102.mp4 -->
```

---

## AMTEL JOB AIDS — EXPRESS SETUP SYSTEM + ANDROID → iPHONE WALKTHROUGH

### Three pieces that go together on studio.html:

Carlos has added these files to the repo as static images. They should be displayed together as a group on the studio page in a "Job Aids & Visual Design" section:

1. **Express Setup System — Page 1** (already in repo as an image)
   - The 3-phase Express Setup System job aid (Pre-Transfer Checklist, Transfer Tools, Multi-Setup Management)

2. **Express Setup System — Page 2** (already in repo as an image)
   - Troubleshooting Quick Fixes, Setup Station Essentials, The Math

3. **Android → iPhone Transfer Walkthrough** (`amtel-android-to-iphone-walkthrough.html`)
   - Copy this HTML file to the project root
   - Also render/screenshot it as a static image for embedding on the studio page
   - This is a visual, flat-art walkthrough showing 8 steps for transferring from Android to iPhone
   - Branded T-Mobile magenta with CSS flat-art phone illustrations

**Presentation on studio.html:**
Display all three as a row or gallery. Caption: "Express Setup System — a complete job aid suite I designed for setup station reps. Includes the 3-phase process guide, troubleshooting reference, and a visual transfer walkthrough built with flat-art CSS illustrations."

If the walkthrough is also linked as a live HTML demo, add a "View Interactive Version →" link below the image.

---

## SMOOTHIE KING PREVIEW PIECE

### File: `smoothie-king-maximize-blend.html`

Copy this to the project root. This is a speculative job aid Carlos designed as a preview piece for Smoothie King. It demonstrates what he would build for their stores: an upsell training poster for "Maximize the Blend" — teaching crew members how to offer Greek Yogurt and Ice Cream add-ins.

**Where to display:** This could go on:
- The home page as a bonus "preview" card in the work section (optional)
- The learning page as a "Speculative Work" section
- Its own small callout somewhere visible

**Presentation:** Show it as an image with a caption like: "Speculative piece: What an upsell training poster could look like for Smoothie King crew members. Designed to be printed, laminated, and posted at the blend bar."

Add a "View Full Size →" link to the live HTML file.

---

## GLOBAL: IMAGE CLICK-TO-ENLARGE BEHAVIOR

### Add to ALL pages via shared JS (js/main.js):

Every image on the site should be clickable to enlarge. When clicked, the image expands to approximately 60% larger (not full-screen lightbox, just a smooth scale-up) with a subtle dark overlay behind it. Clicking again or clicking the overlay closes it.

**Implementation:**

Add this to `js/main.js`:

```javascript
// Image click-to-enlarge
document.addEventListener('DOMContentLoaded', () => {
  // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'img-overlay';
  document.body.appendChild(overlay);

  // Target all content images (not logos, icons, or tiny images)
  const images = document.querySelectorAll('.case-content img, .section img, .photo-grid img, .gallery img, .showcase img, figure img, .work-card img, .feature-img');
  
  // Also target any image with a specific class
  document.querySelectorAll('img[data-enlargeable], img.enlargeable').forEach(img => {
    if (!Array.from(images).includes(img)) images.push ? null : null; // handled below
  });

  document.querySelectorAll('img').forEach(img => {
    // Skip tiny images (logos, icons)
    if (img.naturalWidth < 100 && img.naturalHeight < 100) return;
    if (img.closest('nav') || img.closest('footer') || img.closest('.nav-links')) return;
    
    img.style.cursor = 'pointer';
    img.style.transition = 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
    
    img.addEventListener('click', (e) => {
      e.stopPropagation();
      if (img.classList.contains('enlarged')) {
        img.classList.remove('enlarged');
        overlay.classList.remove('active');
      } else {
        // Close any other enlarged images first
        document.querySelectorAll('img.enlarged').forEach(i => i.classList.remove('enlarged'));
        img.classList.add('enlarged');
        overlay.classList.add('active');
      }
    });
  });

  overlay.addEventListener('click', () => {
    document.querySelectorAll('img.enlarged').forEach(i => i.classList.remove('enlarged'));
    overlay.classList.remove('active');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('img.enlarged').forEach(i => i.classList.remove('enlarged'));
      overlay.classList.remove('active');
    }
  });
});
```

**Add to `css/style.css`:**

```css
/* Image enlarge overlay */
.img-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.img-overlay.active {
  opacity: 1;
  pointer-events: auto;
}

/* Enlarged image */
img.enlarged {
  position: relative;
  z-index: 999;
  transform: scale(1.6) !important;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  cursor: zoom-out !important;
}
```

**Note:** The `scale(1.6)` gives the 60% enlargement Carlos requested. Images zoom in place with a dark overlay behind them. Click again or press Escape to close. This applies to ALL content images on ALL pages, but skips nav logos and footer images.

---

## CHECKLIST FOR CC

- [ ] CliftonStrengths 6-10 filled in with actual names, colors, and descriptions
- [ ] Domain breakdown visual added (3 Strategic Thinking, 3 Executing, 3 Relationship Building, 1 Influencing)
- [ ] Lynx logo used on lynx.html hero/header
- [ ] Lynx logo used as watermark on home page Lynx card
- [ ] Coach mascot on Lynx page (coach workflow section)
- [ ] Player mascot on Lynx page (player development section)
- [ ] thelynxapp.com linked on Lynx page metadata and home card
- [ ] Discovery Conversation Job Aid recreated as clean HTML, branded Amtel/T-Mobile magenta
- [ ] Job Aid rendered as static images and embedded on studio.html
- [ ] Video placeholders added for future mp4 files
- [ ] All new images copied with clean filenames
