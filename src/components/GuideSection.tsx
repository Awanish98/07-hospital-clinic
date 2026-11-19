import { ArrowRight, Check, CheckCircle2, FileText, MapPin, MessagesSquare } from 'lucide-react';
import { scrollToSection } from '../utils';
import SectionHeading from './SectionHeading';

const steps = [
  {
    icon: FileText,
    title: 'Start with the demo enquiry',
    text: 'Choose a department and send the minimal sample form. Nothing is transmitted or stored.',
  },
  {
    icon: MessagesSquare,
    title: 'Prepare your questions',
    text: 'Note what you would ask in a real consultation. This site cannot answer clinical questions.',
  },
  {
    icon: MapPin,
    title: 'See where details would live',
    text: 'The contact area shows where an address, hours and contact methods would be placed.',
  },
  {
    icon: CheckCircle2,
    title: 'Review the sample confirmation',
    text: 'A real clinic would confirm through its own process. This demo ends with an on-screen notice.',
  },
];

const checklist = ['A short list of questions', 'Any paperwork you were already given', 'Your preferred way to be contacted'];

export default function GuideSection() {
  return (
    <section className="section" id="guide" aria-labelledby="guide-title">
      <div className="container">
        <SectionHeading
          eyebrow="04 / Visitor information"
          id="guide-title"
          title={
            <>
              A patient guide, <em>without the medicine.</em>
            </>
          }
          intro="This example pathway shows the structure of a visitor information page. It is not medical advice and does not describe any real clinical process."
        />

        <div className="guide-grid">
          <ol className="steps">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li className="step" key={step.title}>
                  <span className="step__number" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="step__body">
                    <span className="step__icon" aria-hidden="true">
                      <Icon size={19} strokeWidth={1.8} />
                    </span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>

          <aside className="guide-aside" aria-labelledby="guide-aside-title">
            <p className="guide-aside__eyebrow">Example content</p>
            <h3 id="guide-aside-title">For a visit, have these ready</h3>
            <p className="guide-aside__intro">
              A non-clinical checklist used here to demonstrate layout. It is not instruction from a healthcare provider.
            </p>
            <ul className="guide-checklist">
              {checklist.map((item) => (
                <li key={item}>
                  <Check size={17} aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>
            <button className="btn btn--on-dark" type="button" onClick={() => scrollToSection('appointment')}>
              Try the demo form <ArrowRight size={17} aria-hidden="true" />
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}
