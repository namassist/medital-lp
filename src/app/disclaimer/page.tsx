import React from "react";
import { Metadata } from "next";
import MainLayout from "@/components/layouts/main";

export const metadata: Metadata = {
  title: "Disclaimer - Sistem Rekam Medis",
  description: "Sistem Rekam Medis",
};

export default function Disclaimer() {
  return (
    <MainLayout>
      <section className="py-10">
        <div className="px-8 space-y-4">
          <h1 className="text-[#3a3a3a] capitalize text-3xl font-bold">
            Disclaimer for medital.id
          </h1>
          <p className="text-[#4b4f58]">
            If you require any more information or have any questions about our
            site’s disclaimer, please feel free to contact us by email at
            sales@kosta-consulting.com
          </p>
          <p className="text-[#4b4f58]">
            All the information on this website – https://medital.id/ – is
            published in good faith and for general information purpose only.
            medital.id does not make any warranties about the completeness,
            reliability and accuracy of this information. Any action you take
            upon the information you find on this website (medital.id), is
            strictly at your own risk. medital.id will not be liable for any
            losses and/or damages in connection with the use of our website.
          </p>
          <p className="text-[#4b4f58]">
            From our website, you can visit other websites by following
            hyperlinks to such external sites. While we strive to provide only
            quality links to useful and ethical websites, we have no control
            over the content and nature of these sites. These links to other
            websites do not imply a recommendation for all the content found on
            these sites. Site owners and content may change without notice and
            may occur before we have the opportunity to remove a link which may
            have gone ‘bad’.
          </p>
          <p className="text-[#4b4f58]">
            Please be also aware that when you leave our website, other sites
            may have different privacy policies and terms which are beyond our
            control. Please be sure to check the Privacy Policies of these sites
            as well as their “Terms of Service” before engaging in any business
            or uploading any information.
          </p>

          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <h2 className="text-3xl text-[#3a3a3a]">Consent</h2>
              <p className="text-[#4b4f58]">
                By using our website, you hereby consent to our disclaimer and
                agree to its terms.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl text-[#3a3a3a]">Update</h3>
              <p className="text-[#4b4f58]">
                Should we update, amend or make any changes to this document,
                those changes will be prominently posted here.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
