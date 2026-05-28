import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./landing/page.module.css";

const steps = [
  {
    number: "1",
    title: "Add cards",
    copy: "Securely link your cards in seconds.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: "2",
    title: "Describe spend",
    copy: "Tell us about your lifestyle and spending.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 6h12M4 10h8M4 14h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: "3",
    title: "Get the card",
    copy: "We recommend the best card for you to apply.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="5" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M2 9h16" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
];

export const metadata = {
  title: "Golden Wallet | A smarter card choice",
  description:
    "Personalized credit card recommendations. Real value. No guesswork.",
};

export default function LandingPage() {
  return (
    <main className={styles.page}>
      <nav className={styles.nav} aria-label="Site navigation">
        <Link className={styles.brand} href="/">
          <span className={styles.mark} aria-hidden="true">G</span>
          <span>Golden Wallet</span>
        </Link>

        <div className={styles.navActions}>
          <Link className={styles.signIn} href="/optimizer">Sign in</Link>
          <Link className={styles.navButton} href="/optimizer#ai-advisor">Try AI Advisor</Link>
        </div>
      </nav>

      <section className={styles.hero} aria-labelledby="landing-title">
        <div className={styles.heroCopy}>
          <h1 id="landing-title">
            A smarter<br />card choice,<br />before you pay
          </h1>
          <p className={styles.lede}>
            Personalized recommendations.<br />
            Real value. No guesswork.
          </p>
          <div className={styles.ctaRow}>
            <Link className={styles.primaryCta} href="/optimizer#ai-advisor">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className={styles.ctaIcon}>
                <path d="M8 2l1.5 3.5L13 7l-3.5 1.5L8 12l-1.5-3.5L3 7l3.5-1.5L8 2z" fill="currentColor"/>
              </svg>
              Try AI Advisor
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        <div className={styles.heroVisual} aria-label="AI card recommendation preview">
          <Image
            src="/landing/wallet-card-hero.png"
            alt="A black leather wallet with a matte gold credit card"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 52vw"
            className={styles.heroImage}
          />
          <div className={styles.recCard}>
            <div className={styles.recBadge}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <path d="M5 0.5L6.2 3.8L9.5 5L6.2 6.2L5 9.5L3.8 6.2L0.5 5L3.8 3.8L5 0.5Z" fill="currentColor"/>
              </svg>
              AI Recommendation
            </div>
            <div className={styles.recBody}>
              <div className={styles.recInfo}>
                <p className={styles.recLabel}>Your best card right now</p>
                <p className={styles.recName}>Amex Gold Card</p>
                <p className={styles.recValue}>$1,248 potential annual value →</p>
              </div>
              <div className={styles.recCardArt}>
                <div className={styles.cardChip} aria-hidden="true" />
                <div className={styles.cardLogo} aria-hidden="true">AMEX</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className={styles.steps} aria-labelledby="steps-title">
        <h2 id="steps-title" className={styles.stepsHeading}>
          Your journey<br />to a better card
        </h2>
        <div className={styles.stepFlow}>
          {steps.map((step, i) => (
            <React.Fragment key={step.number}>
              <article className={styles.step}>
                <div className={styles.stepIcon}>{step.icon}</div>
                <div>
                  <h3 className={styles.stepTitle}>{step.number}. {step.title}</h3>
                  <p className={styles.stepCopy}>{step.copy}</p>
                </div>
              </article>
              {i < steps.length - 1 && (
                <div className={styles.stepArrow} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>
    </main>
  );
}
