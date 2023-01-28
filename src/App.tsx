import { QueryClient, QueryClientProvider } from 'react-query';
import { Footer } from './layout/footer/Footer';

import { Routing } from './routes/Routing';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    },
  },
});

export const App = () => {
  return (
    <div className="flex flex-col bg-zinc-800 h-full">
      <QueryClientProvider client={client}>
        {/* <Header /> */}

        <Routing />

        <Footer />
      </QueryClientProvider>
    </div>
  );
};
