import { Routes, Route } from 'react-router-dom';
import Detail from './components/Detail';
import CreateProduct from './components/CreateProduct';

const App = () => (
  <>
    <Routes>
      <Route path='/detail/:id' element={<Detail />} />
      <Route path='/CreateProduct' element={<CreateProduct />} />
    </Routes>
  </>
)

export default App;