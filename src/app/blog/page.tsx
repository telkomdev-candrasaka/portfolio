import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Blog | Candra Saka Rahardian",
  description:
    "Technical writing about backend architecture, REST APIs, databases, queues, and full stack learning.",
};

export default function BlogPage() {
  return (
    <main>
      <section className="border-b bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground">
              Technical Writing
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
              Notes on backend architecture and full stack growth
            </h1>
            <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
              Articles are organized around practical engineering topics:
              maintainable APIs, data modeling, queues, reliability, and product
              delivery from a backend-first perspective.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Card key={article.slug} className="rounded-lg">
                <CardHeader>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="rounded-md">
                      {article.category}
                    </Badge>
                    <Badge variant="outline" className="rounded-md">
                      {article.readingTime}
                    </Badge>
                  </div>
                  <CardTitle className="mt-3 text-lg">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-6 text-muted-foreground">
                    {article.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="rounded-md text-muted-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
