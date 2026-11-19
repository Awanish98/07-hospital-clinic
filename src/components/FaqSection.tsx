import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '../data';
import SectionHeading from './SectionHeading';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0].id);

  return (
    <section className="section section--tint" id="faq" aria-labelledby="faq-title">
      <div className="container">
        <div className="faq-grid">
          <SectionHeading
            eyebrow="07 / FAQs"
            id="faq-title"
            title={
              <>
                Clear answers, <em>no small print.</em>
              </>
            }
            intro="Common questions about what this demo is — and, more importantly, what it is not."
          />

          <div className="faq-list">
            {faqItems.map((item) => {
              const expanded = openId === item.id;
              return (
                <div className="faq-item" key={item.id}>
                  <h3 className="faq-item__heading">
                    <button
                      className="faq-trigger"
                      type="button"
                      id={`${item.id}-button`}
                      aria-expanded={expanded}
                      aria-controls={`${item.id}-panel`}
                      onClick={() => setOpenId(expanded ? null : item.id)}
                    >
                      {item.question}
                      <ChevronDown
                        className={`faq-trigger__chevron${expanded ? ' is-open' : ''}`}
                        size={19}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <div
                    className="faq-panel"
                    id={`${item.id}-panel`}
                    role="region"
                    aria-labelledby={`${item.id}-button`}
                    hidden={!expanded}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
