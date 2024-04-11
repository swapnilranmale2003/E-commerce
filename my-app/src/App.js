import './App.css';
import { BrowserRouter as Route, Router, Routes } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/'></Route>
          <Route path='/cart'></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
