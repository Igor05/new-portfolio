// Placeholder content. Replace with real case studies, copy, and images —
// problem/solution/result fields are sized for 3-4 sentences each.

export const cases = [
  {
    slug: 'chit',
    index: '01',
    title: 'Chit',
    category: 'SaaS · AI Review Replies',
    tone: 'moss',
    year: 2026,
    duration: '6 days',
    cover: '/cases/chit/cover.jpg',
    detailImages: ['/cases/chit/examples.jpg', '/cases/chit/pricing.jpg'],
    process:
      'An AI agent drafted the section scaffolding and first-pass copy from a content outline. The designer built the ticket visual system, tuned every interaction, and hand-finished the accessibility work.',
    summary: 'A landing page that makes an AI-writes-your-replies pitch feel trustworthy, not gimmicky.',
    stat: { value: '9', label: 'sections, fully responsive & accessible' },
    problem:
      'Chit drafts review replies for restaurants and hotels — an easy pitch in theory, a hard one in practice, since most owners\' first reaction to "AI writes your replies" is distrust. The site needed to prove the output was actually good, not just claim it, and explain a fairly novel workflow — connect, calibrate to your voice, approve or auto-send — without collapsing into a wall of feature bullets.',
    solution:
      'The design leans on real, specific examples instead of abstractions: review-and-reply pairs shown as printed order tickets, complete with draft time and a plain-language "voice" tag, so visitors can judge the writing quality themselves in the first ten seconds. The same ticket motif carries through the three-step explainer, pricing, and testimonials, giving the whole site one consistent physical metaphor instead of a generic SaaS-template feel. An AI agent drafted the section scaffolding and first-pass copy from a content outline; the designer built the ticket system, tuned every voice and interaction detail, and hand-finished the accessibility work — visible focus states, reduced-motion support, and labeled form fields throughout.',
    result:
      'The result is a full nine-section marketing site — hero, problem framing, a three-step explainer, live example replies, a feature grid, tiered pricing, testimonials, FAQ, and a contact form — that reads as a considered product rather than a generic template, which was the real test for a pitch this easy to distrust. Every interactive element has a visible focus state, motion respects reduced-motion preferences, and every form field is properly labeled. Built and shipped solo, with no page builder or template involved.',
  },
  {
    slug: 'docket',
    index: '02',
    title: 'Docket',
    category: 'SaaS · AI Change Documentation',
    tone: 'rust',
    year: 2026,
    duration: '5 days',
    cover: '/cases/docket/cover.jpg',
    detailImages: ['/cases/docket/docket-log.jpg', '/cases/docket/pricing.jpg'],
    process:
      "An AI agent drafted the section scaffolding and first-pass copy from a content outline, reusing the previous case's hero/problem/feature-grid/CTA template with a new palette. A design review flagged that reuse directly; the designer rebuilt the composition around the product's own change-tracking mechanic, built the diff-gutter and publish-rule toggle interactions, then moved the palette to a dark terminal theme with real git-diff colors once the structure was settled, and hand-finished the accessibility work.",
    summary: 'A site where the layout itself argues the pitch — the whole page reads as one continuous diff.',
    stat: { value: '8', label: 'sections, fully responsive & accessible' },
    problem:
      "Docket drafts changelog entries and Help Center redlines straight from merged code — a pitch aimed at small product teams with no dedicated technical writer, who are exactly the audience most nervous about anything publishing to customers on its own. The first pass proved the harder problem: it dressed the previous case's hero/problem-grid/feature-grid/CTA template in a new ledger palette, which read as decoration, not evidence. A site about precise change-tracking couldn't be built on the same generic template as everything else.",
    solution:
      "The rebuild makes the product's own mechanic the layout system, not just the copy. Hunk headers (@@ -a,b +c,d @@) replace generic section eyebrows; the problem section is a block of struck-through removed lines instead of a card grid; the four-step explainer is added lines instead of a feature grid; the release table and publish-rule toggles use real +, ~, and ○ diff gutter markers instead of dots and badges; navigation is a row of @hunk jump links styled like a patch header. That structural pass came first, on the original ledger palette, to prove the fix wasn't decorative. A second pass then moved the whole site to a dark terminal theme — near-black background, muted git-diff green for added and filed states, muted red held back for removed and flagged ones — while the type system (a serif headline against monospace detail) stayed exactly as built, since the contrast held on the darker surface. An AI agent drafted the original scaffolding and copy; the designer caught the templated composition, rebuilt it around the diff language, built the toggle and gutter interactions, moved the palette, and hand-finished the accessibility work — focus rings, aria-expanded FAQ panels, a properly labeled contact form.",
    result:
      'The result is a full eight-section site — hero, problem framing, a four-step explainer, a real filed-release table of 7 changes, an interactive trust panel, tiered pricing, FAQ, and a contact form — built solo, with no template. Every interactive element (toggles, accordion, nav, rotating docket panel) is keyboard-operable with a visible focus state, and all motion respects reduced-motion preferences. This one is explicitly a design case study rather than a live product, so the site says so in its own footer.',
  },
  {
    slug: 'nightdesk',
    index: '03',
    title: 'Nightdesk',
    category: 'SaaS · AI Ticket Triage',
    tone: 'ochre',
    year: 2026,
    duration: '7 days',
    cover: '/cases/nightdesk/cover.jpg',
    detailImages: ['/cases/nightdesk/night-log.jpg', '/cases/nightdesk/pricing.jpg'],
    process:
      'An AI agent drafted the section scaffolding and first-pass copy from a content outline. The designer built the ticket-log and auto-send toggle interactions, tuned the type system, and hand-finished the accessibility work.',
    summary: 'A dark, monospace-driven site that makes overnight AI ticket triage feel controllable, not automatic.',
    stat: { value: '8', label: 'sections, fully responsive & accessible' },
    problem:
      "Nightdesk triages Shopify support tickets overnight and drafts replies before the store opens — a pitch that only works if the owner trusts it not to go rogue. The real design problem wasn't explaining what the AI does; it was proving, visually and immediately, that nothing gets sent without permission. A dense, data-heavy product like this also risked reading as a generic dark-mode SaaS dashboard instead of something built for one specific, sleep-deprived audience.",
    solution:
      "The design commits fully to a \"night shift\" identity: a dark ink-and-amber palette, monospace timestamps and ticket IDs, and a live overnight ticket feed right in the hero so the product is showing, not telling, from the first screen. The trust question gets its own interactive section — real auto-send toggles the visitor can flip, with escalations locked to \"never automatic\" as a fixed row. An AI agent drafted the section scaffolding and first-pass copy from a content outline; the designer built the ticket-log and toggle interactions, tuned the type system, and hand-finished the accessibility work — focus rings, aria-expanded FAQ panels, a properly labeled contact form.",
    result:
      'The result is a full eight-section site — hero, problem framing, a four-step explainer, a real composite night-log of 12 tickets, an interactive trust panel, tiered pricing, FAQ, and a contact form — built solo, with no template. Every interactive element (toggles, accordion, nav) is keyboard-operable with a visible focus state, and all motion — the blinking status dot, the ticket carousel, the FAQ expand — respects reduced-motion preferences. This one is explicitly a design case study rather than a live product, so the site says so in its own footer.',
  },
  {
    slug: 'field-and-co',
    index: '04',
    title: 'Field & Co',
    category: 'E-commerce · Apparel',
    tone: 'plum',
    year: 2024,
    duration: '12 days',
    process: "Built a first draft of the catalog straight from the brand's price list, then refined every spacing value and cart state by hand.",
    summary: 'A catalog and checkout that brought 40% of sales back from marketplaces.',
    stat: { value: '+40%', label: 'direct sales' },
    problem:
      "Field & Co, a local apparel brand, sold through marketplaces and lost up to 25% of every order to commission fees. The brand already had its own online store, but it looked like a generic template and didn't convey the quality of the clothes.",
    solution:
      "We designed the catalog and product page around large photography and a clear size grid. The first-draft catalog layout and product cards came together quickly from the brand's price list, then every spacing value, crop, and cart-state transition was checked by hand. Checkout went from five steps to two.",
    result:
      'Direct site sales grew 40% in the first quarter, as some buyers deliberately moved from marketplaces to the brand\'s own site. Checkout abandonment nearly halved after cutting the steps. The brand recouped the cost of the site within two months of marketplace-commission savings.',
  },
  {
    slug: 'rently',
    index: '05',
    title: 'Rently',
    category: 'Real Estate · Rentals',
    tone: 'moss',
    year: 2025,
    duration: '10 days',
    process: 'Audited the old page structure, proposed a new sitemap, then designed the actual screens and interactions by hand.',
    summary: 'A mobile home search that loads three times faster.',
    stat: { value: '1.6s', label: 'mobile load time' },
    problem:
      'Rently is a long-term apartment rental service that cuts out agents. Its listings database already worked well, but the old site loaded slowly and worked poorly on phones, which sent 70% of its traffic. Users abandoned search before ever reaching the filters.',
    solution:
      'We rebuilt the search interface mobile-first: filters, map, and listings all work one-handed, with no horizontal scrolling. A quick audit of the old page structure led to a new sitemap, then to designing the actual screens and interactions. Listing details load independently from the map, so the list stays fast even on a weak connection.',
    result:
      'Homepage load time on mobile dropped from 4.8 to 1.6 seconds. The share of users reaching a listing detail page rose 35%. The mobile bounce rate fell by almost a third.',
  },
  {
    slug: 'doclyne',
    index: '06',
    title: 'Doclyne',
    category: 'Healthtech · Doctor Booking',
    tone: 'clay',
    year: 2024,
    duration: '8 days',
    process: 'Structured the data for 40+ doctors into one format and drafted the profiles, then worked out the trust-building states by hand.',
    summary: 'Booking a doctor in three steps instead of a phone call to reception.',
    stat: { value: '+58%', label: 'completed bookings' },
    problem:
      'Doclyne is an online booking service for private doctors. A healthcare product needs to earn trust from the first screen, but the previous site looked like a generic SaaS landing page and lost patients right at doctor selection: a feed of 40+ cards with no filters overwhelmed people instead of helping them.',
    solution:
      'We designed a step-by-step doctor selection flow — specialty → area → time — instead of one long card feed. Structuring the data for 40+ doctors into a single format and drafting the initial profiles happened fast, which left room to work out the trust-building states — photos, credentials, reviews — written in plain language instead of medical boilerplate. Booking takes three steps and confirms right in the interface, no call to reception required.',
    result:
      'Completed bookings through the site rose 58% within two months of launch. Average time to choose a doctor dropped from 6 minutes to 90 seconds. The clinic was able to let go of one of its two phone-booking receptionists.',
  },
  {
    slug: 'birch-fund',
    index: '07',
    title: 'Birch Fund',
    category: 'Nonprofit · Fundraising',
    tone: 'ochre',
    year: 2023,
    duration: '5 days',
    process: 'Consolidated three years of scattered PDF reports into one format, then built the reporting page and donation form by hand.',
    summary: 'A donation form that lifted giving conversion by 45%.',
    stat: { value: '+45%', label: 'donation conversion' },
    problem:
      "Birch Fund, a nonprofit, took donations through a third-party service with its own branded page — donors weren't sure who they were actually paying, and some dropped off before completing a donation. The fund needed its own site with transparent reporting.",
    solution:
      'We built a site with a donation form on the homepage and a reports section where the fund publishes where the money went each quarter. Consolidating three years of scattered PDF reports into one readable format happened fast, which left time to design the reporting page and donation form itself. Amount and frequency are chosen in two clicks, with no redirect to a third-party site.',
    result:
      "Completed-donation conversion rose 45% compared to the third-party service. Recurring monthly donations became a distinct, meaningful stream for the first time — that option hadn't existed before. The fund got a tool it can update itself, without needing a developer.",
  },
]

export const getCaseBySlug = (slug) => cases.find((c) => c.slug === slug)
