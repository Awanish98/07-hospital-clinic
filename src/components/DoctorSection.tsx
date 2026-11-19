import { ArrowRight, UserRoundX } from 'lucide-react';
import { departmentName, departments, doctors } from '../data';
import { scrollToSection } from '../utils';
import SectionHeading from './SectionHeading';

type DoctorSectionProps = {
  activeFilter: string;
  onFilterChange: (departmentId: string) => void;
  onRequestDepartment: (departmentId: string) => void;
};

export default function DoctorSection({ activeFilter, onFilterChange, onRequestDepartment }: DoctorSectionProps) {
  const visibleDoctors =
    activeFilter === 'all' ? doctors : doctors.filter((doctor) => doctor.departmentId === activeFilter);
  const filterLabel = departmentName(activeFilter);

  const handleRequest = (departmentId: string) => {
    onRequestDepartment(departmentId);
    scrollToSection('appointment');
  };

  return (
    <section className="section" id="doctors" aria-labelledby="doctors-title">
      <div className="container">
        <SectionHeading
          eyebrow="02 / Our people"
          id="doctors-title"
          title={
            <>
              A sample clinician <em>directory.</em>
            </>
          }
          intro="Every name below is fictional and every photograph is illustrative. Qualifications, registrations, experience and other professional credentials are intentionally omitted — a real client must supply verified profiles."
        />

        <div className="filter-bar" role="group" aria-label="Filter sample profiles by department">
          <button
            className="filter-chip"
            type="button"
            aria-pressed={activeFilter === 'all'}
            onClick={() => onFilterChange('all')}
          >
            All profiles
          </button>
          {departments.map((department) => (
            <button
              className="filter-chip"
              type="button"
              key={department.id}
              aria-pressed={activeFilter === department.id}
              onClick={() => onFilterChange(department.id)}
            >
              {department.name}
            </button>
          ))}
        </div>

        <p className="results-line" aria-live="polite">
          Showing {visibleDoctors.length} fictional sample profile{visibleDoctors.length === 1 ? '' : 's'} in{' '}
          <strong>{filterLabel}</strong>.
        </p>

        <div className="doctor-grid">
          {visibleDoctors.length === 0 ? (
            <div className="empty-state">
              <UserRoundX size={34} strokeWidth={1.6} aria-hidden="true" />
              <h3>No sample profiles here yet</h3>
              <p>
                The {filterLabel} category is part of the demo layout but has no fictional profiles assigned. Try
                another department.
              </p>
              <button className="btn btn--ghost btn--small" type="button" onClick={() => onFilterChange('all')}>
                Show all sample profiles
              </button>
            </div>
          ) : (
            visibleDoctors.map((doctor) => (
              <article className="doctor-card" key={doctor.id}>
                <div className="doctor-card__media">
                  <img src={doctor.image} alt={doctor.imageAlt} width={900} height={1125} loading="lazy" decoding="async" />
                  <span className="doctor-card__badge">Fictional sample</span>
                </div>
                <div className="doctor-card__body">
                  <p className="doctor-card__focus">{departmentName(doctor.departmentId)}</p>
                  <h3 className="doctor-card__name">{doctor.name}</h3>
                  <p className="doctor-card__bio">{doctor.bio}</p>
                  <p className="doctor-card__note">Credentials intentionally omitted in this demo.</p>
                  <button
                    className="doctor-card__action"
                    type="button"
                    onClick={() => handleRequest(doctor.departmentId)}
                  >
                    Enquire about this area <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
