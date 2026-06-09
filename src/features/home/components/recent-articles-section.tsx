import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { articles } from "@/data/articles";
import type { NavigationItem } from "@/data/navigation";

import { SectionHeading } from "./section-heading";

type RecentArticlesSectionProps = {
  readonly blogRoute: NavigationItem;
};

export function RecentArticlesSection({ blogRoute }: RecentArticlesSectionProps) {
  const recentArticles = articles.filter((article) => article.featured);

  return (
    <section className="border-b bg-muted/30 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Technical Writing"
            title="Recent articles"
            description="This section is ready for backend architecture, API design, database, queue, and full stack learning posts."
          />
          <Button asChild variant="outline" className="w-fit rounded-md">
            <Link href={blogRoute.href}>{blogRoute.label}</Link>
          </Button>
        </div>

        {recentArticles.length > 0 ? (
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {recentArticles.map((article) => (
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
        ) : (
          <Card className="mt-8 rounded-lg border-dashed">
            <CardHeader>
              <CardTitle className="text-lg">
                Technical articles are being prepared
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
                No article data has been added yet. When posts are available,
                this section can render recent writing from a typed blog data
                source without changing the homepage composition.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
