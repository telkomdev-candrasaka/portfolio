import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { featuredCaseStudies } from "@/data/case-studies";

export default function FeaturedCaseStudies() {
	return (
		<section className="py-16 sm:py-20">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="text-2xl font-semibold text-foreground">
						Featured Case Studies
					</h2>
					<p className="mt-2 text-sm text-muted-foreground">
						Real-world backend engineering challenges involving queues,
						reporting pipelines, storage systems, and high-volume data
						processing.
					</p>
				</div>

				<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{featuredCaseStudies.map((cs) => (
						<Card key={cs.slug} className="rounded-lg">
							<CardHeader>
								<div className="flex flex-wrap gap-2">
									{cs.technologies.slice(0, 4).map((tech) => (
										<Badge
											key={tech}
											variant="outline"
											className="rounded-md text-muted-foreground"
										>
											{tech}
										</Badge>
									))}
								</div>
								<CardTitle className="mt-3 text-lg">{cs.title}</CardTitle>
							</CardHeader>

							<CardContent className="space-y-3">
								<p className="text-sm leading-6 text-muted-foreground">
									{cs.problem}
								</p>

								<div className="rounded-md border bg-muted/40 p-3">
									<p className="text-xs font-medium uppercase tracking-normal text-muted-foreground">
										Architecture highlight
									</p>
									<p className="mt-2 text-sm leading-6 text-foreground">
										{cs.architecture.overview}
									</p>
								</div>
							</CardContent>

							<CardFooter>
								<Link
									href={`/system-design/${cs.slug}`}
									className="inline-flex items-center gap-1 text-sm font-medium text-foreground underline-offset-4 hover:underline"
								>
									Read Case Study
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