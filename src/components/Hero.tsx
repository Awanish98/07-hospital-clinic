import { ArrowRight, CalendarPlus, Image as ImageIcon, LockKeyhole } from 'lucide-react';
import { scrollToSection } from '../utils';

export default function Hero() {
  return (
    <>
      <section className="hero" id="home" aria-labelledby="home-title">
        <span className="hero__side-label" aria-hidden="true">
          Demo concept · sample content
        </span>
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="hero__eyebrow">
              <span className="hero__pulse" aria-hidden="true" />
              Fictional multi-specialty clinic concept
            </p>
            <h1 id="home-title">
              Care, explained <em>clearly.</em>
            </h1>
            <p className="hero__lead">
              Explore a calm, readable website concept for a modern medical centre. Departments, sample profiles and
              visitor information are laid out with clarity — and clearly marked as a non-operational demo throughout.
            </p>
            <div className="hero__actions">
              <button className="btn btn--primary" type="button" onClick={() => scrollToSection('departments')}>
                Explore departments <ArrowRight size={18} aria-hidden="true" />
              </button>
              <button className="btn btn--ghost" type="button" onClick={() => scrollToSection('appointment')}>
                <CalendarPlus size={18} aria-hidden="true" /> Request a demo enquiry
              </button>
            </div>
            <ul className="hero__points" aria-label="What this demo includes">
              <li>
                <ImageIcon size={17} aria-hidden="true" /> Illustrative photography
              </li>
              <li>
                <LockKeyhole size={17} aria-hidden="true" /> No health data collected
              </li>
              <li>
                <CalendarPlus size={17} aria-hidden="true" /> No real bookings
              </li>
            </ul>
          </div>

          <div className="hero__visual">
            <span className="hero__halo" aria-hidden="true" />
            <div className="hero__frame">
              <img
                src="images/hero.jpg"
                alt="Illustrative healthcare setting used as the hero image for this demo website."
                width={1800}
                height={1225}
                fetchPriority="high"
                decoding="async"
              />
            </div>
            <div className="hero__note">
              <img
                src="images/care.jpg"
                alt="Illustrative care image used in the demo notice card."
                width={1100}
                height={619}
                loading="lazy"
                decoding="async"
              />
              <div>
                <strong>100% demo</strong>
                <span>No care, no diagnosis, no patient portal.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="snapshot" role="note" aria-label="Demo snapshot">
        <div className="container snapshot__grid">
          <div className="snapshot__item">
            <span className="snapshot__number">06</span>
            <span className="snapshot__label">Sample departments</span>
          </div>
          <div className="snapshot__item">
            <span className="snapshot__number">04</span>
            <span className="snapshot__label">Fictional profiles</span>
          </div>
          <div className="snapshot__item">
            <span className="snapshot__number">00</span>
            <span className="snapshot__label">Real appointments accepted</span>
          </div>
        </div>
      </div>
    </>
  );
}
