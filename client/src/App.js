import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import './static/styles/style.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
