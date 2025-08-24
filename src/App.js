
import './style.css';
import { BrowserRouter, Link, Route, Router, Routes, NavLink } from 'react-router-dom';
import Home from './home';
import ContactUs from './contactUs';
import AboutUs from './aboutUs';
import Profile from './profile';
import NavBar from './NavBar';
import Blog from './Blog';
import NoMatch from './NoMatch';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />  
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/aboutUs" element={<AboutUs/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/page/:id" element={<Blog />}/>
        <Route path="*" element={<NoMatch/>} />
      </Routes>
      </BrowserRouter>  
    </div>
  );  
}

export default App;
