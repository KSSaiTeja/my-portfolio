import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const assetBase = "/case-studies/savart-gen4";

export const metadata: Metadata = {
  title: "Savart Gen4 — Product Design Case Study",
  description:
    "A connected investment experience spanning investor profiling, advice, execution, portfolio intelligence, and research.",
};

const projectFacts = [
  ["Role", "Product Designer"],
  ["Ownership", "End-to-end product design"],
  ["Industry", "Wealthtech / Fintech"],
  ["Status", "Implemented"],
  ["Timeline", "Multi-phase redesign"],
  ["Team", "Founder, CEO, CTO, PM, Program Manager & Developers"],
] as const;

const personas = [
  {
    number: "01",
    title: "Starting without a map",
    body: "A first-time investor who understands the promise of long-term investing but lacks the knowledge and time to begin confidently.",
    need: "Needs education, reassurance and guided progress.",
  },
  {
    number: "02",
    title: "Diversifying without losing stability",
    body: "An experienced mutual-fund investor who wants broader exposure, but needs help balancing opportunity with calculated risk.",
    need: "Needs suitable diversification and visible risk context.",
  },
  {
    number: "03",
    title: "Replacing emotion with evidence",
    body: "A market enthusiast recovering from speculative losses and looking for a disciplined, long-term approach to investing.",
    need: "Needs research depth and decision support—not another tip.",
  },
] as const;

const decisions = [
  {
    index: "01",
    eyebrow: "Personalization",
    title: "Progressive profiling, not one exhausting form.",
    body: "Savart needed identity, financial, behavioral, asset, goal and risk information before it could offer meaningful guidance. The experience breaks that burden into understandable, resumable modules—explaining why information is needed before asking for it.",
    result:
      "Essential sections unlock nearer value while deeper profiling remains available when relevant.",
  },
  {
    index: "02",
    eyebrow: "Advice",
    title: "Inspectable recommendations, not a black box.",
    body: "Advice becomes a sequence the user can understand: define intent, review allocations, preserve the original request, inspect investment guidance, choose a broker and track item-level execution.",
    result:
      "The user retains context and control from request to portfolio.",
  },
  {
    index: "03",
    eyebrow: "Intelligence",
    title: "Layered depth, not flattened complexity.",
    body: "A clean dashboard alone would underserve serious investors. Showing everything at once would overwhelm everyone else. The system moves from orientation to diagnosis, evidence and depth on demand.",
    result:
      "Health, exposure, holdings, transactions and advanced research share one progressive mental model.",
  },
  {
    index: "04",
    eyebrow: "Trust",
    title: "Visible system boundaries, not invisible handoffs.",
    body: "KYC, Account Aggregators, brokers and marketplace partners introduce consent, authentication, latency and failure. The interface names those transitions, exposes data freshness and preserves recovery paths.",
    result:
      "Trust comes from knowing what is happening—and what to do when it fails.",
  },
] as const;

const researchLayers = [
  ["Orient", "Identity, price or NAV, score, factor bars and action."],
  ["Diagnose", "Performance, exposure, quality, value, health and risk."],
  ["Inspect", "Holdings, statements, peers, shareholding and rationale."],
  ["Go deeper", "Advanced APART analysis and long-form evidence."],
] as const;

