import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import About from './pages/About';
import Accepting from './pages/Accepting';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/info"
              element={<About />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/signup"
              element={<Signup />}
            />
            <Route
              path="/accepting"
              element={<Accepting />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
