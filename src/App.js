import { useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import Aos from 'aos';

function App() {
  useEffect(()=>{
    Aos.init();
    },[]);
  return <Home />
}

export default App;
