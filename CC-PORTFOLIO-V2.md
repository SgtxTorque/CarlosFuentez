# CC-PORTFOLIO-V2 — Carlos Fuentez Portfolio Website Updates

## What This Is
This is the V2 update spec. Read this file AND the original CC-PORTFOLIO-SITE.md. This file contains targeted changes to apply on top of the existing build. Where something is specified here, it overrides the original spec. Where this file is silent, the original spec still applies.

## Global Changes

### Copy Rule Reminder
- MINIMIZE em dashes across ALL pages. Scan every page and replace most em dashes with periods, commas, or restructured sentences.
- Honest > impressive. Don't inflate.
- Carlos's voice is warm, confident, grounded. Not corporate, not stiff.

---

## HOME PAGE (index.html) Changes

### Section 2: About — Headline Change
**OLD:** "If you speak English, we can talk about anything."
**NEW:** "We don't have to speak the same language to talk about anything."

Alternative options CC can choose from if the above doesn't fit the layout:
- "You don't need to speak my language for us to understand each other."
- "We don't need to speak the same language. We just need to care about the same things."

### Section 2: About — Copy Rewrite
Replace the 3 paragraphs in the About section with these:

**Paragraph 1:** "I came up in restaurant operations. Running stores, managing chaos, training teams, and learning what happens when the systems people build don't actually work on the floor. I was a training store operator and a business owner. I lived the problems that most support teams only read about in reports."

**Paragraph 2:** "From operations, I moved into talent acquisition, where I built recruiting functions from scratch for organizations scaling fast. But I was never just a recruiter. I could speak to the business at every level, so I kept getting pulled into bigger problems: communications, employer branding, change management. When I moved into communications, I found the space where my creativity could really drive results. I was translating strategy into content that 3,000+ employees could actually use."

**Paragraph 3:** "Learning and development was a natural next step. When you're building systems, you have to teach people those systems and make the information stick. I'm a natural coach and facilitator. I love capturing a room's attention and watching it click. Now I'm channeling all of those skills into the next chapter. Deeper into L&D and communications, where I can do what I do best: engage with people and help them win."

**NEW Paragraph 4 (add this):** "I grew up through a lot of adversity. I won't get into the details, but it shaped who I am in a real way. I've always carried this drive to make sure the people around me don't have to struggle through the same things. That's why I coach. That's why I build. That's why I lead. I'm a servant leader and a man of my community. Nearly to a fault, I'm always thinking about others first."

### Section 2: CliftonStrengths — Official Gallup Domain Colors
Replace the CliftonStrengths section. Use the OFFICIAL Gallup CliftonStrengths domain colors for each strength badge/pill. The four domains and their colors are:

```
Executing:            Purple  (#7B68A5 or similar rich purple)
Influencing:          Orange  (#E88D2A or similar warm orange)
Relationship Building: Blue   (#0070CD or similar medium blue)
Strategic Thinking:    Green  (#3B9C5A or similar medium green)
```

**Top 5 (prominently displayed):**
1. **Communication** — Influencing domain — ORANGE — "Finds the words that connect"
2. **Arranger** — Executing domain — PURPLE — "Orchestrates complexity into clarity"
3. **Individualization** — Relationship Building domain — BLUE — "Sees what makes each person different"
4. **Strategic** — Strategic Thinking domain — GREEN — "Spots patterns and paths others miss"
5. **Relator** — Relationship Building domain — BLUE — "Builds trust through real relationships"

**Strengths 6-10 (displayed smaller, in a secondary row below the top 5):**
_NOTE: Carlos has not yet provided strengths 6-10. Leave placeholder slots labeled "6" through "10" with a CSS class that makes them easy to update later. Use a slightly muted/smaller treatment compared to the top 5. If Carlos provides them before the build is complete, add them in._

**Visual design for the strengths:**
- Each strength badge should have a left-side color bar or background tint matching its domain color
- Show the domain name in small text below or beside the strength name
- The top 5 should be larger cards; 6-10 should be smaller pills or a compact row
- Include a small legend or label: "CliftonStrengths Top 10" with the Gallup domain color key (Purple = Executing, Orange = Influencing, Blue = Relationship Building, Green = Strategic Thinking)

### Section 6: Contact — Rephrase
**OLD:** "If you can speak English, we can talk about anything."
**NEW:** "We don't have to speak the same language. If you care about people and doing good work, we'll get along just fine."

---

## LYNX PAGE (lynx.html) Changes

### Card on Home Page (index.html, Section 3, Card 4)
**OLD:**
- Dark navy/Lynx brand gradient background
- Title: "Lynx: Built from Zero"
- Short desc: "Couldn't find club management software that worked. So I designed and built a dual-platform app from scratch with zero coding experience."

