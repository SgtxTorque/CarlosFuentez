# CC-PORTFOLIO-SITE — Carlos Fuentez Portfolio Website

## Context
Build a personal portfolio website for Carlos Fuentez. Carlos is an operations-bred problem-solver who built his career in F&B and multi-unit operations, transitioned into talent acquisition, and along the way kept raising his hand for anything that needed fixing: communications, training programs, video production, employer branding, and eventually a full sports tech platform. He's not positioning himself as "an L&D guy." He's a people leader and builder who goes where the business needs hands-on problem-solving. His time in communications and learning development is where his creativity really came alive, and he's now positioning to go deeper into L&D and communications work. He's interviewing for a Learning Experience Designer role at Smoothie King.

The site needs to feel like HIM: confident, warm, high-energy, real. NOT corporate. NOT stiff. The kind of site where a hiring manager sends the link to their team in Slack saying "you gotta see this guy's site."

**Carlos's brand in his own words:** "If my name is in the bucket, it's going to get done, and done right." He leaves things better than he found them. He's a natural collaborator who has no issue stepping in to take the lead. He doesn't always take the credit; he wants to see the team win.

**CliftonStrengths Top 5:** Communication, Arranger, Individualization, Strategic, Relator. These should be featured prominently on the site.

**COPY GUIDELINES:** Carlos does not regularly use em dashes. Minimize their usage across all copy. Use periods, commas, or restructured sentences instead. Keep language honest and grounded. Don't overstate his L&D background; frame it as a natural evolution from operations and TA, driven by curiosity and a bias toward action.

This is a static site (HTML/CSS/JS) that will be deployed to Vercel. No frameworks needed — just clean, hand-crafted pages.

## Design System

### Color Palette
Derived from Carlos's actual photos — moody golden-hour warmth, dark workstation vibes, amber accents.

```
--bg-dark: #1C1C1E          /* Primary dark background — near-black, warm */
--bg-dark-alt: #2D2D30      /* Card/section backgrounds — warm concrete gray */
--bg-light: #F5F0EB         /* Light sections — warm cream, not pure white */
--bg-light-alt: #EAE4DC     /* Subtle contrast on light sections */
--text-light: #F5F0EB       /* Text on dark backgrounds */
--text-dark: #1C1C1E        /* Text on light backgrounds */
--text-muted-light: rgba(245, 240, 235, 0.55)  /* Secondary text on dark */
--text-muted-dark: #7A756F  /* Secondary text on light */
--accent: #D4952B           /* Warm amber-gold — pulled from headshot golden hour */
--accent-hover: #E8A83A     /* Lighter amber on hover */
--accent-subtle: rgba(212, 149, 43, 0.12)  /* Background tint */
--border-dark: rgba(255, 255, 255, 0.08)   /* Subtle borders on dark */
--border-light: rgba(0, 0, 0, 0.08)        /* Subtle borders on light */
```

### Typography
```
--font-display: 'Tele-Grotesk Next', 'Inter Variable', sans-serif
--font-body: 'Inter Variable', -apple-system, sans-serif
```

