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

export const metadata: Metadata = {
  title: "Case Studies | Candra Saka Rahardian",
  description:
    "Architecture-focused backend case studies covering reporting pipelines, media services, event-driven processing, and high-volume data workflows.",
};

export default function SystemDesignPage() {
  return (
    <main>
      <section className="border-b bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground">
              Case Studies
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
              Architecture decisions from backend systems
            </h1>
            <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
              Concise case study summaries focused on backend constraints,
              system boundaries, architecture tradeoffs, and production data
              workflows.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 lg:grid-cols-2">
            {caseStudies.map((caseStudy) => (
              <Card
                key={caseStudy.slug}
                id={caseStudy.slug}
                className="scroll-mt-24 rounded-lg"
              >
                <CardHeader>
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
                  <CardTitle className="mt-3 text-xl">
                    {caseStudy.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-6 text-muted-foreground">
                    {caseStudy.summary}
                  </p>

                  <div
                    id={`${caseStudy.slug}-architecture`}
                    className="scroll-mt-24 rounded-md border bg-background p-4"
                  >
                    <p className="text-xs font-medium uppercase tracking-normal text-muted-foreground">
                      Architecture highlight
                    </p>
                    <p className="mt-2 text-sm leading-6 text-foreground">
                      {caseStudy.architecture.overview}
                    </p>
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
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