**NEW:**
- **Use the Lynx logo as the background image for this card.** The logo file should be in the images folder. If the Lynx logo is not yet in the images folder, use the Lynx brand colors (navy #0B1628, sky blue #4BB9EC, gold #FFD700) as a gradient background and render "LYNX" in large display text as the card's visual element. The logo should be semi-transparent/watermarked behind the card content, not competing with text.
- Tag: `PRODUCT DESIGN & DEVELOPMENT`
- Title: "Lynx: Disrupting Youth Sports"
- Short desc: "Youth sports clubs run on chaos. I designed and built a dual-platform app to fix it. Web admin + mobile. Desktop + phone. Zero coding experience. One coach who was tired of spreadsheets."

### Lynx Page (lynx.html) — Major Reframe

**The Problem section rewrite:**
Don't position this as just "club management software." Lynx is a youth sports engagement and operations platform designed to disrupt how clubs, coaches, parents, and players interact across an entire organization.

**Problems Lynx solves (present as a grid or card layout):**

1. **Parent Communication & Engagement**
   "Parents are the lifeblood of youth sports, but most clubs communicate through scattered group texts and email chains. Lynx gives parents a single place to see schedules, RSVP, track payments, follow their child's development, and stay connected to the club. No more 'I didn't get the message.'"

2. **Player Development & Motivation**
   "Most kids get a stat sheet at the end of the season and that's it. Lynx gamifies the entire player experience. XP power bars, skill challenges, achievement badges, team competitions. Players ages 10-18 engage with their own development the way they engage with everything else in their world: through a screen, with real feedback, and a reason to come back."

3. **Coach Workflow & Game Day Operations**
   "Coaches shouldn't need three apps and a clipboard to run a practice or a game. Lynx puts lineups, substitutions, attendance, player evaluations, and real-time decisions in one place. The Game Day Command Center was designed for the sideline, not the office."

4. **Registration, Payments & Administrative Overhead**
   "Club directors spend hours on registration forms, payment tracking, and roster management. Lynx automates multi-child registration with digital waivers, handles payments through Stripe, and manages rosters across the entire organization. The admin work that used to take days now takes minutes."

**Add to Lynx page metadata bar:**
- Website: `thelynxapp.com` (make this a clickable link)
- Platforms: Web (Desktop) + Mobile (iOS/Android)

**Add a line somewhere on the page:**
"Lynx is available on desktop and mobile. The web admin runs on any browser. The mobile app is built with React Native for iOS and Android."

---

## LEARNING PAGE (learning.html) Changes

### Phone Screen Module — Clarify H.Y.P.E. Connection
The interactive phone screen training module is PART OF the H.Y.P.E. (Hire Your Perfect Employee) program. Update the presentation to make this clear.

**OLD title approach:** "H.Y.P.E. Phone Screen Training" or "Interactive Training Module: Phone Screens"
**NEW title:** "H.Y.P.E. Phone Screen Module"
**NEW subtitle:** "Part of the H.Y.P.E. (Hire Your Perfect Employee) training program"

In the description, add context: "This interactive module is one component of H.Y.P.E., a proprietary training program I designed to standardize how hiring managers sourced, screened, interviewed, and assessed candidates. The phone screen module was built to solve a specific problem: managers were spending 30 minutes on phone screens that should have taken 10 and still not gathering the information they needed to make a confident decision."

---

## STUDIO PAGE (studio.html) — New Photos

Four new studio photos have been added to the images folder. These are critical proof of the studio build and should be featured prominently on studio.html.

**New image files (copy to `/images/` with clean names):**
- `20210610_192803.jpg` → `studio-behind-camera.jpg` — Behind-the-camera view showing the full production rig (Feelworld monitor, camera) with a presenter at the branded desk. Use in "The Studio" section or as a section break.
- `20220113_111615.jpg` → `studio-wide-shot.jpg` — Wide shot of the FULL studio setup: softbox lighting, tripods, cameras, brick wall backdrop with AMTEL letters, green screen corner. **THIS IS THE HERO IMAGE FOR THE STUDIO SECTION.** This single photo proves Carlos built a real production studio, not a webcam setup. Use it full-width.
- `20210323_230650.jpg` → `amtel-brand-collateral.jpg` — Amtel-Nation brand campaign collateral: "We Lead Where Others Follow" messaging, @MyAmtel social branding, store team photos, employer brand design. Use in the Content Engine or Communications section.
- `20220201_104435.jpg` → `amtel-nation-live.jpg` — Screenshot of the Amtel-Nation show broadcasting live with lower third ticker, branded overlay, two hosts. Proves this was a real, professional broadcast production. Use in the Content Engine or Featured Content section.

**How to use these on studio.html:**
1. `studio-wide-shot.jpg` should be used as a full-width hero image or large section break near the top of the page, ideally right after the hero or in "The Studio" section. This photo tells the whole story in one frame.
2. `studio-behind-camera.jpg` works great as a secondary image in a 2-column layout showing the production process.
3. `amtel-nation-live.jpg` should appear in the Content Engine section showing what was actually produced. A caption like "Amtel-Nation live broadcast reaching 3,000+ employees across 325+ locations" would work.
4. `amtel-brand-collateral.jpg` belongs in a Communications/Employer Brand section showing the visual design and campaign work.

Consider a photo gallery or grid layout on the studio page that shows 3-4 of these images together to give the full picture of what the studio looked like and what it produced.

---

Going forward, each CC spec gets a unique name:
- V1: CC-PORTFOLIO-SITE (original)
- V2: CC-PORTFOLIO-V2 (this one)
- Future specs should follow the pattern: CC-PORTFOLIO-V3, CC-PORTFOLIO-HOTFIX-1, CC-PORTFOLIO-CONTENT-DROP, etc.

---

## CHECKLIST FOR CC

Before committing, verify:
- [ ] "If you speak English" is replaced everywhere (About section headline, Contact section)
- [ ] Business owner is mentioned in About paragraph 1
- [ ] Adversity/servant leader paragraph is added as paragraph 4
- [ ] CliftonStrengths use official Gallup domain colors (Purple, Orange, Blue, Green)
- [ ] Placeholder slots exist for strengths 6-10
- [ ] Lynx card on home page uses Lynx logo as background
- [ ] Lynx card description reframed around disrupting youth sports
- [ ] Lynx page has 4 problem/solution cards (Parent, Player, Coach, Admin)
- [ ] Lynx page metadata includes thelynxapp.com and Desktop + Mobile platforms
- [ ] Phone screen module is clearly labeled as part of H.Y.P.E. program
- [ ] Em dashes minimized across ALL pages (scan and fix)
- [ ] Amtel dates say 2016, not 2018
- [ ] Volleyball says 5+ years, not 15
- [ ] Carlos is Director at Black Hornets, not founder
