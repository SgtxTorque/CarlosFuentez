# CC-PORTFOLIO-V3 — Comprehensive Update

## What This Is
This is the V3 update spec. Read this AFTER the original CC-PORTFOLIO-SITE.md, V2, V2-ADDENDUM, and V2-ASSETS. This file covers all remaining changes. Where V3 specifies something, it overrides everything before it.

---

## GLOBAL CHANGES

### Contact Info — Update Everywhere
Anywhere "Let's Talk" or contact info appears:
- **Email:** fuentez.carlos@gmail.com
- **Phone:** 504-784-8458
- **LinkedIn:** linkedin.com/in/carlosfuentez

The Contact section on index.html should show all three (email, phone, LinkedIn) with buttons/links for each.

### Remove Smoothie King Section
Remove any Smoothie King speculative work section from the site. Do not link or reference `smoothie-king-maximize-blend.html`. Remove it entirely.

### thelynxapp.com — More Prominent
The Lynx website URL needs to be more visible than just a metadata line. Add it:
1. On the Lynx work card on the home page (small text under the description)
2. On the Lynx case study page as a prominent clickable button/link in the hero or near the top
3. In the metadata bar of lynx.html

Format as a clean clickable link: `thelynxapp.com`

---

## LYNX PAGE (lynx.html) — SCREENSHOTS + FEATURES

### Desktop Screenshots
Carlos added these screenshot files to the `/images/` folder. Use them on the Lynx page:

- `Lynx Admin.png` — Admin dashboard screenshot (web)
- `Lynx Calendar.png` — Calendar/schedule view (web)
- `Lynx Coach.png` — Coach dashboard screenshot (web)
- `Lynx Parent.png` — Parent dashboard screenshot (web)
- `lynx mobile signin.jfif` — Mobile app sign-in screen

**How to present:**
Create a "Platform Preview" section on lynx.html with these screenshots displayed in a grid or carousel. Each screenshot should have a label (Admin Dashboard, Calendar, Coach View, Parent View, Mobile Sign-In). Use a dark background section so the screenshots pop. Make them clickable to enlarge (using the global enlarge behavior from V2-ASSETS).

Suggested layout: 2x2 grid for the four web screenshots, with the mobile sign-in shown separately as a phone mockup frame.

**Feature callouts:** Below or alongside the screenshots, highlight specific features visible in each view:
- Admin Dashboard: Widget grid, drag-and-drop layout customization, role-based views
- Calendar: Season scheduling, event management, practice/game organization
- Coach View: Team management, player roster, game day tools
- Parent View: Child's schedule, payment tracking, communication hub

### Videos
There are video files in the repo. CC should check `/images/videos/` and the main `/images/` folder for any .mp4 files. Embed them using HTML5 `<video>` tags with controls, muted autoplay on hover (optional), and a poster frame if possible. Place them on the appropriate pages:
- Lynx demo videos → lynx.html
- Amtel/studio videos → studio.html
- Any other videos → use judgment based on content

For any video that doesn't have a thumbnail preview, set a dark placeholder background with a play button overlay.

---

## RECRUITING PAGE (recruiting.html) — BEEF IT UP

The recruiting page needs to feel as substantial as the L&D and studio pages. This is a core part of Carlos's career and should not feel like an afterthought.

### Reframe the Hero
- Headline: "I don't just fill roles. I build the machine that fills them."
- Subtext: "Twice I built recruiting functions from nothing. Not inherited, not expanded. From zero. And both times, the results changed how the business operated."

### Amtel / T-Mobile Chapter (2016-2022)
Make this a full story, not just bullet points:

"When I joined Amtel in 2016, there was no recruiting function. I was it. One person responsible for staffing an organization that was about to scale from 42 locations to 325+. I built everything from scratch: the process, the team, the tools, the employer brand."

**Key metrics (display as a visual stats row):**
- 42 → 325+ locations scaled
- 1 → 5 recruiters (team built)
- 60-70 hires per month at peak
- 98% staffing rate maintained
- 41% increase in 6-month retention
- 61% reduction in manager turnover
- 75% reduction in agency spend

**Employer Brand section:**
"I built the employer brand from nothing. Multimedia recruitment campaigns, branded video content, social media presence, EVP development, and a careers site. This wasn't HR busywork. This was the reason people wanted to work for us. Inbound applications grew because we gave people a reason to care."

**Photo:** Use the Amtel-Nation brand collateral image (`amtel-brand-collateral.jpg`) and the team photos here.

### Fitness Connection / Roark Capital Chapter (2022-2025)
"Different company, same challenge. Fitness Connection had 40+ gym locations and needed someone to lead talent acquisition. I brought a team of 3, personally owned corporate and hard-to-fill roles, and got to work."

