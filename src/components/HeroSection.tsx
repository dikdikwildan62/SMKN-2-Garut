import React from 'react';
import { ArrowRight, Cpu, Wrench, Shield, Award } from 'lucide-react';

interface HeroSectionProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenBlueprint: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigateSection,
  onOpenBlueprint,
}) => {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Hero Image with measured scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_electronic_lab_1790401866720.jpg"
          alt="Suasana Bengkel Elektronika dan Laboratorium Praktik SMKN 2 Garut"
          className="w-full h-full object-cover object-center opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
              <span>SMK Pusat Keunggulan</span>
              <span aria-hidden="true">·</span>
              <span>Akreditasi A Unggul</span>
              <span aria-hidden="true">·</span>
              <span>Priangan Timur</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight text-balance">
              Mencetak Teknisi Unggul & Inovator IoT-Robotika Berkarakter Industri
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Website resmi Jurusan Teknik Elektronika SMKN 2 Garut (<span className="text-white font-mono text-sm">elektronika.smkn2garut.sch.id</span>). Wadah informasi kurikulum terapan, ruang etalase karya inovasi siswa, tur virtual bengkel praktik berstandar K3, serta gerbang kemitraan DUDIKA.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigateSection('karya-iot-robotika')}
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors shadow-sm cursor-pointer whitespace-nowrap"
              >
                <Cpu className="w-4 h-4" />
                <span>Lihat Karya Siswa (IoT & Robotika)</span>
              </button>

              <button
                onClick={() => onNavigateSection('bengkel-fasilitas')}
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md transition-colors cursor-pointer whitespace-nowrap"
              >
                <Wrench className="w-4 h-4" />
                <span>Tur Fasilitas Bengkel</span>
              </button>

              <button
                onClick={onOpenBlueprint}
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <span>Dokumen Arsitektur Sitemap</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Adjacent Proof Rigor */}
            <div className="pt-6 border-t border-slate-800/90 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="text-2xl font-bold text-white font-mono tabular-nums">94.2%</div>
                <div className="text-xs text-slate-400 mt-0.5">Daya Serap Kerja & Wirausaha</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-mono tabular-nums">6 Lab</div>
                <div className="text-xs text-slate-400 mt-0.5">Bengkel Standar Industri 5R</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-mono tabular-nums">24+ Mitra</div>
                <div className="text-xs text-slate-400 mt-0.5">Perusahaan DUDIKA Terikat MoU</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-mono tabular-nums">BNSP-LSP1</div>
                <div className="text-xs text-slate-400 mt-0.5">Sertifikasi Kompetensi Nasional</div>
              </div>
            </div>
          </div>

          {/* Quick Informational Card for the 4 Audiences */}
          <div className="lg:col-span-4 bg-slate-800/80 backdrop-blur-md rounded-xl p-5 border border-slate-700 shadow-xl space-y-4">
            <div className="border-b border-slate-700 pb-3">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Akses Langsung Audiens</span>
              <h2 className="text-base font-semibold text-white mt-1">Pintu Masuk Terpadu</h2>
            </div>

            <div className="space-y-2.5">
              <button
                onClick={() => onNavigateSection('ppdb')}
                className="w-full text-left p-3 rounded-lg bg-slate-900/60 hover:bg-slate-900 border border-slate-700/60 transition-colors flex items-center justify-between group cursor-pointer"
              >
                <div>
                  <div className="text-xs font-semibold text-amber-300 group-hover:text-amber-200">Calon Siswa Baru</div>
                  <div className="text-[11px] text-slate-400">Jalur pendaftaran, daya tampung & serunya ekskul robotika</div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </button>

              <button
                onClick={() => onNavigateSection('profil')}
                className="w-full text-left p-3 rounded-lg bg-slate-900/60 hover:bg-slate-900 border border-slate-700/60 transition-colors flex items-center justify-between group cursor-pointer"
              >
                <div>
                  <div className="text-xs font-semibold text-emerald-400 group-hover:text-emerald-300">Orang Tua Murid</div>
                  <div className="text-[11px] text-slate-400">Bebas biaya SPP, jaminan K3 bengkel & prospek masa depan</div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </button>

              <button
                onClick={() => onNavigateSection('kemitraan-industri')}
                className="w-full text-left p-3 rounded-lg bg-slate-900/60 hover:bg-slate-900 border border-slate-700/60 transition-colors flex items-center justify-between group cursor-pointer"
              >
                <div>
                  <div className="text-xs font-semibold text-blue-400 group-hover:text-blue-300">Mitra Industri (DUDIKA)</div>
                  <div className="text-[11px] text-slate-400">Kerjasama PKL 6 bulan, guru tamu & rekrutmen BKK</div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </button>

              <button
                onClick={() => onNavigateSection('portal-siswa')}
                className="w-full text-left p-3 rounded-lg bg-slate-900/60 hover:bg-slate-900 border border-slate-700/60 transition-colors flex items-center justify-between group cursor-pointer"
              >
                <div>
                  <div className="text-xs font-semibold text-purple-400 group-hover:text-purple-300">Siswa Aktif & Pengajar</div>
                  <div className="text-[11px] text-slate-400">Jadwal meja solder, pinjam alat osiloskop & download jobsheet</div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