Load Inter Variable from Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap`

For Tele-Grotesk: Use Inter Variable as the fallback since Tele-Grotesk is not freely available on Google Fonts. If we can source it, great — otherwise Inter Variable at heavy weights (700-800) with tight letter-spacing (-2px to -3px) gives a similar bold, condensed feel for display text. Use this approach for all display/hero headings.

### Design Tokens
```
--radius-sm: 8px
--radius-md: 14px
--radius-lg: 20px
--radius-xl: 28px
--shadow-card: 0 8px 32px rgba(0, 0, 0, 0.12)
--shadow-card-hover: 0 16px 48px rgba(0, 0, 0, 0.2)
--transition-smooth: all 0.4s cubic-bezier(0.16, 1, 0.3, 1)
--max-width: 1280px
--max-width-content: 900px
```

### Animation Principles
- **Every section** fades in + slides up as it enters the viewport (IntersectionObserver, threshold 0.1)
- Stagger child elements within sections (animation-delay: 0.1s increments)
- Use `cubic-bezier(0.16, 1, 0.3, 1)` for all scroll-triggered animations — this gives a smooth, decelerating entrance
- Nav becomes frosted glass on scroll (backdrop-filter: blur)
- Work category cards have a subtle scale + shadow lift on hover
- Photo elements have a very slight parallax or ken-burns-lite effect on scroll
- Keep it classy — no bouncing, no spinning, no attention-seeking animations

## Site Structure

### Page 1: `index.html` — Home (Single-page scrolling)

#### Section 1: Hero
- Full-viewport height, dark background (`--bg-dark`)
- Left side: Large display text
  - Small label: `OPERATOR · BUILDER · PEOPLE LEADER` (in `--accent`, letterspaced)
  - Main headline: `I fix what's broken and build what's missing.` (display font, 64-80px, white)
  - Subtext: One paragraph — "Operations-bred problem-solver with a hands-on approach to talent, training, communications, and anything else the business needs done right. From 325-store rollouts to a sports tech platform I built from scratch." (muted text)
  - CTA button: "See the work ↓" — pill-shaped, outlined, scrolls to work section
- Right side: Carlos's headshot (`Carlos_headshot.jpg`) — large, with a subtle warm gradient overlay at the bottom edges. Use `border-radius: var(--radius-xl)`. This should feel premium, not a tiny circle.
- Subtle ambient gradient glow behind the photo in amber/gold tones (very subtle, like 5-8% opacity)

#### Section 2: About — "Who I Am"
- Light background (`--bg-light`)
- Two-column layout:
  - Left: Section label + headline: `"If you speak English, we can talk about anything."`
  - Right: 3 paragraphs telling Carlos's story (see copy below)
- Below the text: A **CliftonStrengths** feature block:
  - Horizontal row of 5 strength badges/pills
  - Each shows the strength name and a one-line description:
    1. **Communication** — Finds the words that connect
    2. **Arranger** — Orchestrates complexity into clarity
    3. **Individualization** — Sees what makes each person different
    4. **Strategic** — Spots patterns and paths others miss
    5. **Relator** — Builds trust through real relationships
  - Style: Dark cards or outlined pills with accent color highlights. Should feel like a personal brand element, not a corporate assessment readout.
- Below CliftonStrengths: Stats row (4 across)
  - `325+` — Locations supported
  - `3,000+` — Employees reached
  - `5+` — Years coaching youth volleyball
  - `60%` — Engagement score increase
- Stats should have the number in `--accent` color, large display font

#### Section 3: Work — "What I've Built"
- Dark background (`--bg-dark`)
- Section label + headline: `"Don't tell me what you can do. Show me what you built."`
- **Five category cards** in a grid layout (3 columns top row, 2 columns bottom row centered, OR a staggered masonry-like layout — use your judgment for what looks best):

**Card 1: Video & Graphics**
- Thumbnail/preview area with the Amtel-Nation photo (`FNfloeXWUAY-9QJ.jfif`) as background
- Tag: `VIDEO PRODUCTION & VISUAL DESIGN`
- Title: "In-House Media Studio"
- Short desc: "Built a production studio from an empty room. Live town halls, branded video, podcasts, and training content for 3,000+ people."
- Links to `studio.html`

**Card 2: Learning & Development**
- Use the `HYPE_Phone_Screens.png` image as background (FC employee on phone in gym)
- Tag: `TRAINING PROGRAM DESIGN`
- Title: "Programs That Actually Stick"
- Short desc: "Proprietary training curricula, interactive e-learning modules, and blended programs deployed company-wide. Includes a live interactive demo you can try right now."
- Links to `learning.html`

**Card 3: Recruiting**
- Use the Winner's Circle graphic (`D59dBh7XoAAVw4h.jfif`) as background
- Tag: `TALENT ACQUISITION`
- Title: "Built It From Scratch. Twice."
- Short desc: "From 1 recruiter to 5, from 42 locations to 325+. 98% staffing. 41% retention improvement. I build recruiting functions."
- Links to `recruiting.html`

**Card 4: App Development**
- Dark navy/Lynx brand gradient background
- Tag: `PRODUCT DESIGN & DEVELOPMENT`
- Title: "Lynx: Built from Zero"
- Short desc: "Couldn't find club management software that worked. So I designed and built a dual-platform app from scratch with zero coding experience."
- Links to `lynx.html`

**Card 5: Just for Fun**
- Use one of the volleyball team photos as background (the celebration/winning pose — `20250803_175821_0_.jpg`)
- Tag: `THE OTHER STUFF`
- Title: "Coach. Builder. Human."
- Short desc: "5+ years of youth volleyball coaching, a desk setup that slaps, and the kind of energy that doesn't fit in a resume."
- Links to `fun.html`

Each card should:
- Have a darkened overlay on the image so text is readable
- Hover: overlay lightens slightly, card lifts with shadow, subtle scale(1.02)
- Have a "View →" link at the bottom
- Fade in with stagger as user scrolls

#### Section 4: How I Think — Philosophy
- Light background (`--bg-light`)
- Section label + headline: `"My operating principles."`
- **Four cards** (2x2 grid), each with a large number (01, 02, 03, 04), a bold title, and a paragraph:

01: **"Build for the floor, not the boardroom."**
"The best training program in the world means nothing if a store manager can't use it at 7am with one hand holding coffee. I design for how people actually work, not how org charts imagine they do. I lived the problems before I started solving them."

02: **"If it's broken, I'll fix it. If it's missing, I'll build it."**
"I've never waited for a tool, a team, or permission. I built a media studio from an empty room. I wrote training programs in 3.5 weeks and traveled to deliver them in person. I built a software platform because the one I needed didn't exist."

03: **"If my name is in the bucket, it gets done."**
"I don't just participate. When I take something on, I own it. I follow through, I do it right, and I leave it better than I found it. That's the standard whether it's a recruiting function, a training rollout, or a volleyball season."

04: **"I want to see the team win."**
"I'm a natural collaborator. I don't need the credit. I need the people around me to get better, to understand what we're doing and why it matters. That's true whether I'm coaching a 12-year-old or partnering with a VP on a company-wide initiative."

#### Section 5: Testimonials
- Dark background (`--bg-dark`)
- Two testimonial cards side by side
- Large quotation mark in `--accent` color
- Placeholder testimonials (Carlos will replace with real ones):

Card 1:
> "Carlos doesn't just do his job. He looks around the room, figures out what's broken, and fixes it. Half the things he built for us weren't even in his job description. He just saw the need and made it happen."
> — Colleague, Fitness Connection
> (Paraphrased from professional reference)

Card 2:
> "He came from operations, and you can tell. He doesn't build things from an ivory tower. He builds things that actually work because he's been the person who had to use them."
> — Operations Partner
> (Paraphrased from professional reference)

#### Section 6: Contact — "Let's Talk"
- Light background (`--bg-light`)
- Centered layout
- Headline: `"Let's talk."`
- Text: "Whether it's about a role, a project, or just a good conversation — I'm always open. If you can speak English, we can talk about anything."
- Two buttons: Email Me (primary, filled) + LinkedIn (secondary, outlined)
- Email: fuentez.carlos@gmail.com
- LinkedIn: https://linkedin.com/in/carlosfuentez

#### Footer
- Simple, dark (`--bg-dark`)
- "© 2026 Carlos Fuentez. Built with intention."

---

### Page 2: `studio.html` — Video & Graphics Case Study

#### Hero
- Full-width dark hero with amber accent glow
- Label: `CASE STUDY — VIDEO PRODUCTION & VISUAL DESIGN`
- Headline: `"An empty room. A media empire."`
- Subtext about building the in-house studio

#### Metadata Bar
- Role: Director, Communications & TA
- Company: Amtel / T-Mobile Authorized Partner
- Reach: 3,000+ employees, 325+ locations
- Duration: 2016 — 2022

#### Content
Use the same narrative from the existing `studio.html` but enhanced:

**Photos to embed in this page:**
- `FNfloeXWUAY-9QJ.jfif` — The Amtel-Nation branded photo shoot (use as a full-width hero image or section break)
- `FB_IMG_1654891428771__1_.jpg` — Carlos in the studio with AMTEL letters behind him (use in "The Studio" section)
- `D59dBh7XoAAVw4h.jfif` — Winner's Circle graphic (use in the Winner's Circle section)

**Sections:**
1. The Situation (problem statement)
2. The Studio (building from scratch) — embed the studio photo here
3. The Content Engine (what was produced) — deliverables grid
4. **Winner's Circle (NEW — major section, see below)**
5. Featured Content (additional YouTube video embeds if any)
6. The Impact (numbers)
7. Tools & Platforms used
8. The Takeaway

**WINNER'S CIRCLE — DEDICATED SECTION**

This deserves its own prominent, full-width section on the studio page. It's a story about earning responsibility, project managing a company-wide recognition event, and the business results that came with it.

**Layout:**
- Full-width dark background section (use `--bg-dark-alt` or a gradient)
- The Winner's Circle graphic (`D59dBh7XoAAVw4h.jfif`) as a large hero image or background element
- Embedded YouTube video: `https://www.youtube.com/embed/rZE8H6A-j6Q`
- This is a video Carlos personally edited for the event

