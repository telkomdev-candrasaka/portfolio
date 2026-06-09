import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { articles } from "@/data/articles";

export default function RecentArticles() {
  const featured = articles.filter((a) => a.featured);

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-foreground">Recent Articles</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Lessons learned from backend engineering, system design, and full stack development.
            </p>
          </div>

          <Link href="/blog" className="text-sm font-medium text-foreground underline-offset-4 hover:underline">
            View All Articles
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((article) => (
            <Card key={article.slug} className="rounded-lg">
              <CardHeader>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">{article.category}</p>
                    <CardTitle className="mt-1 text-lg">{article.title}</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground">{article.readingTime}</p>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground">{article.summary}</p>
              </CardContent>

              <CardFooter className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="rounded-md text-muted-foreground">
                    {tag}
                  </Badge>
                ))}
                <Link href={`/blog/${article.slug}`} className="ml-auto text-sm font-medium text-foreground underline-offset-4 hover:underline">
                  Read
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}