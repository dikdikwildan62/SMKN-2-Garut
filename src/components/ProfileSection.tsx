import React from 'react';
import { GraduationCap, Award, BookOpen, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ProfileSection: React.FC = () => {
  const concentrations = [
    {
      title: 'Teknik Elektronika Industri (TEI)',
      focus: 'Konsentrasi Utama',
      description: 'Fokus pada instalasi kendali logika terprogram (PLC), motor industri 3 fasa, pneumatik elektro-mekanik, dan pemeliharaan mesin pabrik.',
      occupations: ['Teknisi Otomasi Pabrik', 'Maintenance Engineer', 'Instalatur Sistem Kendali PLC'],
    },
    {
      title: 'IoT & Sistem Tertanam (Embedded Systems)',
      focus: 'Peminatan Inovasi',
      description: 'Fokus pada pemrograman mikrokontroler 32-bit (ESP32/ARM), integrasi sensor array, komunikasi nirkabel jarak jauh LoRa/MQTT, dan cloud dashboard.',
      occupations: ['IoT Device Hardware Developer', 'Smart System Integrator', 'Firmware Engineer Junior'],
    },
    {
      title: 'Perancangan Sirkuit & Audio Video',
      focus: 'Keahlian Terapan',
      description: 'Fokus pada routing papan sirkuit tercetak (PCB Design KiCad), perakitan komponen SMD berpresisi tinggi, dan perbaikan perangkat telekomunikasi audio.',
      occupations: ['PCB Layout Designer', 'SMD Assembly Technician', 'Hardware Quality Assurance'],
    },
  ];

  return (
    <section id="profil" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="pb-8 border-b border-slate-200">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-800">
            <GraduationCap className="w-4 h-4" />
            <span>Identitas & Keunggulan Akademik</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono text-slate-500">Submenu /profil</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Profil Jurusan Teknik Elektronika SMKN 2 Garut
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
            Didirikan sebagai salah satu program keahlian tertua dan terdepan di SMKN 2 Garut, jurusan ini bertransformasi menjadi pusat pelatihan vokasi modern yang menggabungkan rekayasa sirkuit keras dengan teknologi komputasi awan.
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 bg-slate-900 text-white p-6 rounded-xl border border-slate-800 space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
              Visi Program Keahlian
            </span>
            <blockquote className="text-base sm:text-lg font-medium leading-relaxed italic text-slate-100">
              "Menjadi Program Keahlian Teknik Elektronika terunggul di Jawa Barat yang melahirkan teknisi profesional, berdaya saing global, berintegritas tinggi, dan piawai dalam inovasi IoT serta Robotika terapan."
            </blockquote>

            <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-300">
              <span className="font-semibold text-white block">Misi Utama:</span>
              <ul className="space-y-1.5 list-disc list-inside">
                <li>Menyelenggarakan pembelajaran berbasis proyek industri (Project-Based Learning).</li>
                <li>Menanamkan budaya kerja industri 5R dan Keselamatan Kerja K3 sejak kelas X.</li>
                <li>Mewujudkan kemitraan strategis dengan DUDIKA berskala nasional dan multinasional.</li>
                <li>Mendorong riset terapan tepat guna untuk memecahkan problematika lokal Garut.</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-800">
              Standar Pendidik & Akreditasi
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              Tenaga Pendidik Bersertifikasi Asesor BNSP
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Seluruh guru produktif di jurusan Teknik Elektronika telah mengantongi Sertifikat Asesor Kompetensi dari Badan Nasional Sertifikasi Profesi (BNSP) dan mengikuti magang industri bersertifikat di PT Len dan Panasonic.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-3 bg-white rounded border border-slate-200">
                <span className="text-slate-500 block">Status Akreditasi</span>
                <span className="text-sm font-bold text-slate-900 mt-0.5 block">Akreditasi A (Unggul)</span>
              </div>
              <div className="p-3 bg-white rounded border border-slate-200">
                <span className="text-slate-500 block">Lembaga Sertifikasi</span>
                <span className="text-sm font-bold text-slate-900 mt-0.5 block">TUK Mandiri LSP-P1</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Concentrations */}
        <div className="mt-12 space-y-4">
          <h3 className="text-lg font-bold text-slate-900">
            Konsentrasi Keahlian & Peta Kompetensi Siswa
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {concentrations.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono font-semibold text-blue-800 bg-blue-50 px-2 py-0.5 rounded">
                    {item.focus}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 mt-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-semibold text-slate-500 block mb-1">
                    Peluang Okupasi Karir:
                  </span>
                  <ul className="text-xs text-slate-700 space-y-1">
                    {item.occupations.map((occ, oIdx) => (
                      <li key={oIdx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                        <span>{occ}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
