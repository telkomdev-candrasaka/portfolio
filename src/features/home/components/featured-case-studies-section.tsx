import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { CaseStudy } from "@/types/case-study";

import { SectionHeading } from "./section-heading";

type FeaturedCaseStudiesSectionProps = {
  readonly caseStudies: readonly CaseStudy[];
};

export function FeaturedCaseStudiesSection({
  caseStudies,
}: FeaturedCaseStudiesSectionProps) {
  return (
    <section className="border-b bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Case Studies"
            title="Architecture decisions from backend systems"
            description="These are separated from projects because they focus on system constraints, tradeoffs, and lessons learned."
          />
          <Link
            href="/system-design"
            className="inline-flex text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            View all case studies
          </Link>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {caseStudies.map((caseStudy) => (
            <Card key={caseStudy.slug} className="rounded-lg">
              <CardHeader>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologies.slice(0, 4).map((technology) => (
                    <Badge
                      key={technology}
                      variant="outline"
                      className="rounded-md text-muted-foreground"
                    >
                      {technology}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="mt-3 text-lg">
                  {caseStudy.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-6 text-muted-foreground">
                  {caseStudy.summary}
                </p>
                <div className="rounded-md border bg-muted/40 p-3">
                  <p className="text-xs font-medium uppercase tracking-normal text-muted-foreground">
                    Architecture focus
                  </p>
                  <p className="mt-2 text-sm leading-6 text-foreground">
                    {caseStudy.architecture.components.slice(0, 4).join(" / ")}
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Link
                  href="/system-design"
                  className="inline-flex items-center gap-1 text-sm font-medium text-foreground underline-offset-4 hover:underline"
                >
                  Explore case studies
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
