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
import type { Project } from "@/data/projects";

import { SectionHeading } from "./section-heading";

type FeaturedProjectsSectionProps = {
  readonly projects: readonly Project[];
};

export function FeaturedProjectsSection({
  projects,
}: FeaturedProjectsSectionProps) {
  return (
    <section className="border-b bg-muted/30 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Projects"
            title="Product work with backend-heavy foundations"
            description="Projects show implementation, product thinking, and full stack growth while preserving backend architecture as the core signal."
          />
          <Link
            href="/projects"
            className="inline-flex text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            View all projects
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.slug} className="rounded-lg">
              <CardHeader>
                <Badge variant="secondary" className="w-fit rounded-md">
                  {project.status}
                </Badge>
                <CardTitle className="mt-3 text-lg">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-6 text-muted-foreground">
                  {project.summary}
                </p>
                <div>
                  <p className="text-xs font-medium uppercase tracking-normal text-muted-foreground">
                    Backend focus
                  </p>
                  <ul className="mt-2 space-y-1">
                    {project.capabilities.slice(0, 3).map((capability) => (
                      <li
                        key={capability}
                        className="text-sm leading-6 text-foreground"
                      >
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.stack.slice(0, 4).map((technology) => (
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
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1 text-sm font-medium text-foreground underline-offset-4 hover:underline"
                >
                  Explore projects
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
