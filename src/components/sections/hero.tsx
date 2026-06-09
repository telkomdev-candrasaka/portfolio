import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export default function Hero() {
	return (
		<section className="border-b bg-background" aria-labelledby="hero-title">
			<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
				<div className="mx-auto max-w-3xl">
					<Badge variant="secondary" className="rounded-md px-3 py-1">
						{profile.role}
					</Badge>

					<h1
						id="hero-title"
						className="mt-5 text-4xl font-semibold tracking-normal text-foreground sm:text-5xl lg:text-6xl"
					>
						{profile.headline}
					</h1>

					<p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg">
						{profile.summary}
					</p>

					<div className="mt-8 flex flex-col gap-3 sm:flex-row">
						<Button asChild className="h-11 rounded-md px-4">
							<Link href="/system-design">
								View Case Studies
								<ArrowRight className="size-4" aria-hidden="true" />
							</Link>
						</Button>

						<Button asChild variant="outline" className="h-11 rounded-md px-4">
							<Link href="/projects">View Projects</Link>
						</Button>
					</div>

					<ul className="mt-8 flex flex-wrap gap-2" aria-label="Primary stack">
						{profile.primaryStack.map((item) => (
							<li key={item}>
								<Badge variant="outline" className="rounded-md px-3 py-1 text-muted-foreground">
									{item}
								</Badge>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}