**Story copy for this section:**

Title: "Winner's Circle"
Subtitle: "From small celebration to company-defining event."

"Winner's Circle was an annual recognition event that Amtel had been producing for over 5 years before I joined the company in 2016. It had always been a small gathering to celebrate top performers and operational/sales success throughout the year."

"In my third year with the company, I was awarded the opportunity to revamp the entire program. I earned that responsibility because of how I executed during our 60-store organic growth with new locations, and how I managed logistics during our first-ever acquisition in New York City."

"I took it to another level. Because Amtel still operated like a startup where everyone wears many hats, I was solely in charge of everything: securing funding within budget, negotiating vendor sponsorships, sourcing event swag, selecting the location, planning the award ceremony, designing the trophies, building the agenda, and project managing every detail. I even personally edited the event videos."

"Year over year, we watched the attendee count grow as the celebration got bigger and bigger. More importantly, the culture of recognition and competition that Winner's Circle represented was directly connected to the month-over-month revenue targets we were hitting through the roof. When you recruit the right people, train them well, communicate clearly, and celebrate wins publicly, the results follow."

**Below the copy:** Embed the YouTube video prominently
```
YouTube embed: https://www.youtube.com/embed/rZE8H6A-j6Q
Caption: "Winner's Circle highlight reel — personally edited by Carlos Fuentez"
```

