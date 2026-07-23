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
    slug: 'aside',
    index: '04',
    title: 'Aside',
    category: 'SaaS · AI Contract Review',
    tone: 'moss',
    year: 2026,
    duration: '8 days',
    cover: '/cases/aside/cover.jpg',
    detailImages: ['/cases/aside/how-it-works.jpg', '/cases/aside/risk-categories.jpg'],
    process:
      'An AI agent drafted the section scaffolding and first-pass copy from a content outline. The designer built the document/margin-note grid, the clause-highlighting interactions, and hand-finished the accessibility work.',
    summary: 'A margin-notes layout that makes AI contract review feel like a second pair of eyes, not a disclaimer generator.',
    stat: { value: '7', label: 'sections, fully responsive & accessible' },
    problem:
      "Aside reads freelance contracts and flags the clauses that quietly cost solo freelancers money — a pitch that lives or dies on whether the flagged language actually reads as useful, not as a generic legal-disclaimer wall of text. The design problem was structural: a product about reading contracts closely couldn't just describe that idea in a normal feature-grid layout, or the site would undercut its own pitch before a visitor read a word of it.",
    solution:
      "The whole site borrows the grammar of an annotated document instead of a SaaS dashboard: a content column paired with a narrow margin column of tilted notes in the AI's own voice, a highlighter-style mark that sweeps across risky phrases on scroll or focus, and an interactive clause demo where hovering or tabbing through a real contract clause swaps in a matching note and risk tag. An AI agent drafted the section scaffolding and first-pass copy from a content outline; the designer built the document/margin-note grid, the highlight and clause-selection interactions, and hand-finished the accessibility work — every interactive mark is a real focusable button with aria-pressed state, not a hover-only effect.",
    result:
      "The result is a full seven-section site — hero, problem framing, an interactive how-it-works demo, four flagged clause categories, a philosophy section on where the tool stops, an audience split, and a contact form with file upload — built solo, with no template. Every interactive element (clause marks, reveal animations, file input) respects reduced-motion preferences and works from the keyboard alone. Like the others, it's a design case study rather than a live product — the site says so itself, in its own footer note.",
  },
  {
    slug: 'verbatim',
    index: '05',
    title: 'Verbatim',
    category: 'SaaS · AI Interview Screening',
    tone: 'clay',
    year: 2026,
    duration: '6 days',
    cover: '/cases/verbatim/cover.jpg',
    detailImages: ['/cases/verbatim/the-call.jpg', '/cases/verbatim/division-of-labor.jpg'],
    process:
      'An AI agent drafted the section scaffolding and first-pass copy from a content outline. The designer built the dual-track transcript layout, the scrubber and decision-logging interactions, and hand-finished the accessibility work.',
    summary: 'A dual-track transcript layout that makes an AI call-screener feel like a second reader, not a decision-maker.',
    stat: { value: '6', label: 'sections, fully responsive & accessible' },
    problem:
      "Verbatim reads a candidate's résumé against their screening-call recording and flags what lines up and what doesn't — a pitch that collapses instantly if it reads as the AI quietly ranking or rejecting people. Recruiting agencies pitch clients on judgment, not automation, so the site had to prove one structural fact before anything else: the tool never sees or touches the hire/no-hire decision, and the recruiter's own reasoning stays entirely separate from the AI's.",
    solution:
      "The whole layout is built as two literal side-by-side tracks — Verbatim's read on the left, the recruiter's own track on the right — carried from the hero all the way through the call transcript and the decision panel, so the separation is structural, not a caption explaining it. The transcript itself is a real annotated call: three cited notes dropped only where something concrete backs them up, reachable through a clickable scrubber, while the decision panel next to it is a plain button group the AI provably never sees or pre-fills. An AI agent drafted the section scaffolding and first-pass copy from a content outline; the designer built the dual-track grid, the scrubber and note interactions, and hand-finished the accessibility work — every mark and outcome button is a real focusable control with proper aria state, not a hover-only effect.",
    result:
      "The result is a full six-section site — hero, an interactive annotated call transcript with scrubber, a division-of-labor breakdown, an audience-fit section, and a contact form with file upload — built solo, with no template. Every interactive element (scrubber marks, decision buttons, file input) is keyboard-operable with a visible focus state, and all motion respects reduced-motion preferences. Like the others, it's a design case study rather than a live product — the site says so itself, in its own footer note.",
  },
  {
    slug: 'offshoot',
    index: '06',
    title: 'Offshoot',
    category: 'SaaS · AI Content Repurposing',
    tone: 'plum',
    year: 2026,
    duration: '6 days',
    cover: '/cases/offshoot/cover.jpg',
    detailImages: ['/cases/offshoot/the-split.jpg', '/cases/offshoot/output.jpg'],
    process:
      'An AI agent drafted the section scaffolding and first-pass copy from a content outline. The designer built the branching split-diagram and connector-line system, the phrase-tracking demo, and hand-finished the accessibility work.',
    summary: 'A branching split-diagram that makes AI content repurposing feel like precise triage, not a paraphrase machine.',
    stat: { value: '8', label: 'sections, fully responsive & accessible' },
    problem:
      "Offshoot turns one coaching call or podcast recording into a week's worth of shorts, captions, carousels, and quote cards — a pitch that collapses the moment it reads like a generic summarizer, since the whole value is that the output still sounds like the person who recorded it, not a smoothed-over paraphrase. The site had to prove precision and voice-preservation visually, not just claim them, or it would read exactly like the generic AI tools it's positioned against.",
    solution:
      "The mechanic is the layout: a branching diagram in the hero shows one recording forking into output formats before a visitor reads a word of copy, and \"The split\" section renders the actual four-stage pipeline — source, first cuts, platform formats, ready-to-post — as a real connected diagram with SVG lines linking parent to child, not a numbered list pretending to be one. The voice-preservation claim gets its own proof: a real quote from the source call, then the exact same phrase highlighted inline across three different repurposed formats, so the match is visible, not asserted. An AI agent drafted the section scaffolding and first-pass copy from a content outline; the designer built the branching diagram and connector-line system, the phrase-highlight demo, and hand-finished the accessibility work — the FAQ accordion uses real aria-expanded state, and every output tile keeps text contrast on top of the brand's acid-yellow accent.",
    result:
      'The result is a full eight-section site — hero, problem framing, an interactive four-stage split diagram, a phrase-preservation demo, a five-piece output gallery from one real recording, tiered pricing, FAQ, and a contact form with file upload — built solo, with no template. Every interactive element (the FAQ accordion, file input, in-page navigation) is keyboard-operable with a visible focus state, and all motion respects reduced-motion preferences. Like the others, it\'s a design case study rather than a live product — the site says so itself, in its own footer note.',
  },
  {
    slug: 'afterhours',
    index: '07',
    title: 'Afterhours',
    category: 'SaaS · AI Program Review',
    tone: 'ochre',
    year: 2026,
    duration: '6 days',
    cover: '/cases/afterhours/cover.jpg',
    detailImages: ['/cases/afterhours/the-stack.jpg', '/cases/afterhours/philosophy.jpg'],
    process:
      'An AI agent drafted the section scaffolding and first-pass copy from a content outline. The designer built the client-switcher demo, the stacked-card motif, and hand-finished the accessibility work.',
    summary: 'A stacked-card client switcher that makes AI program review feel like nightly triage, not an autopilot.',
    stat: { value: '8', label: 'sections, fully responsive & accessible' },
    problem:
      "Afterhours reads what a trainer's clients logged that day and rewrites the affected training plans overnight — a pitch that fails immediately if it reads as auto-pilot programming, since trainers sell their judgment, not a template that adjusts itself. The site had to prove a fixed, visible boundary between what the tool changes on its own and what always waits for the trainer, or the pitch would sound like exactly the generic auto-progression software it's positioned against.",
    solution:
      'The proof is a real switcher, not a claim: six real (composited) clients from one trainer\'s roster, each with a genuine log line and a one-sentence reason for that night\'s change, tabbed through with a stacked-card motif that visually implies the other twenty-eight sitting underneath. A dedicated section splits every possible adjustment into two fixed columns — what runs on its own versus what always waits for the trainer — so the boundary reads as structural, not a setting buried in an FAQ. An AI agent drafted the section scaffolding and first-pass copy from a content outline; the designer built the client-switcher interaction, the stacked-card depth effect, and hand-finished the accessibility work — the tab list uses real roving-tabindex keyboard behavior with arrow-key navigation, not just click handlers.',
    result:
      "The result is a full eight-section site — hero, problem framing, an interactive six-client switcher, an automatic-versus-manual philosophy split, a before/after nightly-routine comparison, tiered pricing, FAQ, and a contact form with file upload — built solo, with no template. Every interactive element (the client tabs, FAQ accordion, file input) is keyboard-operable with a visible focus state, and all motion respects reduced-motion preferences. Like the others, it's a design case study rather than a live product — the site says so itself, in its own footer note.",
  },
]

export const getCaseBySlug = (slug) => cases.find((c) => c.slug === slug)
