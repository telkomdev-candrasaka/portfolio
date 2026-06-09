export type Article = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  readingTime: string;
  tags: string[];
  featured: boolean;
};

export const articles: Article[] = [
  {
    slug: "rest-api-maintainability",
    title: "Designing REST APIs That Stay Maintainable",
    summary:
      "Lessons learned from building production APIs that remain easy to evolve over time.",
    category: "API Design",
    readingTime: "6 min",
    tags: ["REST API", "Node.js"],
    featured: true,
  },
];