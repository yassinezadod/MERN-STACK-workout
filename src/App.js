
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
// import index.css to apply the styles
import './index.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
