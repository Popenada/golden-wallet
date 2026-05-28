import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const steps = [
  {
    number: "01",
    title: "Save the cards you actually carry",
    copy: "Add reward rates once, then let Golden Wallet compare them when a purchase is in front of you.",
  },
  {
    number: "02",
    title: "Describe your spending in plain English",
    copy: "Tell the AI Advisor how you shop, eat, travel, and fill the gaps that category math misses.",
  },
  {
    number: "03",
    title: "Use the card with the clearest upside",
    copy: "See the recommendation, the reason, and the reward context before you pay.",
  },
];

const cards = [
  { name: "Everyday Cash", issuer: "2% dining", tone: "calm" },
  { name: "Voyage Preferred", issuer: "4% travel", tone: "gold" },
  { name: "Market Plus", issuer: "3% groceries", tone: "green" },
];

export const metadata = {
  title: "Golden Wallet | Try the AI Advisor",
  description:
    "Ask Golden Wallet which credit card to use before you pay. Compare rewards and get AI guidance from your saved cards.",
};

export default function LandingPage() {
  return (
    <main className={styles.page}>
      <div className={styles.navWrapper}>
      <nav className={styles.nav} aria-label="Landing page navigation">
        <Link className={styles.brand} href="/">
          <span className={styles.mark} aria-hidden="true">
            GW
          </span>
          <span>Golden Wallet</span>
        </Link>
        <div className={styles.navActions}>
          <Link className={styles.navLink} href="/optimizer">
            Open optimizer
          </Link>
          <Link className={styles.navButton} href="/optimizer#ai-advisor">
            Try AI Advisor
          </Link>
        </div>
      </nav>
      </div>

      <section className={styles.hero} aria-labelledby="landing-title">
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Personal finance companion</p>
          <h1 id="landing-title">Ask your wallet which card to use.</h1>
          <p className={styles.lede}>
            Golden Wallet turns your saved reward rates and everyday spending
            habits into a clear card recommendation before you pay.
          </p>
          <div className={styles.ctaRow}>
            <Link className={styles.primaryCta} href="/optimizer#ai-advisor">
              Try AI Advisor
            </Link>
            <Link className={styles.secondaryCta} href="/optimizer">
              Compare rewards
            </Link>
          </div>
          <p className={styles.trustLine}>
            Built for everyday card choices, not trader screens or reward-program
            homework.
          </p>
        </div>

        <div className={styles.heroVisual} aria-label="Golden Wallet AI advisor preview">
          <Image
            src="/landing/wallet-card-hero.png"
            alt="A black leather wallet with a matte gold credit card partly visible"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 48vw"
            className={styles.heroImage}
          />
          <div className={styles.previewShell}>
            <div className={styles.previewHeader}>
              <span>AI Advisor</span>
              <span className={styles.readyDot}>Ready</span>
            </div>

            <div className={styles.cardStack} aria-label="Saved card examples">
              {cards.map((card) => (
                <div className={styles.miniCard} data-tone={card.tone} key={card.name}>
                  <span>{card.name}</span>
                  <small>{card.issuer}</small>
                </div>
              ))}
            </div>

            <div className={styles.promptBox}>
              I dine out most weekends, buy groceries weekly, and have one trip
              coming up next month.
            </div>

            <div className={styles.answerBox}>
              <p className={styles.answerLabel}>Recommendation</p>
              <h2>Use Voyage Preferred for travel, then Everyday Cash for dining.</h2>
              <p>
                Your travel reward rate wins for the upcoming trip. For smaller
                meals, steady cash back keeps the choice simple.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.steps} aria-labelledby="steps-title">
        <div>
          <h2 id="steps-title">A better answer than mental math.</h2>
        </div>
        <div className={styles.stepGrid}>
          {steps.map((step) => (
            <article className={styles.step} key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
