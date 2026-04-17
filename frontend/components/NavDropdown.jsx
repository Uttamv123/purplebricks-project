'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function NavDropdown({ label, sections, badge }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const closeTimer = useRef(null);

  function open_() {
    clearTimeout(closeTimer.current);
    setOpen(true);
  }

  function close_() {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  }

  // Keyboard accessibility
  function handleKeyDown(e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(o => !o); }
    if (e.key === 'Escape') setOpen(false);
  }

  // Close on outside click
  useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const colCount = sections.length;

  return (
    <div
      ref={ref}
      className={`mm-item${open ? ' mm-item--open' : ''}`}
      onMouseEnter={open_}
      onMouseLeave={close_}
    >
      <button
        className="mm-trigger"
        aria-haspopup="true"
        aria-expanded={open}
        onKeyDown={handleKeyDown}
        onClick={() => setOpen(o => !o)}
      >
        {label}
        {badge && <span className="mm-badge">{badge}</span>}
        <svg className={`mm-chevron${open ? ' mm-chevron--up' : ''}`} width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {open && (
        <div
          className={`mm-panel mm-panel--cols-${colCount}`}
          role="menu"
          onMouseEnter={open_}
          onMouseLeave={close_}
        >
          {/* Decorative top accent */}
          <div className="mm-panel__accent" />

          {sections.map((section, si) => (
            <div key={si} className="mm-col">
              <div className="mm-col__heading">
                {section.icon && <span className="mm-col__heading-icon">{section.icon}</span>}
                {section.heading}
              </div>
              <ul className="mm-col__list" role="none">
                {section.links.map((link, li) => (
                  <li key={li} role="none">
                    <Link
                      href={link.href || '#'}
                      className="mm-link"
                      role="menuitem"
                      tabIndex={0}
                      onClick={() => setOpen(false)}
                    >
                      {link.icon && <span className="mm-link__icon">{link.icon}</span>}
                      <span className="mm-link__text">
                        <span className="mm-link__label">{link.label}</span>
                        {link.sub && <span className="mm-link__sub">{link.sub}</span>}
                      </span>
                      {link.tag && <span className="mm-link__tag">{link.tag}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
