# Savart Gen4 Mobile Application — Case Study Blueprint

> Evidence-safe first draft based only on the PDFs in this folder. It deliberately does not invent research, metrics, ownership, implementation status, or business outcomes.

## Recommended positioning

### Working title
**Designing Savart Gen4: A connected investment experience for advice, research, execution, and portfolio intelligence**

### Shorter portfolio title
**Savart Gen4 — Making investment intelligence understandable and actionable**

### One-line summary
A system-level redesign that brings investor profiling, personalized advice, goal planning, research, broker execution, and portfolio monitoring into one coherent mobile experience.

### What this case study should prove

1. **Systems thinking** — the work connects many financial journeys rather than presenting isolated screens.
2. **Complex-product simplification** — dense financial concepts are translated into staged, inspectable interfaces.
3. **Trust and transparency** — suitability questions, consent, data freshness, execution states, disclosures, and recovery are visible throughout the product.
4. **Design-system judgment** — one dark visual language scales across authentication, forms, dashboards, reports, support, marketing, and edge states.
5. **Product depth** — the experience covers discovery, advice, execution, monitoring, research, goals, support, account connections, and subscriptions.

---

# Recommended story

## 1. Opening: investing is not one screen

Savart Gen4 should not be introduced as a collection of redesigned mobile screens. The stronger story is that investing is a connected decision cycle:

**Understand the investor → identify the goal → request suitable advice → inspect the recommendation → choose where to execute → track the portfolio → learn from research → act again.**

The design challenge was to make this broad ecosystem feel coherent without hiding the depth required by a serious financial product.

### Opening visual
Use a restrained montage from:

- `Investment Persona Reports.pdf`
- `Advice request.pdf`
- `Portfolio.pdf`
- `Research Report Flow.pdf`

Show no more than four screens. The purpose is to establish range, not explain every feature.

---

## 2. Context

Savart Gen4 contains multiple connected product areas:

- Authentication and onboarding
- Investor profiling and EFG analysis
- Investment personas
- Goals
- Advice requests
- Broker selection and execution
- Portfolio monitoring and review
- Stock, mutual-fund, and IPO research
- Account Aggregator connections
- Investment marketplace
- Plans, subscriptions, referrals, family accounts, and support

This breadth creates a system problem: each journey must work independently while still feeling like part of one investment relationship.

### Context visual
Use an ecosystem map rather than a wall of screens:

1. **Know me** — Post-login interests, EFG, persona, goals
2. **Guide me** — Advice Request, research, simulation
3. **Help me act** — Broker selection, order placement, marketplace
4. **Help me understand** — Portfolio, portfolio review, reports
5. **Support the relationship** — Connections, support, subscriptions, family, referrals

---

## 3. The design challenge

### Problem 1 — Personalization required significant user effort

The product needs financial, behavioral, identity, asset, goal, and preference information before it can offer meaningful guidance. A single long questionnaire would create a large upfront burden.

**Evidence in the files**

- EFG separates primary and secondary sections.
- Users can complete information in parts.
- Primary sections unlock a nearer milestone: the first advice.
- Asset Analysis asks users to complete only relevant categories.
- Introductory screens explain why information is needed before asking for it.

**Design response**

Create progressive, resumable profiling with visible milestones, contextual explanations, and relevance-based follow-up questions.

**Best source**

- `EFG.pdf`
- `Post login.pdf`
- `Investment Persona Reports.pdf`
- `Goal sereens.pdf`

---

### Problem 2 — Financial recommendations could not feel like a black box

Users needed to understand what they were requesting, what Savart recommended, how the recommendation was allocated, where it would be executed, and what happened after submission.

**Evidence in the files**

- Advice types use plain-language descriptions.
- Advice is grouped by asset class and broken into security-level allocations.
- Request summaries preserve amount, type, filters, goals, frequency, and dates.
- Users explicitly select a broker account before execution.
- Item-level states distinguish `Buy`, `Bought`, and `Failed`.
- Confirmation includes broker, account, order ID, and time.

**Design response**

Turn advice into an inspectable sequence rather than a single recommendation screen:

**Configure → review → understand allocations → select execution route → track item-level status → return to portfolio.**

**Best source**

- `Advice request.pdf`
- `simulation.pdf`
- `Portfolio.pdf`

---

### Problem 3 — Dense investment intelligence had to work on mobile

