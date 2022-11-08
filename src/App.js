import {Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Movies from './components/Movies';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/movies" element={<Movies/>}/>
      </Routes>
    </>
  );
}

export default App;
