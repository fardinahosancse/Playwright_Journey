import { defineConfig, devices } from '@playwright/test';
import type { TestOptions } from './test-options';
import { time } from 'console';
require('dotenv').config();


export default defineConfig<TestOptions>({
  timeout: 40000,
  globalTimeout: 600000,
  expect:{timeout:2000},
  testDir: './tests',
  fullyParallel: false,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: process.env.BASE_URL,
    globalURL:process.env.GLOBAL_URL,
    trace: 'on',
    actionTimeout:2000,
    navigationTimeout:2500,
    video:{
      mode:'off',
      size: { width: 1920, height: 1080 }
    }
  },

  projects: [
    {
      name:'development',
      use:{...devices['Desktop Chrome'],
        baseURL: 'http://localhost:4200/',  // Apply only to this project 
      } 
    },
    {
      name:'testing',
      use:{...devices['Desktop Chrome'],
        baseURL: 'http://localhost:4200/',  // Apply only to this project 
      } 
    },
    {
      name:'staging',
      use:{...devices['Desktop Chrome'],
        baseURL: 'http://localhost:4200/',  // Apply only to this project 
      } 
    },
    {
      name:'production',
      use:{...devices['Desktop Chrome'],
        baseURL: 'http://localhost:4200/',  // Apply only to this project 
      } 
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'chrome web',
      use: {
          ignoreHTTPSErrors: true, // Apply globally
      }
  }

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },

  
});
