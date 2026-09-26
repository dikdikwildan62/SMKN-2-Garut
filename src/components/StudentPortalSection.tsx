import React, { useState } from 'react';
import { 
  Users, Wrench, Download, FileText, 
  Calendar, CheckCircle, Clock, Check, Laptop
} from 'lucide-react';

export const StudentPortalSection: React.FC = () => {
  const [borrowTool, setBorrowTool] = useState<string>('Rigol Digital Storage Oscilloscope (DS1104Z)');
  const [borrowStudentId, setBorrowStudentId] = useState<string>('');
  const [borrowSuccess, setBorrowSuccess] = useState<boolean>(false);
  const [downloadedItem, setDownloadedItem] = useState<string | null>(null);

  const downloadableModules = [
    {
      title: 'Jobsheet Praktikum Mikrokontroler ESP32 & FreeRTOS (Semester Genap)',
      code: 'JS-IOT-402',
      fileSize: '4.8 MB PDF',
      grade: 'Kelas XI & XII',
    },
    {
      title: 'Modul Otomasi PLC Siemens S7-1200 & HMI KTP700 Basic',
      code: 'JS-PLC-301',
      fileSize: '7.2 MB PDF',
      grade: 'Kelas XII TEI',
    },
    {
      title: 'Library Simbol Komponen KiCad SMKN 2 Garut (Custom Footprint Footprint SMD)',
      code: 'LIB-KICAD-V2',
      fileSize: '12.5 MB ZIP',
      grade: 'Semua Tingkat',
    },
    {
      title: 'Panduan Keselamatan Kerja & Standard Operating Procedure 5R Bengkel',
      code: 'SOP-K3-01',
      fileSize: '2.1 MB PDF',
      grade: 'Kelas X Wajib',
    },
  ];

  const handleBorrow = (e: React.FormEvent) => {
    e.preventDefault();
    setBorrowSuccess(true);
    setTimeout(() => {
      setBorrowSuccess(false);
      setBorrowStudentId('');
    }, 3500);
  };

  const handleDownload = (code: string) => {
    setDownloadedItem(code);
    setTimeout(() => {
      setDownloadedItem(null);
    }, 2000);
  };

  return (
    <section id="portal-siswa" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="pb-8 border-b border-slate-200">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-800">
            <Users className="w-4 h-4" />
            <span>Layanan Harian Siswa Aktif & Guru</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono text-slate-500">Submenu /portal-siswa</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Portal Layanan Akademik & Peminjaman Alat Bengkel
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
            Akses cepat tanpa antre bagi siswa aktif Teknik Elektronika untuk meminjam instrumen pengukuran, mengunduh jobsheet praktikum resmi, dan jadwal klub robotika.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tool Loan Form */}
          <div className="lg:col-span-6 bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <Wrench className="w-5 h-5 text-blue-800" />
              <div>
                <h3 className="text-base font-bold text-slate-900">Formulir Digital Peminjaman Alat Praktik</h3>
                <span className="text-[11px] text-slate-500">Layanan mandiri dengan approval Toolman</span>
              </div>
            </div>

            {borrowSuccess ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-800 space-y-2">
                <div className="flex items-center gap-2 font-bold">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Permohonan Peminjaman Diterima!</span>
                </div>
                <p>
                  Nomor Token: <span className="font-mono font-bold">TE-LOAN-{Math.floor(1000 + Math.random() * 9000)}</span>. Silakan tunjukkan Kartu Tanda Siswa (KTS) ke Meja Toolman Bengkel Lantai 1.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBorrow} className="space-y-3 text-xs">
                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    Pilih Alat / Instrumen
                  </label>
                  <select
                    value={borrowTool}
                    onChange={(e) => setBorrowTool(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-800 bg-white"
                  >
                    <option value="Rigol Digital Storage Oscilloscope (DS1104Z)">Rigol Digital Storage Oscilloscope 100MHz (DS1104Z)</option>
                    <option value="Digital Multimeter Sanwa CD800a">Digital Multimeter Sanwa CD800a True RMS</option>
                    <option value="Weller Temperature Controlled Soldering Station">Weller Soldering Station WT 1010 ESD</option>
                    <option value="Logic Analyzer 16-Channel 500MS/s">Logic Analyzer 16-Channel 500MS/s USB</option>
                    <option value="Trainer Kit Sensor IoT ESP32 Starter">Trainer Kit Sensor IoT ESP32 Starter Box</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    NISN / Nama Siswa & Kelas
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: 0067182910 — Ridwan Kamil (XII TEI 2)"
                    value={borrowStudentId}
                    onChange={(e) => setBorrowStudentId(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-800"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">
                      Durasi Peminjaman
                    </label>
                    <select className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-800 bg-white">
                      <option>1 Sesi Jam Pelajaran (2 Jam)</option>
                      <option>Full Day Praktikum (07:30 - 15:30)</option>
                      <option>Peminjaman Persiapan Lomba (3 Hari)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">
                      Keperluan
                    </label>
                    <select className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-800 bg-white">
                      <option>Tugas Akhir / UKK</option>
                      <option>Praktikum KBM Reguler</option>
                      <option>Riset Mandiri Robotika</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-blue-800 hover:bg-blue-900 rounded transition-colors cursor-pointer"
                  >
                    Kirim Pengajuan Peminjaman Alat
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Download Jobsheet & Learning Materials */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-800" />
                <span>E-Library Jobsheet & Modul Praktikum</span>
              </h3>
              <span className="text-xs text-slate-500 font-mono">Tahun Ajaran 2025/2026</span>
            </div>

            <div className="space-y-3">
              {downloadableModules.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors shadow-xs flex items-center justify-between gap-4 text-xs"
                >
                  <div>
                    <span className="font-mono text-[10px] text-blue-800 bg-blue-50 px-1.5 py-0.5 rounded font-semibold">
                      {item.code}
                    </span>
                    <h4 className="font-bold text-slate-900 mt-1 leading-snug">
                      {item.title}
                    </h4>
                    <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-2">
                      <span>{item.grade}</span>
                      <span>·</span>
                      <span>{item.fileSize}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDownload(item.code)}
                    className="px-3 py-1.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
                  >
                    {downloadedItem === item.code ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Tersimpan</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5" />
                        <span>Unduh</span>
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>

            {/* Club Robotika Notice Banner */}
            <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-amber-400">Garut Robotics Club (G-Robotics)</span>
                <p className="text-xs text-slate-300 mt-0.5">
                  Latihan intensif persiapan Kontes Robot Pintar Nasional setiap Kamis & Sabtu pukul 15:30 WIB.
                </p>
              </div>
              <span className="text-xs font-mono bg-slate-800 text-slate-300 px-3 py-1 rounded shrink-0">
                Lab IOT-02
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
