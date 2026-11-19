import { ArrowRight } from 'lucide-react';
import { departments, doctors } from '../data';
import { scrollToSection } from '../utils';
import SectionHeading from './SectionHeading';

type DepartmentSectionProps = {
  activeFilter: string;
  onFilterChange: (departmentId: string) => void;
};

export default function DepartmentSection({ activeFilter, onFilterChange }: DepartmentSectionProps) {
  const handleSelect = (departmentId: string) => {
    onFilterChange(departmentId);
    scrollToSection('doctors');
  };

  return (
    <section className="section section--tint" id="departments" aria-labelledby="departments-title">
      <div className="container">
        <SectionHeading
          eyebrow="01 / Explore"
          id="departments-title"
          title={
            <>
              Departments, <em>at a glance.</em>
            </>
          }
          intro="Six example departments show how a clinic might organise its services. Descriptions are sample copy, and selecting a department filters the fictional directory below."
        />

        <div className="dept-grid">
          {departments.map((department) => {
            const Icon = department.icon;
            const profileCount = doctors.filter((doctor) => doctor.departmentId === department.id).length;
            const isSelected = activeFilter === department.id;

            return (
              <button
                className={`dept-card${isSelected ? ' is-selected' : ''}`}
                type="button"
                key={department.id}
                aria-pressed={isSelected}
                onClick={() => handleSelect(department.id)}
              >
                <span className="dept-card__icon" aria-hidden="true">
                  <Icon size={23} strokeWidth={1.8} />
                </span>
                <h3>{department.name}</h3>
                <p>{department.description}</p>
                <span className="dept-card__link">
                  {profileCount > 0
                    ? `${profileCount} sample profile${profileCount === 1 ? '' : 's'}`
                    : 'No sample profiles yet'}
                  <ArrowRight size={16} aria-hidden="true" />
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
