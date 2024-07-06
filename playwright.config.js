const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",

  use: {
    baseURL: "http://127.0.0.1:3000",
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "chromium",
      colorScheme: "light",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      colorScheme: "light",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      colorScheme: "light",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});
