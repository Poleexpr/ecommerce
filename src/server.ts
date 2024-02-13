import express from 'express';

import { getPayloadClient } from './get-payload';
import { nextApp, nextHandler } from './next-utils';

const app = express();
const PORT = Number(process.env.PORT) || 3000;

const start = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      // eslint-disable-next-line @typescript-eslint/require-await
      onInit: async (cms) => {
        cms.logger.info(`Admin URL ${cms.getAdminURL()}`);
      },
    },
  });

  app.use((req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    nextHandler(req, res);
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-floating-promises
  nextApp.prepare().then(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    payload.logger.info('Next.js started');

    // eslint-disable-next-line @typescript-eslint/no-misused-promises, @typescript-eslint/require-await
    app.listen(PORT, async () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      payload.logger.info(`Next.js App URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`);
    });
  });
};

// eslint-disable-next-line @typescript-eslint/no-floating-promises
start();
