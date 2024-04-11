import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path='/' />
        <Route path='/cart' />
      </Routes>

    </div>
  );
}

export default App;
