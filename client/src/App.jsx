import { Routes, Route } from 'react-router-dom';
import Card from './components/Card';
import Detail from './components/Detail';
import Home from './views/Home';

const App = () => (
  <>
    <Routes>
      <Route path='/card' element={<Card />} />
      <Route path='/detail/:id' element={<Detail />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  </>
)

export default App;