import Image from "next/image";
import {
  aboutActions,
  aboutContent,
  aboutSocials,
  aboutStats,
} from "./about-content";
import { sceneImage } from "../scene/scene-content";
import { CopyEmailButton } from "./CopyEmailButton";
import { Magnetic } from "./Magnetic";
import { CalendarIcon, StarIcon, socialIcons, type SocialId } from "./icons";

const RATING_STARS = 5;
/** Two passes of the stats give the marquee a seamless -50% loop. */
const MARQUEE_PASSES = 2;

export function About() {
  return (
    <section className="about" id="about" aria-label="About me">
      <div className="about__inner">
        <div className="about__main">
        <p className="about__eyebrow">{aboutContent.eyebrow}</p>

        <h2 className="about__heading">
          <span className="about__heading-accent">
            {aboutContent.headingAccent}
          </span>
          {aboutContent.headingRest}
        </h2>

        <div className="about__bio">
          <p className="about__tagline">{aboutContent.tagline}</p>
          {aboutContent.bio.map((paragraph) => (
            <p key={paragraph} className="about__bio-text">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="about__actions">
          {aboutActions.map((action) => {
            const content = (
              <>
                {action.icon === "calendar" && (
                  <CalendarIcon className="about__btn-icon" />
                )}
                {action.label}
              </>
            );

            if (!action.href) {
              return (
                <Magnetic key={action.id}>
                  <CopyEmailButton email={aboutContent.email} />
                </Magnetic>
              );
            }

            return (
              <Magnetic key={action.id}>
                <a
                  href={action.href}
                  className={`about__btn about__btn--${action.variant}`}
                  {...(action.download ? { download: action.download } : {})}
                >
                  {content}
                </a>
              </Magnetic>
            );
          })}
        </div>

        <div className="about__rating">
          <span
            className="about__stars"
            role="img"
            aria-label={`${RATING_STARS} out of 5 stars`}
          >
            {Array.from({ length: RATING_STARS }).map((_, i) => (
              <StarIcon key={i} className="about__star" />
            ))}
          </span>
          <p className="about__rating-label">{aboutContent.ratingLabel}</p>
        </div>

        <ul className="about__socials">
          {aboutSocials.map((social) => {
            const Icon = socialIcons[social.id as SocialId];
            return (
              <li key={social.id} hidden={social.hidden}>
                <Magnetic strength={0.5}>
                  <a
                    href={social.href}
                    className="about__social"
                    aria-label={social.label}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Icon className="about__social-icon" />
                  </a>
                </Magnetic>
              </li>
            );
          })}
        </ul>
        </div>

        <div className="about__media" aria-hidden="true">
          <div className="scene-anchor" data-scene-anchor="about" />
          <Image
            src={sceneImage.src}
            alt=""
            width={270}
            height={380}
            sizes="(max-width: 1024px) 60vw, 270px"
            className="about__media-fallback"
          />
        </div>
      </div>

      <div className="about__marquee" aria-hidden="true">
        <div className="about__marquee-track">
          {Array.from({ length: MARQUEE_PASSES }).map((_, pass) => (
            <div key={pass} className="about__marquee-group">
              {aboutStats.map((stat) => (
                <span key={stat} className="about__marquee-item">
                  {stat}
                  <span className="about__marquee-sep">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
