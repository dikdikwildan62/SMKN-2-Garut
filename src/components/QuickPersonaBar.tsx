import React from 'react';
import { UserCheck, ShieldCheck, Factory, GraduationCap } from 'lucide-react';
import { personasData } from '../data/personasData';

interface QuickPersonaBarProps {
  selectedPersona: string;
  onSelectPersona: (personaId: string) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const QuickPersonaBar: React.FC<QuickPersonaBarProps> = ({
  selectedPersona,
  onSelectPersona,
  onNavigateSection,
}) => {
  const currentPersonaData = personasData.find((p) => p.id === selectedPersona) || personasData[0];

  const getPersonaIcon = (id: string) => {
    switch (id) {
      case 'calon_siswa':
        return GraduationCap;
      case 'orang_tua':
        return ShieldCheck;
      case 'industri':
        return Factory;
      case 'siswa_aktif':
        return UserCheck;
      default:
        return UserCheck;
    }
  };

  return (
    <div className="bg-slate-900 text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-1">
              Navigasi Berbasis Kebutuhan Pengunjung (User-Centered Architecture)
            </div>
            <p className="text-xs text-slate-300">
              Pilih peran Anda untuk mendapatkan rekomendasi menu dan jalur informasi paling relevan:
            </p>
          </div>

          {/* Interactive Persona Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-800/80 rounded-lg border border-slate-700">
            {personasData.map((persona) => {
              const Icon = getPersonaIcon(persona.id);
              const isActive = selectedPersona === persona.id;
              return (
                <button
                  key={persona.id}
                  onClick={() => onSelectPersona(persona.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{persona.title.split(' (')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Persona Guidance Strip */}
        <div className="mt-3 pt-3 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="bg-slate-800/40 p-2.5 rounded border border-slate-800">
            <span className="text-slate-400 font-medium block">Tujuan Utama:</span>
            <span className="text-slate-200 mt-0.5 block">{currentPersonaData.keyGoal}</span>
          </div>
          <div className="bg-slate-800/40 p-2.5 rounded border border-slate-800">
            <span className="text-slate-400 font-medium block">Titik Keraguan / Pain Point:</span>
            <span className="text-slate-200 mt-0.5 block">{currentPersonaData.painPoint}</span>
          </div>
          <div className="bg-slate-800/40 p-2.5 rounded border border-slate-800 flex flex-col justify-between">
            <span className="text-slate-400 font-medium block">Rekomendasi Jalur Menu:</span>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {currentPersonaData.journeySteps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (step.targetUrl.includes('karya')) onNavigateSection('karya-iot-robotika');
                    else if (step.targetUrl.includes('bengkel')) onNavigateSection('bengkel-fasilitas');
                    else if (step.targetUrl.includes('ppdb')) onNavigateSection('ppdb');
                    else if (step.targetUrl.includes('industri')) onNavigateSection('kemitraan-industri');
                    else if (step.targetUrl.includes('profil')) onNavigateSection('profil');
                    else if (step.targetUrl.includes('layanan')) onNavigateSection('portal-siswa');
                  }}
                  className="inline-flex items-center text-[11px] text-amber-300 hover:text-white underline cursor-pointer"
                >
                  {step.targetMenu}
                  {idx < currentPersonaData.journeySteps.length - 1 ? ' →' : ''}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
