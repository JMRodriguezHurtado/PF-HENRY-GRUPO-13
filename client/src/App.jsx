import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './views/Landing';
import NavBar from './components/navBar';

const App = () => {
  return (
    <main className="relative">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Agrega más rutas según sea necesario */}
      </Routes>
    </main>
  );
};

export default App;