import Image from "next/image";
import Link from "next/link";

import { footerNavigation } from "@/data/navigation";
import { profile } from "@/data/profile";

function isExternalLink(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const resume = profile.contact.resume;

  return (
    <footer className="border-t bg-background">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div className="max-w-xl">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src={profile.avatar}
              alt=""
              width={36}
              height={36}
              className="size-9 shrink-0 rounded-md border bg-card object-cover shadow-sm"
              aria-hidden="true"
            />
            <span>
              <span className="block text-sm font-medium text-foreground">
                {profile.name}
              </span>
              <span className="block text-xs text-muted-foreground">
                {profile.role}
              </span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            Backend engineering portfolio focused on APIs, event-driven systems,
            reporting pipelines, media workflows, and production architecture.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            © {currentYear} {profile.name}. Built as an engineering-focused
            portfolio.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {footerNavigation.map((group) => (
            <nav key={group.label} aria-label={`${group.label} links`}>
              <h2 className="text-sm font-medium text-foreground">
                {group.label}
              </h2>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li key={item.href}>
                    {isExternalLink(item.href) ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
                {group.label === "Connect" && resume ? (
                  <li>
                    <a
                      href={resume.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                    >
                      {resume.label}
                    </a>
                  </li>
                ) : null}
              </ul>
            </nav>
          ))}
        </div>
      </div>
    </footer>
  );
}
