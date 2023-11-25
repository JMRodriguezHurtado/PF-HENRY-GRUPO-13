
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './views/Landing';
import NavBar from './components/navBar';
import Detail from './components/Detail';
import CreateProduct from './components/CreateProduct';

const App = () => {
  return (
    <main className="relative">
      <Routes>
        <Route path="/" element={<LandingPage />} />
         <Route path='/detail/:id' element={<Detail />} />
      <Route path='/CreateProduct' element={<CreateProduct />} />
      
      </Routes>
    </main>
  );
};


export default App;