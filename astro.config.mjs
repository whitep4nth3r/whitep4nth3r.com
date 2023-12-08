import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import netlify from "@astrojs/netlify/functions";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// https://astro.build/config
export default defineConfig({
  site: "https://whitep4nth3r.com",
  integrations: [sitemap()],
  vite: {
    resolve: {
      alias: {
        "@/": `${path.resolve(__dirname, "src")}/`
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          // path to your scss variables
          additionalData: `@import "@/styles/_global.scss";`
        }
      }
    }
  },
  output: "server",
  adapter: netlify()
});