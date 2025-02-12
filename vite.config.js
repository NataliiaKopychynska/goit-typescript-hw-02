import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["axios", "react-toastify", "react-modal"], // Вказуємо, що axios має бути зовнішнім
    },
  },
});
