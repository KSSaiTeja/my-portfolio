import Image from "next/image";
import { heroContent } from "./hero-content";
import { HeroTime } from "./HeroTime";

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <h1 className="sr-only">
        {heroContent.firstName} {heroContent.lastName}
      </h1>

      <div className="hero__backdrop" aria-hidden>
        <Image
          src="/hero/backdrop.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero__backdrop-image"
        />
      </div>
      <div className="hero__gradient" aria-hidden />

      <div className="hero__container">
        {/* Desktop / tablet: name · portrait · name */}
        <div className="hero__layout">
          <div className="hero__side hero__side--left">
            <p className="hero__meta">{heroContent.eyebrowLeft}</p>
            <p className="hero__name" aria-hidden>
              {heroContent.firstName}
            </p>
            <span className="hero__side-spacer hero__side-spacer--desktop" aria-hidden />
          </div>

          <div className="hero__portrait-wrap">
            <div className="hero__portrait-card" data-scene-anchor="hero">
              <Image
                src={heroContent.portraitSrc}
                alt={heroContent.portraitAlt}
                fill
                priority
                sizes="(max-width: 768px) 200px, 270px"
                className="hero__portrait-image"
              />
            </div>
          </div>

          <div className="hero__side hero__side--right">
            <p className="hero__meta">{heroContent.eyebrowRight}</p>
            <p className="hero__name" aria-hidden>
              {heroContent.lastName}
            </p>
            <HeroTime className="hero__time hero__time--desktop" />
          </div>
        </div>

        {/* Mobile: small portrait, then stacked name, left-aligned */}
        <div className="hero__mobile">
          <div className="hero__mobile-portrait">
            <Image
              src={heroContent.portraitSrc}
              alt={heroContent.portraitAlt}
              fill
              sizes="120px"
              className="hero__mobile-portrait-image"
            />
          </div>
          <p className="hero__mobile-eyebrow">{heroContent.eyebrowLeft}</p>
          <p className="hero__mobile-name" aria-hidden>
            {heroContent.firstName}
          </p>
          <p className="hero__mobile-name" aria-hidden>
            {heroContent.lastName}
          </p>
          <p className="hero__mobile-subtitle">
            {heroContent.eyebrowRight}, based in {heroContent.location}
          </p>
        </div>
      </div>
    </section>
  );
}
