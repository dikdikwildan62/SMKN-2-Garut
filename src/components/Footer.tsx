import React from 'react';
import { Layers, MapPin, Mail, Phone, ExternalLink, ShieldCheck } from 'lucide-react';
import { sitemapData } from '../data/sitemapData';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenBlueprint: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateSection,
  onOpenBlueprint,
}) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Identity Column */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
                Pemerintah Daerah Provinsi Jawa Barat
              </span>
              <h3 className="text-lg font-bold text-white mt-1">
                SMK Negeri 2 Garut
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Program Keahlian Teknik Elektronika (TEI, Mekatronika & IoT)
              </p>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Mendidik generasi muda menjadi teknisi ahli yang berkarakter, menguasai teknologi otomasi mutakhir, dan siap kerja di industri elektronika global.
            </p>

            <div className="space-y-2 text-xs text-slate-400 pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>Jl. Suherman No. 90, Tarogong Kidul, Kabupaten Garut, Jawa Barat 44151</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="font-mono text-slate-300">elektronika@smkn2garut.sch.id</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <span>(0262) 233141 · Hotline PPDB: 0812-2244-SMKN2G</span>
              </div>
            </div>
          </div>

          {/* Quick Sitemap Links */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6 text-xs">
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider mb-3">
                Navigasi Jurusan
              </h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => onNavigateSection('beranda')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Beranda & Sorotan
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigateSection('profil')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Profil & Konsentrasi TEI
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigateSection('bengkel-fasilitas')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Bengkel & Lab PLC
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigateSection('karya-iot-robotika')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Galeri Karya IoT Siswa
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigateSection('karya-iot-robotika')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Divisi Robotika (G-Robotics)
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white uppercase tracking-wider mb-3">
                Kemitraan & Siswa
              </h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => onNavigateSection('kemitraan-industri')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Daftar Mitra DUDIKA
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigateSection('kemitraan-industri')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Panduan Magang PKL 6 Bulan
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigateSection('ppdb')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Syarat Pendaftaran PPDB
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigateSection('portal-siswa')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Peminjaman Alat Bengkel
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigateSection('portal-siswa')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Unduh E-Library Jobsheet
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Senior Architect Tools */}
          <div className="lg:col-span-3 space-y-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-400" />
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Dokumen Arsitektur Informasi
              </h4>
            </div>

            <p className="text-[11px] text-slate-400 leading-relaxed">
              Struktur Sitemap resmi disusun oleh Senior Web Information Architect sesuai standar PANDI (.sch.id) dan Kemendikbudristek SMK PK.
            </p>

            <button
              onClick={onOpenBlueprint}
              className="w-full py-2 px-3 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded transition-colors cursor-pointer"
            >
              Buka Matriks & Pohon Sitemap
            </button>

            <div className="pt-2 border-t border-slate-800 flex items-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Domain Resmi Terverifikasi: elektronika.smkn2garut.sch.id</span>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Jurusan Teknik Elektronika SMKN 2 Garut. Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Akreditasi A Unggul (BAN-SM)</span>
            <span aria-hidden="true">·</span>
            <span>Standar 5R & K3 Listrik</span>
            <span aria-hidden="true">·</span>
            <span>Pusat Keunggulan SMK Jabar</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
