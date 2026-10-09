# Savart Gen4 — Case Study Story Strategy

## Status

This strategy combines:

- Production screens from the supplied PDFs — confirmed implemented
- P4 product requirements and personas
- The live Whimsical wireframe architecture
- User-confirmed role and ownership
- User-confirmed cross-functional collaboration
- Evidence-safe storytelling principles

## Confirmed project facts

- **Role:** Product Designer
- **Ownership:** Complete end-to-end product-design ownership
- **Company context:** Fintech startup
- **Collaborators:** Founder, CEO, CTO, Project Manager, Program Manager, and developers
- **Research foundation:** Close to 100 customers, internal stakeholders, and prospective users were interviewed during problem discovery
- **Implementation:** Everything represented in the supplied section-wise PDFs was implemented
- **Proudest work:** Research-report experience
- **Reflection:** Pricing and navigation are the two areas to redesign today

## Timeline framing

Use **Multi-phase product redesign** rather than an invented number of weeks or calendar range.

### Phase 1 — Discovery and product definition

- Customer, prospect, and stakeholder interviews
- Existing-product problem definition
- Personas and pain-point synthesis
- Product requirements and integration constraints

### Phase 2 — Information architecture and wireframes

- Full product-surface mapping in Whimsical
- Core journeys, dependencies, conditional paths, and alternate states
- External-provider handoffs and consent logic
- Stakeholder review with business, technology, and delivery leadership

### Phase 3 — Design language and high-fidelity UI

- Shared visual language for a large financial ecosystem
- High-fidelity design across acquisition, onboarding, profiling, advice, research, portfolio, execution, subscriptions, support, and account management
- Cross-device research-report structures

### Phase 4 — Production detailing and implementation collaboration

- Empty, loading, error, rejected, failed, success, and recovery states
- Broker, Account Aggregator, KYC, payment, and support integrations
- Developer handoff, review, refinement, and implementation support

## The core story

Savart Gen4 was not a screen-level redesign. It was the redesign of an investment relationship.

The existing experience had to serve people at very different levels of financial confidence: a first-time investor who needed guidance, a cautious mutual-fund investor who wanted to diversify, and an experienced but emotionally affected investor looking for a more disciplined approach.

The product therefore had to connect a much larger cycle:

**Understand the investor → establish intent → create suitable advice → explain the recommendation → support execution → monitor the portfolio → provide deeper evidence → continue the relationship.**

The design challenge was to make this system feel understandable and trustworthy without removing the analytical depth expected from a serious financial product.

## Recommended case-study thesis

> I led the end-to-end product design of Savart Gen4, transforming a broad financial-services roadmap into a connected mobile investment experience. The work brought investor profiling, goals, personalized advice, broker execution, portfolio intelligence, and cross-asset research into one scalable system—while accounting for consent, regulation, external providers, data failures, and users with very different levels of financial confidence.

## Four design decisions to anchor the narrative

These decisions are supported by the product requirements, wireframes, and implemented designs. They do not require inventing meeting conversations or unverified test results.

### Decision 1 — Progressive profiling instead of one large onboarding burden

#### Tension

Savart needed substantial identity, financial, behavioral, asset, goal, and risk information to personalize advice. Asking for everything upfront would make the experience feel like a compliance form rather than the start of an investment relationship.

#### Direction chosen

Break profiling into understandable, resumable modules:

- Primary and secondary sections
- Explain-before-ask introductions
- One question or closely related group at a time
- Visible progress
- Relevant asset-specific follow-ups
- A nearer milestone: completing essential information to unlock the first advice

#### Why this is a strong design decision

It protects the quality of personalization without making the user complete the entire financial profile before seeing value.

#### Evidence

- EFG
- Post-login onboarding
- Investment Persona
- Goals
- KYC and asset-analysis flows

---

### Decision 2 — Inspectable advice instead of a black-box recommendation

#### Tension

A simple “Buy this” output would be fast, but would not build sufficient understanding or control for high-stakes financial decisions.

#### Direction chosen

Design advice as a transparent sequence:

