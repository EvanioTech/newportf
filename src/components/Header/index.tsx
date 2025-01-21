
import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../../Pages/Home';
import Services from '../../Pages/Services';
import Projects from '../../Pages/Projects';


const Header: React.FC = () => {
    return (
        <header className="header">
        <Router>
       
        <nav className="nav">
            <ul className="nav-list">
                <li  className="nav-item">
                <Link to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                <Link to="/services">Serviços</Link></li>
                <li className="nav-item">
                <Link to="/projects">Projetos</Link>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
        
        </Router>
        </header>
            
    );
};

export default Header;