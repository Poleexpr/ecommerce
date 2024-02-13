import path from 'path';

import dotenv from 'dotenv';
import payload from 'payload';
import type { InitOptions } from 'payload/config';

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
let cached = (global as any).payload;

if (!cached) {
  // eslint-disable-next-line no-multi-assign, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
  cached = (global as any).payload = {
    client: null,
    promise: null,
  };
}

interface Args {
  initOptions?: Partial<InitOptions>;
}

export const getPayloadClient = async ({ initOptions }: Args = {}) => {
  if (!process.env.PAYLOAD_SECRET) {
    throw new Error('PAYLOAD_SECRET is missing');
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (cached.client) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
    return cached.client;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (!cached.promise) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    cached.promise = payload.init({
      secret: process.env.PAYLOAD_SECRET,
      // eslint-disable-next-line no-unneeded-ternary
      local: initOptions?.express ? false : true,
      ...(initOptions || {}),
    });
  }

  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    cached.client = await cached.promise;
  } catch (e: unknown) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    cached.promise = null;
    throw e;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
  return cached.client;
};