Portfolio health, return methodologies, allocations, holdings, transactions, benchmark comparisons, fund composition, stock fundamentals, IPO quality, and risk analysis can overwhelm a phone-sized interface.

**Evidence in the files**

- Portfolio moves from totals to allocation, security detail, and transactions.
- Separate views cover Asset Class, Category, Security, and Tranches.
- Absolute Return, CAGR, and XIRR are exposed rather than collapsed into one percentage.
- Research reports use repeated score, factor, chart, table, and narrative modules.
- Long reports have parallel mobile and desktop structures.
- Free and advanced states reveal depth progressively.

**Design response**

Build layered decision support:

1. **Orientation** — health, score, action, key value
2. **Diagnosis** — exposure, factors, performance, risks
3. **Evidence** — holdings, transactions, statements, comparisons
4. **Depth on demand** — advanced reports and long-form analysis

**Best source**

- `Portfolio.pdf`
- `Research Report Flow.pdf`
- `Free Research Report Designs.pdf`
- `Advanced Research Report Designs.pdf`
- `Free Mutual Fund Report Designs.pdf`
- `IPO Reports.pdf`

---

### Problem 4 — Trust had to survive handoffs, failures, and incomplete data

Financial experiences include external providers, document verification, data synchronization, long processing times, rejected information, and transaction failures. Trust depends on these states being designed—not only the ideal path.

**Evidence in the files**

- KYC rejection includes a reason and re-upload instructions.
- Signature upload includes file constraints and a preview state.
- Portfolio data shows last-updated, fetch-success, and fetch-failed states.
- Marketplace warns users before they leave Savart for a partner platform.
- Account Aggregator screens explain providers, consent, and disconnection.
- Advice execution distinguishes bought and failed items.
- Dedicated loading, error, empty, confirmation, and support states exist.

**Design response**

Use explicit boundaries and recoverable states:

- Explain before requesting sensitive data.
- Show when data is stale or unavailable.
- Name external handoffs.
- Preserve reasons for rejection or failure.
- Give the user an immediate recovery action where possible.

**Best source**

- `Current Appraoach (Savart).pdf`
- `Digio Appraoach (Future).pdf`
- `Marketplace Phase 1.pdf`
- `hamburger & menu.pdf`
- `ERROR POP-UPS.pdf`
- `Error Screens.pdf`
- `Empty Screens.pdf`
- `Support.pdf`

---

## 4. The system behind the product

The design language provides a common foundation for very different tasks:

- Near-black product canvas
- Cyan primary action color
- Semantic success, warning, and error colors
- Mulish for interface text
- Familjen Grotesk for numeric emphasis
- Lucide icons with a consistent stroke
- 4px spacing grid
- Rounded surfaces with restrained shadows
- Minimal but information-rich composition

### Strong portfolio framing
Do not present this section as a generic style guide. Explain how the system handles the tension between:

- premium visual restraint and dense financial information;
- consistency and asset-specific report needs;
- strong status color and accessibility;
- reusable modules and different user decisions.

### Source

- `Gen4 App Design Documentation.pdf`

---

## 5. Primary case-study walkthrough

Use one connected journey as the main narrative. Recommended sequence:

### Step 1 — Build an investor model
Use EFG or Investment Persona to show progressive personalization.

### Step 2 — Connect the advice to intent
Use Goals and Advice Request to show that investing begins with a purpose, amount, strategy, and frequency.

### Step 3 — Make the recommendation inspectable
Show asset-class grouping, allocations, request summary, and security-level recommendations.

### Step 4 — Preserve user control during execution
Show broker selection, account choice, purchase confirmation, and partial execution states.

### Step 5 — Close the loop in the portfolio
Show current value, invested value, P/L, return methods, exposures, data freshness, and security drill-down.

### Step 6 — Offer deeper evidence
End with portfolio review and research reports, demonstrating how the system scales from a simple signal to detailed analysis.

This journey is stronger than presenting all 30 PDFs sequentially.

---

## 6. Supporting product stories

Treat these as smaller proof sections, not equal chapters.

### Goal planning
Transforms an aspiration into a target value, lump sum, shortfall, and monthly commitment.

### Investment persona
Makes an abstract behavioral profile memorable through five elemental identities while preserving Accept and Retake actions.

### Research system
Reuses one report architecture across equities, mutual funds, and IPOs while adapting the data model for each asset.

### Account connections and marketplace
Makes the boundary between Savart, Account Aggregators, and transaction partners visible.

