import React, { useState } from 'react';
import { 
  Briefcase, Building2, CheckCircle2, 
  FileCheck, Users, ArrowUpRight, Handshake, Send
} from 'lucide-react';
import { industryPartnersData } from '../data/industryData';

export const IndustrialHubView: React.FC = () => {
  const [showMouModal, setShowMouModal] = useState<boolean>(false);
  const [mouSubmitted, setMouSubmitted] = useState<boolean>(false);
  const [companyName, setCompanyName] = useState<string>('');
  const [contactEmail, setContactEmail] = useState<string>('');
  const [scope, setScope] = useState<string>('Magang PKL 6 Bulan');

  const handleMouSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMouSubmitted(true);
    setTimeout(() => {
      setMouSubmitted(false);
      setShowMouModal(false);
      setCompanyName('');
      setContactEmail('');
    }, 2500);
  };

  return (
    <section id="kemitraan-industri" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-800">
              <Briefcase className="w-4 h-4" />
              <span>Link & Match Dunia Usaha & Industri (DUDIKA)</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono text-slate-500">Submenu /kemitraan-industri</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Pusat Kemitraan Industri, PKL & Rekrutmen Karir
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
              Menghubungkan siswa dan lulusan Teknik Elektronika SMKN 2 Garut dengan 24+ perusahaan manufaktur terkemuka melalui program Praktik Kerja Lapangan 6 bulan dan Bursa Kerja Khusus (BKK).
            </p>
          </div>

          <div>
            <button
              onClick={() => setShowMouModal(true)}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors shadow-xs cursor-pointer whitespace-nowrap"
            >
              <Handshake className="w-4 h-4 text-amber-400" />
              <span>Ajukan Kerjasama Industri (MoU)</span>
            </button>
          </div>
        </div>

        {/* 3 Value Pillars for Industry */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Kurikulum Selaras Industri</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Materi pembelajaran PLC, mikrokontroler, dan K3 disinkronkan secara berkala dengan standar kompetensi teknisi PT Len, Panasonic, dan Polytron.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Magang PKL Terpusat 6 Bulan</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Siswa kelas XII diterjunkan langsung ke lini produksi dan riset selama 1 semester penuh dengan pembimbing industri dan asuransi kecelakaan kerja.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Rekrutmen Langsung di Kampus (BKK)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Perusahaan mitra dapat menyelenggarakan rekrutmen teknisi langsung di SMKN 2 Garut sebelum siswa wisuda, memangkas biaya pencarian tenaga kerja.
            </p>
          </div>
        </div>

        {/* Official Partners Directory */}
        <div className="mt-12 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900">
              Perusahaan Mitra Resmi Terikat Perjanjian Kerjasama (MoU)
            </h3>
            <span className="text-xs text-slate-500 font-mono">
              Terverifikasi Pokja Kemitraan SMKN 2 Garut
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryPartnersData.map((partner) => (
              <div 
                key={partner.id}
                className="bg-white p-5 rounded-xl border border-slate-200 hover:border-blue-400 transition-colors shadow-xs flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {partner.name}
                    </h4>
                    <span className="text-[10px] font-mono bg-blue-50 text-blue-800 px-1.5 py-0.5 rounded shrink-0">
                      {partner.city.split(',')[0]}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    {partner.sector}
                  </p>

                  <div className="mt-3 pt-3 border-t border-slate-100 space-y-1.5 text-xs">
                    <div className="text-slate-600">
                      <span className="font-medium text-slate-700">Masa Berlaku:</span> {partner.mouYear}
                    </div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {partner.cooperationScope.map((scopeItem, idx) => (
                        <span key={idx} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                          {scopeItem}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Kuota PKL: <strong>{partner.quotaPerYear} Siswa/Thn</strong></span>
                  <span className="text-emerald-700 font-semibold">{partner.alumniHired} Alumni Bekerja</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* MoU Submission Modal */}
      {showMouModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold">Formulir Inisiasi Kemitraan Industri</h3>
                <p className="text-xs text-slate-300">Hub Kemitraan SMKN 2 Garut</p>
              </div>
              <button 
                onClick={() => setShowMouModal(false)}
                className="text-slate-400 hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>

            {mouSubmitted ? (
              <div className="p-8 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-slate-900">Pengajuan MoU Berhasil Dikirim</h4>
                <p className="text-xs text-slate-600">
                  Tim Hubungan Industri SMKN 2 Garut akan menghubungi Anda dalam waktu 1x24 jam kerja.
                </p>
              </div>
            ) : (
              <form onSubmit={handleMouSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Nama Perusahaan / Lembaga
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="PT Manufaktur Komponen Indonesia"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Email Resmi HRD / Rekrutmen
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="hrd@perusahaan.co.id"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Fokus Minat Kerjasama
                  </label>
                  <select
                    value={scope}
                    onChange={(e) => setScope(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-800 bg-white"
                  >
                    <option value="Magang PKL 6 Bulan">Penerimaan Magang PKL 6 Bulan</option>
                    <option value="Rekrutmen Teknisi BKK">Perekrutan Langsung Lulusan Teknisi (BKK)</option>
                    <option value="Kelas Industri & Guru Tamu">Penyelenggaraan Kelas Industri / Guru Tamu</option>
                    <option value="Donasi Peralatan & Teaching Factory">Kerjasama Teaching Factory / Alat</option>
                  </select>
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowMouModal(false)}
                    className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800 cursor-pointer"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-semibold text-white bg-blue-800 hover:bg-blue-900 rounded cursor-pointer"
                  >
                    Kirim Permohonan Kemitraan
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
