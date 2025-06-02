'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

interface QueryProviderProps {
    children: React.ReactNode;
}

export default function QueryProvider({ children }: QueryProviderProps) {
    const [query] = useState(() => new QueryClient());

    return <QueryClientProvider client={query}>{children}</QueryClientProvider>;
}
