import { defineConfig } from "astro/config"
import vercel from "@astrojs/vercel/serverless"
import tailwind from "@astrojs/tailwind"

export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
})
