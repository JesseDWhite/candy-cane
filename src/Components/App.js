import '../styles/index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Donate from './Donate';
import Gallery from './Gallery';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='donate' element={<Donate />} />
        <Route path='gallery' element={<Gallery />} />
      </Routes>
    </Router>
  )
}

export default App;
