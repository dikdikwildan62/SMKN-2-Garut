import React, { useState } from 'react';
import { 
  GraduationCap, HelpCircle, ChevronDown, 
  ChevronUp, CheckCircle2, ShieldCheck, 
  Wallet, FileCheck, PhoneCall
} from 'lucide-react';

export const PPDBSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Apakah lulusan Teknik Elektronika SMKN 2 Garut bisa melanjutkan kuliah ke Perguruan Tinggi?',
      a: 'Tentu saja bisa. Setiap tahunnya sekitar 20-25% lulusan kami melanjutkan ke jenjang D3/D4/S1 di perguruan tinggi negeri ternama seperti ITB, UPI, Polban, PENS Surabaya, dan Telkom University, baik melalui jalur SNBP (prestasi nilai raport), SNBT, maupun beasiswa KIP Kuliah.'
    },
    {
      q: 'Apakah jurusan Teknik Elektronika cocok untuk siswi perempuan?',
      a: 'Sangat cocok! Bidang elektronika modern menuntut ketelitian tinggi, logika pemrograman, dan kepekaan desain PCB mikro. Siswi perempuan di jurusan kami secara konsisten meraih peringkat atas di kelas dan sering dipercaya industri perakitan elektronika presisi tinggi.'
    },
    {
      q: 'Mengapa terdapat syarat mutlak "Tidak Buta Warna" pada jurusan ini?',
      a: 'Kecakapan membedakan warna adalah standar keselamatan dan keahlian esensial di bidang elektronika. Siswa wajib membaca kode warna gelang resistor (misal: merah, coklat, jingga), mengidentifikasi kode warna kabel instalasi listrik 3 fasa (merah, kuning, hitam, biru), dan membaca status LED instrumen.'
    },
    {
      q: 'Bagaimana transparansi biaya pendidikan di SMKN 2 Garut?',
      a: 'Sebagai SMK Negeri di bawah Pemerintah Provinsi Jawa Barat, SMKN 2 Garut BEBAS BIAYA SPP / IURAN BULANAN. Biaya awal hanya mencakup perlengkapan kejuruan wajib pribadi yang menjadi milik siswa: pakaian wearpack bengkel berstandar K3, sepatu safety antistatis, dan buku jobsheet praktikum.'
    }
  ];

  return (
    <section id="ppdb" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="pb-8 border-b border-slate-200">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-800">
            <GraduationCap className="w-4 h-4" />
            <span>Pusat Informasi Calon Siswa & Orang Tua</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono text-slate-500">Submenu /ppdb</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Penerimaan Peserta Didik Baru (PPDB) & Informasi Beasiswa
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
            Bergabunglah dengan keluarga besar Teknik Elektronika SMKN 2 Garut. Ketahui alur pendaftaran, transparansi biaya, dan jawaban atas pertanyaan penting orang tua murid.
          </p>
        </div>

        {/* 4 Tracks of Admission */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
            <span className="text-xs font-mono font-bold text-blue-800 bg-blue-100/70 px-2 py-0.5 rounded">
              Jalur 01
            </span>
            <h3 className="text-base font-bold text-slate-900">Prestasi Raport Unggulan</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Seleksi berdasarkan rekam nilai raport SMP/MTs semester 1 s.d. 5 untuk mata pelajaran Matematika, IPA, dan Bahasa Inggris.
            </p>
          </div>

          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
            <span className="text-xs font-mono font-bold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded">
              Jalur 02
            </span>
            <h3 className="text-base font-bold text-slate-900">Kejuaraan & Bakat Robotika</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Peluang prioritas bagi peraih piagam kejuaraan lomba robotika, sains terapan, karya ilmiah remaja (KIR), atau Lomba Kompetensi Siswa.
            </p>
          </div>

          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
            <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded">
              Jalur 03
            </span>
            <h3 className="text-base font-bold text-slate-900">Afirmasi & KIP / PIP</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Jalur keberpihakan untuk keluarga ekonomi kurang mampu terdaftar di DTKS dengan fasilitas beasiswa seragam dan toolkit praktik mandiri.
            </p>
          </div>

          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
            <span className="text-xs font-mono font-bold text-purple-800 bg-purple-100/70 px-2 py-0.5 rounded">
              Jalur 04
            </span>
            <h3 className="text-base font-bold text-slate-900">Domisili & Anak Guru</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Alokasi kuota khusus wilayah terdekat kampus SMKN 2 Garut di Kecamatan Tarogong Kidul dan apresiasi putra-putri tenaga pendidik.
            </p>
          </div>
        </div>

        {/* Requirements & Tuition Transparency Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Requirements Card */}
          <div className="lg:col-span-6 bg-slate-900 text-white p-6 rounded-xl border border-slate-800 space-y-4">
            <div className="flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-amber-400" />
              <h3 className="text-base font-bold text-white">
                Syarat Khusus Pendaftaran Jurusan Teknik Elektronika
              </h3>
            </div>

            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Surat Keterangan Tidak Buta Warna:</strong> Wajib dari dokter puskesmas atau rumah sakit pemerintah (buta warna parsial/total tidak memenuhi syarat demi keselamatan kerja bengkel).
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Ijazah / Surat Keterangan Lulus (SKL):</strong> Asli dan fotokopi legalisir dari SMP/MTs sederajat.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Buku Raport Asli & Akta Kelahiran:</strong> Disertai fotokopi Kartu Keluarga (KK).
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Minat & Motivasi Belajar:</strong> Memiliki minat tinggi terhadap teknologi otomasi, komputer, dan perangkat keras elektronik.
                </span>
              </li>
            </ul>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-amber-300">
              <span>Daya Tampung: <strong>3 Rombel (108 Siswa)</strong></span>
              <span className="font-mono">Pendaftaran via: ppdb.jabarprov.go.id</span>
            </div>
          </div>

          {/* Tuition Transparency for Parents */}
          <div className="lg:col-span-6 bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
            <div className="flex items-center gap-2">
              <Wallet className="w-5 h-5 text-blue-800" />
              <h3 className="text-base font-bold text-slate-900">
                Transparansi Biaya untuk Orang Tua Murid
              </h3>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Pihak sekolah mengedepankan keterbukaan informasi keuangan agar orang tua tidak terbebani pungutan liar:
            </p>

            <div className="space-y-2 text-xs">
              <div className="p-3 bg-white rounded border border-slate-200 flex items-center justify-between">
                <span className="font-medium text-slate-700">Biaya SPP / Iuran Bulanan</span>
                <span className="font-bold text-emerald-700">GRATIS (Didanai BOPD Pemprov Jabar)</span>
              </div>
              <div className="p-3 bg-white rounded border border-slate-200 flex items-center justify-between">
                <span className="font-medium text-slate-700">Pemakaian Bengkel & Komponen Praktikum</span>
                <span className="font-bold text-emerald-700">GRATIS (Didanai Dana BOS SMK)</span>
              </div>
              <div className="p-3 bg-white rounded border border-slate-200 flex items-center justify-between">
                <span className="font-medium text-slate-700">Wearpack & Sepatu Safety Siswa</span>
                <span className="text-slate-600">Perlengkapan Milik Pribadi Siswa</span>
              </div>
            </div>

            <div className="p-3 bg-blue-50/60 rounded border border-blue-200 text-xs text-blue-900 flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-blue-700 shrink-0" />
              <span>
                Konsultasi PPDB Jurusan WhatsApp: <strong>0812-2244-SMKN2G (Jam Kerja)</strong>
              </span>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="mt-12 space-y-4">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-blue-800" />
            <span>Tanya Jawab Seputar Jurusan (FAQ Orang Tua & Calon Siswa)</span>
          </h3>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-lg overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-4 bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-4 transition-colors cursor-pointer"
                  >
                    <span className="text-sm font-semibold text-slate-800">{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="p-4 bg-white text-xs text-slate-600 leading-relaxed border-t border-slate-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
