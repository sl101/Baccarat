import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ChevronLeft, r as ExternalLink } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/frame-D6oP2KhP.js
var import_jsx_runtime = require_jsx_runtime();
var ROULETTE_APP = "https://dealer-forge-omega.vercel.app";
function Frame({ title, back, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-dvh w-full max-w-md flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: ROULETTE_APP,
				target: "_blank",
				rel: "noreferrer",
				className: "flex items-center justify-center gap-2 bg-surface px-4 py-2.5 text-sm text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Roulette training" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-accent",
						children: "DealerForge"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
						className: "size-3.5",
						"aria-hidden": "true"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center gap-1 border-b border-line px-4 py-4",
				children: [back ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					"aria-label": "Back to modes",
					className: "flex size-11 items-center justify-center rounded-full text-fg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
						className: "size-6",
						"aria-hidden": "true"
					})
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight",
					children: title
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex flex-1 flex-col px-4 py-5",
				children
			})
		]
	});
}
//#endregion
export { Frame as t };
