import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Booting from './pages/Booting';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home/*" element={<Home />} />
        <Route path="/*" element={<Booting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
