import './App.css';
import HomeLayout from './components/layouts/HomeLayout';
import TopCategories from './redux-box/slices/TopCategories';
function App() {
  return (
    <>
      <HomeLayout />
      <TopCategories />
    </>
  );
}

export default App;
