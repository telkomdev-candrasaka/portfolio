import Link from "next/link";
import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Profile } from "@/data/profile";

type ContactCtaSectionProps = {
  readonly profile: Profile;
};

export function ContactCtaSection({ profile }: ContactCtaSectionProps) {
  const github = profile.socials.find((social) => social.label === "GitHub");
  const linkedin = profile.socials.find(
    (social) => social.label === "LinkedIn"
  );

  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border bg-card p-6 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-muted-foreground">
              Contact
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-normal text-foreground sm:text-3xl">
              Let&apos;s talk backend systems
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
              {profile.availability} I am interested in roles where APIs, data
              workflows, queues, storage, and system design matter.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-wrap lg:justify-end">
            <Button asChild className="h-11 rounded-md px-4">
              <a href={profile.contact.email.href}>
                <Mail className="size-4" aria-hidden="true" />
                Email Me
              </a>
            </Button>

            {profile.contact.resume ? (
              <Button
                asChild
                variant="outline"
                className="h-11 rounded-md px-4"
              >
                <Link href={profile.contact.resume.href}>Resume</Link>
              </Button>
            ) : null}

            {github ? (
              <Button
                asChild
                variant="outline"
                className="h-11 rounded-md px-4"
              >
                <a href={github.href} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </Button>
            ) : null}

            {linkedin ? (
              <Button
                asChild
                variant="outline"
                className="h-11 rounded-md px-4"
              >
                <a href={linkedin.href} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
