import React, { useState } from 'react';
import { 
  Layers, Download, Copy, Check, Search, 
  ChevronRight, ChevronDown, Compass, Users, 
  ExternalLink, Globe, Sparkles, Filter, FileText, ArrowRight
} from 'lucide-react';
import { sitemapData } from '../data/sitemapData';
import { personasData } from '../data/personasData';
import { SitemapMenu, SitemapSubmenu } from '../types';

interface IADocumentationViewProps {
  onNavigatePrototype: (sectionId: string) => void;
  onClose: () => void;
}

export const IADocumentationView: React.FC<IADocumentationViewProps> = ({
  onNavigatePrototype,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'sitemap' | 'persona' | 'taxonomy' | 'panduan'>('sitemap');
  const [searchQuery, setSearchQuery] = useState('');
  const [audienceFilter, setAudienceFilter] = useState<string>('all');
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({
    'beranda': true,
    'profil': true,
    'fasilitas-bengkel': true,
    'karya-iot-robotika': true,
    'kemitraan-industri': true,
    'ppdb': true,
    'portal-siswa': true,
  });
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  const toggleMenu = (menuId: string) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
  };

  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    sitemapData.forEach((m) => { allExpanded[m.id] = true; });
    setExpandedMenus(allExpanded);
  };

  const collapseAll = () => {
    setExpandedMenus({});
  };

  // Filter submenus based on search and audience
  const filterSubmenus = (submenus: SitemapSubmenu[]) => {
    return submenus.filter((sub) => {
      const matchesSearch = 
        sub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sub.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sub.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sub.keyContent.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesAudience = 
        audienceFilter === 'all' || sub.targetAudience.includes(audienceFilter as any);

      return matchesSearch && matchesAudience;
    });
  };

  // Generate Exportable Markdown
  const generateMarkdown = () => {
    let md = `# ARSITEKTUR INFORMASI & SITEMAP RESMI\n`;
    md += `## Jurusan Teknik Elektronika — SMKN 2 Garut\n`;
    md += `Domain Resmi: https://elektronika.smkn2garut.sch.id\n`;
    md += `Target Audiens: Calon Siswa Baru, Orang Tua Murid, Industri Mitra (PKL/Rekrutmen), Siswa Aktif & Guru\n\n`;
    md += `======================================================================\n\n`;

    sitemapData.forEach((menu, index) => {
      md += `### ${index + 1}. Menu Utama: ${menu.title} (${menu.slug})\n`;
      md += `Deskripsi: ${menu.description}\n\n`;
      menu.submenus.forEach((sub, subIdx) => {
        md += `   ${index + 1}.${subIdx + 1} ${sub.title}\n`;
        md += `      - URL Slug: ${sub.slug}\n`;
        md += `      - Prioritas: ${sub.priority}\n`;
        md += `      - Target Audiens: ${sub.targetAudience.join(', ')}\n`;
        md += `      - Deskripsi: ${sub.description}\n`;
        md += `      - Konten Kunci: ${sub.keyContent.join(' | ')}\n\n`;
      });
    });

    return md;
  };

  const handleCopyMarkdown = () => {
    const md = generateMarkdown();
    navigator.clipboard.writeText(md);
    setCopiedFormat('markdown');
    setTimeout(() => setCopiedFormat(null), 2500);
  };

  const handleCopyJSON = () => {
    const jsonStr = JSON.stringify(sitemapData, null, 2);
    navigator.clipboard.writeText(jsonStr);
    setCopiedFormat('json');
    setTimeout(() => setCopiedFormat(null), 2500);
  };

  const audienceLabel = (aud: string) => {
    switch (aud) {
      case 'calon_siswa': return 'Calon Siswa';
      case 'orang_tua': return 'Orang Tua';
      case 'industri': return 'Industri Mitra';
      case 'siswa_aktif': return 'Siswa Aktif';
      default: return aud;
    }
  };

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen">
      {/* Top Banner IA Architect Desk */}
      <div className="bg-slate-950 border-b border-slate-800 py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-amber-400 uppercase">
              <Layers className="w-4 h-4 text-amber-400" />
              <span>Deliverable: Senior Web Information Architecture (IA)</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">SMKN 2 Garut (.sch.id)</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Struktur Blueprint Navigasi & Sitemap Jurusan Teknik Elektronika
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl">
              Perancangan hierarki informasi hierarkis 3-level berorientasi pengguna untuk 4 target persona: Calon Siswa Baru, Orang Tua Murid, Industri Mitra PKL/Rekrutmen, dan Siswa Aktif.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleCopyMarkdown}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded cursor-pointer transition-colors"
            >
              {copiedFormat === 'markdown' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedFormat === 'markdown' ? 'Tersalin ke Clipboard!' : 'Salin Sitemap Markdown'}</span>
            </button>
            <button
              onClick={handleCopyJSON}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded cursor-pointer transition-colors"
            >
              {copiedFormat === 'json' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>Salin Format JSON</span>
            </button>
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-blue-700 hover:bg-blue-600 rounded cursor-pointer transition-colors"
            >
              <span>Buka Prototype Live</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Tabs navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-4">
        <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3">
          <button
            onClick={() => setActiveTab('sitemap')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'sitemap' ? 'bg-blue-700 text-white shadow-xs' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Pohon Sitemap Interaktif (7 Menu & 28 Submenu)</span>
          </button>

          <button
            onClick={() => setActiveTab('persona')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'persona' ? 'bg-blue-700 text-white shadow-xs' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Matriks 4 Jalur Persona (User Journeys)</span>
          </button>

          <button
            onClick={() => setActiveTab('taxonomy')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'taxonomy' ? 'bg-blue-700 text-white shadow-xs' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>Taksonomi Konten & Standar Domain .sch.id</span>
          </button>

          <button
            onClick={() => setActiveTab('panduan')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'panduan' ? 'bg-blue-700 text-white shadow-xs' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Catatan Arsitek Informasi (Executive Summary)</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Interactive Sitemap Tree */}
      {activeTab === 'sitemap' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-6">
          {/* Filter and Control Bar */}
          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
              <input
                type="text"
                placeholder="Cari submenu, slug, kata kunci (mis: IoT, K3)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs pl-9 pr-3 py-2 bg-slate-900 border border-slate-700 rounded-md text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <div className="flex items-center gap-1 text-xs text-slate-400 mr-2">
                <Filter className="w-3.5 h-3.5" />
                <span>Filter Audiens:</span>
              </div>
              {['all', 'calon_siswa', 'orang_tua', 'industri', 'siswa_aktif'].map((aud) => (
                <button
                  key={aud}
                  onClick={() => setAudienceFilter(aud)}
                  className={`px-2.5 py-1 text-xs rounded transition-colors cursor-pointer ${
                    audienceFilter === aud
                      ? 'bg-amber-400 text-slate-900 font-semibold'
                      : 'bg-slate-900 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {aud === 'all' ? 'Semua Audiens' : audienceLabel(aud)}
                </button>
              ))}

              <div className="border-l border-slate-700 pl-2 ml-2 flex gap-1">
                <button
                  onClick={expandAll}
                  className="px-2 py-1 text-[11px] text-slate-400 hover:text-white bg-slate-900 rounded cursor-pointer"
                >
                  Buka Semua
                </button>
                <button
                  onClick={collapseAll}
                  className="px-2 py-1 text-[11px] text-slate-400 hover:text-white bg-slate-900 rounded cursor-pointer"
                >
                  Tutup Semua
                </button>
              </div>
            </div>
          </div>

          {/* Tree Nodes List */}
          <div className="space-y-4">
            {sitemapData.map((menu, mIdx) => {
              const filteredSubs = filterSubmenus(menu.submenus);
              const isExpanded = !!expandedMenus[menu.id];

              if (searchQuery && filteredSubs.length === 0) return null;

              return (
                <div 
                  key={menu.id}
                  className="bg-slate-800/60 rounded-xl border border-slate-700 overflow-hidden"
                >
                  {/* Parent Menu Node */}
                  <div 
                    onClick={() => toggleMenu(menu.id)}
                    className="p-4 bg-slate-800/90 flex items-center justify-between cursor-pointer hover:bg-slate-800 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <button className="text-slate-400">
                        {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                      </button>
                      <span className="font-mono text-xs text-amber-400 font-bold">
                        [0{mIdx + 1}]
                      </span>
                      <h3 className="text-base font-bold text-white">
                        {menu.title}
                      </h3>
                      <span className="font-mono text-xs text-slate-400 bg-slate-900 px-2 py-0.5 rounded">
                        {menu.slug}
                      </span>
                      {menu.badge && (
                        <span className="text-[11px] font-medium text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-600/30">
                          {menu.badge}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-400 font-mono">
                        {filteredSubs.length} Submenu
                      </span>
                    </div>
                  </div>

                  {/* Submenus Listing */}
                  {isExpanded && (
                    <div className="p-4 bg-slate-900/60 divide-y divide-slate-800/80">
                      <p className="text-xs text-slate-400 pb-3 italic">
                        {menu.description}
                      </p>

                      <div className="pt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {filteredSubs.map((sub, sIdx) => (
                          <div 
                            key={sub.id}
                            className="bg-slate-800/40 p-4 rounded-lg border border-slate-750 hover:border-slate-600 transition-colors space-y-2.5"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <span className="font-mono text-[11px] text-slate-500 block">
                                  0{mIdx + 1}.0{sIdx + 1}
                                </span>
                                <h4 className="text-sm font-semibold text-slate-100">
                                  {sub.title}
                                </h4>
                              </div>
                              <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                                sub.priority === 'Tinggi' 
                                  ? 'bg-amber-950 text-amber-300 border border-amber-800' 
                                  : 'bg-slate-800 text-slate-400'
                              }`}>
                                Prioritas: {sub.priority}
                              </span>
                            </div>

                            <div className="font-mono text-xs text-blue-400 bg-slate-950/60 px-2.5 py-1 rounded">
                              URL: <span className="text-slate-300">elektronika.smkn2garut.sch.id</span>{sub.slug}
                            </div>

                            <p className="text-xs text-slate-300 leading-relaxed">
                              {sub.description}
                            </p>

                            {/* Target Audiences */}
                            <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center gap-1.5 text-[11px]">
                              <span className="text-slate-400">Audiens:</span>
                              {sub.targetAudience.map((aud, aIdx) => (
                                <span key={aIdx} className="text-slate-300 bg-slate-900 px-1.5 py-0.5 rounded">
                                  {audienceLabel(aud)}
                                </span>
                              ))}
                            </div>

                            {/* Key Content Blocks */}
                            <div className="text-[11px] text-slate-400">
                              <span className="text-slate-500 font-medium">Blok Konten: </span>
                              <span>{sub.keyContent.join(' · ')}</span>
                            </div>

                            <div className="pt-2">
                              <button
                                onClick={() => {
                                  if (sub.slug.includes('karya')) onNavigatePrototype('karya-iot-robotika');
                                  else if (sub.slug.includes('bengkel') || sub.slug.includes('fasilitas')) onNavigatePrototype('bengkel-fasilitas');
                                  else if (sub.slug.includes('ppdb')) onNavigatePrototype('ppdb');
                                  else if (sub.slug.includes('industri') || sub.slug.includes('kemitraan')) onNavigatePrototype('kemitraan-industri');
                                  else if (sub.slug.includes('profil')) onNavigatePrototype('profil');
                                  else if (sub.slug.includes('layanan')) onNavigatePrototype('portal-siswa');
                                  else onNavigatePrototype('beranda');
                                }}
                                className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 font-medium cursor-pointer"
                              >
                                <span>Lihat Implementasi di Prototype</span>
                                <ArrowRight className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 2: Persona User Journey Matrix */}
      {activeTab === 'persona' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-6">
          <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700">
            <h3 className="text-base font-bold text-white">
              Matriks Pengalaman Pengguna Berdasarkan 4 Target Audiens Inti
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Setiap menu dalam sitemap dirancang untuk merespons motivasi psikologis, keraguan (pain points), dan tindakan konversi spesifik tiap kelompok pemangku kepentingan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {personasData.map((p) => (
              <div 
                key={p.id}
                className="bg-slate-800/60 rounded-xl border border-slate-700 p-6 space-y-4"
              >
                <div className="flex items-center gap-3 border-b border-slate-700 pb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-900 text-blue-200 font-bold flex items-center justify-center font-mono text-sm">
                    {p.avatarText}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">{p.title}</h4>
                    <span className="text-xs text-slate-400">{p.role}</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-slate-900/80 rounded border border-slate-800">
                    <span className="font-semibold text-amber-400 block mb-0.5">Tujuan Utama (Goal):</span>
                    <span className="text-slate-200">{p.keyGoal}</span>
                  </div>
                  <div className="p-3 bg-slate-900/80 rounded border border-slate-800">
                    <span className="font-semibold text-red-400 block mb-0.5">Keraguan / Hambatan (Pain Point):</span>
                    <span className="text-slate-300">{p.painPoint}</span>
                  </div>
                </div>

                {/* Journey Steps */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Alur Penelusuran Sitemap (User Flow):
                  </span>
                  {p.journeySteps.map((step, idx) => (
                    <div key={idx} className="relative pl-6 border-l-2 border-slate-700 pb-2">
                      <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-amber-400" />
                      <div className="text-xs font-semibold text-amber-300">{step.stage}</div>
                      <div className="text-xs font-mono text-blue-300 mt-0.5">
                        Menu Target: {step.targetMenu} ({step.targetUrl})
                      </div>
                      <div className="text-xs text-slate-300 mt-1">{step.action}</div>
                      <div className="text-[11px] text-emerald-400 mt-1 italic">
                        Hasil: {step.expectedOutcome}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Taxonomy & Domain Specification */}
      {activeTab === 'taxonomy' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-6">
          <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700 space-y-4">
            <h3 className="text-base font-bold text-white">
              Standar URL & Skema Penamaan Jurusan pada Domain .sch.id
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Sesuai regulasi PANDI (Pengelola Nama Domain Internet Indonesia), instansi sekolah menengah kejuruan berhak menggunakan domain <span className="text-amber-400 font-mono">smkn2garut.sch.id</span>. Untuk jurusan Teknik Elektronika, arsitektur informasi merekomendasikan penataan subdomain formal:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono pt-2">
              <div className="p-3 bg-slate-900 rounded border border-slate-700">
                <span className="text-slate-400 block text-[11px] uppercase">Domain Utama Sekolah</span>
                <span className="text-amber-400 font-semibold mt-1 block">smkn2garut.sch.id</span>
                <span className="text-slate-400 text-[11px] mt-1 block">Portal sentral SMKN 2 Garut</span>
              </div>
              <div className="p-3 bg-slate-900 rounded border border-slate-700">
                <span className="text-slate-400 block text-[11px] uppercase">Subdomain Resmi Jurusan</span>
                <span className="text-emerald-400 font-semibold mt-1 block">elektronika.smkn2garut.sch.id</span>
                <span className="text-slate-400 text-[11px] mt-1 block">Akses independen jurusan TE</span>
              </div>
              <div className="p-3 bg-slate-900 rounded border border-slate-700">
                <span className="text-slate-400 block text-[11px] uppercase">Slug Struktur Direktori</span>
                <span className="text-blue-400 font-semibold mt-1 block">/karya-iot-robotika/galeri-iot</span>
                <span className="text-slate-400 text-[11px] mt-1 block">SEO-friendly & Clean URL</span>
              </div>
            </div>
          </div>

          {/* Taxonomy Tagging Matrix */}
          <div className="bg-slate-800/60 rounded-xl border border-slate-700 p-6 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Sistem Klasifikasi & Taksonomi Konten Jurusan
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-4 bg-slate-900 rounded border border-slate-800 space-y-2">
                <div className="font-bold text-amber-400">1. Bidang Keahlian Teknis</div>
                <ul className="space-y-1 text-slate-300">
                  <li>· Internet of Things (IoT)</li>
                  <li>· Robotika Otonom & Sumo</li>
                  <li>· Otomasi PLC & Pneumatik</li>
                  <li>· Desain & Manufaktur PCB</li>
                  <li>· Audio Video & Instrumentasi</li>
                </ul>
              </div>
              <div className="p-4 bg-slate-900 rounded border border-slate-800 space-y-2">
                <div className="font-bold text-blue-400">2. Standarisasi Industri</div>
                <ul className="space-y-1 text-slate-300">
                  <li>· 5R (Ringkas, Rapi, Resik, ...)</li>
                  <li>· Keselamatan Kerja K3 Listrik</li>
                  <li>· Proteksi Listrik Statis (ESD)</li>
                  <li>· Sertifikasi Asesor LSP-P1 BNSP</li>
                  <li>· Link & Match DUDIKA 8+i</li>
                </ul>
              </div>
              <div className="p-4 bg-slate-900 rounded border border-slate-800 space-y-2">
                <div className="font-bold text-emerald-400">3. Kemitraan & Karir</div>
                <ul className="space-y-1 text-slate-300">
                  <li>· Magang PKL 6 Bulan Terpusat</li>
                  <li>· Bursa Kerja Khusus (BKK)</li>
                  <li>· Teaching Factory (TeFa)</li>
                  <li>· Program Guru Tamu Industri</li>
                  <li>· Tracer Study Alumni</li>
                </ul>
              </div>
              <div className="p-4 bg-slate-900 rounded border border-slate-800 space-y-2">
                <div className="font-bold text-purple-400">4. Perangkat & Hardware</div>
                <ul className="space-y-1 text-slate-300">
                  <li>· Mikrokontroler ESP32 / STM32</li>
                  <li>· Osiloskop Digital Rigol</li>
                  <li>· PLC Siemens S7-1200</li>
                  <li>· Mesin CNC PCB Milling</li>
                  <li>· 3D Printer Casing Bambu Lab</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Executive Architect Guidance */}
      {activeTab === 'panduan' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 space-y-4">
            <h3 className="text-lg font-bold text-white">
              Pedoman Desain Arsitektur Informasi dari Senior Web Architect
            </h3>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-amber-300 text-sm">1. Prinsip Kedalaman Maksimal 3 Klik (3-Click Rule)</h4>
              <p>
                Informasi krusial bagi calon siswa (syarat pendaftaran PPDB) dan orang tua (jaminan keselamatan bengkel K3 serta bebas biaya SPP) tidak boleh terkubur lebih dari 2 lapis submenu. Oleh karena itu, tombol aksi utama diletakkan pada Zona 3 Top Bar dan Quick Persona Bar di beranda.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-amber-300 text-sm">2. Ruang Dedikasi: Publikasi Karya IoT & Robotika Siswa</h4>
              <p>
                Karya inovasi siswa tidak sekadar dijadikan postingan artikel blog umum, melainkan memiliki etalase khusus dengan spesifikasi perangkat keras (mikrokontroler, sensor, catu daya), nama siswa pengembang, pembimbing, capaian lomba, serta simulasi telemetri sensor langsung. Ini berfungsi ganda sebagai etalase portofolio bagi HRD industri mitra saat mencari calon teknisi.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-amber-300 text-sm">3. Ruang Dedikasi: Fasilitas Bengkel Elektronika</h4>
              <p>
                Menampilkan tur virtual dan spesifikasi alat presisi (bukan sekadar foto ruangan). Orang tua mendapatkan ketenangan pikiran melalui dokumentasi grounding ESD, pembuangan asap timbal solder, dan proteksi pemutus arus kebocoran tanah (ELCB), sementara industri mitra dapat memverifikasi keselarasan mesin bengkel dengan lini produksi mereka.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-amber-300 text-sm">4. Responsive Mega Menu Pattern</h4>
              <p>
                Pada desktop, dropdown menu menyajikan pratinjau judul dan deskripsi 1-baris tiap submenu sehingga pengguna langsung memahami konteks halaman sebelum melakukan klik. Pada mobile, drawer accordion mengakomodasi sentuhan jari dengan touch target minimal 44px.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
