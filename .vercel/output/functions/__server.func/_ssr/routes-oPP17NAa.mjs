import { S as require_jsx_runtime, b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as BookOpen, n as Layers } from "../_libs/lucide-react.mjs";
import { t as Frame } from "./frame-D6oP2KhP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-oPP17NAa.js
var import_jsx_runtime = require_jsx_runtime();
var modes = [{
	title: "Rules",
	path: "/rules",
	icon: BookOpen,
	tint: "from-surface to-surface-2"
}, {
	title: "Deal",
	path: "/deal",
	icon: Layers,
	tint: "from-surface to-accent-ink"
}];
function Home() {
	const navigate = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		title: "Baccarat",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mb-4 text-center text-2xl font-semibold tracking-tight",
			children: "Training Modes"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-4",
			children: modes.map((mode) => {
				const Icon = mode.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => navigate({ to: mode.path }),
					className: `flex aspect-square flex-col items-center justify-center gap-3 rounded-card border border-line bg-linear-to-br ${mode.tint} px-3`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-12 items-center justify-center rounded-2xl border border-line bg-bg/40 text-accent",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "size-6",
							strokeWidth: 1.75,
							"aria-hidden": "true"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-center text-sm font-medium",
						children: mode.title
					})]
				}, mode.path);
			})
		})]
	});
}
//#endregion
export { Home as component };
