import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  server: {
    allowedHosts: ["host.docker.internal"]
  },
  preview: {
    allowedHosts: ["host.docker.internal"]
  }
});
