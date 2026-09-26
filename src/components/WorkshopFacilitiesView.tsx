import React, { useState } from 'react';
import { 
  Wrench, ShieldAlert, Cpu, CheckCircle, 
  Clock, MapPin, Users, Info, Calendar, FileText, ChevronRight
} from 'lucide-react';
import { facilitiesData } from '../data/facilitiesData';
import { WorkshopFacility } from '../types';

export const WorkshopFacilitiesView: React.FC = () => {
  const [selectedFacilityId, setSelectedFacilityId] = useState<string>(facilitiesData[0].id);
  const [activeTab, setActiveTab] = useState<'peralatan' | 'k3_standar' | 'jobsheet'>('peralatan');

  // Interactive booking simulation
  const [bookingSlot, setBookingSlot] = useState<string>('Slot Siang (13:30 - 15:30)');
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);

  const activeFacility: WorkshopFacility = facilitiesData.find((f) => f.id === selectedFacilityId) || facilitiesData[0];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
    }, 3500);
  };

  return (
    <section id="bengkel-fasilitas" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="pb-8 border-b border-slate-200">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-800">
            <Wrench className="w-4 h-4" />
            <span>Infrastruktur & Sarana Praktik Vokasi</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono text-slate-500">Submenu /bengkel-fasilitas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Fasilitas Bengkel Elektronika & Laboratorium Canggih
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
            SMKN 2 Garut berkomitmen menghadirkan ekosistem bengkel berstandar industri 5R dan K3, dilengkapi trainer otomatisasi modern, instrumen pengukuran presisi, dan studio perakitan sirkuit terpadu.
          </p>
        </div>

        {/* Facility Selector Tabs */}
        <div className="mt-8 flex flex-wrap gap-2 border-b border-slate-200 pb-3">
          {facilitiesData.map((facility) => {
            const isSelected = selectedFacilityId === facility.id;
            return (
              <button
                key={facility.id}
                onClick={() => setSelectedFacilityId(facility.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-colors cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-blue-800 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>{facility.name}</span>
                <span className="text-[11px] opacity-80 font-mono">({facility.code})</span>
              </button>
            );
          })}
        </div>

        {/* Facility Detail Overview */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Image and Key Meta */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-4/3 rounded-xl overflow-hidden border border-slate-200 shadow-xs">
              <img
                src={activeFacility.image}
                alt={activeFacility.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-xs text-white text-xs font-mono px-2.5 py-1 rounded">
                Kode Ruang: {activeFacility.code}
              </div>
            </div>

            {/* Metadata Card */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2.5 text-xs">
              <div className="flex items-center justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" /> Kapasitas Praktikum
                </span>
                <span className="font-semibold text-slate-800">{activeFacility.capacity}</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> Luas & Lingkungan
                </span>
                <span className="font-semibold text-slate-800">{activeFacility.area}</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-500 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5" /> Kepala Teknisi Lab
                </span>
                <span className="font-semibold text-slate-800">{activeFacility.leadTechnician}</span>
              </div>
            </div>

            {/* Interactive Workbench Booking Card */}
            <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-400" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                  Layanan Siswa: Reservasi Meja Riset Mandiri
                </h4>
              </div>
              <p className="text-[11px] text-slate-300">
                Bagi siswa kelas XI/XII yang mengerjakan proyek IoT, robotika, atau persiapan LKS di luar jam KBM.
              </p>

              {bookingSuccess ? (
                <div className="p-3 bg-emerald-950/80 border border-emerald-500/40 rounded text-xs text-emerald-200 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Slot meja berhasil dipesan! Tunjukkan kartu siswa kepada laboran.</span>
                </div>
              ) : (
                <form onSubmit={handleBooking} className="space-y-2.5">
                  <select
                    value={bookingSlot}
                    onChange={(e) => setBookingSlot(e.target.value)}
                    className="w-full text-xs px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-200 focus:outline-none"
                  >
                    <option value="Slot Siang (13:30 - 15:30)">Slot Siang (13:30 - 15:30) · 8 Meja Kosong</option>
                    <option value="Slot Sore (15:30 - 17:00)">Slot Sore (15:30 - 17:00) · 12 Meja Kosong</option>
                    <option value="Sabtu Pagi (Khusus Ekskul)">Sabtu Pagi (Khusus Ekskul Robotika)</option>
                  </select>
                  <button
                    type="submit"
                    className="w-full py-1.5 px-3 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded transition-colors cursor-pointer"
                  >
                    Booking Slot Meja Praktik
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Right Column: Detailed Tabbed Data */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 leading-snug">
                {activeFacility.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {activeFacility.description}
              </p>
            </div>

            {/* Sub-Tabs */}
            <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-lg w-fit">
              <button
                onClick={() => setActiveTab('peralatan')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  activeTab === 'peralatan' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Inventaris Peralatan Presisi
              </button>
              <button
                onClick={() => setActiveTab('k3_standar')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  activeTab === 'k3_standar' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Protokol K3 & 5R
              </button>
              <button
                onClick={() => setActiveTab('jobsheet')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  activeTab === 'jobsheet' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Jobsheet Aktif
              </button>
            </div>

            {/* Tab 1: Equipment List */}
            {activeTab === 'peralatan' && (
              <div className="space-y-3">
                <div className="text-xs text-slate-500 font-medium">
                  Instrumen dan modul kerja yang digunakan siswa saat praktikum:
                </div>
                <div className="border border-slate-200 rounded-lg overflow-hidden">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                      <tr>
                        <th className="py-2.5 px-3">Nama Alat / Instrumen</th>
                        <th className="py-2.5 px-3">Merk & Model</th>
                        <th className="py-2.5 px-3 text-center">Jumlah</th>
                        <th className="py-2.5 px-3">Status Kalibrasi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {activeFacility.equipmentList.map((eq, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-2.5 px-3 font-medium text-slate-900">
                            {eq.name}
                            <span className="block text-[11px] text-slate-500 mt-0.5 font-normal">
                              Fungsi: {eq.useCase}
                            </span>
                          </td>
                          <td className="py-2.5 px-3 font-mono text-slate-600">{eq.brandModel}</td>
                          <td className="py-2.5 px-3 text-center font-mono font-semibold tabular-nums">
                            {eq.quantity} {eq.unit}
                          </td>
                          <td className="py-2.5 px-3">
                            <span className="inline-flex items-center text-[11px] font-medium text-emerald-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5" />
                              {eq.condition}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Tab 2: K3 and 5R Standards */}
            {activeTab === 'k3_standar' && (
              <div className="space-y-4">
                <div className="bg-amber-50/70 p-4 rounded-lg border border-amber-200">
                  <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-amber-700" />
                    <span>Jaminan Keselamatan Kerja di Bengkel (Untuk Orang Tua & Industri)</span>
                  </h4>
                  <p className="text-xs text-amber-900/80 mt-1 leading-relaxed">
                    Setiap siswa diwajibkan lulus pembekalan Keselamatan dan Kesehatan Kerja (K3) serta pemahaman 5R sebelum diizinkan menyalakan sumber listrik dan stasiun solder.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeFacility.standards.map((std, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-start gap-2.5 text-xs">
                      <CheckCircle className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{std}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 3: Active Jobsheets */}
            {activeTab === 'jobsheet' && (
              <div className="space-y-3">
                <div className="text-xs text-slate-500 font-medium">
                  Modul praktik yang sedang dipelajari pada semester berjalan:
                </div>
                <div className="space-y-2">
                  {activeFacility.activeJobsheets.map((job, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 hover:bg-blue-50/50 rounded-lg border border-slate-200 transition-colors flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-blue-800 shrink-0" />
                        <span className="font-medium text-slate-800">{job}</span>
                      </div>
                      <span className="text-[11px] font-mono text-blue-800 hover:underline cursor-pointer">
                        Unduh PDF
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
