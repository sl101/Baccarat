import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Frame } from "@/components/frame";
import { CardRow } from "@/components/playing-card";
import {
  bankerShouldDraw,
  explainBanker,
  explainPlayer,
  handTotal,
  isNatural,
  makeShoe,
  playerShouldDraw,
  takeHand,
  type Card,
  type Dealt,
} from "@/lib/baccarat";

export const Route = createFileRoute("/deal")({ component: Deal });

type Step = "player" | "banker" | "done" | "miss-player" | "miss-banker";

function Deal() {
  const shoe = useRef<Card[]>([]);
  const [hand, setHand] = useState<Dealt | null>(null);
  const [step, setStep] = useState<Step>("player");
  const [streak, setStreak] = useState(0);
  const [note, setNote] = useState("");

  useEffect(() => {
    shoe.current = makeShoe();
    const next = takeHand(shoe.current);
    shoe.current = next.shoe;
    setHand(next.hand);
  }, []);

  function nextHand() {
    const next = takeHand(shoe.current);
    shoe.current = next.shoe;
    setHand(next.hand);
    setStep("player");
    setNote("");
  }

  if (!hand) {
    return (
      <Frame title="Baccarat" back>
        <p className="m-auto text-sm text-muted">Shuffling the shoe…</p>
      </Frame>
    );
  }

  const natural = isNatural(hand.player) || isNatural(hand.banker);
  const playerDraws = playerShouldDraw(hand.player, hand.banker);
  const playerThird = playerDraws ? hand.playerThird : null;
  const bankerDraws = bankerShouldDraw(hand.player, hand.banker, playerThird);
  const showPlayerThird = playerDraws && (step === "banker" || step === "done" || step === "miss-banker");
  const showBankerThird = bankerDraws && step === "done";
  const playerCards = showPlayerThird ? [...hand.player, hand.playerThird] : hand.player;
  const bankerCards = showBankerThird ? [...hand.banker, hand.bankerThird] : hand.banker;

  function answer(draws: boolean) {
    if (step === "player") {
      if (draws !== playerDraws) {
        setNote(explainPlayer(hand!.player, hand!.banker));
        setStep("miss-player");
        setStreak(0);
        return;
      }
      setStep("banker");
      return;
    }
    if (step !== "banker") return;
    if (draws !== bankerDraws) {
      setNote(explainBanker(hand!.player, hand!.banker, playerThird));
      setStep("miss-banker");
      setStreak(0);
      return;
    }
    setStreak((value) => value + 1);
    setStep("done");
  }

  const playerPoints = handTotal(playerCards);
  const bankerPoints = handTotal(bankerCards);
  const askingBanker = step === "banker" || step === "miss-banker";
  const closed = step === "done" || step === "miss-player" || step === "miss-banker";
  const correctDraws = askingBanker ? bankerDraws : playerDraws;

  let outcome = "";
  if (step === "done") {
    if (playerPoints > bankerPoints) outcome = "Player wins";
    else if (bankerPoints > playerPoints) outcome = "Banker wins";
    else outcome = "Tie";
  }

  return (
    <Frame title="Baccarat" back>
      <div className="mb-4 flex items-baseline justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">Deal</h2>
        <p className="text-sm text-muted">
          Streak <span className="font-semibold text-fg">{streak}</span>
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <HandBlock
          label="Player"
          total={playerPoints}
          natural={isNatural(hand.player)}
          cards={playerCards}
        />
        <HandBlock
          label="Banker"
          total={bankerPoints}
          natural={isNatural(hand.banker)}
          cards={bankerCards}
        />
      </div>

      <div className="mt-6 flex flex-1 flex-col">
        {!closed ? (
          <>
            <p className="mb-3 text-center text-base font-medium">
              {askingBanker ? "Does the Banker draw?" : "Does the Player draw?"}
            </p>
            <div className="grid grid-cols-2 gap-3">
              <Choice label="Draw" onClick={() => answer(true)} />
              <Choice label="Stand" onClick={() => answer(false)} />
            </div>
            {natural ? (
              <p className="mt-3 text-center text-sm text-muted">A natural is on the table.</p>
            ) : null}
          </>
        ) : (
          <div className="flex flex-col gap-3">
            <p
              className={`text-center text-base font-semibold ${step === "done" ? "text-good" : "text-bad"}`}
            >
              {step === "done" ? outcome : "Not this time"}
            </p>
            {note ? <p className="text-center text-sm leading-relaxed text-muted">{note}</p> : null}
            {step === "done" ? (
              <p className="text-center text-sm text-muted">
                Player {playerPoints} · Banker {bankerPoints}
              </p>
            ) : (
              <p className="text-center text-sm text-muted">
                {askingBanker ? "Banker" : "Player"} should {correctDraws ? "draw" : "stand"}.
              </p>
            )}
            <button
              type="button"
              onClick={nextHand}
              className="mt-1 h-12 rounded-card bg-accent font-semibold text-accent-ink"
            >
              Next hand
            </button>
          </div>
        )}
      </div>
    </Frame>
  );
}

function HandBlock({
  label,
  total,
  natural,
  cards,
}: {
  label: string;
  total: number;
  natural: boolean;
  cards: readonly Card[];
}) {
  return (
    <section className="rounded-card border border-line bg-surface p-3">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-semibold">{label}</h3>
        <p className="text-sm text-muted">
          {natural ? <span className="mr-2 text-accent">Natural</span> : null}
          <span className="font-semibold text-fg">{total}</span>
        </p>
      </div>
      <CardRow cards={cards} />
    </section>
  );
}

function Choice({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="h-14 rounded-card border border-line bg-surface-2 text-base font-semibold"
    >
      {label}
    </button>
  );
}
