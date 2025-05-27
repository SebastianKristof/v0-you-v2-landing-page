import Image from "next/image";
import { Check, Award } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import ScrollReveal from "@/components/scroll-reveal";
import ImageModal from "@/components/image-modal";

export function AboutSection() {
  const { t } = useLanguage();
  const aboutCredentials = t("about.credentials", { returnObjects: true }) || [];
  return (
    <section
      id="about"
      className="w-full py-10 md:py-16 lg:py-24"
      style={{ backgroundColor: "hsl(var(--executive-light-blue))" }}
    >
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-[800px] space-y-8 md:space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="section-title">{t("about.title")}</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3">
              <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden">
                <Image
                  src="/images/sebastian-office.png"
                  alt="Dr. Sebastian Kristof"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-4">
              <h3 className="text-xl md:text-2xl font-bold">{t("about.name")}</h3>
              <ul className="space-y-2">
                {Array.isArray(aboutCredentials) &&
                  aboutCredentials.map((credential: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <Check
                        className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5"
                        style={{ color: "hsl(var(--executive-blue))" }}
                      />
                      <span className="text-sm md:text-base">{credential}</span>
                    </li>
                  ))}
              </ul>
              <blockquote
                className="pl-4 border-l-2 italic text-sm md:text-base"
                style={{ borderColor: "hsl(var(--executive-blue))" }}
              >
                {t("about.quote")}
              </blockquote>
            </div>
          </div>
          {/* Certificates gallery */}
          <div className="mt-8">
            <h3 className="text-xl font-medium mb-4 text-center">Credentials & Certifications</h3>
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              {/* Yale Certificate */}
              <div className="executive-card p-0 h-24 md:h-40 overflow-hidden">
                <div className="relative h-full w-full bg-gray-100 flex items-center justify-center">
                  <Award className="h-12 w-12 text-gray-400" />
                  <div className="absolute inset-0">
                    <ImageModal
                      src="/images/postdoc-yale.png"
                      alt="Yale University Postdoctoral Fellowship Certificate"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-white/80 p-2 text-center">
                    <p className="text-sm font-medium">Yale Medical Informatics Fellowship</p>
                  </div>
                </div>
              </div>
              {/* American Academy of Hypnosis Certificate */}
              <div className="executive-card p-0 h-24 md:h-40 overflow-hidden">
                <div className="relative h-full w-full bg-gray-100 flex items-center justify-center">
                  <Award className="h-12 w-12 text-gray-400" />
                  <div className="absolute inset-0">
                    <ImageModal
                      src="/images/cert_hypnotherapy_1.jpg"
                      alt="Certified Master Hypnotherapist Certificate"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-white/80 p-2 text-center">
                    <p className="text-sm font-medium">Certified Master Hypnotherapist</p>
                  </div>
                </div>
              </div>
              {/* Mike Mandel Hypnosis Certificate */}
              <div className="executive-card p-0 h-24 md:h-40 overflow-hidden">
                <div className="relative h-full w-full bg-gray-100 flex items-center justify-center">
                  <Award className="h-12 w-12 text-gray-400" />
                  <div className="absolute inset-0">
                    <ImageModal src="/images/cert_sk_mikemandel.jpg" alt="Neo-Ericksonian Hypnosis Certificate" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-white/80 p-2 text-center">
                    <p className="text-sm font-medium">Neo-Ericksonian Hypnosis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
} 