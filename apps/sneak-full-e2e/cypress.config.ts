import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run sneak-full:serve:development',
        production: 'nx run sneak-full:serve:production',
      },
      ciWebServerCommand: 'nx run sneak-full:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
