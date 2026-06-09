import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ExperienceSummary } from "@/data/experience";

import { SectionHeading } from "./section-heading";

type ExperienceHighlightsSectionProps = {
  readonly highlights: readonly ExperienceSummary[];
};

export function ExperienceHighlightsSection({
  highlights,
}: ExperienceHighlightsSectionProps) {
  return (
    <section className="border-b bg-muted/30 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Production-minded backend engineering"
          description="A compact view of the experience signals recruiters and engineering managers need to evaluate quickly."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((highlight) => (
            <Card key={highlight.label} className="rounded-lg" size="sm">
              <CardHeader>
                <CardDescription>{highlight.label}</CardDescription>
                <CardTitle>{highlight.value}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
