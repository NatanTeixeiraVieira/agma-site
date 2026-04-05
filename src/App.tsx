import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/query-client';
import Router from './router/router';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <body>
        <Router />
      </body>
    </QueryClientProvider>
  );
}
