# CC-PORTFOLIO-FIXES-V2.md
## Personal Portfolio — Content, Layout & Bug Fixes

**Context:** Carlos Fuentez's personal portfolio site. Multi-page HTML site with dark theme, gold (#FFD700) accents, warm cream (#F5F0E8) secondary backgrounds, and a professional tone. The site has pages for: Home/About, Talent Acquisition (Case Study), Studio/Content Production, Lynx App (Product Showcase), and Fun Stuff (Personal).

**Owner:** Carlos cannot code. Read every file before modifying. Do not break existing functionality.

---

## RULES (Read These First)

1. **Read every file in the project before making changes.** Understand the full structure.
2. **Git discipline.** Commit after each major section below with a clear message.
3. **Do not remove or break existing working features.** Only modify what is specified.
4. **Test all links and navigation** after changes.
5. **Maintain the existing design system** — dark backgrounds (#1a1a1a / #2d2d2d / #333), gold accents (#FFD700 / #D4A017), cream sections (#F5F0E8), white text, rounded cards.
6. **All images should be clickable and expand** — implement a lightbox/modal that enlarges any photo when clicked so the viewer can see the full contents. Apply this globally to ALL image cards across ALL pages.

---

## SECTION 1: LYNX APP PAGE — Complete Rewrite of Messaging

### The Problem
The current Lynx page undersells what the app does. It describes it generically without calling out the most important differentiator: **the engagement system.**

### What Lynx Actually Solves
Youth sports club management is stuck in the dark ages. Coaches use paper rosters and group texts. Parents feel like ATMs who sit in bleachers with no visibility. Players have no reason to care about development between games. Admins are buried in spreadsheets, registration forms, and chasing payments.

Lynx solves all of this — but the real differentiator is **the engagement layer** that sits on top of the management tools:

**For Players (ages 10–18):**
- Skill evaluations displayed as XP power bars with a color tier system (sky blue → gold for excellent, gray for below average) — never plain numbers or boring charts
- A challenge system with 25+ pre-built templates that coaches deploy to keep players developing between practices
- Achievement badges inspired by gaming culture (Call of Duty-style unlock system with Common/Rare/Epic/Legendary tiers)
- A player profile that feels like a sports video game character screen, not a boring database entry
- Streak tracking, leaderboards, and team standings that create healthy competition

**For Coaches:**
- Player evaluations across 12 volleyball skills with swipe-through mobile forms
- Game Day Command Center — lineup building, real-time attendance, score tracking, stat entry all in one flow
- Challenge deployment to keep players engaged between sessions
- Team communication hub with parent messaging built in
- Practice and game scheduling with RSVP tracking

**For Parents:**
- Full visibility into their child's development, schedule, and team activity
- Payment tracking and registration management
- Direct communication channel with coaches
- No more "what happened at practice?" — they can see evaluations, achievements, and progress

**For Admins:**
- Season management, registration forms, team creation, roster building
- Jersey management, payment tracking, volunteer coordination
- Multi-team, multi-season support
- Dashboard with drag-and-drop widget customization

### What to Write on the Lynx Page

**Hero Section:**
- Headline: Something like "I built a youth sports platform from scratch. With zero coding experience."
- Subtext: Explain that Lynx started as a solution for Carlos's own volleyball club (Black Hornets) and grew into a dual-platform product (React/Vite web + React Native mobile) sharing a Supabase backend with 60+ database tables.

**The Engagement System Section (THIS IS THE STAR):**
- Title: Something like "The feature no one else is building." or "Youth sports has a engagement problem."
- Explain that every youth sports management app handles the basics (rosters, schedules, payments) — but none of them solve the real problem: keeping kids engaged in their development and making parents feel connected to the experience.
- Describe the player experience: XP bars, challenges, achievements, leaderboards — designed to feel like a sports video game, not a spreadsheet.
- Describe the coach tools: evaluations that feed player XP, challenges that keep development going between practices, a Game Day Command Center that replaces clipboards.
- Describe the parent experience: real visibility, not just payment reminders.
- Describe the admin experience: one platform that handles everything from registration to jersey ordering.

**Platform Showcase Section:**
- Show the four role-based dashboards (Admin, Coach, Parent, Player) — use the existing screenshot grid from the current page
- Call out: "Four distinct dashboards. One unified platform. Every user type gets a tailored experience."
- **Mobile app preview:** Take the existing Lynx mobile app screenshot and put it inside a phone frame/mockup. This should be on THIS page (Lynx), not on the Studio page where it currently lives.

**Tech Stack Section (brief):**
- React + Vite (web admin), React Native + Expo (mobile), Supabase backend, Stripe payments
- 60+ database tables, role-based access, real-time data
- Built entirely through AI-assisted development (Claude as development partner)

### Mobile App Preview
- Find the mobile Lynx app screenshot that is currently on the Studio page
- MOVE it to the Lynx page
- If possible, wrap it in a clean phone frame/bezel mockup using CSS (a rounded rectangle with a notch, dark bezel border, etc.)
- Remove it from the Studio page after moving

---

## SECTION 2: TALENT ACQUISITION PAGE — Fix False Statement

### The Problem
The current hero quote area says something about building recruiting functions "from nothing" / "from scratch" — and that's only accurate for Amtel/T-Mobile. At Fitness Connection, Carlos **revamped** an existing function, not built from scratch.

### The Fix
Update the TA case study intro text:

**Current (inaccurate):** "Twice I built recruiting functions from nothing. Not inherited, not expanded. From zero."

**Corrected version:** Something like: "I've built a recruiting function from nothing — and revamped one that was stuck in 'the way we've always done it.' Both times, the results changed how the business operated."

**Context for the Fitness Connection story:**
- Carlos came into an industry (fitness/health clubs) where they only valued candidates from within that industry
- They didn't understand that there was an entire market of transferable-skill candidates they were missing
- Carlos's H.Y.P.E. program (Hire Your Perfect Employee) was the framework that reshaped how they identified and developed talent
- He didn't build from scratch — he transformed an existing function that was set in its ways
- The mindset shift was: stop looking for "gym industry people" and start building great employees from great people

### Also
- Make sure the case study data table at the bottom is not clipped/cut off. The columns (SCOPE, TEAM, VOLUME, STAFFING RATIO, etc.) should be fully visible and responsive.

---

## SECTION 3: FUN STUFF PAGE — Layout & Content Fixes

### Family Photo
- The family Christmas photo card is cropped — only showing the bottom half
- **Fix:** Make the card/container taller to accommodate the full photo. The image should be fully visible, not cropped. Use `object-fit: contain` or increase the card height significantly.

### Empty Video Cards
- There are video embed slots that are empty / showing "Training video coming soon" placeholders
- **Remove all empty/placeholder video cards.** If there's no content, don't show the card.
- The "Videos & content" / "More from Carlos" section at the bottom — if it only says "coming soon," remove the entire section until there's actual content.

### Missing Volleyball Video
- There is a volleyball video (behind the scenes / court footage) that should be on the Fun Stuff page but is currently missing
- If the video embed exists elsewhere in the code, move it here
- If it's a YouTube embed, make sure the embed URL is correct (not showing Error 153)

---

## SECTION 4: STUDIO / CONTENT PRODUCTION PAGE — Fixes

### Duplicate Photo
- There is a duplicate photo on the studio page — the same image appears twice
- **Find and remove the duplicate.** Keep only one instance.

### Remove Empty Cards
- "Behind the scenes" and "Studio content" cards — if they have no actual video content (empty embeds or placeholders), **remove them entirely**
- Only show cards that have real, working content

### Mobile Lynx App Preview
- The Lynx mobile app screenshot/preview currently lives on this page
- **Move it to the Lynx page** (see Section 1)
- Remove it from this page after moving

### YouTube Embed Fix
- The Winner's Circle highlight reel video shows "Error 153 / Video player configuration error"
- Check the YouTube embed URL — it may need to be updated
- If the video is no longer available on YouTube, remove the embed card entirely
- If available, use the standard YouTube embed format: `https://www.youtube.com/embed/VIDEO_ID`

---

## SECTION 5: GLOBAL — Clickable Image Lightbox

### The Problem
Photos across the site (training booklets, deployment charts, station execution cards, studio photos, ProShop training day, etc.) are small and hard to read. They should be clickable.

### The Fix
Implement a simple lightbox/modal system:
- When any image card is clicked, show the image in a full-screen or large centered overlay
- Dark semi-transparent backdrop
- Click backdrop or press Escape to close
- Optional: Add a subtle zoom-in transition
- Apply this to ALL image elements across ALL pages (TA case study photos, studio photos, fun stuff photos, Lynx screenshots, etc.)

---

## SECTION 6: FEATURED CONTENT / TRAINING SECTION — Remove

### The Problem
There is a "Featured Content — Training in action" section with placeholder slots saying "Training video coming soon"

### The Fix
- **Remove the entire "Training in action" section.** Carlos does not have training videos to show right now.
- If/when content is ready, it can be added back.

---

## EXECUTION ORDER

1. Start with Section 5 (Global lightbox) — this affects all pages
2. Section 1 (Lynx page rewrite) — biggest content change
3. Section 2 (TA page fix) — copy correction + table fix
4. Section 3 (Fun Stuff fixes) — layout + cleanup
5. Section 4 (Studio fixes) — cleanup + move mobile preview
6. Section 6 (Remove training section)

**Commit after each section** with a descriptive message.

---

## IMPORTANT CONTEXT

- The site uses a dark theme (#1a1a1a backgrounds) with gold (#FFD700) accent text for section labels
- Cream/beige (#F5F0E8) is used for some alternating sections
- Body text is white/light gray on dark backgrounds
- Card style: rounded corners, subtle borders or shadows, dark card backgrounds (#2d2d2d or #333)
- The voice should be Carlos's voice — confident, direct, human, not corporate. He builds things. He coaches kids. He makes things better.
- Carlos is the founder of Black Hornets Volleyball Club in Dallas. 15+ years coaching youth volleyball.
- The Lynx brand colors are navy (#0B1628), sky blue (#4BB9EC), gold (#FFD700) — these can be used specifically on the Lynx page section.
