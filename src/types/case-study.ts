export type CaseStudyArchitecture = {
  readonly overview: string;
  readonly components: readonly string[];
  readonly flow: readonly string[];
};

export type CaseStudyTradeoff = {
  readonly decision: string;
  readonly benefit: string;
  readonly cost: string;
};

export type CaseStudy = {
  readonly slug: string;
  readonly title: string;
  readonly summary: string;
  readonly problem: string;
  readonly architecture: CaseStudyArchitecture;
  readonly challenges: readonly string[];
  readonly tradeoffs: readonly CaseStudyTradeoff[];
  readonly lessonsLearned: readonly string[];
  readonly technologies: readonly string[];
  readonly featured: boolean;
};
