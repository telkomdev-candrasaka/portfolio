import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { mainNavigation } from "@/data/navigation";
import { profile } from "@/data/profile";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex min-w-0 items-center gap-3">
          <Image
            src={profile.avatar}
            alt=""
            width={36}
            height={36}
            className="size-9 shrink-0 rounded-md border bg-card object-cover shadow-sm"
            aria-hidden="true"
          />
          <span className="min-w-0">
            <span className="block truncate text-sm font-medium text-foreground">
              {profile.name}
            </span>
            <span className="block truncate text-xs text-muted-foreground">
              {profile.role}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {mainNavigation.map((item) => (
            <Button key={item.href} asChild variant="ghost" className="rounded-md">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="size-4" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-80 max-w-[calc(100vw-2rem)]">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
                <SheetDescription>
                  Explore projects, case studies, writing, and contact details.
                </SheetDescription>
              </SheetHeader>

              <nav className="flex flex-col gap-1 px-4" aria-label="Mobile navigation">
                <SheetClose asChild>
                  <Link
                    href="/"
                    className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                  >
                    Home
                  </Link>
                </SheetClose>
                {mainNavigation.map((item) => (
                  <SheetClose key={item.href} asChild>
                    <Link
                      href={item.href}
                      className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                    >
                      <span>{item.label}</span>
                      {item.description ? (
                        <span className="mt-1 block text-xs font-normal leading-5 text-muted-foreground">
                          {item.description}
                        </span>
                      ) : null}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
