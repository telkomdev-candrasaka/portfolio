import { featuredCaseStudies } from "@/data/case-studies";
import { experienceSummary } from "@/data/experience";
import { mainNavigation } from "@/data/navigation";
import { profile } from "@/data/profile";
import { featuredProjects } from "@/data/projects";
import { ContactCtaSection } from "@/features/home/components/contact-cta-section";
import { ExperienceHighlightsSection } from "@/features/home/components/experience-highlights-section";
import { FeaturedCaseStudiesSection } from "@/features/home/components/featured-case-studies-section";
import { FeaturedProjectsSection } from "@/features/home/components/featured-projects-section";
import { HeroSection } from "@/features/home/components/hero-section";
import { RecentArticlesSection } from "@/features/home/components/recent-articles-section";
import { TechnicalExpertiseSection } from "@/features/home/components/technical-expertise-section";

export default function HomePage() {
  const blogRoute = mainNavigation.find((item) => item.href === "/blog") ?? {
    label: "Blog",
    href: "/blog",
    description: "Technical articles on backend and full stack engineering.",
  };

  return (
    <main>
      <HeroSection profile={profile} />
      <ExperienceHighlightsSection highlights={experienceSummary} />
      <FeaturedCaseStudiesSection caseStudies={featuredCaseStudies} />
      <FeaturedProjectsSection projects={featuredProjects} />
      <TechnicalExpertiseSection skillGroups={profile.skillGroups} />
      <RecentArticlesSection blogRoute={blogRoute} />
      <ContactCtaSection profile={profile} />
    </main>
  );
}
