import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';

import HomeLayout from './components/layouts/HomeLayout';
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <HomeLayout />
    </QueryClientProvider>
  );
}

export default App;
