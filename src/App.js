import './App.scss';
import { Route,Routes} from 'react-router-dom';
import Layout from './component/Layout';
import Home from './component/Home';

function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<Layout/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
    </Routes>
   </>

  );
}

export default App;
