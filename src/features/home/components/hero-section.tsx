import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Database, GitBranch, HardDrive, Server } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Profile } from "@/data/profile";

type HeroSectionProps = {
  readonly profile: Profile;
};

const architectureNodes = [
  {
    label: "REST API",
    description: "Validation, pagination, errors, and service boundaries",
    icon: Server,
  },
  {
    label: "Data Layer",
    description: "PostgreSQL, MongoDB, indexes, and reporting queries",
    icon: Database,
  },
  {
    label: "Async Workers",
    description: "RabbitMQ jobs, retries, and background processing",
    icon: GitBranch,
  },
  {
    label: "Storage",
    description: "Redis cache and S3-compatible object storage",
    icon: HardDrive,
  },
];

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section className="border-b bg-background" aria-labelledby="hero-title">
      <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Image
              src={profile.avatar}
              alt={`Profile picture of ${profile.name}`}
              width={96}
              height={96}
              priority
              className="size-24 rounded-full border bg-card object-cover shadow-sm"
            />
            <div>
              <Badge variant="secondary" className="rounded-md px-3 py-1">
                {profile.role} / Full Stack in Progress
              </Badge>
              <p className="mt-3 text-sm text-muted-foreground">
                {profile.name} · {profile.location}
              </p>
            </div>
          </div>

          <h1
            id="hero-title"
            className="mt-5 max-w-4xl text-4xl font-semibold tracking-normal text-foreground sm:text-5xl lg:text-6xl"
          >
            {profile.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="h-11 rounded-md px-4">
              <Link href="/system-design">
                View Case Studies
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-md px-4"
            >
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>

          <ul
            className="mt-8 flex flex-wrap gap-2"
            aria-label="Backend engineering focus areas"
          >
            {profile.focusAreas.slice(0, 5).map((focusArea) => (
              <li key={focusArea}>
                <Badge
                  variant="outline"
                  className="rounded-md px-3 py-1 text-muted-foreground"
                >
                  {focusArea}
                </Badge>
              </li>
            ))}
          </ul>
        </div>

        <aside
          aria-label="Backend architecture overview"
          className="rounded-lg border bg-card p-4 shadow-sm sm:p-5"
        >
          <div className="mb-5">
            <p className="text-sm font-medium text-foreground">
              Backend System Shape
            </p>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              Production workflows built around APIs, data, queues, cache, and
              durable storage.
            </p>
          </div>

          <div className="space-y-3">
            {architectureNodes.map((node, index) => {
              const Icon = node.icon;

              return (
                <div key={node.label}>
                  <div className="flex gap-3 rounded-md border bg-background p-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-md border bg-muted">
                      <Icon
                        className="size-5 text-foreground"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h2 className="text-sm font-medium text-foreground">
                        {node.label}
                      </h2>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {node.description}
                      </p>
                    </div>
                  </div>
                  {index < architectureNodes.length - 1 ? (
                    <div className="ml-9 h-3 w-px bg-border" aria-hidden />
                  ) : null}
                </div>
              );
            })}
          </div>
        </aside>
      </div>
    </section>
  );
}
