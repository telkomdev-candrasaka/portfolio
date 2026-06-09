import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { profile } from "@/data/profile";

export default function TechnicalExpertise() {
  const groups = profile.skillGroups;

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-foreground">Technical Expertise</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Engineering capabilities developed through building production backend systems, asynchronous workflows, and scalable data processing pipelines.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {groups.map((group) => (
            <Card key={group.title} className="rounded-lg">
              <CardHeader>
                <CardTitle className="text-lg">{group.title}</CardTitle>
                <CardDescription>
                  {group.items.slice(0, 3).join(", ")}
                  {group.items.length > 3 ? "…" : ""}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li key={skill}>
                      <Badge variant="outline" className="rounded-md text-muted-foreground">
                        {skill}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}