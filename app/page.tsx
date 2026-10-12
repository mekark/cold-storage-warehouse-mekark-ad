import BlueprintHeroSection from "@/components/BlueprintHeroSection";
import ProcessSection from "@/components/ProcessSection";
import WhyMekarkSection from "@/components/WhyMekarkSection";
import WhyEditorialMobile from "@/components/WhyEditorialMobile";
import ProjectsGallerySection from "@/components/ProjectsGallerySection";
import FaqAccordionSection from "@/components/FaqAccordionSection";
import LeadBlueprintSection from "@/components/LeadBlueprintSection";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <main className="overflow-hidden">


      
      <FloatingContact />
      <BlueprintHeroSection />
      <ProcessSection />
      <WhyMekarkSection />
      <ProjectsGallerySection />
      <FaqAccordionSection />
      <LeadBlueprintSection />
    </main>
  );
}
