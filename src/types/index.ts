export interface SitemapSubmenu {
  id: string;
  title: string;
  slug: string;
  description: string;
  targetAudience: ('calon_siswa' | 'orang_tua' | 'industri' | 'siswa_aktif')[];
  keyContent: string[];
  priority: 'Tinggi' | 'Sedang' | 'Normal';
}

export interface SitemapMenu {
  id: string;
  title: string;
  slug: string;
  badge?: string;
  description: string;
  submenus: SitemapSubmenu[];
}

export interface PersonaJourney {
  id: string;
  title: string;
  role: string;
  avatarText: string;
  keyGoal: string;
  painPoint: string;
  journeySteps: {
    stage: string;
    targetMenu: string;
    targetUrl: string;
    action: string;
    expectedOutcome: string;
  }[];
}

export interface ProjectShowcase {
  id: string;
  title: string;
  category: 'IoT & Smart System' | 'Robotika Otonom' | 'Otomasi Industri' | 'Audio & Hardware';
  year: string;
  grade: string;
  authors: string[];
  mentors: string[];
  description: string;
  problemSolved: string;
  specs: {
    microcontroller: string;
    sensors: string[];
    connectivity: string;
    power: string;
    software: string;
  };
  image: string;
  achievement?: string;
  telemetrySimulation?: {
    label: string;
    unit: string;
    currentValue: number;
    min: number;
    max: number;
    status: 'Normal' | 'Optimal' | 'Siaga';
  }[];
}

export interface WorkshopFacility {
  id: string;
  name: string;
  code: string;
  capacity: string;
  area: string;
  leadTechnician: string;
  description: string;
  image: string;
  standards: string[]; // e.g. 5R, K3 Listrik, ESD Protection
  equipmentList: {
    name: string;
    brandModel: string;
    quantity: number;
    unit: string;
    useCase: string;
    condition: 'Baik / Kalibrasi Aktif' | 'Operasional';
  }[];
  activeJobsheets: string[];
}

export interface IndustrialPartner {
  id: string;
  name: string;
  sector: string;
  city: string;
  mouYear: string;
  cooperationScope: string[];
  quotaPerYear: number;
  alumniHired: number;
}
