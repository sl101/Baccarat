import type { Card } from "@/lib/baccarat";

const SUIT: Record<Card["suit"], string> = {
  S: "♠",
  H: "♥",
  D: "♦",
  C: "♣",
};

export function PlayingCard({ card }: { card: Card }) {
  const red = card.suit === "H" || card.suit === "D";
  const ink = red ? "text-suit" : "text-ink";
  return (
    <div
      className={`flex h-24 w-16 flex-col justify-between rounded-lg bg-ivory p-1.5 shadow-md ${ink}`}
    >
      <span className="text-sm font-semibold leading-none">{card.rank}</span>
      <span className="self-center text-2xl leading-none">{SUIT[card.suit]}</span>
      <span className="self-end text-sm font-semibold leading-none">{card.rank}</span>
    </div>
  );
}

export function CardRow({ cards }: { cards: readonly Card[] }) {
  return (
    <div className="flex gap-2">
      {cards.map((card, index) => (
        <PlayingCard key={`${card.rank}${card.suit}${index}`} card={card} />
      ))}
    </div>
  );
}
