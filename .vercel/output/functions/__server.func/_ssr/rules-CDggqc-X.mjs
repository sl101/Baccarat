import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Frame } from "./frame-D6oP2KhP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/rules-CDggqc-X.js
var import_jsx_runtime = require_jsx_runtime();
var bankerRows = [
	{
		total: "0–2",
		draw: "Always"
	},
	{
		total: "3",
		draw: "Unless the third card is 8"
	},
	{
		total: "4",
		draw: "Third card 2–7"
	},
	{
		total: "5",
		draw: "Third card 4–7"
	},
	{
		total: "6",
		draw: "Third card 6 or 7"
	},
	{
		total: "7",
		draw: "Never"
	}
];
function Rules() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
		title: "Baccarat",
		back: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 pb-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-semibold tracking-tight",
					children: "Rules"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-muted",
					children: "Punto Banco, the same drawing rules as mini-baccarat. The value of a hand is the cards added together, then only the last digit."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-card border border-line bg-surface p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-2 font-semibold",
						children: "Card values"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "flex flex-col gap-1 text-sm leading-relaxed text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Ace counts as 1." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "2–9 count as their number." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "10, Jack, Queen and King count as 0." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Suits do not matter." })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-card border border-line bg-surface p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-2 font-semibold",
						children: "Natural"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-muted",
						children: "If either hand totals 8 or 9 on the first two cards, the round stops. Nobody draws a third card."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-card border border-line bg-surface p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-2 font-semibold",
						children: "Player"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "flex flex-col gap-1 text-sm leading-relaxed text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "0–5: draw a third card." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "6–7: stand." })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-card border border-line bg-surface p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-2 font-semibold",
						children: "Banker, if the Player stood"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "flex flex-col gap-1 text-sm leading-relaxed text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "0–5: draw." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "6–7: stand." })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-card border border-line bg-surface p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-3 font-semibold",
						children: "Banker, if the Player drew"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-2",
						children: bankerRows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3 border-b border-line pb-2 last:border-0 last:pb-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-12 shrink-0 font-semibold text-accent",
								children: row.total
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-right text-sm text-muted",
								children: row.draw
							})]
						}, row.total))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-card border border-line bg-surface p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-2 font-semibold",
						children: "Winner"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-muted",
						children: "Higher total wins. Equal totals are a tie. Player pays 1:1, Banker pays 1:1 less 5% commission, Tie pays 8:1."
					})]
				})
			]
		})
	});
}
//#endregion
export { Rules as component };