**Feature pills/tags for this section:**
- Event Production
- Project Management
- Budget & Vendor Sponsorship
- Video Editing
- Recognition Program Design
- Award Ceremony Planning

#### Navigation
- Back link to home
- "Next Case Study" link at bottom to `learning.html`

---

### Page 3: `learning.html` — L&D Case Study

#### Hero
- Dark hero, amber accent
- Label: `CASE STUDY — LEARNING & DEVELOPMENT`
- Headline: `"When you build systems, you have to teach people those systems."`
- Subtext: "My path into L&D wasn't planned. It was a natural evolution from operations and communications. When you're building processes, restructuring teams, and rolling out new ways of working, you quickly learn that the build is only half the job. The other half is getting the information to stick."

#### Metadata Bar
- Scope: Two organizations, 40-325+ locations
- Methodology: ADDIE, SAM, Adult Learning Theory
- Formats: E-Learning, Video, Facilitator-Led, Microlearning, Job Aids
- LMS: Cornerstone OnDemand, Paycom Learning

#### Content
**Programs Section** — Each program gets its own card/breakdown:

**H.Y.P.E. (Hire Your Perfect Employee)**
- Purpose: Standardize how leadership sourced, interviewed, and assessed candidates
- Format: Blended — e-learning modules + facilitator-led sessions + visual job aids
- Deployed: Company-wide across all locations
- Impact: Part of the system that improved retention by 37%

**LeaderReady+**
- Purpose: Develop emerging leaders with frameworks for managing teams
- Format: Blended learning program with assessments

