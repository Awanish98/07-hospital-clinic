import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Clock3, Info, LockKeyhole, RotateCcw, Send } from 'lucide-react';
import { departmentName, departments } from '../data';
import SectionHeading from './SectionHeading';

type FieldName = 'name' | 'email' | 'department' | 'date';

type FormValues = {
  name: string;
  email: string;
  department: string;
  date: string;
  note: string;
};

type FormErrors = Partial<Record<FieldName, string>>;

type AppointmentSectionProps = {
  preselectedDepartment: string;
  preselectToken: number;
};

const emptyValues: FormValues = { name: '', email: '', department: '', date: '', note: '' };
const fieldOrder: FieldName[] = ['name', 'email', 'department', 'date'];

function todayString() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${now.getFullYear()}-${month}-${day}`;
}

function validate(values: FormValues, minDate: string): FormErrors {
  const errors: FormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = 'Enter a name of at least 2 characters.';
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }
  if (!values.department) {
    errors.department = 'Choose a department for this demo enquiry.';
  }
  if (!values.date) {
    errors.date = 'Choose a preferred date.';
  } else if (values.date < minDate) {
    errors.date = 'Choose today or a later date.';
  }

  return errors;
}

export default function AppointmentSection({ preselectedDepartment, preselectToken }: AppointmentSectionProps) {
  const minDate = useRef(todayString()).current;
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const fieldRefs = useRef<Partial<Record<FieldName, HTMLInputElement | HTMLSelectElement | null>>>({});
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!preselectedDepartment || preselectToken === 0) return;
    setValues((previous) => ({ ...previous, department: preselectedDepartment }));
    setErrors((previous) => ({ ...previous, department: undefined }));
    setSubmitted(false);
  }, [preselectedDepartment, preselectToken]);

  const updateField = <K extends keyof FormValues>(field: K, value: FormValues[K]) => {
    setValues((previous) => {
      const next = { ...previous, [field]: value };
      if (field in errors) {
        const fieldErrors = validate(next, minDate);
        setErrors((current) => ({ ...current, [field]: fieldErrors[field as FieldName] }));
      }
      return next;
    });
  };

  const handleBlur = (field: FieldName) => {
    const fieldErrors = validate(values, minDate);
    setErrors((current) => ({ ...current, [field]: fieldErrors[field] }));
  };

  const describedBy = (field: FieldName, extraId?: string) => {
    const ids = [extraId, errors[field] ? `${field}-error` : undefined].filter(Boolean);
    return ids.length > 0 ? ids.join(' ') : undefined;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values, minDate);
    setErrors(nextErrors);

    const firstInvalid = fieldOrder.find((field) => nextErrors[field]);
    if (firstInvalid) {
      fieldRefs.current[firstInvalid]?.focus();
      return;
    }

    setSubmitted(true);
  };

  const resetForm = () => {
    setValues(emptyValues);
    setErrors({});
    setSubmitted(false);
    nameRef.current?.focus();
  };

  return (
    <section className="section" id="appointment" aria-labelledby="appointment-title">
      <div className="container">
        <SectionHeading
          eyebrow="05 / Appointment request"
          id="appointment-title"
          title={
            <>
              A demo enquiry, <em>nothing more.</em>
            </>
          }
          intro="This form collects only the minimum sample details needed to demonstrate validation and a confirmation state. It never sends data anywhere and must not be used for health information."
        />

        <div className="appointment-grid">
          <div className="appointment-info">
            <h3>What this form does</h3>
            <ul className="info-list">
              <li>
                <LockKeyhole size={20} aria-hidden="true" />
                <span>
                  <strong>Keeps it minimal.</strong> Name, email, department and a preferred date — no medical history.
                </span>
              </li>
              <li>
                <Send size={20} aria-hidden="true" />
                <span>
                  <strong>Sends nothing.</strong> Validation runs locally and the result appears on this page only.
                </span>
              </li>
              <li>
                <Clock3 size={20} aria-hidden="true" />
                <span>
                  <strong>Books nothing.</strong> Availability, dates and confirmation are demo placeholders only.
                </span>
              </li>
            </ul>
            <p className="appointment-info__warning">
              <Info size={18} aria-hidden="true" />
              Do not enter medical, health or other sensitive information. This is not a patient intake form.
            </p>
          </div>

          <div className="form-card">
            {submitted ? (
              <div className="success-panel" role="status" aria-live="polite">
                <span className="success-panel__icon" aria-hidden="true">
                  <Checkmark />
                </span>
                <h3>Demo form complete</h3>
                <p className="success-panel__headline">
                  Demo enquiry received — no real booking/payment is made. Replace this demo flow with your client's
                  confirmed process before launch.
                </p>
                <p className="success-panel__summary">
                  Sample details shown only here: {departmentName(values.department)} · {values.date}
                </p>
                <button className="btn btn--primary btn--small" type="button" onClick={resetForm}>
                  <RotateCcw size={16} aria-hidden="true" /> Send another demo enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <p className="form-card__eyebrow">Demo enquiry · no data transmitted</p>
                <h3>Tell us what you would like to see</h3>
                <p className="form-card__intro">
                  All fields marked required are checked in your browser. Nothing is saved after you leave this page.
                </p>

                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="enquiry-name">Full name (required)</label>
                    <input
                      id="enquiry-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Sample name"
                      value={values.name}
                      onChange={(event) => updateField('name', event.target.value)}
                      onBlur={() => handleBlur('name')}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={describedBy('name')}
                      ref={(element) => {
                        fieldRefs.current.name = element;
                        nameRef.current = element;
                      }}
                    />
                    {errors.name ? (
                      <span className="field-error" id="name-error">
                        {errors.name}
                      </span>
                    ) : null}
                  </div>

                  <div className="field">
                    <label htmlFor="enquiry-email">Email address (required)</label>
                    <input
                      id="enquiry-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="sample@example.invalid"
                      value={values.email}
                      onChange={(event) => updateField('email', event.target.value)}
                      onBlur={() => handleBlur('email')}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={describedBy('email')}
                      ref={(element) => {
                        fieldRefs.current.email = element;
                      }}
                    />
                    {errors.email ? (
                      <span className="field-error" id="email-error">
                        {errors.email}
                      </span>
                    ) : null}
                  </div>

                  <div className="field">
                    <label htmlFor="enquiry-department">Department of interest (required)</label>
                    <select
                      id="enquiry-department"
                      name="department"
                      value={values.department}
                      onChange={(event) => updateField('department', event.target.value)}
                      onBlur={() => handleBlur('department')}
                      aria-invalid={Boolean(errors.department)}
                      aria-describedby={describedBy('department')}
                      ref={(element) => {
                        fieldRefs.current.department = element;
                      }}
                    >
                      <option value="">Choose a sample department</option>
                      {departments.map((department) => (
                        <option value={department.id} key={department.id}>
                          {department.name}
                        </option>
                      ))}
                    </select>
                    {errors.department ? (
                      <span className="field-error" id="department-error">
                        {errors.department}
                      </span>
                    ) : null}
                  </div>

                  <div className="field">
                    <label htmlFor="enquiry-date">Preferred date (required)</label>
                    <input
                      id="enquiry-date"
                      name="date"
                      type="date"
                      min={minDate}
                      value={values.date}
                      onChange={(event) => updateField('date', event.target.value)}
                      onBlur={() => handleBlur('date')}
                      aria-invalid={Boolean(errors.date)}
                      aria-describedby={describedBy('date', 'date-hint')}
                      ref={(element) => {
                        fieldRefs.current.date = element;
                      }}
                    />
                    <span className="field-hint" id="date-hint">
                      Demo date only — no availability is checked.
                    </span>
                    {errors.date ? (
                      <span className="field-error" id="date-error">
                        {errors.date}
                      </span>
                    ) : null}
                  </div>

                  <div className="field field--full">
                    <label htmlFor="enquiry-note">Anything else? (optional)</label>
                    <textarea
                      id="enquiry-note"
                      name="note"
                      rows={3}
                      maxLength={200}
                      placeholder="A question about the demo layout"
                      value={values.note}
                      onChange={(event) => updateField('note', event.target.value)}
                      aria-describedby="note-hint"
                    />
                    <span className="field-hint" id="note-hint">
                      Please do not include medical or health information.
                    </span>
                  </div>
                </div>

                <div className="form-actions">
                  <button className="btn btn--primary" type="submit">
                    Send demo enquiry <Send size={17} aria-hidden="true" />
                  </button>
                  <button className="btn btn--quiet" type="button" onClick={resetForm}>
                    Clear form
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Checkmark() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-hidden="true">
      <path d="m5 12.5 4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
