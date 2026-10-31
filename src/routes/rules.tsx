import { createFileRoute } from "@tanstack/react-router";
import { Frame } from "@/components/frame";

export const Route = createFileRoute("/rules")({ component: Rules });

const bankerRows = [
  { total: "0–2", draw: "Always" },
  { total: "3", draw: "Unless the third card is 8" },
  { total: "4", draw: "Third card 2–7" },
  { total: "5", draw: "Third card 4–7" },
  { total: "6", draw: "Third card 6 or 7" },
  { total: "7", draw: "Never" },
];

function Rules() {
  return (
    <Frame title="Baccarat" back>
      <div className="flex flex-col gap-3 pb-6">
        <h2 className="text-2xl font-semibold tracking-tight">Rules</h2>
        <p className="text-sm leading-relaxed text-muted">
          Punto Banco, the same drawing rules as mini-baccarat. The value of a hand is the cards
          added together, then only the last digit.
        </p>

        <section className="rounded-card border border-line bg-surface p-4">
          <h3 className="mb-2 font-semibold">Card values</h3>
          <ul className="flex flex-col gap-1 text-sm leading-relaxed text-muted">
            <li>Ace counts as 1.</li>
            <li>2–9 count as their number.</li>
            <li>10, Jack, Queen and King count as 0.</li>
            <li>Suits do not matter.</li>
          </ul>
        </section>

        <section className="rounded-card border border-line bg-surface p-4">
          <h3 className="mb-2 font-semibold">Natural</h3>
          <p className="text-sm leading-relaxed text-muted">
            If either hand totals 8 or 9 on the first two cards, the round stops. Nobody draws a
            third card.
          </p>
        </section>

        <section className="rounded-card border border-line bg-surface p-4">
          <h3 className="mb-2 font-semibold">Player</h3>
          <ul className="flex flex-col gap-1 text-sm leading-relaxed text-muted">
            <li>0–5: draw a third card.</li>
            <li>6–7: stand.</li>
          </ul>
        </section>

        <section className="rounded-card border border-line bg-surface p-4">
          <h3 className="mb-2 font-semibold">Banker, if the Player stood</h3>
          <ul className="flex flex-col gap-1 text-sm leading-relaxed text-muted">
            <li>0–5: draw.</li>
            <li>6–7: stand.</li>
          </ul>
        </section>

        <section className="rounded-card border border-line bg-surface p-4">
          <h3 className="mb-3 font-semibold">Banker, if the Player drew</h3>
          <div className="flex flex-col gap-2">
            {bankerRows.map((row) => (
              <div
                key={row.total}
                className="flex items-center justify-between gap-3 border-b border-line pb-2 last:border-0 last:pb-0"
              >
                <span className="w-12 shrink-0 font-semibold text-accent">{row.total}</span>
                <span className="text-right text-sm text-muted">{row.draw}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-card border border-line bg-surface p-4">
          <h3 className="mb-2 font-semibold">Winner</h3>
          <p className="text-sm leading-relaxed text-muted">
            Higher total wins. Equal totals are a tie. Player pays 1:1, Banker pays 1:1 less 5%
            commission, Tie pays 8:1.
          </p>
        </section>
      </div>
    </Frame>
  );
}
