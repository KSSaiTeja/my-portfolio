import { footerContent } from "./footer-content";

// Number of marquee repeats; the strip is duplicated for a seamless CSS loop.
const MARQUEE_REPEATS = 6;

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="footer__icon" aria-hidden="true">
      <path
        d="M3 5.5h18a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5Zm.9 1.6L12 12l8.1-4.9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="footer__icon" aria-hidden="true">
      <path
        d="M6.6 3.5 9 3.9l1 3.4-1.8 1.5a12 12 0 0 0 4.5 4.5l1.5-1.8 3.4 1 .4 2.4A1.6 1.6 0 0 1 19.8 20 15.5 15.5 0 0 1 4 4.2 1.6 1.6 0 0 1 6.6 3.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Footer() {
  const strip = Array.from({ length: MARQUEE_REPEATS }, (_, i) => (
    <span className="footer__marquee-item" key={i}>
      {footerContent.marquee}
      <span className="footer__marquee-star" aria-hidden="true">
        {footerContent.separator}
      </span>
    </span>
  ));

  return (
    <footer className="footer" aria-labelledby="footer-wordmark">
      <div className="footer__stage">
        <p id="footer-wordmark" className="footer__wordmark" aria-hidden="true">
          {footerContent.wordmark}
        </p>

        <div className="footer__marquee" aria-hidden="true">
          <div className="footer__marquee-track">
            <span className="footer__marquee-group">{strip}</span>
            <span className="footer__marquee-group">{strip}</span>
          </div>
        </div>

        <div className="footer__contacts">
          <a className="footer__contact" href={`mailto:${footerContent.email}`}>
            <MailIcon />
            <span>{footerContent.email}</span>
          </a>
          <a className="footer__contact" href={`tel:${footerContent.phoneHref}`}>
            <PhoneIcon />
            <span>{footerContent.phone}</span>
          </a>
        </div>
      </div>

      <div className="footer__bar">
        <span className="footer__bar-year">{footerContent.year}</span>
        <span className="footer__bar-rights">{footerContent.rights}</span>
      </div>
    </footer>
  );
}
