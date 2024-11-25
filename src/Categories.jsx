import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import './Categories.css';
import AOS from 'aos'; // Correctly import AOS
import 'aos/dist/aos.css'; // Import the AOS CSS file
import axios from 'axios';


function Categories() { //file name
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
                    <a className="nav-link" href="Products" style={{ color: 'white' }}>Products</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="Categories" style={{ color: 'white' }}>Categories</a>
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


            {/*Categories item Section*/}
            <div>
            {/* Categories Section Header */}
            <header>
                <h3 id="titleH3">Categories</h3>
            </header>
            {/* Categories Grid Section */}
            <section className="container mt-5">
                <div className="row">
                {/* Category Item 1 */}
                <article className="col-md-4 mb-4 col-6">
                    <div className="category-item">
                    <a href="" className="d-block">
                        <img src="200x200.png" alt="Category 1" className="img-fluid" />
                        <h4>Category 1</h4>
                    </a>
                    </div>
                </article>
                {/* Category Item 2 */}
                <article className="col-md-4 mb-4 col-6">
                    <div className="category-item">
                    <a href="#" className="d-block">
                        <img
                        src="https://via.placeholder.com/200"
                        alt="Category 2"
                        className="img-fluid"
                        />
                        <h4>Category 2</h4>
                    </a>
                    </div>
                </article>
                {/* Category Item 3 */}
                <article className="col-md-4 mb-4 col-6">
                    <div className="category-item">
                    <a href="#" className="d-block">
                        <img
                        src="https://via.placeholder.com/200"
                        alt="Category 3"
                        className="img-fluid"
                        />
                        <h4>Category 3</h4>
                    </a>
                    </div>
                </article>
                {/* Category Item 4 */}
                <article className="col-md-4 mb-4 col-6">
                    <div className="category-item">
                    <a href="#" className="d-block">
                        <img
                        src="https://via.placeholder.com/200"
                        alt="Category 4"
                        className="img-fluid"
                        />
                        <h4>Category 4</h4>
                    </a>
                    </div>
                </article>
                </div>
            </section>
            </div>


            <footer className="bg-black text-white">
                    {/* Footer Bottom */}
                    <div className="text-center mt-4">
                        <p>&copy; 2024 Mototyres. All Rights Reserved.</p>
                    </div>
            </footer>
            </div>
  );
}

export default Categories; //filename
