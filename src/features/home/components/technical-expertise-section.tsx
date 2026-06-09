import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { SkillGroup } from "@/data/profile";

import { SectionHeading } from "./section-heading";

type TechnicalExpertiseSectionProps = {
  readonly skillGroups: readonly SkillGroup[];
};

export function TechnicalExpertiseSection({
  skillGroups,
}: TechnicalExpertiseSectionProps) {
  return (
    <section className="border-b bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technical Expertise"
          title="Capabilities organized around backend outcomes"
          description="The stack is presented by engineering responsibility instead of a generic list of tools."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <Card key={group.title} className="rounded-lg" size="sm">
              <CardHeader>
                <CardTitle>{group.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge
                      key={item}
                      variant="outline"
                      className="rounded-md text-muted-foreground"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
