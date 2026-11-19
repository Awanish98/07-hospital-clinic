import { useEffect, useRef, useState } from 'react';
import { Cross, Menu, X } from 'lucide-react';

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Departments', href: '#departments' },
  { label: 'Our people', href: '#doctors' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Patient guide', href: '#guide' },
  { label: 'Contact', href: '#contact' },
  { label: 'FAQs', href: '#faq' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container site-header__inner">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="CAREWELL MEDICAL CENTRE — back to top">
          <span className="brand__mark" aria-hidden="true">
            <Cross size={22} strokeWidth={2.6} />
          </span>
          <span className="brand__text">
            <span className="brand__name">CAREWELL</span>
            <span className="brand__sub">Medical Centre · Demo</span>
          </span>
        </a>

        <nav
          className={`primary-nav${menuOpen ? ' is-open' : ''}`}
          aria-label="Primary navigation"
          id="primary-navigation"
          ref={navRef}
        >
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <span className="demo-pill" title="This website is a non-operational demo">
            <span className="demo-pill__dot" aria-hidden="true" />
            Demo only
          </span>
          <a className="btn btn--primary btn--small header-cta" href="#appointment" onClick={closeMenu}>
            Request enquiry
          </a>
          <button
            className="nav-toggle"
            type="button"
            ref={toggleRef}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}
