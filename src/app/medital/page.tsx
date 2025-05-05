import React from "react";
import { Metadata } from "next";
import MainLayout from "@/components/layouts/main";
import { solutionsMedital, servicesMedital } from "@/constant";
import {
  Hero,
  HeroButton,
  HeroContent,
  HeroDescription,
  HeroSubtitle,
  HeroTitle,
} from "@/components/ui/hero";
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
  ServicesGrid,
  ServicesSection,
  SolutionsGrid,
  SolutionsSection,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Medital - Sistem Rekam Medis",
  description: "Sistem Rekam Medis",
};

export default function Medital() {
  return (
    <MainLayout>
      <Hero backgroundImage="/medital-2048x979.png" position="centerLeft">
        <HeroContent width="md">
          <HeroTitle size="xl" variant="default" weight="semibold">
            Medital
          </HeroTitle>
          <HeroSubtitle>
            Aplikasi Layanan Kesehatan All in one Terbaik Untuk Anda
          </HeroSubtitle>
          <HeroDescription>
            Sudah saatnya anda dan keluarga mendapatkan pelayanan kesehatan
            terbaik
          </HeroDescription>
          <HeroButton>Unduh Sekarang</HeroButton>
        </HeroContent>
      </Hero>

      <SolutionsSection>
        <Header align="center">
          <HeaderTitle size="xl" weight="bold">
            Medital Hadir Sebagai Solusi
          </HeaderTitle>
          <HeaderDivider dotCount={3} />
          <HeaderDescription>
            Semua solusi sekarang ada dalam genggaman anda
          </HeaderDescription>
        </Header>
        <SolutionsGrid solutions={solutionsMedital} />
      </SolutionsSection>

      <ServicesSection>
        <Header align="center">
          <HeaderTitle size="xl" weight="semibold">
            Fitur Medital
          </HeaderTitle>
          <HeaderDivider dotCount={3} />
          <HeaderDescription>
            Fitur ini kami design khusus untuk membantu anda mengakses layanan
            kesehatan secara efisien
          </HeaderDescription>
        </Header>
        <ServicesGrid services={servicesMedital} />
      </ServicesSection>

      <ServicesSection>
        <Header align="center">
          <HeaderTitle size="xl" weight="semibold">
            Medital
          </HeaderTitle>
          <HeaderDivider dotCount={3} />
          <HeaderDescription>
            Aplikasi Layanan Kesehatan All in one Terbaik Untuk Anda
          </HeaderDescription>
        </Header>
      </ServicesSection>

      <CTASection>
        <CTAContainer variant="default" size="default">
          <CTAText
            title="Lindungi kesehatan anda dengan Medital"
            description="Gunakan medital untuk mempermudah akses anda dengan dokter dan layanan kesehatan tanpa perlu mengantre"
            highlight="kesehatan"
          />
          <CTAButtonContainer>
            <CTAButton href="https://play.google.com/store/apps/details?id=com.medital.medital_apps">
              Unduh Sekarang
            </CTAButton>
          </CTAButtonContainer>
        </CTAContainer>
      </CTASection>
    </MainLayout>
  );
}
