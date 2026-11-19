import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow: string;
  id: string;
  title: ReactNode;
  intro?: string;
  className?: string;
};

export default function SectionHeading({ eyebrow, id, title, intro, className = '' }: SectionHeadingProps) {
  return (
    <div className={`section-heading ${className}`.trim()}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title" id={id}>
        {title}
      </h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}
