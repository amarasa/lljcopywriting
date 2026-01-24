# LLJ Copywriting Website - Project Plan

## Project Overview

**Client:** Larissa Ray, LLJ Copywriting, LLC
**Domain:** lljcopywriting.com
**Goal:** Build a 5-page brochure site that positions Larissa as THE copywriter for health and senior living businesses

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **CMS:** Sanity (for contact form entries and future content management)
- **Styling:** Tailwind CSS
- **Hosting:** Vercel (auto-deploy via git push)
- **Forms:** React Hook Form with Sanity storage

## Brand Direction

- **Logo:** Handwritten signature "Larissa Ray" (provided)
- **Colors:** Calming blues and greens with warm accents
- **Typography:** Clean, professional, health-focused
- **Imagery:** Care, family, wellness (stock photos initially)
- **Tone:** Warm, trustworthy, expert but approachable

## Site Structure

### 1. Home Page (`/`)
**Purpose:** Immediately position Larissa as the health/senior living copywriting specialist

**Sections:**
- Hero with clear value proposition
- Problem/solution statement
- Who she helps (ideal clients)
- Brief "why Larissa" section
- Featured services preview
- Call-to-action with contact form

**Key Message:** "I help health and senior living businesses explain complex medical topics in ways that build trust with worried families and aging adults."

### 2. About Page (`/about`)
**Purpose:** Build trust and credibility through her story

**Sections:**
- Her journey from marketing to health communication
- Senior living experience
- Family health passion (translating medical info for worried parents)
- Her unique approach
- Personal touch (the human behind the work)

### 3. Services Page (`/services`)
**Purpose:** Clearly explain what she offers and for whom

**Services to highlight:**
- Website Copy for Health & Senior Living
- Articles & Blog Content
- Patient Education Materials
- Senior Living Community Content
- Health & Wellness Business Copy

**Format:** Service cards with descriptions, ideal for, and deliverables

### 4. Work/Portfolio Page (`/work`)
**Purpose:** Showcase her expertise (placeholder initially)

**Sections:**
- Portfolio grid (placeholder cards)
- Case study format ready for future content
- Testimonials section (placeholder)

### 5. Contact Page (`/contact`)
**Purpose:** Make it easy to start a conversation

**Elements:**
- Contact form (name, email, company, project type, message)
- Email address
- Process overview (what to expect)
- Response time expectation

## Sanity Schema

### Contact Submissions
```
- name (string, required)
- email (string, required)
- company (string)
- projectType (string, dropdown)
- message (text, required)
- submittedAt (datetime)
- status (string: new, contacted, converted, closed)
```

### Future-Ready Schemas (optional, for later)
- Blog posts
- Portfolio items
- Testimonials

## Design Specifications

### Color Palette
- **Primary:** Deep teal/blue (#0D5C63 or similar)
- **Secondary:** Soft sage green (#87AE73 or similar)
- **Accent:** Warm coral or terracotta for CTAs
- **Neutrals:** Warm whites, soft grays
- **Text:** Dark charcoal (not pure black)

### Typography
- **Headings:** Serif or elegant sans-serif (approachable authority)
- **Body:** Clean sans-serif (readability)
- **Accent:** Script font to complement logo (sparingly)

### Components Needed
- Navigation (sticky, minimal)
- Hero section
- Section containers
- Service cards
- Portfolio cards (placeholder)
- Testimonial cards (placeholder)
- Contact form
- Footer
- CTA sections

## Development Phases

### Phase 1: Project Setup
- [ ] Initialize Next.js 15 project
- [ ] Set up Tailwind CSS
- [ ] Initialize Sanity studio
- [ ] Create Sanity schemas (contact submissions)
- [ ] Set up git repository
- [ ] Configure Vercel deployment

### Phase 2: Design System & Layout
- [ ] Define color palette in Tailwind config
- [ ] Set up typography
- [ ] Create base layout component
- [ ] Build navigation component
- [ ] Build footer component
- [ ] Create reusable section components

### Phase 3: Page Development
- [ ] Home page (hero, services preview, CTA)
- [ ] About page
- [ ] Services page
- [ ] Work/Portfolio page (with placeholders)
- [ ] Contact page with form

### Phase 4: Functionality
- [ ] Contact form submission to Sanity
- [ ] Form validation
- [ ] Success/error states
- [ ] Email notification (optional)

### Phase 5: Content & Polish
- [ ] Write all page copy
- [ ] Source appropriate stock imagery
- [ ] SEO meta tags
- [ ] Open Graph images
- [ ] Favicon from logo
- [ ] Mobile responsiveness check
- [ ] Performance optimization

### Phase 6: Launch Prep
- [ ] Final review
- [ ] DNS configuration guidance for client
- [ ] Handoff documentation

## Copy Direction

### Home Page Hero
**Headline options:**
- "Health content that builds trust with worried families"
- "Translating complex health topics into content people actually understand"
- "The copywriter health and senior living businesses trust"

**Subhead:** Help your audience understand what matters most about their health and their loved ones' care.

### Key Messaging Points
1. She bridges the gap between medical complexity and family understanding
2. Specializes in senior living and health businesses
3. Content that builds trust, not just traffic
4. Real experience with family health challenges
5. Understands both the business need and the human need

### Calls-to-Action
- Primary: "Let's Talk About Your Content"
- Secondary: "See How I Can Help"
- Tertiary: "Get in Touch"

## Timeline Estimate

This plan covers a complete brochure site with CMS integration. Work can begin once approved.

## Files to Create

```
lljcopywriting/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx (home)
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── work/page.tsx
│   │   └── contact/page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navigation.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── About.tsx
│   │   │   └── CTA.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Container.tsx
│   │   └── forms/
│   │       └── ContactForm.tsx
│   └── lib/
│       └── sanity/
│           ├── client.ts
│           └── queries.ts
├── sanity/
│   ├── schemas/
│   │   └── contactSubmission.ts
│   └── sanity.config.ts
├── public/
│   └── images/
│       └── logo.png
├── tailwind.config.ts
└── package.json
```

## Questions Resolved

| Question | Answer |
|----------|--------|
| Tech stack | Next.js + Sanity |
| Hosting | Vercel (git push auto-deploy) |
| Domain | lljcopywriting.com (existing) |
| Brand assets | Logo only (signature style) |
| Content | I create, she adjusts |
| Portfolio | Placeholder for now |
| Contact form | Store in Sanity |

---

**Ready to begin development upon approval.**
