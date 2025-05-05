import {
  Bookmark,
  BriefcaseMedical,
  HeartPulse,
  Ticket,
  Tablets,
  Banknote,
  File,
  Wallet,
  FlaskConical,
} from "lucide-react";

export const services = [
  {
    id: 1,
    title: "Pemesanan Online",
    description: "Lakukan reservasi secara online tanpa perlu lama mengantre.",
    color: "#00B219",
    icon: <Ticket className="w-10 h-10 text-white" />,
  },
  {
    id: 2,
    title: "Penjadwalan",
    description: "Datang sesuai jadwal tanpa perlu mengantri lagi",
    color: "#2D438E",
    icon: <Bookmark className="w-10 h-10 text-white" />,
  },
  {
    id: 3,
    title: "Rekam Medis",
    description: "Simpan semua data medis anda pada sistem terintegrasi.",
    color: "#FF7070",
    icon: <BriefcaseMedical className="w-10 h-10 text-white" />,
  },
  {
    id: 4,
    title: "Farmasi",
    description: "Dapatkan obat secara online dengan harga yang terjangkau.",
    color: "#00B219",
    icon: <HeartPulse className="w-10 h-10 text-white" />,
  },
  {
    id: 5,
    title: "Konsultasi Dokter",
    description:
      "Konsultasikan masalah kesehatan anda dengan dokter berpengalaman",
    color: "#2D438E",
    icon: <Tablets className="w-10 h-10 text-white" />,
  },
];

export const servicesMedibook = [
  {
    id: 1,
    title: "Rekam Medis",
    description: "Penyimpanan data medis terintegrasi berbasis cloud",
    color: "#00B219",
    icon: <BriefcaseMedical className="w-10 h-10 text-white" />,
  },
  {
    id: 2,
    title: "Reservasi",
    description: "Lakukan pemesanan secara online tanpa perlu lama mengantre.",
    color: "#2D438E",
    icon: <Bookmark className="w-10 h-10 text-white" />,
  },
  {
    id: 3,
    title: "Lab",
    description: "Dapatkan hasil lab secara realtime tanpa perlu menunggu lama",
    color: "#FF7070",
    icon: <FlaskConical className="w-10 h-10 text-white" />,
  },
  {
    id: 4,
    title: "Radiologi",
    description: "Dapatkan hasil radiologi secara realtime dan akurat",
    color: "#00B219",
    icon: <HeartPulse className="w-10 h-10 text-white" />,
  },
  {
    id: 5,
    title: "Farmasi",
    description:
      "Dapatkan resep dokter secara online dari rekomendasi dokter berpengalaman",
    color: "#2D438E",
    icon: <Tablets className="w-10 h-10 text-white" />,
  },
  {
    id: 6,
    title: "Invoice",
    description:
      "Multi currency, kustomisasi invoice, perhitungan pajak dan pelaporan realtime",
    color: "#FF7070",
    icon: <Banknote className="w-10 h-10 text-white" />,
  },
  {
    id: 7,
    title: "Pembayaran",
    description:
      "Sistem pembayaran multipayment dengan banyak pilihan vendor tersedia",
    color: "#00B219",
    icon: <Wallet className="w-10 h-10 text-white" />,
  },
  {
    id: 8,
    title: "Pelaporan",
    description:
      "Kustomisasi semua jenis hasil pelaporan dalam bentuk CSV ataupun JSON",
    color: "#2D438E",
    icon: <File className="w-10 h-10 text-white" />,
  },
];

export const servicesMedital = [
  {
    id: 1,
    title: "Online Booking",
    description:
      "Pesan layanan kesehatan anda tanpa perlu datang langsung ke lokasi",
    color: "#00B219",
    icon: <Ticket className="w-10 h-10 text-white" />,
  },
  {
    id: 2,
    title: "Reservasi",
    description: "Datang sesuai jadwal tanpa perlu lagi mengatre dua kali",
    color: "#2D438E",
    icon: <Bookmark className="w-10 h-10 text-white" />,
  },
  {
    id: 3,
    title: "Rekam Medis",
    description:
      "Lihat rekam medis kesehatan anda dalam satu aplikasi All in one terbaik",
    color: "#FF7070",
    icon: <BriefcaseMedical className="w-10 h-10 text-white" />,
  },
  {
    id: 4,
    title: "Copy Resep",
    description: "Dapatkan resep obat secara online dari dokter berpengalaman",
    color: "#00B219",
    icon: <HeartPulse className="w-10 h-10 text-white" />,
  },
  {
    id: 5,
    title: "Konsultasi Dokter",
    description:
      "Konsultasikan masalah kesehatan anda dengan dokter berpengalaman",
    color: "#2D438E",
    icon: <Tablets className="w-10 h-10 text-white" />,
  },
  {
    id: 6,
    title: "Pembayaran",
    description:
      "Sistem pembayaran yang sudah terintegrasi dengan Gopay dan Shopeepay",
    color: "#FF7070",
    icon: <Banknote className="w-10 h-10 text-white" />,
  },
];
