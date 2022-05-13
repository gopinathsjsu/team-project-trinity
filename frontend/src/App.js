import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage/LandingPage'
import HotelMain from './Pages/HotelMainPage/HotelMain';
import TopNav from './components/TopNav';
import Footer from './components/Footer';
import Summary from './Pages/PaymentPage/Summary'
import SignUp from './Pages/LoginSignup/Signup'

function App() {
  return (

    <div className="App">
      <div className='background'></div>
      <div className='overlay'></div>

      <TopNav />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}>
          </Route>
          <Route path={`/hotels/:id`} element={<HotelMain />}>
          </Route>
          <Route path={`/summary`} element={<Summary />}>
          </Route>


          <Route path={`/signUp`} element={<SignUp />}>
          </Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
