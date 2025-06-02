import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import packageJSON from "./package.json";

const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter(),
        version: packageJSON.version,
    },
};

export default config;
