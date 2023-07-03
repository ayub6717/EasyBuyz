import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';

import HomeLayout from './components/layouts/HomeLayout';
import Log from './pages/test/Log';
import UserProfile from './pages/test/UserProfile';
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <UserProfile />
      <Log />
      <HomeLayout />
    </QueryClientProvider>
  );
}

export default App;
