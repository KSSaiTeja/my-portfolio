"use client";

import { type ReactNode } from "react";
import { contactLink, navLinks } from "./nav-links";
import { ChevronRightIcon, HomeIcon } from "./icons";

function NavItem({
  href,
  label,
  chevron,
  ariaLabel,
  icon,
}: {
  href: string;
  label?: string;
  chevron?: boolean;
  ariaLabel?: string;
  icon?: ReactNode;
}) {
  return (
    <a href={href} aria-label={ariaLabel} className="navbar__item">
      <span className="navbar__item-bg" aria-hidden />
      <span className="navbar__item-inner">
        {icon}
        {label && <span className="navbar__item-label">{label}</span>}
        {chevron && <ChevronRightIcon className="navbar__item-chevron" />}
      </span>
    </a>
  );
}

export function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar__pill">
        <div className="navbar__pill-inner">
          <NavItem
            href="#top"
            ariaLabel="Home"
            icon={<HomeIcon className="navbar__home-icon" />}
          />

          {navLinks.map((link) => (
            <NavItem key={link.href} {...link} />
          ))}

          <a href={contactLink.href} className="navbar__cta">
            <span className="navbar__cta-bg" aria-hidden />
            <span className="navbar__cta-label navbar__cta-label--full">
              {contactLink.label}
            </span>
            <span className="navbar__cta-label navbar__cta-label--short">
              Contact
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
