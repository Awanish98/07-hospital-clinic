import { useState } from 'react';
import DemoBanner from './components/DemoBanner';
import Header from './components/Header';
import Hero from './components/Hero';
import DepartmentSection from './components/DepartmentSection';
import DoctorSection from './components/DoctorSection';
import FacilitySection from './components/FacilitySection';
import GuideSection from './components/GuideSection';
import AppointmentSection from './components/AppointmentSection';
import ContactSection from './components/ContactSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

export default function App() {
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const [enquiryRequest, setEnquiryRequest] = useState({ department: '', token: 0 });

  const requestDepartment = (departmentId: string) => {
    setEnquiryRequest((previous) => ({ department: departmentId, token: previous.token + 1 }));
  };

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <DemoBanner />
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <DepartmentSection activeFilter={departmentFilter} onFilterChange={setDepartmentFilter} />
        <DoctorSection
          activeFilter={departmentFilter}
          onFilterChange={setDepartmentFilter}
          onRequestDepartment={requestDepartment}
        />
        <FacilitySection />
        <GuideSection />
        <AppointmentSection
          preselectedDepartment={enquiryRequest.department}
          preselectToken={enquiryRequest.token}
        />
        <ContactSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
