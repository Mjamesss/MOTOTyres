import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import './Products.css';
import AOS from 'aos'; // Correctly import AOS
import 'aos/dist/aos.css'; // Import the AOS CSS file


function PricelistPage() { //file name
    //Modal JS login
    const [showModal, setShowModal] = useState(false); // Modal visibility state
    const toggleModal = () => setShowModal(!showModal); // Toggle modal visibility
    const closeModal = () => setShowModal(false); // Close modal

    const handleSearch = () => {
        const query = document.getElementById('searchInput').value;
        console.log('Search Query:', query); // You can replace this with actual search functionality
    };
    // Initialize AOS inside useEffect hook (this is the correct place)
    useEffect(() => {
        AOS.init({
            duration: 3000, // Animation duration in milliseconds
            offset: 200, //
            once: true, // Animation should happen only once
        });
    }, []); // Empty dependency array ensures this runs only once when component mounts
    // Filter Modal
    const [showModalF, setShowModalF] = useState(false);

    const toggleModalF = () => {
        setShowModalF(!showModalF);
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
            <h3 id="titleH3">Products</h3>

            {/* Filter Button for Mobile */}
            <button className="filter-btn" onClick={toggleModalF}>Filter</button>

            {/* Filter Modal for Mobile */}
            {showModalF && (
                <div className={`filter-modal ${showModalF ? 'active' : ''}`} id="filterModal" data-aos="fade-right" data-aos-duration="1000">
                    <div className="filter-modal-content">
                        <section className="filter">
                            {/* Categories Filter */}
                            <header>
                                <h2>Categories</h2>
                            </header>
                            <p>Category 1</p>
                            <p>Category 2</p>
                            <p>Category 3</p>
                            <p>Category 4</p>

                            <hr />

                            {/* Brands Filter */}
                            <header>
                                <h2>Brands</h2>
                            </header>
                            <p>Brand 1</p>
                            <p>Brand 2</p>
                            <p>Brand 3</p>
                            <p>Brand 4</p>

                            <hr />

                            {/* Price Range Filter */}
                            <header>
                                <h2>Price Range</h2>
                            </header>
                            <label htmlFor="minPrice" className="form-label">Min Price: $</label>
                            <input type="number" className="form-control mb-3" id="minPrice" placeholder="1" min="0" />

                            <label htmlFor="maxPrice" className="form-label">Max Price: $</label>
                            <input type="number" className="form-control mb-3" id="maxPrice" placeholder="19999" max="999999999999999999999" />

                            <hr />

                            {/* Availability Filter */}
                            <header>
                                <h2>Availability</h2>
                            </header>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="inStock" />
                                <label className="form-check-label" htmlFor="inStock">
                                    In stock only
                                </label>
                            </div>
                        </section>
                    </div>
                </div>
            )}

            {/* Main content section */}
            <div className="filterContainer">
                {/* Aside filter section (visible only on desktop) */}
                <aside>
                    <section className="filter">
                        {/* Categories Filter */}
                        <header>
                            <h2>Categories</h2>
                        </header>
                        <p>Category 1</p>
                        <p>Category 2</p>
                        <p>Category 3</p>
                        <p>Category 4</p>

                        <hr />

                        {/* Brands Filter */}
                        <header>
                            <h2>Brands</h2>
                        </header>
                        <p>Brand 1</p>
                        <p>Brand 2</p>
                        <p>Brand 3</p>
                        <p>Brand 4</p>

                        <hr />

                        {/* Price Range Filter */}
                        <header>
                            <h2>Price Range</h2>
                        </header>
                        <label htmlFor="minPrice" className="form-label">Min Price: ₱</label>
                        <input type="number" className="form-control mb-3" id="minPrice" placeholder="Minimum" />

                        <label htmlFor="maxPrice" className="form-label">Max Price: ₱</label>
                        <input type="number" className="form-control mb-3" id="maxPrice" placeholder="Maximum" />

                        <hr />

                        {/* Availability Filter */}
                        <header>
                            <h2>Availability</h2>
                        </header>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="inStock" />
                            <label className="form-check-label" htmlFor="inStock">
                                In stock only
                            </label>
                        </div>
                    </section>
                </aside>

                {/* Main content area */}
                <main>
                    <h2>Main content</h2>
                    <p>This is where your main content would be displayed. You can display filtered products here based on the options selected in the filter sidebar.</p>
                </main>
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

export default PricelistPage; //filename
