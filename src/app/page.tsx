import MainLayout from "@/components/layouts/main";
import { values, services } from "@/constant";
import {
  Hero,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroDescription,
  HeroButton,
  ValuesSection,
  ValuesContainer,
  ValuesGrid,
  ValueItem,
  ServicesGrid,
  ServicesSection,
  CTAButton,
  CTAButtonContainer,
  CTAContainer,
  CTASection,
  CTAText,
  Header,
  HeaderTitle,
  HeaderDescription,
  HeaderDivider,
} from "@/components/ui";

export default function Home() {
  return (
    <MainLayout>
      <Hero backgroundImage="/medital-2048x979.png" position="centerLeft">
        <HeroContent width="md">
          <HeroTitle size="sm" variant="default" weight="bold">
            Medital
          </HeroTitle>
          <HeroSubtitle>
            Sistem Layanan Kesehatan Terbaik untuk Anda dan Keluarga
          </HeroSubtitle>
          <HeroDescription>
            Hadir dengan lebih dari 3.000 spesialis yang siap membantu Anda.
          </HeroDescription>
          <HeroButton>Hubungi Kami</HeroButton>
        </HeroContent>
      </Hero>

      <ValuesSection>
        <ValuesContainer>
          <Header align="center">
            <HeaderTitle size="xl" weight="medium">
              Melayani dengan hati
            </HeaderTitle>
            <HeaderDivider dotCount={3} />
            <HeaderDescription>
              Kami menyediakan layanan kesehatan secara online yang mudah
              digunakan.
            </HeaderDescription>
          </Header>

          <ValuesGrid columns="3">
            {values.map((item) => (
              <ValueItem key={item.id} item={item} />
            ))}
          </ValuesGrid>
        </ValuesContainer>
      </ValuesSection>

      <ServicesSection>
        <Header align="center">
          <HeaderTitle size="xl">Medital</HeaderTitle>
          <HeaderDivider dotCount={3} />
          <HeaderDescription>
            Kami mendukung Anda agar tetap sehat. Medital menyediakan layanan
            kesehatan yang terhubung dengan dokter, klinik dan laboratorium
            terbaik di seluruh Indonesia.
          </HeaderDescription>
        </Header>

        <ServicesGrid services={services} />
      </ServicesSection>

      <CTASection>
        <CTAContainer variant="default" size="default">
          <CTAText
            title="Dapatkan Pengalaman Terbaik dalam mengakses Layanan Kesehatan"
            description="Para ahli di Medital memastikan kenyamanan Anda saat berobat."
            highlight="Pengalaman Terbaik"
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
