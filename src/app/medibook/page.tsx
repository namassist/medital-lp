import React from "react";
import Image from "next/image";
import MainLayout from "@/components/layouts/main";
import { Metadata } from "next";
import { servicesMedibook, solutionsMedibook } from "@/constant";
import {
  CTAButton,
  CTAButtonContainer,
  CTAContainer,
  CTASection,
  CTAText,
  Header,
  HeaderDescription,
  HeaderDivider,
  HeaderTitle,
  Hero,
  HeroButton,
  HeroContent,
  HeroDescription,
  HeroSubtitle,
  HeroTitle,
  ServicesGrid,
  ServicesSection,
  SolutionsGrid,
  SolutionsSection,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Medibook - Sistem Rekam Medis",
  description: "Sistem Rekam Medis",
};

export default function Medibook() {
  return (
    <MainLayout>
      <Hero backgroundImage="/medibook-2048x979.png" position="centerLeft">
        <HeroContent width="md">
          <HeroTitle size="2xl" variant="default" weight="semibold">
            Medibook
          </HeroTitle>
          <HeroSubtitle>All in One Solution for Healthcare System</HeroSubtitle>
          <HeroDescription>
            Sistem terintegrasi untuk memudahkan dokter dan penyedia layanan
            kesehatan melalui medical record
          </HeroDescription>
          <HeroButton>Hubungi Kami</HeroButton>
        </HeroContent>
      </Hero>

      <section className="py-20">
        <div className="container mx-auto">
          <div className="flex flex-col space-y-20 lg:space-y-0 lg:flex-row justify-between items-center">
            <div className="w-full lg:w-1/2 space-y-4">
              <h2 className="text-[1.9em] font-medium text-[#15063F] capitalize">
                Peraturan Menteri Kesehatan Republik Indonesia Tahun 2022
                Tentang Rekam Medis
              </h2>
              <h4 className="text-2xl text-[#6EC1E4] capitalize">
                Pasal 3 ayat 1
              </h4>
              <p className=" text-[#54595F] capitalize">
                Setiap Fasilitas Pelayanan Kesehatan wajib menyelenggara kan
                Rekam Medis Elektronik.
              </p>
              <h4 className="text-2xl text-[#6EC1E4] capitalize">
                Pasal 4 ayat 1
              </h4>
              <p className=" text-[#54595F] capitalize">
                Kewajiban penyelenggaraan Rekam Medis Elektronik juga berlaku
                bagi Fasilitas Pelayanan Kesehatan yang menyelenggarakan
                pelayanan telemedisin
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                className="w-full"
                src="/stethoscope-patient-information-1-1536x1025.webp"
                alt="Medibook"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      <SolutionsSection>
        <Header align="center">
          <HeaderTitle size="xl" weight="bold">
            Medibook Hadir Sebagai Solusi
          </HeaderTitle>
          <HeaderDivider dotCount={3} />
          <HeaderDescription>
            Medibook hadir sebagai solusi, baik dokter, penyedia layanan
            kesehatan maupun pasien untuk memeberikan sistem medical record yang
            terintegrasi dengan online booking (medital)
          </HeaderDescription>
        </Header>
        <SolutionsGrid solutions={solutionsMedibook} />
      </SolutionsSection>

      <ServicesSection>
        <Header align="center">
          <HeaderTitle size="xl" weight="semibold">
            Modul Medibook
          </HeaderTitle>
          <HeaderDivider dotCount={3} />
          <HeaderDescription>
            Fitur ini kami design khusus untuk membantu anda menangani
            permasalahan dalam dunia kesehatan
          </HeaderDescription>
        </Header>
        <ServicesGrid services={servicesMedibook} />
      </ServicesSection>

      <ServicesSection>
        <Header align="center">
          <HeaderTitle size="xl" weight="semibold">
            Medibook
          </HeaderTitle>
          <HeaderDivider dotCount={3} />
          <HeaderDescription size="large">
            Sistem layanan kesehatan all in one terbaik untuk mengatasi
            permasalahan industri kesehatan saat ini
          </HeaderDescription>
        </Header>
      </ServicesSection>

      <CTASection>
        <CTAContainer variant="default" size="default">
          <CTAText
            title="Transformasi Layanan kesehatan anda dengan Medibook"
            description="Tingkatkan efisiensi layanan kesehatan anda untuk memberikan pelayanan terbaik bagi pelanggan tercinta"
            highlight="Layanan kesehatan"
          />
          <CTAButtonContainer>
            <CTAButton href="mailto:jason@medital.id">Berlangganan</CTAButton>
          </CTAButtonContainer>
        </CTAContainer>
      </CTASection>
    </MainLayout>
  );
}
