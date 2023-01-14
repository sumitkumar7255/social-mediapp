import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