1. Choose the intent and strategy
2. Set amount, asset class, country, schedule, filters, and linked goals
3. Review asset-class and security-level allocations
4. Preserve the original request in a summary
5. Show investment guidelines and deeper research
6. Let the user choose the broker account
7. Show item-level execution states
8. Return completed investments to the portfolio

#### Why this is a strong design decision

It makes the recommendation reviewable before action and preserves user control over how execution happens.

#### Evidence

- Advice Request
- Simulation
- Broker selection
- Bought/failed states
- Order confirmation
- Portfolio integration

---

### Decision 3 — Layered financial intelligence instead of flattening complexity

#### Tension

A simplified dashboard could be visually clean but insufficient for serious investors. Showing every metric at once would overwhelm less-experienced users and become unreadable on mobile.

#### Direction chosen

Create progressive analytical depth:

1. **Orientation:** health, score, action, current value, P/L
2. **Diagnosis:** allocation, exposure, factors, benchmarks, return methodology
3. **Evidence:** holdings, transactions, statements, peers, risks, and rationale
4. **Depth on demand:** long-form advanced research and portfolio review

#### Why this is a strong design decision

The product remains approachable at the entry level while allowing experienced users to inspect the evidence behind an assessment.

#### Evidence

- Portfolio overview and drill-down
- Portfolio health review
- Equity reports
- Mutual-fund reports
- IPO reports
- Free and advanced report states

---

### Decision 4 — Explicit trust boundaries instead of invisible integrations

#### Tension

Savart depends on KYC, Account Aggregators, brokers, payment providers, support tools, and marketplace partners. Hiding these handoffs could make the experience feel seamless, but would reduce transparency when consent, authentication, data freshness, or execution failed.

#### Direction chosen

Make system boundaries and recoverability visible:

- Explain why financial data is requested
- Show consent and expiry information
- Display linked providers and sync timestamps
- Warn users before leaving Savart
- Preserve verification and rejection reasons
- Show fetch success and failure
- Distinguish bought and failed investment items
- Provide refresh, retry, reconnect, re-upload, and support paths

#### Why this is a strong design decision

Trust comes from knowing what is happening, who is handling the data or transaction, and what the user can do when something fails.

#### Evidence

- Account Aggregator
- Demat linking
- Current and future KYC
- Marketplace partner handoff
- Portfolio sync states
- Error and support systems

## Validation story

Use this wording unless more specific test records are later available:

> The work was shaped through customer, prospect, and internal-stakeholder discovery, followed by iterative reviews with the Founder, CEO, CTO, Project Manager, Program Manager, and development team. Whimsical was used to align on journey structure, dependencies, and alternate states before the visual system and production UI were finalized. Cross-functional reviews helped reconcile business goals, external-provider constraints, technical feasibility, and the level of explanation required in a regulated financial experience.

Do not claim a specific usability-test participant count, task-success improvement, or conversion uplift without records.

## Outcomes strategy

### Outcomes that can be claimed now

1. **A production implementation, not a speculative concept**  
   All flows represented in the supplied production PDFs were implemented.

2. **A unified product architecture**  
   Fragmented financial capabilities were organized into connected journeys spanning discovery, personalization, advice, execution, monitoring, research, support, and retention.

3. **A scalable design language**  
   The same system was applied across simple authentication screens, long questionnaires, dense financial dashboards, cross-asset reports, marketing surfaces, and operational states.

4. **End-to-end state coverage**  
   The implementation included loading, empty, error, rejected, failed, confirmation, data-freshness, consent, and external-handoff states—not only ideal flows.

5. **Cross-functional implementation alignment**  
   Product structure and production detail were developed with business, technology, program, project, and engineering leadership.

### Metrics to frame as measurement design—not achieved impact

- Account and broker-linking adoption
- Consent acceptance
- Advice-to-execution conversion
- Portfolio-review-to-subscription conversion
- Holdings-fetch accuracy and errors
- Drop-off through long onboarding and profiling flows
- Support-request reduction
- Research-report engagement
- Stock-review purchase and revenue
- Referral, gifting, and Savart Coin activity
- Feedback participation and satisfaction

### Recommended impact-section title

**What shipped—and how we planned to measure it**

This is more credible than inventing percentage improvements.

## Hero project metadata

