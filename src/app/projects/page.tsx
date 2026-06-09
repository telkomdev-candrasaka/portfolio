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
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Candra Saka Rahardian",
  description:
    "Backend-focused projects covering APIs, data workflows, operational systems, full stack delivery, and architecture decisions.",
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="border-b bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground">
              Projects
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
              Product work with backend-heavy foundations
            </h1>
            <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
              These projects emphasize service boundaries, data modeling,
              workflow design, and practical product delivery rather than visual
              decoration.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 lg:grid-cols-3">
            {projects.map((project) => (
              <Card
                key={project.slug}
                id={project.slug}
                className="scroll-mt-24 rounded-lg"
              >
                <CardHeader>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="rounded-md">
                      {project.status}
                    </Badge>
                    <Badge variant="outline" className="rounded-md">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="mt-3 text-lg">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-6 text-muted-foreground">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
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
                    <Link href={`/projects#${project.slug}`}>
                      {project.links[0]?.label ?? "View project"}
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
