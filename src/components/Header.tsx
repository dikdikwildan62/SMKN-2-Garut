import React, { useState } from 'react';
import { 
  Menu, X, ChevronDown, Compass, 
  Cpu, Wrench, Briefcase, GraduationCap, 
  ExternalLink, Layers
} from 'lucide-react';
import { sitemapData } from '../data/sitemapData';

interface HeaderProps {
  currentView: 'portal' | 'blueprint';
  onViewChange: (view: 'portal' | 'blueprint') => void;
  activeSection: string;
  onNavigateSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onViewChange,
  activeSection,
  onNavigateSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const mainNavItems = [
    { id: 'beranda', label: 'Beranda', icon: Compass },
    { id: 'profil', label: 'Profil', icon: GraduationCap },
    { id: 'bengkel-fasilitas', label: 'Bengkel & Lab', icon: Wrench },
    { id: 'karya-iot-robotika', label: 'Karya IoT & Robotika', icon: Cpu },
    { id: 'kemitraan-industri', label: 'Kemitraan PKL', icon: Briefcase },
    { id: 'ppdb', label: 'PPDB', icon: ExternalLink },
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigateSection(sectionId);
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Utility Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-amber-400">SMKN 2 Garut</span>
            <span className="text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-400">Jurusan Teknik Elektronika (TEI & Mekatronika)</span>
            <span className="hidden md:inline font-mono text-[11px] text-slate-400">elektronika.smkn2garut.sch.id</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onViewChange(currentView === 'blueprint' ? 'portal' : 'blueprint')}
              className="flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 font-medium transition-colors"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{currentView === 'blueprint' ? 'Tutup Blueprint IA' : 'Mode Dokumen Sitemap & Arsitektur'}</span>
            </button>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="hidden sm:inline text-slate-400">Akreditasi A Unggul</span>
          </div>
        </div>
      </div>

      {/* Main Top Bar adhering to the 3-zone contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element Brand mark */}
        <div className="flex items-center">
          <button 
            onClick={() => handleNavClick('beranda')}
            className="text-left group cursor-pointer focus:outline-none"
          >
            <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-900 transition-colors">
              Teknik Elektronika SMKN 2 Garut
            </span>
          </button>
        </div>

        {/* Zone 2: Clean 4-6 text navigation links */}
        <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-slate-600">
          {mainNavItems.map((item) => {
            const hasSubmenus = sitemapData.find((m) => m.id === item.id)?.submenus;
            const isSelected = activeSection === item.id;

            return (
              <div 
                key={item.id} 
                className="relative"
                onMouseEnter={() => hasSubmenus && setOpenDropdown(item.id)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1 py-2 text-sm transition-colors cursor-pointer ${
                    isSelected ? 'text-blue-800 font-semibold border-b-2 border-blue-800 -mb-[2px]' : 'hover:text-slate-900'
                  }`}
                >
                  <span>{item.label}</span>
                  {hasSubmenus && (
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {hasSubmenus && openDropdown === item.id && (
                  <div className="absolute left-0 top-full pt-1 w-72 z-50">
                    <div className="bg-white rounded-lg shadow-xl border border-slate-200 py-2">
                      <div className="px-3 py-1.5 border-b border-slate-100 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Submenu Arsitektur
                      </div>
                      {hasSubmenus.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => handleNavClick(item.id)}
                          className="w-full text-left px-3 py-2 text-xs hover:bg-slate-50 transition-colors group cursor-pointer"
                        >
                          <div className="font-medium text-slate-800 group-hover:text-blue-800">
                            {sub.title}
                          </div>
                          <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                            {sub.description}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => onViewChange(currentView === 'blueprint' ? 'portal' : 'blueprint')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
              currentView === 'blueprint'
                ? 'bg-amber-100 text-amber-900 border border-amber-300'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {currentView === 'blueprint' ? 'Tampilan Portal' : 'Arsitektur & Sitemap'}
          </button>

          <button
            onClick={() => handleNavClick('ppdb')}
            className="px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-800 rounded-md hover:bg-blue-900 transition-colors shadow-sm cursor-pointer whitespace-nowrap"
          >
            Info PPDB
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2">
          {mainNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                activeSection === item.id ? 'bg-blue-50 text-blue-800 font-semibold' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                onViewChange(currentView === 'blueprint' ? 'portal' : 'blueprint');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-sm text-amber-800 font-medium bg-amber-50 rounded-md"
            >
              {currentView === 'blueprint' ? 'Kembali ke Prototype Website' : 'Lihat Blueprint Arsitektur Informasi & Sitemap'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
