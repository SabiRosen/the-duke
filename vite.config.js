import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        bookBord: "booking.html",
        events: "events.html",
        event: "event.html",
        barkort: "barkort.html",
        mad: "mad.html",
        omOs: "om-os.html",
      },
    },
  },
});