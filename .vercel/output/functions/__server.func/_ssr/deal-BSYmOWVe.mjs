import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Frame } from "./frame-D6oP2KhP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/deal-BSYmOWVe.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SUIT = {
	S: "♠",
	H: "♥",
	D: "♦",
	C: "♣"
};
function PlayingCard({ card }) {
	const ink = card.suit === "H" || card.suit === "D" ? "text-suit" : "text-ink";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex h-24 w-16 flex-col justify-between rounded-lg bg-ivory p-1.5 shadow-md ${ink}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-semibold leading-none",
				children: card.rank
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "self-center text-2xl leading-none",
				children: SUIT[card.suit]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "self-end text-sm font-semibold leading-none",
				children: card.rank
			})
		]
	});
}
function CardRow({ cards }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex gap-2",
		children: cards.map((card, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayingCard, { card }, `${card.rank}${card.suit}${index}`))
	});
}
var RANKS = [
	"A",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"J",
	"Q",
	"K"
];
var SUITS = [
	"S",
	"H",
	"D",
	"C"
];
function cardValue(rank) {
	if (rank === "A") return 1;
	if (rank === "10" || rank === "J" || rank === "Q" || rank === "K") return 0;
	return Number(rank);
}
function handTotal(cards) {
	return cards.reduce((total, card) => total + cardValue(card.rank), 0) % 10;
}
function isNatural(cards) {
	const total = handTotal(cards);
	return total === 8 || total === 9;
}
function playerShouldDraw(player, banker) {
	if (isNatural(player) || isNatural(banker)) return false;
	return handTotal(player) <= 5;
}
/** `playerThird` is null when the Player stood. */
function bankerShouldDraw(player, banker, playerThird) {
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
function explainPlayer(player, banker) {
	if (isNatural(player) || isNatural(banker)) return "A natural 8 or 9 on the first two cards ends the hand. The Player stands.";
	if (handTotal(player) <= 5) return "The Player draws a third card on 0–5.";
	return "The Player stands on 6 or 7.";
}
function explainBanker(player, banker, playerThird) {
	if (isNatural(player) || isNatural(banker)) return "A natural ends the hand. The Banker stands.";
	const bankerTotal = handTotal(banker);
	if (!playerThird) return bankerTotal <= 5 ? "The Player stood. The Banker draws on 0–5." : "The Player stood. The Banker stands on 6 or 7.";
	const third = cardValue(playerThird.rank);
	if (bankerTotal <= 2) return "Banker 0–2 always draws a third card.";
	if (bankerTotal === 3) return third === 8 ? "Banker 3 stands only when the Player's third card is 8." : "Banker 3 draws unless the Player's third card is 8.";
	if (bankerTotal === 4) return third >= 2 && third <= 7 ? "Banker 4 draws when the Player's third card is 2–7." : "Banker 4 stands when the Player's third card is 0, 1, 8 or 9.";
	if (bankerTotal === 5) return third >= 4 && third <= 7 ? "Banker 5 draws when the Player's third card is 4–7." : "Banker 5 stands when the Player's third card is 0–3, 8 or 9.";
	if (bankerTotal === 6) return third === 6 || third === 7 ? "Banker 6 draws only when the Player's third card is 6 or 7." : "Banker 6 stands unless the Player's third card is 6 or 7.";
	return "Banker 7 always stands.";
}
function makeShoe(decks = 8) {
	const cards = [];
	for (let deck = 0; deck < decks; deck += 1) for (const suit of SUITS) for (const rank of RANKS) cards.push({
		rank,
		suit
	});
	for (let i = cards.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		const current = cards[i];
		cards[i] = cards[j];
		cards[j] = current;
	}
	return cards;
}
function takeHand(shoe) {
	const source = shoe.length < 6 ? makeShoe() : shoe;
	return {
		hand: {
			player: [source[0], source[2]],
			banker: [source[1], source[3]],
			playerThird: source[4],
			bankerThird: source[5]
		},
		shoe: source.slice(6)
	};
}
function Deal() {
	const shoe = (0, import_react.useRef)([]);
	const [hand, setHand] = (0, import_react.useState)(null);
	const [step, setStep] = (0, import_react.useState)("player");
	const [streak, setStreak] = (0, import_react.useState)(0);
	const [note, setNote] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
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
	if (!hand) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
		title: "Baccarat",
		back: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "m-auto text-sm text-muted",
			children: "Shuffling the shoe…"
		})
	});
	const natural = isNatural(hand.player) || isNatural(hand.banker);
	const playerDraws = playerShouldDraw(hand.player, hand.banker);
	const playerThird = playerDraws ? hand.playerThird : null;
	const bankerDraws = bankerShouldDraw(hand.player, hand.banker, playerThird);
	const showPlayerThird = playerDraws && (step === "banker" || step === "done" || step === "miss-banker");
	const showBankerThird = bankerDraws && step === "done";
	const playerCards = showPlayerThird ? [...hand.player, hand.playerThird] : hand.player;
	const bankerCards = showBankerThird ? [...hand.banker, hand.bankerThird] : hand.banker;
	function answer(draws) {
		if (step === "player") {
			if (draws !== playerDraws) {
				setNote(explainPlayer(hand.player, hand.banker));
				setStep("miss-player");
				setStreak(0);
				return;
			}
			setStep("banker");
			return;
		}
		if (step !== "banker") return;
		if (draws !== bankerDraws) {
			setNote(explainBanker(hand.player, hand.banker, playerThird));
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		title: "Baccarat",
		back: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-baseline justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-semibold tracking-tight",
					children: "Deal"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: ["Streak ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-fg",
						children: streak
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandBlock, {
					label: "Player",
					total: playerPoints,
					natural: isNatural(hand.player),
					cards: playerCards
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandBlock, {
					label: "Banker",
					total: bankerPoints,
					natural: isNatural(hand.banker),
					cards: bankerCards
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex flex-1 flex-col",
				children: !closed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-center text-base font-medium",
						children: askingBanker ? "Does the Banker draw?" : "Does the Player draw?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
							label: "Draw",
							onClick: () => answer(true)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
							label: "Stand",
							onClick: () => answer(false)
						})]
					}),
					natural ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-center text-sm text-muted",
						children: "A natural is on the table."
					}) : null
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `text-center text-base font-semibold ${step === "done" ? "text-good" : "text-bad"}`,
							children: step === "done" ? outcome : "Not this time"
						}),
						note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-center text-sm leading-relaxed text-muted",
							children: note
						}) : null,
						step === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-center text-sm text-muted",
							children: [
								"Player ",
								playerPoints,
								" · Banker ",
								bankerPoints
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-center text-sm text-muted",
							children: [
								askingBanker ? "Banker" : "Player",
								" should ",
								correctDraws ? "draw" : "stand",
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: nextHand,
							className: "mt-1 h-12 rounded-card bg-accent font-semibold text-accent-ink",
							children: "Next hand"
						})
					]
				})
			})
		]
	});
}
function HandBlock({ label, total, natural, cards }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-card border border-line bg-surface p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-semibold",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [natural ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mr-2 text-accent",
					children: "Natural"
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold text-fg",
					children: total
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardRow, { cards })]
	});
}
function Choice({ label, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: "h-14 rounded-card border border-line bg-surface-2 text-base font-semibold",
		children: label
	});
}
//#endregion
export { Deal as component };
