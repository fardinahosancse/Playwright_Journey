import { defineConfig, devices } from '@playwright/test';
import type { TestOptions } from './test-options';
require('dotenv').config();


export default defineConfig<TestOptions>({
  use: {
    baseURL: process.env.BASE_URL,
    globalURL:process.env.GLOBAL_URL,
  },
  projects: [
    {
      name:'chromium',
      } 
  ]
});
