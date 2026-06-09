import Link from "next/link";
import { Mail, DownloadCloud } from "lucide-react";

import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export default function ContactCta() {
	const github = profile.socials.find((s) => s.label === "GitHub");
	const linkedin = profile.socials.find((s) => s.label === "LinkedIn");

	return (
		<section className="bg-background py-16 sm:py-20">
			<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
				<Card>
					<CardHeader>
						<CardTitle>Open to hiring conversations</CardTitle>
						<CardDescription>
							{profile.availability} I&apos;m actively interested in backend
							engineering roles focused on APIs, data pipelines, and reliable
							systems.
						</CardDescription>
					</CardHeader>

					<CardContent>
						<p className="text-sm text-muted-foreground">
							If you&apos;re hiring for backend roles or have a contract need,
							reach out — happy to discuss system design, architecture, and
							hiring timelines.
						</p>
					</CardContent>

					<CardFooter className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
						<Button asChild className="h-11 rounded-md px-4">
							<a href={profile.contact.email.href}>
								<Mail className="size-4 mr-2" aria-hidden="true" />
								Email Me
							</a>
						</Button>

						{profile.contact.resume ? (
							<Button asChild variant="outline" className="h-11 rounded-md px-4">
								<Link href={profile.contact.resume.href}>
									<DownloadCloud className="size-4 mr-2" aria-hidden="true" />
									Download Resume
								</Link>
							</Button>
						) : null}

						{github ? (
							<Button asChild variant="outline" className="h-11 rounded-md px-4">
								<a href={github.href} target="_blank" rel="noreferrer">
									GitHub
								</a>
							</Button>
						) : null}

						{linkedin ? (
							<Button asChild variant="outline" className="h-11 rounded-md px-4">
								<a href={linkedin.href} target="_blank" rel="noreferrer">
									LinkedIn
								</a>
							</Button>
						) : null}
					</CardFooter>
				</Card>
			</div>
		</section>
	);
}