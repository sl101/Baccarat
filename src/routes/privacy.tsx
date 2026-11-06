import { createFileRoute } from "@tanstack/react-router";
import { Frame } from "@/components/frame";

export const Route = createFileRoute("/privacy")({ component: Privacy });

function Privacy() {
  return (
    <Frame title="Baccarat" back>
      <div className="flex flex-col gap-3 pb-6">
        <h2 className="text-2xl font-semibold tracking-tight">Privacy Policy</h2>
        <p className="text-sm text-muted">Last updated: November 2, 2026</p>
        <p className="text-sm leading-relaxed text-muted">
          Baccarat is a training tool for punto banco dealers. It does not take bets and it does not
          handle money.
        </p>
        <section className="rounded-card border border-line bg-surface p-4">
          <h3 className="mb-2 font-semibold">Data</h3>
          <p className="text-sm leading-relaxed text-muted">
            The app has no accounts and no leaderboard. Hands, scores and the streak stay on your
            device and are not sent to a server. The Share button uses your phone’s share sheet or
            copies the link locally. Nothing from that action is stored by the app.
          </p>
        </section>
        <section className="rounded-card border border-line bg-surface p-4">
          <h3 className="mb-2 font-semibold">Fonts</h3>
          <p className="text-sm leading-relaxed text-muted">
            The typeface is loaded from Google Fonts. That request is handled by Google under its
            own policy. The app does not add analytics or advertising.
          </p>
        </section>
        <section className="rounded-card border border-line bg-surface p-4">
          <h3 className="mb-2 font-semibold">Contact</h3>
          <p className="text-sm leading-relaxed text-muted">
            Use the developer email shown on the Google Play listing.
          </p>
        </section>
      </div>
    </Frame>
  );
}