export default function SavartGen4CaseStudy() {
  return (
    <main className={`${styles.caseStudy} case-study-savart`}>
      <header className={styles.topbar}>
        <a className={styles.brand} href="#top" aria-label="Savart Gen4 case study home">
          <span className={styles.brandMark} aria-hidden="true" />
          Savart Gen4
        </a>
        <nav className={styles.topnav} aria-label="Case study sections">
          <a href="#challenge">Challenge</a>
          <a href="#journey">Journey</a>
          <a href="#research">Research reports</a>
          <a href="#reflection">Reflection</a>
        </nav>
        <Link className={styles.backLink} href="/">
          Portfolio <span aria-hidden="true">↗</span>
        </Link>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Product design · Wealthtech · Implemented</p>
          <h1>Making investment intelligence understandable—and actionable.</h1>
          <p className={styles.heroLead}>
            I led the end-to-end product design of Savart Gen4, connecting investor
            profiling, goals, personalized advice, broker execution, portfolio
            intelligence and cross-asset research in one mobile experience.
          </p>
        </div>

        <div className={styles.heroStage}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <Image
            className={styles.heroImage}
            src={`${assetBase}/hero-product.png`}
            width={3000}
            height={1247}
            alt="Savart Gen4 mobile app store presentation featuring portfolio review, investment persona and research reports"
            priority
            sizes="100vw"
          />
        </div>

        <dl className={styles.factGrid}>
          {projectFacts.map(([term, detail]) => (
            <div key={term}>
              <dt>{term}</dt>
              <dd>{detail}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={`${styles.lightSection} ${styles.intro}`} id="challenge">
        <div className={`${styles.sectionHeader} ${styles.reveal}`}>
          <p className={styles.eyebrow}>The system problem</p>
          <h2>Investing is not one screen. It is a relationship built over time.</h2>
          <p>
            Discovery with close to 100 customers, prospects and internal stakeholders
            surfaced a recurring tension: people wanted better financial decisions, but
            lacked the time, confidence or knowledge to manage the complexity alone.
          </p>
        </div>

        <div className={styles.personaGrid}>
          {personas.map((persona) => (
            <article className={`${styles.persona} ${styles.reveal}`} key={persona.number}>
              <span>{persona.number}</span>
              <h3>{persona.title}</h3>
              <p>{persona.body}</p>
              <strong>{persona.need}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.darkSection}>
        <div className={`${styles.sectionHeader} ${styles.sectionHeaderLight} ${styles.reveal}`}>
          <p className={styles.eyebrow}>Structure before pixels</p>
          <h2>A large roadmap became connected journeys, dependencies and states.</h2>
          <p>
            The Whimsical system map organized roughly 100 functional wireframes across
            onboarding, profiling, advice, portfolio, goals, account linking, support,
            subscriptions and external-provider handoffs.
          </p>
        </div>
        <figure className={`${styles.boardFrame} ${styles.reveal}`}>
          <Image
            src={`${assetBase}/whimsical-system-map.png`}
            width={1280}
            height={720}
            alt="Whimsical system map showing the breadth of Savart Gen4 mobile wireframes"
            sizes="(max-width: 900px) 100vw, 1200px"
          />
          <figcaption>
            Low-to-mid fidelity architecture was used to align flow logic before visual
            refinement.
          </figcaption>
        </figure>
      </section>

      <section className={`${styles.lightSection} ${styles.decisionsSection}`}>
        <div className={`${styles.sectionHeader} ${styles.reveal}`}>
          <p className={styles.eyebrow}>Four product decisions</p>
          <h2>The design reduced friction without pretending finance was simple.</h2>
        </div>
        <div className={styles.decisionList}>
          {decisions.map((decision) => (
            <article className={`${styles.decision} ${styles.reveal}`} key={decision.index}>
              <div className={styles.decisionNumber}>{decision.index}</div>
              <div className={styles.decisionCopy}>
                <p className={styles.decisionEyebrow}>{decision.eyebrow}</p>
                <h3>{decision.title}</h3>
                <p>{decision.body}</p>
                <div className={styles.decisionResult}>
                  <span>Design outcome</span>
                  {decision.result}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.productSection} id="journey">
        <div className={`${styles.sectionHeader} ${styles.sectionHeaderLight} ${styles.reveal}`}>
          <p className={styles.eyebrow}>The main journey</p>
          <h2>From “Who am I as an investor?” to “What should I do next?”</h2>
          <p>
            The primary story connects self-understanding and intent to advice, execution,
            evidence and ongoing portfolio awareness.
          </p>
        </div>

        <div className={styles.journeyLine} aria-label="Main Savart Gen4 journey">
          {[
            "Profile",
            "Goal",
            "Advice",
            "Broker",
            "Portfolio",
            "Research",
          ].map((step, index) => (
            <div key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>

        <div className={`${styles.canvasShowcase} ${styles.reveal}`}>
          <Image
            src={`${assetBase}/efg-system.png`}
            width={3000}
            height={3135}
            alt="Savart EFG profiling system with progressive financial and behavioral questionnaires"
            sizes="100vw"
          />
        </div>

        <div className={styles.splitNarrative}>
          <div className={`${styles.narrativeCopy} ${styles.reveal}`}>
            <p className={styles.eyebrow}>Advice to action</p>
            <h3>The recommendation stays connected to its original intent.</h3>
            <p>
              Users configure strategy, asset class, amount, frequency and linked goals.
              The delivered advice keeps those inputs visible, reveals allocations and
              lets the user choose where to execute.
            </p>
            <ul>
              <li>Plain-language request types</li>
              <li>Asset and security-level allocations</li>
              <li>Request summary and investment guidelines</li>
              <li>Broker selection and item-level status</li>
            </ul>
          </div>
          <div className={`${styles.horizontalArtboard} ${styles.reveal}`}>
            <Image
              src={`${assetBase}/advice-flow.png`}
              width={3200}
              height={757}
              alt="Savart advice request and broker execution flow"
              sizes="(max-width: 900px) 100vw, 60vw"
            />
          </div>
        </div>
      </section>

      <section className={styles.portfolioSection}>
        <div className={`${styles.portfolioIntro} ${styles.reveal}`}>
          <p className={styles.eyebrow}>Portfolio intelligence</p>
          <h2>Start with health. Reveal the evidence progressively.</h2>
          <p>
            A user can move from current value and P/L to allocation, methodology,
            synchronization status, individual holdings, transaction history and a deeper
            portfolio health review.
          </p>
        </div>
        <div className={`${styles.portfolioCanvas} ${styles.reveal}`}>
          <Image
            src={`${assetBase}/portfolio-system.png`}
            width={3200}
            height={2531}
            alt="Savart portfolio intelligence screens including allocation, performance, holdings and health review"
            sizes="100vw"
          />
        </div>
      </section>

      <section className={`${styles.lightSection} ${styles.researchSection}`} id="research">
        <div className={`${styles.researchHeading} ${styles.reveal}`}>
          <p className={styles.eyebrow}>Proudest work</p>
          <h2>A research system that respects both attention and intelligence.</h2>
          <p>
            Investment research can become an unreadable document or an oversimplified
            score. The report architecture gives users a fast orientation while keeping
            the evidence available for a serious decision.
          </p>
        </div>

        <div className={styles.researchLayers}>
          {researchLayers.map(([title, body], index) => (
            <div className={styles.reveal} key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>

        <div className={`${styles.researchFlow} ${styles.reveal}`}>
          <Image
            src={`${assetBase}/research-flow.png`}
            width={3000}
            height={3096}
            alt="Savart research report discovery, suitability questions and personalized report unlock flow"
            sizes="100vw"
          />
        </div>

        <div className={styles.reportGrid}>
          <figure className={`${styles.reportCard} ${styles.reveal}`}>
            <div className={styles.reportViewport}>
              <Image
                src={`${assetBase}/free-research.png`}
                width={2400}
                height={4544}
                alt="Free Savart equity research report across mobile and desktop"
                sizes="(max-width: 760px) 100vw, 50vw"
              />
            </div>
            <figcaption>
              <span>Equity research</span>
              A modular report moves from score and action to fundamentals, peers,
              valuation and shareholding evidence.
            </figcaption>
          </figure>

          <figure className={`${styles.reportCard} ${styles.reveal}`}>
            <div className={`${styles.reportViewport} ${styles.reportViewportTall}`}>
              <Image
                src={`${assetBase}/advanced-research.png`}
                width={2400}
                height={10004}
                alt="Advanced APART research report with long-form analysis"
                sizes="(max-width: 760px) 100vw, 50vw"
              />
            </div>
            <figcaption>
              <span>Advanced APART analysis</span>
              Long-form evidence extends the same mental model instead of introducing a
              second product language.
            </figcaption>
          </figure>
        </div>

        <div className={styles.assetAdaptation}>
          <div className={styles.reveal}>
            <span>Equities</span>
            <p>Fundamentals, valuation, business quality and shareholding.</p>
          </div>
          <div className={styles.reveal}>
            <span>Mutual funds</span>
            <p>NAV, fund house, manager, holdings, allocation and expense ratio.</p>
          </div>
          <div className={styles.reveal}>
            <span>IPOs</span>
            <p>Offer quality, minimum investment, strengths, triggers and risks.</p>
          </div>
        </div>

        <div className={`${styles.ipoCanvas} ${styles.reveal}`}>
          <Image
            src={`${assetBase}/ipo-reports.png`}
            width={2600}
            height={2355}
            alt="Savart IPO report system with mobile and desktop layouts"
            sizes="100vw"
          />
        </div>
      </section>

      <section className={styles.statesSection}>
        <div className={`${styles.sectionHeader} ${styles.sectionHeaderLight} ${styles.reveal}`}>
          <p className={styles.eyebrow}>Beyond the happy path</p>
          <h2>The product also had to work when the data did not.</h2>
          <p>
            Financial trust is tested during stale data, rejected documents, failed
            execution and missing information—not only on successful dashboards.
          </p>
        </div>
        <div className={styles.stateGrid}>
          <figure className={styles.reveal}>
            <Image
              src={`${assetBase}/edge-errors.png`}
              width={1800}
              height={1239}
              alt="Savart full-screen recoverable error states"
              sizes="(max-width: 760px) 100vw, 50vw"
            />
            <figcaption>Recoverable errors</figcaption>
          </figure>
          <figure className={styles.reveal}>
            <Image
              src={`${assetBase}/edge-empty.png`}
              width={1800}
              height={831}
              alt="Savart illustrated empty states"
              sizes="(max-width: 760px) 100vw, 50vw"
            />
            <figcaption>Purposeful empty states</figcaption>
          </figure>
        </div>
      </section>

      <section className={`${styles.lightSection} ${styles.outcomesSection}`}>
        <div className={`${styles.sectionHeader} ${styles.reveal}`}>
          <p className={styles.eyebrow}>What shipped</p>
          <h2>One implemented system across the investment lifecycle.</h2>
        </div>
        <div className={styles.outcomeGrid}>
          <article className={styles.reveal}>
            <strong>01</strong>
            <h3>Unified architecture</h3>
            <p>Discovery, personalization, advice, execution, monitoring and research became connected journeys.</p>
          </article>
          <article className={styles.reveal}>
            <strong>02</strong>
            <h3>Scalable design language</h3>
            <p>One system scaled from authentication and forms to dense dashboards and long reports.</p>
          </article>
          <article className={styles.reveal}>
            <strong>03</strong>
            <h3>Production-state coverage</h3>
            <p>Loading, failure, rejection, consent, empty, success and external handoffs were designed explicitly.</p>
          </article>
          <article className={styles.reveal}>
            <strong>04</strong>
            <h3>Cross-functional implementation</h3>
            <p>The product moved from roadmap and wireframes into implemented UI with startup leadership and engineering.</p>
          </article>
        </div>
        <p className={`${styles.impactNote} ${styles.reveal}`}>
          Product success was framed around account-linking adoption, advice-to-execution,
          portfolio-review conversion, data accuracy, support reduction and research
          engagement. No unverified percentage uplift is claimed here.
        </p>
      </section>

      <section className={styles.reflectionSection} id="reflection">
        <div className={`${styles.reflectionLead} ${styles.reveal}`}>
          <p className={styles.eyebrow}>Reflection</p>
          <h2>If I returned to Gen4 today, I would simplify how users choose and move.</h2>
        </div>
        <div className={styles.reflectionGrid}>
          <article className={styles.reveal}>
            <span>Pricing</span>
            <h3>Design around intent, not the full catalogue.</h3>
            <p>
              I would clarify who each plan is for, separate subscriptions from add-ons
              and connect pricing directly to value already experienced through portfolio
              review, research or advice.
            </p>
          </article>
          <article className={styles.reveal}>
            <span>Navigation</span>
            <h3>Organize around recurring jobs.</h3>
            <p>
              The next information architecture would prioritize understand, invest,
              track and manage—while moving account, legal and low-frequency utilities out
              of the primary hierarchy.
            </p>
          </article>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Product design case study · Savart Gen4</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
