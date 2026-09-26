import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { QuickPersonaBar } from './components/QuickPersonaBar';
import { HeroSection } from './components/HeroSection';
import { ProfileSection } from './components/ProfileSection';
import { IoTRoboticsShowcase } from './components/IoTRoboticsShowcase';
import { WorkshopFacilitiesView } from './components/WorkshopFacilitiesView';
import { IndustrialHubView } from './components/IndustrialHubView';
import { PPDBSection } from './components/PPDBSection';
import { StudentPortalSection } from './components/StudentPortalSection';
import { Footer } from './components/Footer';
import { IADocumentationView } from './components/IADocumentationView';

export default function App() {
  const [currentView, setCurrentView] = useState<'portal' | 'blueprint'>('portal');
  const [activeSection, setActiveSection] = useState<string>('beranda');
  const [selectedPersona, setSelectedPersona] = useState<string>('calon_siswa');

  // Handle section scrolling and switching
  const handleNavigateSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (currentView === 'blueprint') {
      setCurrentView('portal');
    }

    // Scroll to section smoothly
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-300 selection:text-slate-900">
      {/* Top Header */}
      <Header
        currentView={currentView}
        onViewChange={setCurrentView}
        activeSection={activeSection}
        onNavigateSection={handleNavigateSection}
      />

      {currentView === 'blueprint' ? (
        /* Senior Information Architect Blueprint & Sitemap View */
        <IADocumentationView
          onNavigatePrototype={handleNavigateSection}
          onClose={() => setCurrentView('portal')}
        />
      ) : (
        /* Official Interactive School Portal View */
        <main className="flex-1">
          {/* Persona-focused Guidance Bar */}
          <QuickPersonaBar
            selectedPersona={selectedPersona}
            onSelectPersona={setSelectedPersona}
            onNavigateSection={handleNavigateSection}
          />

          {/* Hero Section */}
          <div id="beranda">
            <HeroSection
              onNavigateSection={handleNavigateSection}
              onOpenBlueprint={() => setCurrentView('blueprint')}
            />
          </div>

          {/* Dedicated Section: Karya IoT & Robotika Siswa (Requested) */}
          <IoTRoboticsShowcase />

          {/* Dedicated Section: Bengkel Elektronika & Fasilitas Praktik (Requested) */}
          <WorkshopFacilitiesView />

          {/* Profil Jurusan & Akademik */}
          <ProfileSection />

          {/* Kemitraan Industri, Magang PKL 6 Bulan & BKK */}
          <IndustrialHubView />

          {/* PPDB & Informasi untuk Calon Siswa & Orang Tua */}
          <PPDBSection />

          {/* Portal Layanan Harian Siswa Aktif & Guru */}
          <StudentPortalSection />
        </main>
      )}

      {/* Institutional Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenBlueprint={() => setCurrentView('blueprint')}
      />
    </div>
  );
}
