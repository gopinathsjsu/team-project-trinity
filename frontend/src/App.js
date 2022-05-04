
export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage/LandingPage'
import HotelMain from './Pages/HotelMainPage/HotelMain';
import TopNav from './components/TopNav';
import Footer from './components/Footer';
import login from './Components/login';
import Signup from './Components/signup';

function App() {
  return (

    <div className="App">
      <TopNav />

      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}>
          </Route>
          <Route path={`/hotels/:id`} element={<HotelMain />}>
          </Route>

          <Route path={'/login'} element = {<login />}>
          </Route>

          <Route path={'/signup'} element={<Signup />}>
          </Route>

        </Routes>

      </Router>
      <Footer />
    </div>
  );
}

export default App;
