import {defineConfig} from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200/',
    video: false,
    screenshotOnRunFailure: false,
    viewportWidth: 450,
  },
});
