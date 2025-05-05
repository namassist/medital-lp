import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import MainLayout from "@/components/layouts/main";
import { ChevronsRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Artikel - Sistem Rekam Medis",
  description: "Sistem Rekam Medis",
};

export default function Artikel() {
  return (
    <MainLayout>
      <section className="py-10 bg-[#F5F5F5] px-8">
        <div className="bg-white p-10 space-y-5 border-b-[1px]">
          <Image
            src="/Aplikasi-Booking-Dokter-di-Rumah-Sakit.webp"
            alt="Medibook"
            sizes="100vw"
            width={1200}
            height={1200}
          />
          <h4 className="text-3xl text-[#3a3a3a]">
            EHR: Bagaimana Cara Memilih Vendor yang tepat?
          </h4>
          <p className="text-[#484f58]">
            Electronic Health Record (EHR) menjadi solusi bagi penyedia layanan
            kesehatan yang ingin meningkatkan kualitas layanan dan efisiensi
            operasional. Namun, memilih vendor EHR yang tepat bisa menjadi
            tantangan, terutama ketika ada banyak vendor yang menawarkan fitur
            yang sama atau mirip. Artikel ini akan membahas beberapa faktor
            penting yang perlu dipertimbangkan dalam memilih vendor EHR yang
            tepat. …
          </p>
          <Link href="/" className="text-[#0170B9]">
            Read More
            <ChevronsRight className="inline-block" size={12} />
          </Link>
        </div>
        <div className="bg-white p-10 space-y-5 border-b-[1px]">
          <Image
            src="/Aplikasi-Booking-Dokter-di-Rumah-Sakit.webp"
            alt="Medibook"
            sizes="100vw"
            width={1200}
            height={1200}
          />
          <h4 className="text-3xl text-[#3a3a3a]">
            EHR: Bagaimana Cara Memilih Vendor yang tepat?
          </h4>
          <p className="text-[#484f58]">
            Electronic Health Record (EHR) menjadi solusi bagi penyedia layanan
            kesehatan yang ingin meningkatkan kualitas layanan dan efisiensi
            operasional. Namun, memilih vendor EHR yang tepat bisa menjadi
            tantangan, terutama ketika ada banyak vendor yang menawarkan fitur
            yang sama atau mirip. Artikel ini akan membahas beberapa faktor
            penting yang perlu dipertimbangkan dalam memilih vendor EHR yang
            tepat. …
          </p>
          <Link href="/" className="text-[#0170B9]">
            Read More
            <ChevronsRight className="inline-block" size={12} />
          </Link>
        </div>
        <div className="bg-white p-10 space-y-5 border-b-[1px]">
          <Image
            src="/Aplikasi-Booking-Dokter-di-Rumah-Sakit.webp"
            alt="Medibook"
            sizes="100vw"
            width={1200}
            height={1200}
          />
          <h4 className="text-3xl text-[#3a3a3a]">
            EHR: Bagaimana Cara Memilih Vendor yang tepat?
          </h4>
          <p className="text-[#484f58]">
            Electronic Health Record (EHR) menjadi solusi bagi penyedia layanan
            kesehatan yang ingin meningkatkan kualitas layanan dan efisiensi
            operasional. Namun, memilih vendor EHR yang tepat bisa menjadi
            tantangan, terutama ketika ada banyak vendor yang menawarkan fitur
            yang sama atau mirip. Artikel ini akan membahas beberapa faktor
            penting yang perlu dipertimbangkan dalam memilih vendor EHR yang
            tepat. …
          </p>
          <Link href="/" className="text-[#0170B9]">
            Read More
            <ChevronsRight className="inline-block" size={12} />
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
