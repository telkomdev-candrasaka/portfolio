import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact | Candra Saka Rahardian",
  description:
    "Contact Candra Saka Rahardian for Backend Engineer and Full Stack Engineer opportunities.",
};

export default function ContactPage() {
  const github = profile.socials.find((social) => social.label === "GitHub");
  const linkedin = profile.socials.find(
    (social) => social.label === "LinkedIn"
  );

  return (
    <main>
      <section className="border-b bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground">
              Contact
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
              Let&apos;s talk backend systems
            </h1>
            <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
              {profile.availability} I am interested in roles where APIs, data
              workflows, queues, storage, and system design matter.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="rounded-lg">
            <CardHeader>
              <CardTitle className="text-xl">Available contact paths</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
                The fastest way to start a conversation is email. Resume and
                professional profiles are available for reviewing experience,
                projects, and current backend engineering focus areas.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild className="h-11 rounded-md px-4">
                  <a href={profile.contact.email.href}>
                    <Mail className="size-4" aria-hidden="true" />
                    {profile.contact.email.label}
                  </a>
                </Button>

                {profile.contact.resume ? (
                  <Button
                    asChild
                    variant="outline"
                    className="h-11 rounded-md px-4"
                  >
                    <Link href={profile.contact.resume.href}>
                      {profile.contact.resume.value}
                    </Link>
                  </Button>
                ) : null}

                {github ? (
                  <Button
                    asChild
                    variant="outline"
                    className="h-11 rounded-md px-4"
                  >
                    <a href={github.href} target="_blank" rel="noreferrer">
                      {github.label}
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
                      {linkedin.label}
                    </a>
                  </Button>
                ) : null}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