**ReCharge**
- Purpose: Re-engage and upskill existing team members
- Format: Targeted modules + in-person facilitation

**ATM 101**
- Purpose: Foundational onboarding for new hires
- Format: Structured first-week learning path with visual guides

**Predictive Index Implementation**
- Led discovery, vendor negotiations, implementation, and company-wide training
- Gave hiring managers a data-driven framework for evaluating candidate fit

**Operational Training Redesign (Fitness Connection)**
- Collaborated on full training redesign after leadership change
- Mapped needs across 40+ locations
- Built station execution guides, sales scripts, tracking tools, onboarding programs
- Completed framework in 3.5 weeks, then traveled to clubs for in-person facilitation

**Featured Content Section:**
- YouTube video embeds for any training videos Carlos wants to showcase
- Placeholder grid with `<!-- REPLACE WITH ACTUAL YOUTUBE VIDEO IDS -->`

**SHOWCASE: Interactive Phone Screen Training Module**
This is a MAJOR portfolio piece. Carlos built a fully interactive, self-contained e-learning module for Fitness Connection hiring managers. It should get its own prominent section on this page.

Assets in `/images/` (copy these from uploads):
- `fc-phone-screen-training.html` — The actual live module (copy to project root so it can be linked as a live demo)
- `phone_screen_audio.mp3` — Audio file used in the module (copy to `/images/audio/` or root)
- `HYPE_Phone_Screens.png` — Hero image showing FC employee on the phone
- `Victory_Icon_Black.jpg` — Fitness Connection logo/icon
- `ChatGPT_Image_Mar_9__2026__06_36_39_PM.png` — Cartoon illustration of phone screen scenario (recruiter + candidate)
- `ChatGPT_Image_Mar_9__2026__06_38_53_PM.png` — Cartoon character "Amy" used as the fictional candidate

**How to present this on the page:**
1. A full-width showcase card with a dark background
2. Title: "H.Y.P.E. Phone Screen Training" or "Interactive Training Module: Phone Screens"
3. Description: "A fully interactive e-learning module I designed and built for Fitness Connection hiring managers. The module teaches phone screen best practices through a simulated candidate call, guided listening exercises, multiple-choice knowledge checks with contextual feedback, and a self-assessment checklist. Learners listen to a real phone screen, evaluate the candidate, answer questions, and discover how much they can assess in under 10 minutes."
4. A grid showing 2-3 screenshots/images from the module (use the cartoon illustrations and the HYPE hero image)
5. A prominent "Try the Live Demo →" button that links to `fc-phone-screen-training.html`
6. Below the button: small text noting "Built with HTML/CSS/JS. Self-contained, no LMS required."

**Module features to highlight (as small feature pills or a quick list):**
- Audio-integrated phone screen simulation
- Custom illustrated characters
- Multiple-choice with contextual feedback per answer
- Checklist self-assessment
- Progress tracking
- Celebration animations on correct answers
- Mobile responsive
- Branded to Fitness Connection design system

**Methodology Section:**
- How Carlos approaches instructional design
- ADDIE/SAM framework usage
- Needs analysis process
- Visual design tools (Vyond, InDesign, Canva, Photoshop)

#### Navigation
- Back to home, Next: Recruiting

---

### Page 4: `recruiting.html` — Recruiting Case Study

#### Hero
- Dark hero with Winner's Circle graphic as subtle background
- Label: `CASE STUDY — TALENT ACQUISITION`
- Headline: `"Built it from scratch. Twice."`

#### Metadata Bar
- Scope: Two organizations (Amtel 325+ locations, Fitness Connection 40+ locations)
- Team: Built from 1 to 5 recruiters
- Volume: 60-70 hires/month at peak
- Staffing Rate: 98%

#### Content
**Two chapters:**

**Chapter 1: Amtel / T-Mobile**
- Built recruiting function from ground up as company scaled from 42 to 325+ locations
- Grew team from 1 to 5 recruiters
- 60-70 hires per month, 98% staffing
- 41% increase in 6-month retention
- 61% reduction in manager turnover
- 75% reduction in agency spend through employer brand, EVP, careers site, direct sourcing
- Employer branding: multimedia campaigns, branded video, social media

