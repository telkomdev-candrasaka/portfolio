import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { caseStudies } from "@/data/case-studies";

type CaseStudyPageProps = {
  readonly params: Promise<{
    readonly slug: string;
  }>;
};

function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found | Candra Saka Rahardian",
    };
  }

  return {
    title: `${caseStudy.title} | Case Study`,
    description: caseStudy.summary,
  };
}

export default async function CaseStudyDetailPage({
  params,
}: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <main>
      <section className="border-b bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Button asChild variant="link" className="mb-6 h-auto px-0">
            <Link href="/system-design">
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to case studies
            </Link>
          </Button>

          <div className="max-w-4xl">
            <p className="text-sm font-medium text-muted-foreground">
              Case Study
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
              {caseStudy.title}
            </h1>
            <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
              {caseStudy.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
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
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="space-y-4">
            <Card className="rounded-lg">
              <CardHeader>
                <CardTitle className="text-xl">Problem</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  {caseStudy.problem}
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-lg">
              <CardHeader>
                <CardTitle className="text-xl">Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {caseStudy.challenges.map((challenge) => (
                    <li
                      key={challenge}
                      className="text-sm leading-6 text-muted-foreground"
                    >
                      {challenge}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card className="rounded-lg">
              <CardHeader>
                <CardTitle className="text-xl">Architecture</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-sm leading-6 text-muted-foreground">
                  {caseStudy.architecture.overview}
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-normal text-muted-foreground">
                      Components
                    </p>
                    <ul className="mt-2 space-y-1">
                      {caseStudy.architecture.components.map((component) => (
                        <li
                          key={component}
                          className="text-sm leading-6 text-foreground"
                        >
                          {component}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-normal text-muted-foreground">
                      Flow
                    </p>
                    <ol className="mt-2 space-y-1">
                      {caseStudy.architecture.flow.map((step) => (
                        <li key={step} className="text-sm leading-6 text-foreground">
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-lg">
              <CardHeader>
                <CardTitle className="text-xl">Tradeoffs</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2">
                {caseStudy.tradeoffs.map((tradeoff) => (
                  <div
                    key={tradeoff.decision}
                    className="rounded-md border bg-background p-4"
                  >
                    <p className="text-sm font-medium text-foreground">
                      {tradeoff.decision}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Benefit: {tradeoff.benefit}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Cost: {tradeoff.cost}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="rounded-lg">
              <CardHeader>
                <CardTitle className="text-xl">Lessons learned</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {caseStudy.lessonsLearned.map((lesson) => (
                    <li
                      key={lesson}
                      className="text-sm leading-6 text-muted-foreground"
                    >
                      {lesson}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
