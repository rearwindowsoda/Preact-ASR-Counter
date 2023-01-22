import * as path from "path";
import preact from "@preact/preset-vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	resolve: {
		alias: [
			{find: "@", replacement: path.resolve(__dirname, "src")},
			{find: "react", replacement: "preact/compact"},
			{find: "react-dom", replacement: "preact/compact"}
		]},
}
);