import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import WelcomeModal from './components/WelcomeModal';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';

function App() {
    const [showModal, setShowModal] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            setShowModal(true);
        } else {
            setShowModal(false);
        }
    }, [location]);

    return (
        <>
            <Navbar />
            {showModal && <WelcomeModal onClose={() => setShowModal(false)} />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
}

export default function AppWithRouter() {
    return (
        <Router>
            <App />
        </Router>
    );
}