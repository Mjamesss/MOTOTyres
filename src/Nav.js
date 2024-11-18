import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function PricelistPage() { //file name
    const [showModal, setShowModal] = useState(false); // Modal visibility state
    const toggleModal = () => setShowModal(!showModal); // Toggle modal visibility
    const closeModal = () => setShowModal(false); // Close modal

    const handleSearch = () => {
        const query = document.getElementById('searchInput').value;
        console.log('Search Query:', query); // You can replace this with actual search functionality
    };
  
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-black">
            <div className="container-fluid">
                {/* Hamburger Menu */}
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <img src="/hamburger-menu.png" alt="Menu" className="hamburger-icon" />
                </button>

                {/* Logo */}
                <img src="/mototyres_logo 1.png" alt="Mototyres Logo" className="mototyres-logo" />

                {/* Collapsible Content */}
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" href="/" style={{ color: 'white' }}>Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#" style={{ color: 'white' }}>Products</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#" style={{ color: 'white' }}>Categories</a>
                    </li>
                    <li className="nav-item">
                    <Link to="/PricelistPage" className="nav-link" style={{ color: 'white' }}>
                        Pricelist
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/" className="nav-link" style={{ color: 'white' }}>
                        Me
                    </Link>
                    </li>
                    <input
                    type="text"
                    id="searchInputMobile"
                    className="search-input"
                    placeholder="Search..."
                />
                </ul>
                </div>

                {/* Search and Log In in Mobile View (Outside of Hamburger) */}
                <div className="d-flex align-items-center ms-auto d-lg-none">
                <div className="d-flex align-items-center ms-5">
                    <span
                    className="nav-link ms-3"
                    style={{ color: 'white', cursor: 'pointer' }}
                    onClick={toggleModal} // Trigger modal toggle
                    >
                    Log In
                    </span>
                </div>
                </div>
                <div className="d-flex align-items-center ms-5" id="noneDisplay">
                    <span
                    className="nav-link ms-3"
                    style={{ color: 'white', cursor: 'pointer' }}
                    onClick={toggleModal} // Trigger modal toggle
                    >
                    Log In
                    </span>
                </div>
                

            </div>
            </nav>


            {/* Modal Component */}
            {showModal && (
                <div className="modalOverlay" onClick={closeModal}>
                    <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
                        <span className="closeButton" onClick={closeModal}>X</span>
                        <div className="modalContent">
                            <h2>Log In</h2>
                            <input type="email" id="user" placeholder="Enter your username" />
                            <input type="password" id="pass" placeholder="Enter your password" />
                            <button id="enter">Log In</button>
                            <hr />
                            <span id="forgotPassword">Forgot Password?</span><br />
                            <p>Don't have an account? <span id="createAccount">Create account</span></p>
                        </div>
                    </div>
                </div>
            )}

            {/* Your additional content (Sections, etc.) */}
            <div className="">dito niyo lagay</div>
            <footer className="bg-black text-white">
                    {/* Footer Bottom */}
                    <div className="text-center mt-4">
                        <p>&copy; 2024 Mototyres. All Rights Reserved.</p>
                    </div>
            </footer>
            </div>
  );
}

export default PricelistPage; //filename
