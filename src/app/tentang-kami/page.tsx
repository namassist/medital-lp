import React from "react";
import { Metadata } from "next";
import MainLayout from "@/components/layouts/main";

export const metadata: Metadata = {
  title: "Tentang Kami - Sistem Rekam Medis",
  description: "Sistem Rekam Medis",
};

export default function TentangKami() {
  return (
    <MainLayout>
      <section className="py-20">
        <div className="px-8 space-y-4">
          <h1 className="text-[#3a3a3a] capitalize text-3xl font-bold">
            Tentang Kami
          </h1>
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <h2 className="text-xl  text-[#3a3a3a]">
                Profil Perusahaan Medital
              </h2>
              <p className="text-[#4b4f58]">
                Medital adalah perusahaan teknologi kesehatan yang menyediakan
                layanan sistem rekam medis dan booking dokter yang inovatif dan
                dapat diandalkan. Kami menyediakan dua layanan utama, yaitu
                Medital dan Medibook.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl  text-[#3a3a3a]">Layanan Medital</h3>
              <p className="text-[#4b4f58]">
                Layanan Medital kami dirancang khusus untuk memenuhi kebutuhan
                masyarakat umum yang ingin memperoleh informasi kesehatan secara
                online dan melakukan pemesanan layanan kesehatan dengan mudah.
                Kami menawarkan platform yang mudah digunakan dan dapat diakses
                kapan saja dan di mana saja. Anda dapat mengakses informasi
                medis Anda, seperti riwayat kesehatan, hasil tes laboratorium,
                dan pemesanan layanan kesehatan dengan cepat dan mudah melalui
                platform kami.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl  text-[#3a3a3a]">Layanan Medibook</h3>
              <p className="text-[#4b4f58]">
                Layanan Medibook kami ditujukan untuk rumah sakit dan klinik
                yang ingin meningkatkan efisiensi pengelolaan dan pelayanan
                kesehatan. Kami menawarkan sistem manajemen janji temu yang
                terintegrasi dengan sistem rekam medis, sehingga memudahkan
                pasien dalam melakukan pemesanan janji temu dan mengurangi waktu
                tunggu pasien. Selain itu, kami juga menyediakan fitur manajemen
                dokter dan pengelolaan jadwal yang dapat membantu memudahkan
                proses pengelolaan rumah sakit.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl  text-[#3a3a3a]">Tim Kami</h3>
              <p className="text-[#4b4f58]">
                Medital memiliki tim yang terdiri dari para ahli teknologi dan
                kesehatan yang berdedikasi untuk memberikan solusi kesehatan
                yang inovatif dan berkualitas tinggi. Kami juga bekerja sama
                dengan berbagai lembaga dan institusi kesehatan untuk memastikan
                bahwa layanan kami selalu sesuai dengan standar medis yang
                berlaku.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl  text-[#3a3a3a]">Visi Kami</h3>
              <p className="text-[#4b4f58]">
                Kami percaya bahwa teknologi dapat memudahkan akses terhadap
                layanan kesehatan yang berkualitas. Oleh karena itu, kami terus
                berupaya untuk mengembangkan layanan yang inovatif dan
                berkualitas tinggi untuk memenuhi kebutuhan kesehatan Anda.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-[#4b4f58]">
                Untuk informasi lebih lanjut tentang layanan kami dan cara kerja
                kami, silakan kunjungi situs web kami di medital.id. Terima
                kasih atas kepercayaan Anda kepada Medital.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
