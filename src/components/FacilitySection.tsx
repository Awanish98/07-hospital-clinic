import { useState } from 'react';
import { Info, Expand } from 'lucide-react';
import { facilities } from '../data';
import SectionHeading from './SectionHeading';
import Lightbox from './Lightbox';

export default function FacilitySection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section section--tint" id="facilities" aria-labelledby="facilities-title">
      <div className="container">
        <SectionHeading
          eyebrow="03 / Spaces"
          id="facilities-title"
          title={
            <>
              Illustrative <em>spaces.</em>
            </>
          }
          intro="A small gallery demonstrates how environment photography could be presented. Every image is local sample photography and does not depict a real CAREWELL location."
        />

        <div className="facility-grid">
          {facilities.map((facility, index) => (
            <button
              className={`facility-card${index === 0 ? ' facility-card--feature' : ''}`}
              type="button"
              key={facility.id}
              onClick={() => setOpenIndex(index)}
              aria-label={`View larger sample image: ${facility.title}`}
            >
              <img src={facility.image} alt={facility.imageAlt} width={1200} height={751} loading="lazy" decoding="async" />
              <span className="facility-card__overlay" aria-hidden="true" />
              <span className="facility-card__content">
                <span className="facility-card__eyebrow">Sample image {String(index + 1).padStart(2, '0')}</span>
                <span className="facility-card__title">{facility.title}</span>
                <span className="facility-card__view">
                  <Expand size={15} aria-hidden="true" /> View image
                </span>
              </span>
            </button>
          ))}
        </div>

        <p className="gallery-note">
          <Info size={18} aria-hidden="true" />
          Illustrative photography only. Captions, locations and availability are demo content and must be replaced with
          verified client information before launch.
        </p>
      </div>

      {openIndex !== null ? (
        <Lightbox
          items={facilities}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onIndexChange={setOpenIndex}
        />
      ) : null}
    </section>
  );
}
