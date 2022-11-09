//Libraries
import { Routes, Route } from 'react-router-dom';

//Components
import Login from './components/Login';
import MoviesC from './pages/Moviespage';
import Home from './pages/Homepage';

//styles
import './styles/app.css'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<MoviesC />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
