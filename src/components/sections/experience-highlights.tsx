import * as React from "react";

import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import { experienceSummary } from "@/data/experience";

export default function ExperienceHighlights() {
	return (
		<section className="py-16 sm:py-20">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="text-2xl font-semibold text-foreground">
						Experience Highlights
					</h2>
					<p className="mt-2 text-sm text-muted-foreground">
						Backend engineering experience across production systems, data
						workflows, and architecture decisions.
					</p>
				</div>

				<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{experienceSummary.map((item) => (
						<Card key={item.label}>
							<CardHeader>
								<CardTitle className="text-sm">{item.label}</CardTitle>
								<CardDescription className="mt-1 text-lg font-semibold text-foreground">
									{item.value}
								</CardDescription>
							</CardHeader>

							<CardContent>
								<p className="text-sm text-muted-foreground">{item.description}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}