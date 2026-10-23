import BlueprintHeroSection from "@/components/BlueprintHeroSection";
import SpecsBarSection from "@/components/SpecsBarSection";
import ProcessSection from "@/components/ProcessSection";
import SolutionsSection from "@/components/SolutionsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProjectsGallerySection from "@/components/ProjectsGallerySection";
import FaqAccordionSection from "@/components/FaqAccordionSection";
import LeadBlueprintSection from "@/components/LeadBlueprintSection";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <main className="overflow-hidden">


      
      <FloatingContact />
      <BlueprintHeroSection />
      <SpecsBarSection />
      <ProcessSection />
      <SolutionsSection />
      <WhyChooseSection />
      <ProjectsGallerySection />
      <FaqAccordionSection />
      <LeadBlueprintSection />
    </main>
  );
}
