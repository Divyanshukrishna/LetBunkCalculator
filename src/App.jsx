import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/AboutPage' element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
