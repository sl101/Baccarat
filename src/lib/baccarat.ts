export type Rank =
  | "A"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "J"
  | "Q"
  | "K";

export type Suit = "S" | "H" | "D" | "C";

export type Card = {
  rank: Rank;
  suit: Suit;
};

export type Dealt = {
  player: [Card, Card];
  banker: [Card, Card];
  playerThird: Card;
  bankerThird: Card;
};

const RANKS: Rank[] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const SUITS: Suit[] = ["S", "H", "D", "C"];

export function cardValue(rank: Rank): number {
  if (rank === "A") return 1;
  if (rank === "10" || rank === "J" || rank === "Q" || rank === "K") return 0;
  return Number(rank);
}

export function handTotal(cards: readonly Card[]): number {
  const sum = cards.reduce((total, card) => total + cardValue(card.rank), 0);
  return sum % 10;
}

export function isNatural(cards: readonly Card[]): boolean {
  const total = handTotal(cards);
  return total === 8 || total === 9;
}

export function playerShouldDraw(player: readonly Card[], banker: readonly Card[]): boolean {
  if (isNatural(player) || isNatural(banker)) return false;
  return handTotal(player) <= 5;
}

/** `playerThird` is null when the Player stood. */
export function bankerShouldDraw(
  player: readonly Card[],
  banker: readonly Card[],
  playerThird: Card | null,
): boolean {
  if (isNatural(player) || isNatural(banker)) return false;
  const bankerTotal = handTotal(banker);
  if (!playerThird) return bankerTotal <= 5;
  const third = cardValue(playerThird.rank);
  if (bankerTotal <= 2) return true;
  if (bankerTotal === 3) return third !== 8;
  if (bankerTotal === 4) return third >= 2 && third <= 7;
  if (bankerTotal === 5) return third >= 4 && third <= 7;
  if (bankerTotal === 6) return third === 6 || third === 7;
  return false;
}

export function explainPlayer(player: readonly Card[], banker: readonly Card[]): string {
  if (isNatural(player) || isNatural(banker)) {
    return "A natural 8 or 9 on the first two cards ends the hand. The Player stands.";
  }
  if (handTotal(player) <= 5) return "The Player draws a third card on 0–5.";
  return "The Player stands on 6 or 7.";
}

export function explainBanker(
  player: readonly Card[],
  banker: readonly Card[],
  playerThird: Card | null,
): string {
  if (isNatural(player) || isNatural(banker)) {
    return "A natural ends the hand. The Banker stands.";
  }
  const bankerTotal = handTotal(banker);
  if (!playerThird) {
    return bankerTotal <= 5
      ? "The Player stood. The Banker draws on 0–5."
      : "The Player stood. The Banker stands on 6 or 7.";
  }
  const third = cardValue(playerThird.rank);
  if (bankerTotal <= 2) return "Banker 0–2 always draws a third card.";
  if (bankerTotal === 3) {
    return third === 8
      ? "Banker 3 stands only when the Player's third card is 8."
      : "Banker 3 draws unless the Player's third card is 8.";
  }
  if (bankerTotal === 4) {
    return third >= 2 && third <= 7
      ? "Banker 4 draws when the Player's third card is 2–7."
      : "Banker 4 stands when the Player's third card is 0, 1, 8 or 9.";
  }
  if (bankerTotal === 5) {
    return third >= 4 && third <= 7
      ? "Banker 5 draws when the Player's third card is 4–7."
      : "Banker 5 stands when the Player's third card is 0–3, 8 or 9.";
  }
  if (bankerTotal === 6) {
    return third === 6 || third === 7
      ? "Banker 6 draws only when the Player's third card is 6 or 7."
      : "Banker 6 stands unless the Player's third card is 6 or 7.";
  }
  return "Banker 7 always stands.";
}

export function makeShoe(decks = 8): Card[] {
  const cards: Card[] = [];
  for (let deck = 0; deck < decks; deck += 1) {
    for (const suit of SUITS) {
      for (const rank of RANKS) cards.push({ rank, suit });
    }
  }
  for (let i = cards.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const current = cards[i];
    cards[i] = cards[j]!;
    cards[j] = current!;
  }
  return cards;
}

export function takeHand(shoe: Card[]): { hand: Dealt; shoe: Card[] } {
  const source = shoe.length < 6 ? makeShoe() : shoe;
  const player: [Card, Card] = [source[0]!, source[2]!];
  const banker: [Card, Card] = [source[1]!, source[3]!];
  const hand: Dealt = {
    player,
    banker,
    playerThird: source[4]!,
    bankerThird: source[5]!,
  };
  return { hand, shoe: source.slice(6) };
}