### Service ecosystem
Support, subscriptions, family accounts, gifting, referrals, invoices, and store creatives show that the system extends beyond the core transaction.

---

## 7. Edge-state proof

Use a single compact spread titled:

**The product also had to work when the data did not.**

Include six small examples only:

1. KYC rejected with a reason
2. Uploaded signature preview
3. Portfolio fetch failed
4. Advice item failed
5. External partner handoff
6. Empty/error/support recovery

This communicates production-minded design without turning the case study into an exhaustive component inventory.

---

## 8. What not to claim yet

The supplied files do **not** prove:

- Your exact role or ownership
- Team composition
- Project timeline
- Original business problem
- User-research method or findings
- Usability testing
- Which explorations were rejected and why
- Which screens shipped
- Product adoption or conversion impact
- Revenue, retention, task-completion, or support outcomes
- Engineering constraints
- Regulatory review or approval

Until confirmed, avoid phrases such as:

- “I increased conversion…”
- “Research showed…”
- “Users struggled with…”
- “We validated…”
- “This reduced drop-off…”
- “The redesign shipped…”

Use evidence-safe language such as:

- “The design explored…”
- “The system was structured to…”
- “The interface makes…”
- “The supplied production board includes…”

---

# Recommended case-study page structure

## 1. Hero
- Title
- One-line summary
- Role, duration, team, platform, and status
- Four-screen montage

## 2. The system problem
- Investing as a connected cycle
- Ecosystem map

## 3. Four design challenges
- Progressive personalization
- Inspectable advice
- Mobile financial intelligence
- Trust beyond the happy path

## 4. Design language
- Type, color, grid, modules
- Explain functional purpose, not only aesthetics

## 5. Main journey
- Profile → Goal → Advice → Broker → Portfolio → Research

## 6. Deep dive: portfolio intelligence
- Summary → exposure → security → transactions → health review

## 7. Deep dive: cross-asset research
- Shared architecture and asset-specific adaptation

## 8. Production depth
- Loading, error, empty, rejection, handoff, support

## 9. Outcomes
- Only verified outcomes and metrics

## 10. Reflection
- What changed
- What did not work
- What you would improve

---

# Apple-inspired presentation direction

Use Apple as a presentation discipline, not as decoration.

## Principles

- One idea per section.
- Large, plain-language headlines.
- Product imagery is the primary visual evidence.
- Generous white or near-black space.
- Avoid dashboard-like case-study layouts and excessive cards.
- Alternate light editorial sections with dark product showcases.
- Use blue sparingly for links, annotations, and key proof.
- Explain complex systems with simple diagrams before showing detailed screens.
- Crop screens around the decision being discussed instead of displaying full canvases at unreadable sizes.

## Suggested visual rhythm

1. Light hero
2. Dark product montage
3. Light system explanation
4. Dark journey showcase
5. Light decision/tradeoff section
6. Dark portfolio and research deep dive
7. Light outcome/reflection close

## Typography

- Display: SF Pro Display or system equivalent
- Body: SF Pro Text or system equivalent
- Large headlines, short paragraphs, restrained captions
- Avoid tiny annotations around full-screen mosaics

---

# Required answers before final writing

## Essential

1. What was your exact role and what did you personally own?
2. When did the project run, and for how long?
3. Who else was on the team?
4. Was Gen4 a redesign of an existing app, a new app, or both?
5. What business or user problem triggered Gen4?
6. Which of these designs reached production by October 6, 2026?
7. Which three flows best represent your personal contribution?
8. What constraints shaped the work: regulation, legacy technology, deadlines, data availability, or stakeholder requirements?
9. What user research, customer feedback, analytics, or support evidence informed the designs?
10. What alternatives were explored or rejected, and why?
11. Was usability testing performed? What changed because of it?
12. What measurable outcomes are verified?

## Useful

13. How large was the app before and after the redesign?
14. Was the design system created by you, inherited, or developed collaboratively?
15. Were the cross-asset report modules implemented as reusable components?
16. How did product, compliance, research, and engineering review investment recommendations?
17. Which part of the project are you most proud of?
18. What would you redesign now?

---

# Editorial recommendation

The strongest final case study should cover approximately **20–25% of the available screens**. The remaining work should be represented through ecosystem maps, small supporting montages, or an appendix.

The portfolio story is not “I designed a very large number of screens.”

It is:

> **I designed a coherent decision system for a complex investment product—helping people move from self-understanding and intent to advice, action, evidence, and ongoing portfolio awareness.**
