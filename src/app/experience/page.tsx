import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { caseStudies } from "@/data/case-studies";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Experience | Candra Saka Rahardian",
  description:
    "Professional backend engineering experience at PT Telkom Indonesia / OCA, covering REST APIs, RabbitMQ workflows, reporting pipelines, media services, and object storage.",
};

const professionalExperience = experience.find(
  (item) => item.type === "professional"
);

const selectedWork = [
  {
    label: "Session Reporting Pipeline",
    caseStudySlug: "session-reporting-pipeline",
  },
  {
    label: "Media Management Service",
    caseStudySlug: "whatsapp-media-service",
  },
  {
    label: "Event Driven Processing",
    caseStudySlug: "event-driven-processing",
  },
  {
    label: "Object Storage Lifecycle",
    caseStudySlug: "whatsapp-media-service",
  },
] as const;

const technologyGroups = [
  {
    title: "Backend",
    items: ["Node.js", "TypeScript", "REST APIs", "Service boundaries"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "Indexing", "Reporting queries"],
  },
  {
    title: "Messaging",
    items: ["RabbitMQ", "Background workers", "Retries", "Dead-letter flows"],
  },
  {
    title: "Storage",
    items: ["S3-compatible Object Storage", "Media metadata", "Upload workflows"],
  },
  {
    title: "Infrastructure",
    items: ["Redis", "Job status tracking", "Production support", "Operations"],
  },
] as const;

function getSelectedCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export default function ExperiencePage() {
  const role = professionalExperience?.role ?? "Backend Developer";
  const organization =
    professionalExperience?.organization ?? "PT Telkom Indonesia / OCA";
  const period = professionalExperience
    ? `${professionalExperience.startDate} - ${professionalExperience.endDate}`
    : "Jul 2021 - Present";
  const responsibilities = professionalExperience?.responsibilities ?? [];

  return (
    <main>
      <section className="border-b bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-muted-foreground">
                Experience
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
                {role} focused on production backend systems
              </h1>
              <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
                {profile.summary}
              </p>
            </div>

            <Card className="rounded-lg">
              <CardHeader>
                <CardTitle className="text-lg">Current role</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-foreground">{organization}</p>
                  <p className="text-muted-foreground">{period}</p>
                </div>
                <p className="leading-6 text-muted-foreground">
                  {professionalExperience?.summary ?? profile.headline}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Key Responsibilities
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-normal text-foreground">
                Backend ownership across APIs, queues, data, storage, and operations
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {responsibilities.map((responsibility) => (
                <Card key={responsibility} size="sm" className="rounded-lg">
                  <CardContent>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {responsibility}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-muted-foreground">
                Selected Engineering Work
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-normal text-foreground">
                Case-study-backed examples of production backend work
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                These examples connect day-to-day engineering responsibilities to
                concrete architecture tradeoffs, failure modes, and technology
                choices.
              </p>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {selectedWork.map((work) => {
                const caseStudy = getSelectedCaseStudy(work.caseStudySlug);

                if (!caseStudy) {
                  return null;
                }

                return (
                  <Card key={work.label} className="rounded-lg">
                    <CardHeader>
                      <CardTitle className="text-xl">{work.label}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm leading-6 text-muted-foreground">
                        {caseStudy.summary}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.technologies.map((technology) => (
                          <Badge
                            key={technology}
                            variant="outline"
                            className="rounded-md text-muted-foreground"
                          >
                            {technology}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="link" className="h-auto px-0">
                        <Link href={`/system-design/${caseStudy.slug}`}>
                          Read Case Study
                          <ArrowRight className="size-4" aria-hidden="true" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>

          <div>
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-muted-foreground">
                Technologies
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-normal text-foreground">
                Capability-based backend toolkit
              </h2>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {technologyGroups.map((group) => (
                <Card key={group.title} size="sm" className="rounded-lg">
                  <CardHeader>
                    <CardTitle>{group.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
