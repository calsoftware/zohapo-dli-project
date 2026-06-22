import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Served from the root of the dliproject.drolajide.uk subdomain.
  base: "/",
  plugins: [react()],
});