**Chapter 2: Fitness Connection (Roark Capital)**
- Led TA for 40+ gym locations
- Team of 3, plus personal ownership of corporate/management/hard-to-fill
- 37% pipeline improvement
- Hourly turnover: 115% → 68%
- Manager retention: +68%
- Built employer brand from scratch
- New hire retention +37% through onboarding redesign
- Revenue increased 5-15% QoQ after operational changes
- Company hit yearly revenue target for first time in 5 years

**The Approach Section:**
- How Carlos builds recruiting functions
- Process redesign methodology
- Structured interview implementation
- Employer brand strategy

#### Navigation
- Back to home, Next: Lynx

---

### Page 5: `lynx.html` — App Development Case Study

Keep the same narrative structure from the existing version but update:
- Use new color palette (`--bg-dark` instead of Lynx navy for the page theme, but keep Lynx brand colors for Lynx-specific elements like the showcase area)
- Add YouTube video embed section for any demo videos
- Add screenshots section (placeholder for now — Carlos will add actual app screenshots)
- Match the animation/transition style of all other pages

#### Photos:
- Carlos's desk setup (`20240125_000039.jpg`) could be used as a section break or "where the magic happens" callout

---

### Page 6: `fun.html` — Just for Fun

This is the personality page. Less structured, more human.

#### Hero
- Dark background, one of the volleyball celebration photos as a full-bleed background image with dark overlay
- Headline: `"The stuff that doesn't fit on a resume."`

#### Sections:

**Volleyball — 5+ Years of Coaching**
- Use all three volleyball photos scattered throughout:
  - `20240330_154809.jpg` (team photo)
  - `20250301_202353.jpg` (Black Hornets team)
  - `20250803_175821_0_.jpg` (celebration pose)
- Text about being a Director and Head Coach at Black Hornets Volleyball Club (he did NOT found it, he earned the title). 5+ years of competitive youth volleyball coaching in Dallas. Focus on developing young players and young adults, managing expectations, getting instruction to click.
- How coaching connects to his professional work: he's a natural teacher and facilitator. The same skills that make him effective in a training room make him effective on a volleyball court.

**The Workstation**
- Full-width photo of the desk setup (`20240125_000039.jpg`)
- Brief text about the setup. Plants, the ultrawide, the vibe.
- "This is where Lynx was built."

**YouTube Embed Section**
- For any fun/personal content Carlos wants to share
- Placeholder grid

---

## Image Handling

All images are located in the project root (or an `/images` folder — organize them there):

```
/images/
  carlos-headshot.jpg          ← Carlos_headshot.jpg (hero photo)
  carlos-headshot-full.png     ← Generated_Image_September_11__2025_-_11_48AM.png (full body)
  amtel-nation.jpg             ← FNfloeXWUAY-9QJ.jfif
  carlos-studio.jpg            ← FB_IMG_1654891428771__1_.jpg
  winners-circle.jpg           ← D59dBh7XoAAVw4h.jfif
  volleyball-team-1.jpg        ← 20240330_154809.jpg
  volleyball-team-2.jpg        ← 20250301_202353.jpg
  volleyball-celebration.jpg   ← 20250803_175821_0_.jpg
  desk-setup.jpg               ← 20240125_000039.jpg
  hype-phone-screens.png       ← HYPE_Phone_Screens.png (FC employee on phone, hero for training module)
  fc-victory-icon.jpg          ← Victory_Icon_Black.jpg (Fitness Connection logo/icon)
  phone-screen-scenario.png    ← ChatGPT_Image_Mar_9__2026__06_36_39_PM.png (cartoon recruiter + candidate)
  phone-screen-amy.png         ← ChatGPT_Image_Mar_9__2026__06_38_53_PM.png (cartoon character Amy)
/images/audio/
  phone-screen-audio.mp3       ← phone_screen_audio.mp3 (audio for the interactive module)
```

