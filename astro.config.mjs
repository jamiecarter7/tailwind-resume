import { defineConfig } from "astro/config";

// // https://astro.build/config
// export default defineConfig({
//   integrations: [tailwind()]
// });

import tailwindcss from "@tailwindcss/vite";
// import { defineConfig } from "vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
