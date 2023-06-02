/// <reference types="vitest" />

import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'
import testConfig from 'test-config/testConfig'

/** @type {import('vite').UserConfig} */

const config: UserConfig = {
  plugins: [react(), ssr()],
  test: {
    ...testConfig,
  },
}

export default config
