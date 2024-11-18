import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css'; // Import the AOS CSS file

function LandingPage() {
    const [showModal, setShowModal] = useState(false); // Modal visibility state
    const slidesRef = useRef([]); // Reference for slides
    const dotsRef = useRef([]); // Reference for dots
    const [slideIndex, setSlideIndex] = useState(0);

    const toggleModal = () => setShowModal(!showModal); // Toggle modal visibility
    const closeModal = () => setShowModal(false); // Close modal

    // Carousel JS Functions
    useEffect(() => {
        const interval = setInterval(() => {
            showSlides(slideIndex + 1);
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [slideIndex]);

    const showSlides = (n) => {
        const slides = slidesRef.current;
        const dots = dotsRef.current;

        if (slides.length === 0) return; // Ensure elements are present

        let newSlideIndex = n;
        if (n >= slides.length) newSlideIndex = 0;
        if (n < 0) newSlideIndex = slides.length - 1;

        slides.forEach((slide, index) => {
            slide.style.display = index === newSlideIndex ? 'block' : 'none';
        });

        dots.forEach((dot, index) => {
            dot.className = index === newSlideIndex ? 'dot active' : 'dot';
        });

        setSlideIndex(newSlideIndex);
    };

    const currentSlide = (n) => {
        showSlides(n);
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
                                <a className="nav-link" href="#" style={{ color: 'white' }}>Home</a>
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

            {/* carousel */}
            <section className="slideshow-container mt-5">
                {['carouselDummy1.png', 'carouselDummy2.png', 'carouselDummy3.png', 'carouselDummy4.png'].map((src, index) => (
                    <div
                        className="mySlides"
                        key={index}
                        ref={(el) => (slidesRef.current[index] = el)}
                        style={{ display: index === 0 ? 'block' : 'none' }}
                    >
                        <img src={src} alt={`Slide ${index + 1}`} />
                        <div className="dots-container">
                            {[0, 1, 2, 3].map((_, dotIndex) => (
                                <span
                                    key={dotIndex}
                                    className={`dot${dotIndex === 0 ? ' active' : ''}`}
                                    onClick={() => currentSlide(dotIndex)}
                                    ref={(el) => (dotsRef.current[dotIndex] = el)}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            {/* Footer */}
            <footer className="bg-black text-white">
                <div className="container">
                    <div className="row">
                        {/* First Column: Logo and Customer Support */}
                        <div className="col-md-3 mt-5">
                            <img src="mototyres_logo 1.png" alt="Mototyres Logo" className="footer-logo" style={{ width: '150px', height: 'auto' }} />
                            <h5>Customer Support</h5>
                            <ul className="list-unstyled mt-2">
                                <li className="mb-5"><i className="bi bi-geo-alt"></i>(+63)915-269-8366</li>
                                <li className="mb-5"><i className="bi bi-geo-alt"></i>Blk 27 Lot2 Saranay Road, Bagumbong, Caloocan city</li>
                                <li className="mb-5"><i className="bi bi-envelope"></i> mototyres@gmail.com</li>
                            </ul>
                        </div>

                        {/* Second Column: Top Categories */}
                        <div className="col-md-3 mt-5">
                            <h5>Top Categories</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="#" className="text-white">Engine Components</a></li>
                                <li className="mb-2"><a href="#" className="text-white">Transmission Parts</a></li>
                                <li className="mb-2"><a href="#" className="text-white">Suspension</a></li>
                                <li className="mb-2"><a href="#" className="text-white">Braking System</a></li>
                                <li className="mb-2"><a href="#" className="text-white">Wheels and Tires</a></li>
                            </ul>
                        </div>

                        {/* Third Column: About Mototyres */}
                        <div className="col-md-3 mt-5">
                            <h5>About Mototyres</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="#" className="text-white">Shop Product</a></li>
                                <li className="mb-2"><a href="#" className="text-white">Terms of Use</a></li>
                                <li className="mb-2"><a href="#" className="text-white">Privacy Policy</a></li>
                                <li className="mb-2"><a href="#" className="text-white">FAQ</a></li>
                                <li className="mb-2"><a href="#" className="text-white">Contact</a></li>
                                <li className="mb-2"><a href="#" className="text-white">Sales</a></li>
                            </ul>
                        </div>

                        {/* Fourth Column: Social Media */}
                        <div className="col-md-3 mt-5">
                            <h5>Follow Us</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-white"><i className="bi bi-facebook"></i> Facebook</a></li>
                                <li><a href="#" className="text-white"><i className="bi bi-twitter"></i> Twitter</a></li>
                                <li><a href="#" className="text-white"><i className="bi bi-instagram"></i> Instagram</a></li>
                                <li><a href="#" className="text-white"><i className="bi bi-youtube"></i> YouTube</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr className="bg-white" />
                    <p className="text-center pb-3">&copy; 2024 Mototyres. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;
