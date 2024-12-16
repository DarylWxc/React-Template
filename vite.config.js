import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path  from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: "window",
  },
  resolve: {
    alias: [
      // url start with src locate to root/src
      {
        find: 'src',
        replacement: path.resolve(__dirname, "src"),
      },
      // url start with components locate to src/components
      {
        find: 'components',
        replacement: path.resolve(__dirname, "src/components"),
      },
      // url start with pages locate to src/pages
      {
        find: 'pages',
        replacement: path.resolve(__dirname, "src/pages"),
      }
    ],
  },
  server: {
    // this ensures that the browser opens upon server start
    open: true,
    // this sets a default port to 8888
    port: 8888,
  },
});