**Key metrics:**
- 37% pipeline improvement
- Hourly turnover: 115% → 68%
- Manager retention: +68%
- New hire retention: +37% through onboarding redesign
- Revenue increased 5-15% QoQ after operational changes
- Company hit yearly revenue target for first time in 5 years (125% payout)

**Connection to the bigger story:**
"But recruiting was never just recruiting for me. Better hiring fed directly into the operational redesign. When you hire the right people into the right roles, train them properly, and give them clear expectations, the business performs. That's why I was always involved in more than just filling seats."

### Contract Work Section
Add a section for the contract/agency recruiting work:

**Contract Talent Acquisition (2013-2016)**
Fortune 500 and high-growth organizations. Clients included Facebook, Samsung, Zoetis, CheckPoint, Virgin, Uber, NCR, and Korn Ferry RPO. Full-cycle recruiting across technology, pharma, healthcare, and corporate functions. Managed up to 180 requisitions simultaneously. Adapted training toolkits and process documentation to each client's structure.

Display the client names as a logo-less brand row (just the names in clean typography, or small cards).

---

## RESUME PAGE — NEW PAGE: `resume.html`

### Create a dedicated resume page
This should NOT look like a traditional resume. It should match the portfolio site's design language (dark/light sections, the amber accent, Inter Variable font, scroll animations) but present Carlos's full career history.

**Navigation:** Add "Resume" to the nav bar on all pages, between "How I Think" and "Let's Talk."

### Structure:

**Hero:**
- Dark background
- Headline: "The Full Picture"
- Subtext: "My career in context. Operations to TA to communications to L&D. Every role built on the last."

**Career Timeline** (visual, not a text dump):
Present as a vertical timeline with alternating left/right cards, or as a series of role cards. Each role gets:
- Company name + title
- Date range
- Location
- 3-4 key accomplishments (not the full resume, just highlights)
- A "See the full story →" link to the relevant case study page where applicable

**Roles to include (in reverse chronological order):**

1. **Black Hornets Volleyball Club** — Director & Head Coach (2020 - Present) | Dallas, TX
   - Founded competitive youth volleyball program
   - Player development, tryouts, team selection, program operations
   - 5+ years coaching, earned director title through results

2. **Roark Capital Group (Fitness Connection)** — Sr. Manager, Talent Acquisition (Oct 2022 - Oct 2025) | Dallas, TX
   - Led TA for 40+ locations, team of 3
   - Designed training modules and visual learning content for operational roles
   - Led Predictive Index implementation company-wide
   - Created H.Y.P.E., LeaderReady+, ReCharge programs
   - Managed Paycom Learning LMS
   - Link to: learning.html, recruiting.html

3. **Amtel LLC / T-Mobile** — Multiple roles spanning 2016-2022 | Grapevine, TX
   
   **Director, Communications & Talent Acquisition** (Apr 2019 - Oct 2022)
   - Built in-house media studio from scratch
   - Produced content for 3,000+ employees across 325+ locations
   - Selected for T-Mobile confidential Dealer Operations Calls
   - Managed Winner's Circle recognition program
   - 60% increase in engagement scores
   - Link to: studio.html
   
   **Sr. Manager, People Programs** (Jun 2018 - Apr 2019)
   - Designed and deployed blended learning content
   - Administered Cornerstone OnDemand LMS
   - Led Multi-Unit Leadership training facilitation
   
   **Sr. Manager, Talent Acquisition** (Mar 2016 - Jun 2018)
   - Built recruiting function from 1 to 5 recruiters
   - Scaled from 42 to 325+ locations
   - 98% staffing, 41% retention improvement
   - Link to: recruiting.html

4. **Contract, Talent Acquisition** (2013 - 2016) | Fortune 500 & High-Growth
   - Clients: Facebook, Samsung, Zoetis, CheckPoint, Virgin, Uber, NCR, Korn Ferry RPO
   - Full-cycle recruiting across tech, pharma, healthcare, corporate
   - Up to 180 requisitions simultaneously

5. **Restaurant & Food Service Operations** (2001 - 2012) | East Coast, Jacksonville FL to Washington DC
   - Multi-unit operations leader and business owner
   - Supported Chipotle's Louisiana market entry (5 locations in 8 months)
   - Hiring, onboarding, team training embedded in every role
   - "This is where it all started. Operations is the foundation for everything I do."

**Skills & Tools Section** (at the bottom of the resume page):
Display as a grid of categorized pills/tags:

