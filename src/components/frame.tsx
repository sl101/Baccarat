import { Link } from "@tanstack/react-router";
import { ChevronLeft, ExternalLink } from "lucide-react";
import type { ReactNode } from "react";

const ROULETTE_APP = "https://dealer-forge-omega.vercel.app";

export function Frame({
  title,
  back,
  children,
}: {
  title: string;
  back?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-md flex-col">
      <a
        href={ROULETTE_APP}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 bg-surface px-4 py-2.5 text-sm text-muted"
      >
        <span>Roulette training</span>
        <span className="font-semibold text-accent">DealerForge</span>
        <ExternalLink className="size-3.5" aria-hidden="true" />
      </a>
      <header className="flex items-center gap-1 border-b border-line px-4 py-4">
        {back ? (
          <Link
            to="/"
            aria-label="Back to modes"
            className="flex size-11 items-center justify-center rounded-full text-fg"
          >
            <ChevronLeft className="size-6" aria-hidden="true" />
          </Link>
        ) : null}
        <h1 className="text-xl font-semibold tracking-tight">{title}</h1>
      </header>
      <main className="flex flex-1 flex-col px-4 py-5">{children}</main>
    </div>
  );
}