Additional files in project root:
```
/fc-phone-screen-training.html  ← The live interactive training module demo (link to this from learning.html)
```

Rename all files to clean, web-friendly names as shown above. Use `object-fit: cover` on all images. Apply `loading="lazy"` to images below the fold.

**IMPORTANT:** The `fc-phone-screen-training.html` file is a standalone, self-contained HTML file. It references images and audio internally. When copying it to the project root, make sure any image/audio paths it uses internally are updated to point to the correct locations in the `/images/` folder. Read the file first to check what paths it expects.

## YouTube Video Embed Pattern

Use this responsive pattern for all video embeds:

```html
<div class="video-embed">
  <div class="video-container">
    <!-- REPLACE src with actual YouTube embed URL -->
    <iframe
      src="https://www.youtube.com/embed/VIDEO_ID"
      title="Video Title"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>
  <p class="video-caption">Caption describing the video</p>
</div>
```

```css
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 */
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--bg-dark-alt);
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

## Scroll Animation Pattern

Apply to ALL sections and key elements:

```javascript
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -60px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Stagger children
      const children = entry.target.querySelectorAll('.reveal-child');
      children.forEach((child, i) => {
        child.style.transitionDelay = `${i * 0.1}s`;
        child.classList.add('visible');
      });
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

```css
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

.reveal-child {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal-child.visible {
  opacity: 1;
  transform: translateY(0);
}
```

## Shared Components

### Navigation (all pages)
```html
<nav id="nav">
  <a href="index.html" class="nav-name">CARLOS FUENTEZ</a>
  <!-- Mobile hamburger menu for < 900px -->
  <ul class="nav-links">
    <li><a href="index.html#about">About</a></li>
    <li><a href="index.html#work">Work</a></li>
    <li><a href="index.html#philosophy">How I Think</a></li>
    <li><a href="index.html#contact">Let's Talk</a></li>
  </ul>
</nav>
```

Nav name should be in the display font, bold weight, letterspaced. On case study pages, add a "← Back to work" link on the right side.

### Footer (all pages)
```html
<footer>
  <p>© 2026 Carlos Fuentez. Built with intention.</p>
</footer>
```

## Responsive Breakpoints
- Desktop: > 1024px (full layouts)
- Tablet: 768px - 1024px (2-column → 1-column, smaller fonts)
- Mobile: < 768px (single column, hamburger nav, stacked cards)
- All images responsive with `max-width: 100%`
- Font sizes use `clamp()` for fluid scaling

## File Structure
```
/
├── index.html
├── studio.html
├── learning.html
├── recruiting.html
├── lynx.html
├── fun.html
├── css/
│   └── style.css          ← Shared styles (design tokens, nav, footer, animations, utilities)
├── js/
│   └── main.js            ← Shared JS (nav scroll, reveal animations, mobile menu)
└── images/
    ├── carlos-headshot.jpg
    ├── carlos-headshot-full.png
    ├── amtel-nation.jpg
    ├── carlos-studio.jpg
    ├── winners-circle.jpg
    ├── volleyball-team-1.jpg
    ├── volleyball-team-2.jpg
    ├── volleyball-celebration.jpg
    └── desk-setup.jpg
```

Use a shared CSS file and shared JS file across all pages. Each page links to both. Page-specific styles can be in `<style>` blocks in the page head if needed, but prefer the shared stylesheet.

## Deployment
- This deploys to Vercel as a static site
- No build step needed — just HTML/CSS/JS
- Vercel auto-deploys from a GitHub repo
- Make sure all file paths are relative (no leading `/` that would break)

## Quality Checklist
- [ ] All images load and display correctly
- [ ] All scroll animations fire on every section
- [ ] Navigation links work across all pages
- [ ] Mobile responsive on all pages (test at 375px, 768px, 1024px)
- [ ] YouTube embed containers render correctly (even with placeholder)
- [ ] No horizontal scroll on any viewport size
- [ ] All text is readable against its background
- [ ] Hover states work on all interactive elements
- [ ] Page loads feel fast (lazy loading on below-fold images)
- [ ] Color palette is consistent across all pages
- [ ] Inter Variable font loads correctly
- [ ] Frosted glass nav effect works on scroll

