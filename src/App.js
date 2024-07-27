import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Firstpg from './Component/Firstpg/Firstpg';
import Register from './Component/Register/Register';

function App() {
  return (
  <>
  {/* <Firstpg/> */}
  <Router>
   
      <Routes>
        <Route path='/' element={<Firstpg/>}/>
        <Route path="/register" element={<Register/>} />
        </Routes>
        </Router>
  </>
  );
}

export default App;
