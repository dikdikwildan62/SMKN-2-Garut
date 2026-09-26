import React, { useState } from 'react';
import { 
  Cpu, Award, ExternalLink, Activity, 
  CheckCircle2, PlusCircle, X, Sparkles, Filter, 
  Sliders, User, BookOpen, Layers
} from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { ProjectShowcase } from '../types';

export const IoTRoboticsShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<ProjectShowcase | null>(null);
  const [showSubmitModal, setShowSubmitModal] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    category: 'IoT & Smart System',
    authors: '',
    classGrade: 'Kelas XII TEI 1',
    description: '',
    components: '',
  });

  const categories = [
    { id: 'all', label: 'Semua Karya Siswa' },
    { id: 'IoT & Smart System', label: 'IoT & Smart System' },
    { id: 'Robotika Otonom', label: 'Robotika Otonom' },
    { id: 'Otomasi Industri', label: 'Otomasi Industri' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setShowSubmitModal(false);
      setFormData({
        title: '',
        category: 'IoT & Smart System',
        authors: '',
        classGrade: 'Kelas XII TEI 1',
        description: '',
        components: '',
      });
    }, 2000);
  };

  return (
    <section id="karya-iot-robotika" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-800">
              <Cpu className="w-4 h-4" />
              <span>Etalase Riset & Produk Terapan Siswa</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono text-slate-500">Submenu /karya-iot-robotika</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Galeri Karya Inovasi IoT, Robotika & Otomasi
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
              Bukti nyata kompetensi siswa Teknik Elektronika SMKN 2 Garut: dari rekayasa sistem kendali pertanian presisi berbasis sensor cerdas hingga robotik kompetisi nasional.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowSubmitModal(true)}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-800 hover:bg-blue-900 rounded-md transition-colors shadow-sm cursor-pointer whitespace-nowrap"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Kirim Karya Siswa (Kurasi)</span>
            </button>
          </div>
        </div>

        {/* Category Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mt-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
          <span className="text-xs text-slate-400 ml-auto hidden sm:inline tabular-nums">
            Menampilkan {filteredProjects.length} karya terkurasi
          </span>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
          {filteredProjects.map((project) => (
            <article 
              key={project.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col group"
            >
              {/* Image & Achievement Badge */}
              <div className="relative aspect-16/10 bg-slate-100 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded">
                  {project.category}
                </div>
                {project.achievement && (
                  <div className="absolute bottom-3 left-3 right-3 bg-amber-950/90 backdrop-blur-xs text-amber-200 text-xs px-3 py-1.5 rounded flex items-center gap-1.5 border border-amber-500/30">
                    <Award className="w-3.5 h-3.5 shrink-0 text-amber-400" />
                    <span className="truncate">{project.achievement}</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <span>Tahun {project.year}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.grade}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-800 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Microcontroller & Tech Tags */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] text-slate-500 font-mono bg-slate-100 px-2 py-0.5 rounded">
                      MCU: {project.specs.microcontroller.split(' ')[0]}
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono bg-slate-100 px-2 py-0.5 rounded">
                      Konektivitas: {project.specs.connectivity.split(' ')[0]}
                    </span>
                  </div>
                </div>

                {/* Card Action & Authors */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs text-slate-500">
                    <span className="font-medium text-slate-700">Tim: </span>
                    <span>{project.authors.join(', ')}</span>
                  </div>

                  <button
                    onClick={() => setActiveProject(project)}
                    className="flex items-center gap-1 text-xs font-semibold text-blue-800 hover:text-blue-900 cursor-pointer"
                  >
                    <span>Spesifikasi & Telemetri</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Project Detail Modal with Live Telemetry & Full Specs */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white px-6 py-4 border-b border-slate-200 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold uppercase text-blue-800 bg-blue-50 px-2 py-0.5 rounded">
                  {activeProject.category}
                </span>
                <span className="text-xs text-slate-500">Tahun Ajaran {activeProject.year}</span>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 cursor-pointer"
                aria-label="Tutup detail modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Media banner */}
              <div className="relative aspect-16/9 bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Title & Creators */}
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                  {activeProject.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 mt-2">
                  <span><strong>Pengembang:</strong> {activeProject.authors.join(', ')} ({activeProject.grade})</span>
                  <span>·</span>
                  <span><strong>Pembimbing:</strong> {activeProject.mentors.join(', ')}</span>
                </div>
              </div>

              {/* Problem Solved */}
              <div className="bg-blue-50/60 rounded-lg p-4 border border-blue-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-700" />
                  <span>Permasalahan Nyata yang Diselesaikan</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 mt-1.5 leading-relaxed">
                  {activeProject.problemSolved}
                </p>
              </div>

              {/* Hardware Specifications Table */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
                  <Sliders className="w-4 h-4 text-slate-500" />
                  <span>Spesifikasi Rekayasa Perangkat Keras (Hardware Architecture)</span>
                </h4>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-50 rounded border border-slate-200">
                    <dt className="text-slate-500 font-medium">Mikrokontroler Utama</dt>
                    <dd className="font-mono text-slate-800 mt-1 font-semibold">{activeProject.specs.microcontroller}</dd>
                  </div>
                  <div className="p-3 bg-slate-50 rounded border border-slate-200">
                    <dt className="text-slate-500 font-medium">Konektivitas & Protokol</dt>
                    <dd className="font-mono text-slate-800 mt-1">{activeProject.specs.connectivity}</dd>
                  </div>
                  <div className="p-3 bg-slate-50 rounded border border-slate-200">
                    <dt className="text-slate-500 font-medium">Sensor Terintegrasi</dt>
                    <dd className="text-slate-800 mt-1">{activeProject.specs.sensors.join(', ')}</dd>
                  </div>
                  <div className="p-3 bg-slate-50 rounded border border-slate-200">
                    <dt className="text-slate-500 font-medium">Catu Daya / Manajemen Baterai</dt>
                    <dd className="text-slate-800 mt-1">{activeProject.specs.power}</dd>
                  </div>
                  <div className="sm:col-span-2 p-3 bg-slate-50 rounded border border-slate-200">
                    <dt className="text-slate-500 font-medium">Stack Firmware & Perangkat Lunak</dt>
                    <dd className="font-mono text-slate-800 mt-1">{activeProject.specs.software}</dd>
                  </div>
                </dl>
              </div>

              {/* Live Telemetry Simulation */}
              {activeProject.telemetrySimulation && (
                <div className="bg-slate-900 text-white rounded-lg p-4 border border-slate-800">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
                    <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                      <Activity className="w-4 h-4 animate-pulse text-emerald-400" />
                      <span>Simulasi Telemetri Data Sensor (Live Stream Lab)</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">Broker: MQTT Port 1883</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {activeProject.telemetrySimulation.map((metric, idx) => (
                      <div key={idx} className="bg-slate-800/80 p-2.5 rounded border border-slate-700/60">
                        <div className="text-[11px] text-slate-400">{metric.label}</div>
                        <div className="text-lg font-bold font-mono text-white mt-0.5 tabular-nums">
                          {metric.currentValue} <span className="text-xs text-slate-400">{metric.unit}</span>
                        </div>
                        <div className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                          <span>Status: {metric.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Hak Cipta Karya Ilmiah: SMKN 2 Garut & Tim Siswa
              </span>
              <button
                onClick={() => setActiveProject(null)}
                className="px-4 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded hover:bg-slate-100 cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Student Project Submission Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold">Kirim Karya Inovasi Siswa Baru</h3>
                <p className="text-xs text-slate-300 mt-0.5">Formulir kurasi untuk publikasi resmi web SMKN 2 Garut</p>
              </div>
              <button 
                onClick={() => setShowSubmitModal(false)}
                className="text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitSuccess ? (
              <div className="p-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Pengajuan Berhasil Disimpan!</h4>
                <p className="text-xs text-slate-600">
                  Karya Anda telah masuk ke antrean kurasi Tim Penguji Kejuruan & Laboran Elektronika SMKN 2 Garut.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Judul Proyek / Alat
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Sistem Presensi Siswa RFID Berbasis ESP32 & Telegram"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-800"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Kategori Proyek
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-800 bg-white"
                    >
                      <option value="IoT & Smart System">IoT & Smart System</option>
                      <option value="Robotika Otonom">Robotika Otonom</option>
                      <option value="Otomasi Industri">Otomasi Industri</option>
                      <option value="Audio & Hardware">Audio & Hardware</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Tingkat Kelas
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Kelas XII TEI 1"
                      value={formData.classGrade}
                      onChange={(e) => setFormData({ ...formData, classGrade: e.target.value })}
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Nama Anggota Tim (Pisahkan koma)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ahmad Maulana, Siti Rahmawati"
                    value={formData.authors}
                    onChange={(e) => setFormData({ ...formData, authors: e.target.value })}
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Komponen & Mikrokontroler yang Digunakan
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ESP32, Sensor Ultrasonik, Relay 5V, Catu Daya 12V"
                    value={formData.components}
                    onChange={(e) => setFormData({ ...formData, components: e.target.value })}
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Deskripsi Singkat Cara Kerja
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Jelaskan masalah yang diselesaikan dan alur kerja alat..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-800"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowSubmitModal(false)}
                    className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800 cursor-pointer"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-semibold text-white bg-blue-800 hover:bg-blue-900 rounded cursor-pointer"
                  >
                    Ajukan untuk Kurasi
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
