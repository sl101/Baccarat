import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { BookOpen, Layers } from "lucide-react";
import { Frame } from "@/components/frame";

export const Route = createFileRoute("/")({ component: Home });

const modes = [
  {
    title: "Rules",
    path: "/rules" as const,
    icon: BookOpen,
    tint: "from-surface to-surface-2",
  },
  {
    title: "Deal",
    path: "/deal" as const,
    icon: Layers,
    tint: "from-surface to-accent-ink",
  },
];

function Home() {
  const navigate = useNavigate();
  return (
    <Frame title="Baccarat">
      <h2 className="mb-4 text-center text-2xl font-semibold tracking-tight">Training Modes</h2>
      <div className="grid grid-cols-2 gap-4">
        {modes.map((mode) => {
          const Icon = mode.icon;
          return (
            <button
              key={mode.path}
              type="button"
              onClick={() => navigate({ to: mode.path })}
              className={`flex aspect-square flex-col items-center justify-center gap-3 rounded-card border border-line bg-linear-to-br ${mode.tint} px-3`}
            >
              <span className="flex size-12 items-center justify-center rounded-2xl border border-line bg-bg/40 text-accent">
                <Icon className="size-6" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span className="text-center text-sm font-medium">{mode.title}</span>
            </button>
          );
        })}
      </div>
    </Frame>
  );
}
