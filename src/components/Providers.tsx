'use client';

import { useState } from 'react';
import { QueryClient } from '@tanstack/react-query';
import { trpc } from '@/trpc/client';

export const Providers = () => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink:({
          url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/trpc`,
          fetch(url, options){
            return fetch(url, {
              ...options,
              credentials: 'include'
            })
          }
        })
      ],
    }),
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}></trpc.Provider>
  )
};
