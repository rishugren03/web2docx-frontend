import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: true, // Accept connections from all hosts
  //   origin: "https://packard-closure-latina-avon.trycloudflare.com",
  // },
});