- **Product:** Savart Gen4 Mobile Application
- **Industry:** Wealthtech / Fintech
- **Role:** Product Designer
- **Ownership:** End-to-end product design
- **Timeline:** Multi-phase product redesign
- **Collaboration:** Founder, CEO, CTO, Project Manager, Program Manager, and developers
- **Scope:** Research synthesis, information architecture, wireframes, interaction design, design language, production UI, states, documentation, and implementation collaboration
- **Status:** Implemented

## Proudest-work deep dive — Research reports

Research reports should be the emotional and craft peak of the case study.

### Why this work matters

Investment research can easily become either an unreadable document or an oversimplified score. The report system had to help a user orient quickly while preserving enough evidence for a serious financial decision.

### Story structure

1. **The problem:** Dense research was difficult to consume on mobile.
2. **The system:** A reusable report architecture across equities, mutual funds, and IPOs.
3. **The first layer:** Identity, price/NAV, score, factor bars, and action.
4. **The evidence layer:** Charts, holdings, financial statements, peer comparison, risks, and rationale.
5. **The depth layer:** Free versus advanced reports and long-form APART analysis.
6. **Cross-device thinking:** Mobile narrative flow and desktop section navigation.
7. **Product connection:** Reports connect discovery, personalized recommendation, advice, and portfolio decisions.

### Strongest design-system argument

The work did not reuse the same report blindly. It preserved one mental model while adapting the evidence to each asset:

- **Equities:** financial fundamentals, valuation, shareholding, business quality
- **Mutual funds:** NAV, fund house, manager, holdings, allocation, expense ratio
- **IPOs:** minimum investment, offer quality, strengths, triggers, risks, subscribe/avoid action

## Reflection

### Pricing

Recommended reflection:

> If I revisited the project, I would redesign pricing around user intent and decision confidence rather than presenting the full service catalogue at once. The next version would make plan comparison clearer, separate primary subscriptions from add-ons, explain who each plan is for, and connect pricing more directly to the value users had already experienced through portfolio review, research, or advice.

Potential improvements:

- Clear “who this is for” framing
- Progressive plan comparison
- Primary recommendation rather than equal-weight options
- Stronger relationship between free value and paid continuation
- Better distinction between subscriptions, reports, advisory products, and add-ons
- Transparent inclusions, limits, renewal rules, and agreement/payment steps

### Navigation

Recommended reflection:

> The product grew into a large ecosystem, and the navigation inherited that breadth. I would revisit it as a jobs-based architecture—understand, invest, track, and manage—rather than allowing every feature to compete at the same hierarchy.

Potential improvements:

- Keep bottom navigation focused on recurring high-value jobs
- Use the menu for account, settings, legal, support, and less-frequent tools
- Consolidate overlapping labels such as Home/Explore/Feed
- Separate discovery content from portfolio and advice tasks
- Use progressive navigation based on prospect/subscriber state
- Make active subscriptions, family accounts, and connections contextual rather than globally prominent

## Apple-inspired case-study presentation

### Section rhythm

1. **Hero:** One-line transformation and four-screen montage
2. **The investment cycle:** Simple system diagram
3. **Who we designed for:** Three concise persona tensions
4. **The scale of the problem:** Wireframe architecture at a readable crop
5. **Four decisions:** One large headline and one evidence sequence per decision
6. **Main journey:** Profile → Goal → Advice → Broker → Portfolio
7. **Proudest work:** Full research-report deep dive
8. **Beyond the happy path:** Six production states
9. **What shipped:** System and implementation outcomes
10. **Reflection:** Pricing and navigation redesign opportunities

### Presentation rules

- One idea per section
- Product screens as proof, not decoration
- Use full-canvas wireframes only once to communicate scale
- Crop around the exact decision being discussed
- Alternate light editorial sections and dark product showcases
- Avoid a wall of small screens
- Do not show all implemented features equally
- Keep the main story to approximately 20–25% of the supplied UI
- Move the rest into a supporting ecosystem montage or appendix

## Final positioning

> Savart Gen4 demonstrates the ability to design beyond a feature. It shows how a product designer can translate research, business ambition, financial complexity, regulation, third-party systems, and a large roadmap into one implemented customer experience—while still giving users clarity, control, and evidence at each investment decision.
