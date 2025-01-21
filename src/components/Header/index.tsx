
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
                <li className="nav-item"><a className="nav-link" href="#inicio">Inicio</a></li>
                <li className="nav-item"><a className="nav-link" href="#servicos">Serviços</a></li>
                <li className="nav-item"><a className="nav-link" href="#projetos">Projetos</a></li>
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