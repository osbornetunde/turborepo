import { UserConfig } from 'vitest'
import testConfig from 'test-config/testConfig'

const config: { test: UserConfig } = {
  test: {
    testTimeout: 50000,
    ...testConfig,
  },
}

export default config
