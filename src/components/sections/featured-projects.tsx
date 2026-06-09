import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { featuredProjects } from "@/data/projects";

function statusVariant(status: string) {
	switch (status) {
		case "completed":
			return "default";
		case "in-progress":
			return "secondary";
		case "planned":
		default:
			return "outline";
	}
}

export default function FeaturedProjects() {
	const projects = featuredProjects;

	return (
		<section className="py-16 sm:py-20">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="text-2xl font-semibold text-foreground">Featured Projects</h2>
					<p className="mt-2 text-sm text-muted-foreground">
						Personal projects focused on backend architecture, product development, and full stack engineering.
					</p>
				</div>

				<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{projects.map((project) => (
						<Card key={project.slug} className="rounded-lg">
							<CardHeader>
								<div className="flex items-start justify-between gap-4">
									<div>
										<CardTitle className="text-lg">{project.title}</CardTitle>
										<p className="mt-1 text-sm text-muted-foreground">{project.summary}</p>
									</div>

									<Badge variant={statusVariant(project.status)} className="rounded-md">
										{project.status}
									</Badge>
								</div>
								<div className="mt-3 flex flex-wrap gap-2">
									{project.stack.slice(0, 4).map((tech) => (
										<Badge key={tech} variant="outline" className="rounded-md text-muted-foreground">
											{tech}
										</Badge>
									))}
								</div>
							</CardHeader>

							<CardContent>
								<p className="text-sm text-muted-foreground">{project.description}</p>
							</CardContent>

							<CardFooter>
								<Link href={project.links[0]?.href ?? `/projects/${project.slug}`} className="inline-flex items-center text-sm font-medium text-foreground underline-offset-4 hover:underline">
									View Project
								</Link>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}