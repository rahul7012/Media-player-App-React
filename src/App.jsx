import './App.css'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import Watch from './pages/Watch'
import { Routes, Route } from "react-router-dom";
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';

function App() {

  return (
    <>
       <Header/>

       <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/watch' element={<Watch/>} />
      </Routes>

      <Footer/>

    </>
  )
}

export default App