- **LMS Platforms:** Cornerstone OnDemand, Paycom Learning
- **Assessment Tools:** Predictive Index, CliftonStrengths
- **Design & Authoring:** Vyond, Adobe InDesign, Canva, Photoshop, PowerPoint
- **Video Production:** Scripting, Directing, Narration, Editing, Studio Production
- **Methodology:** ADDIE, SAM, Adult Learning Theory, Blended Learning, Microlearning
- **Analytics:** PowerBI, SurveyMonkey, Smartsheet
- **Collaboration:** Office 365, Google Workspace, Slack
- **Tech (Lynx):** React, React Native, Supabase, Stripe, Vercel

**Training Programs Designed & Deployed** (feature section):
H.Y.P.E., LeaderReady+, ReCharge, ATM 101, Winner's Circle, Predictive Index Implementation. Present as small branded cards with brief descriptions.

---

## NEW IMAGES & VIDEOS TO INTEGRATE

### Check ALL files in `/images/` that haven't been used yet
CC should scan the entire `/images/` folder and identify any files not currently referenced in any HTML page. For each unused file, determine the best placement based on the filename and content:

**Specific files Carlos mentioned:**

- `familyxmas.jpg` — Family photo. Place on fun.html in a personal/family section.
- `lynx mobile signin.jfif` — Lynx mobile sign-in. Place on lynx.html.
- `Lynx Admin.png`, `Lynx Calendar.png`, `Lynx Coach.png`, `Lynx Parent.png` — Lynx web screenshots. Place on lynx.html in a Platform Preview section.
- Galaxy S20 readiness photos (look for any Samsung/Galaxy related images) — These should accompany the Express Setup / transfer documents on studio.html. Add context: "These came from a confidential T-Mobile dealer execution call. Corporate shared embargoed product launch information, and I had to take that raw content and create field-ready job aids, training materials, and communications that our teams could actually use."
- `20250210_212102.mp4` and any other .mp4 files — Embed as video players on appropriate pages.
- Any other photos not yet placed — CC should use best judgment. Team photos go on the relevant company page. Mockups and design work go on the L&D or studio page. Personal photos go on fun.html.

### Photos that look like mockups or design work
If there are images that appear to be mockup screenshots, UI designs, presentation slides, or branded materials that Carlos created, group them into a "Design Portfolio" mini-gallery on the studio page or learning page as appropriate.

---

## STUDIO PAGE (studio.html) — CONFIDENTIAL DEALER CALLS CONTEXT

### Add context about the T-Mobile Dealer Readiness/Execution Calls

In the section about the studio and communications work, add this story:

"I was selected to participate in T-Mobile's confidential Dealer Operations Execution Calls and Dealer Readiness Calls. These were restricted-access executive briefings where corporate shared proprietary updates, product launches, strategic initiatives, and embargoed content with a small group of trusted dealer leaders."

"After each briefing, I would debrief our senior leadership, then take the raw corporate materials and remix them into something our field teams could actually use. The Galaxy S20 launch materials, for example, came from one of these calls. I turned corporate slide decks into grab-and-go job aids, visual training guides, execution checklists, and timed communication cascades that our 325+ locations could execute on launch day."

"The Express Setup System and the Discovery Conversation job aids are examples of this process. Corporate gave us the what. I built the how."

Place the Galaxy/Samsung related photos near this section to illustrate the point.

---

## NAV BAR UPDATE

Update the navigation on ALL pages to include:
```
About | Work | How I Think | Resume | Let's Talk
```

The Resume link points to `resume.html`.

---

## CHECKLIST FOR CC

- [ ] Contact section has email, phone, and LinkedIn
- [ ] Smoothie King section completely removed from all pages
- [ ] thelynxapp.com prominently displayed on Lynx card and Lynx page
- [ ] Lynx screenshots (4 web + 1 mobile) displayed in Platform Preview section
- [ ] All videos embedded with HTML5 video tags
- [ ] Recruiting page fully fleshed out with both chapters + contract work
- [ ] Resume page created with full career timeline, all roles, correct dates
- [ ] Amtel roles listed correctly: Sr. Manager TA (Mar 2016), Sr. Manager People Programs (Jun 2018), Director Comms & TA (Apr 2019)
- [ ] Contract work (2013-2016) with client names included
- [ ] Restaurant operations (2001-2012) included with business owner mention
- [ ] Resume page added to nav on all pages
- [ ] All unused images in /images/ checked and placed appropriately
- [ ] Galaxy/Samsung photos placed with dealer execution call context
- [ ] Family photo on fun.html
- [ ] Confidential dealer calls story added to studio.html
- [ ] Em dashes still minimized across all new copy
- [ ] Global image enlarge behavior still working on all pages