## Copy Reference

### Hero Tagline Options (pick the one that feels best in context):
- "I fix what's broken and build what's missing."
- "Operations first. People always."

### About Section Copy:
Paragraph 1: "I came up in restaurant operations. Running stores, managing chaos, training teams, and learning what happens when the systems people build don't actually work on the floor. I was a training store operator. I lived the problems that most support teams only read about in reports."

Paragraph 2: "From operations, I moved into talent acquisition, where I built recruiting functions from scratch for organizations scaling fast. But I was never just a recruiter. I could speak to the business at every level, so I kept getting pulled into bigger problems. Communications, employer branding, change management. When I moved into communications officially, I found the space where my creativity could actually drive results. I was translating strategy into content that 3,000+ employees could actually use."

Paragraph 3: "Learning and development was a natural next step. When you're building systems, you have to teach people those systems and make the information stick. I'm a natural coach and facilitator. I love capturing a room's attention and helping people get it. Now I'm channeling all of those skills into the next chapter: deeper into L&D and communications, where I can do what I do best. Engage with people and help them win."

### Career Arc (for use across the site):
Operations (F&B, multi-unit, training stores) → Talent Acquisition (built functions from scratch, but always did more) → Communications (translated business strategy into field-ready content, built a media studio, produced for 3,000+ employees) → Learning & Development (natural evolution from building systems and teaching people how to use them) → Now: positioning for the next chapter in L&D and communications.

### Key phrases to weave throughout (these are Carlos's actual brand language):
- "If my name is in the bucket, it's going to get done, and done right."
- "I leave things better than I found them."
- "If you can speak English, we can talk about anything."
- "I want to see the team win."
- "I lived the problems before I started solving them."

### Volleyball section copy (fun.html):
Carlos is a Director and Head Coach at Black Hornets Volleyball Club in Dallas. He did NOT found it. He earned the director title over 5+ years of coaching by developing young players and young adults, managing expectations, and getting the instruction to click. His coaching connects directly to his professional work: he's a natural teacher who understands that getting someone to learn something is about meeting them where they are and making the information land.

### Tone rules:
- Minimize em dash usage. Use periods, commas, or restructured sentences instead.
- Don't overstate L&D experience. Frame it as a natural evolution, not a career-long focus.
- Honest > impressive. Carlos's real story IS impressive; it doesn't need inflation.
- Confident but grounded. Not cocky, not humble-braggy. Just real.
- He's a people leader who happens to be great at building things. Lead with the human, not the skill set.

## IMPORTANT NOTES FOR CC:
1. READ every image file before using it. Verify dimensions and orientation.
2. Test the site locally before committing.
3. Use semantic HTML throughout (section, article, nav, header, footer, figure, figcaption).
4. Ensure all images have meaningful alt text.
5. The vibe is CONFIDENT and WARM. Not corporate, not stiff. Think luxury streetwear brand meets editorial portfolio. The design should feel like Carlos walks into a room and owns it without trying too hard.
6. Carlos cannot code. Every decision should be made by CC. If something seems ambiguous, make the bold choice.
7. **MINIMIZE EM DASHES.** Carlos does not use them regularly. Use periods, commas, or restructure sentences instead. Scan all copy before finalizing and replace most em dashes.
8. **DO NOT overstate L&D experience.** Carlos is an operations-bred problem-solver who evolved into L&D through communications work. Frame it honestly as a natural progression, not a lifelong focus.
9. **Volleyball is 5+ years, not 15.** He is a Director at Black Hornets, not the founder. He earned that title.
10. **CliftonStrengths (Communication, Arranger, Individualization, Strategic, Relator)** should be visually prominent on the home page, not buried.
11. **Career arc is: Operations → TA → Communications → L&D.** Each step was driven by curiosity and a bias toward action, not by chasing titles.
12. Use Carlos's actual brand phrases throughout: "If my name is in the bucket, it gets done." / "I leave things better than I found them." / "I want to see the team win."
