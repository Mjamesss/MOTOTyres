import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import AOS from 'aos'; // Correctly import AOS
import 'aos/dist/aos.css'; // Import the AOS CSS file



function LandingPage() {
    const [showModal, setShowModal] = useState(false); // Modal visibility state
    const slidesRef = useRef([]); // Reference for slides
    const dotsRef = useRef([]); // Reference for dots
    const [slideIndex, setSlideIndex] = useState(0);

    const toggleModal = () => setShowModal(!showModal); // Toggle modal visibility
    const closeModal = () => setShowModal(false); // Close modal

    // Initialize AOS inside useEffect hook (this is the correct place)
    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration in milliseconds
            offset: 200, //
            once: true, // Animation should happen only once
        });
    }, []); // Empty dependency array ensures this runs only once when component mounts

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

    //store location text animations
    const textArray = [
        "Find the nearest store to you and enjoy exclusive offers. Visit us today for the best shopping experience.",
        "Our stores are located near you, offering great deals and fantastic products.",
        "Looking for convenience? Our stores are just around the corner, ready to serve you.",
        "Step into our store today and explore a wide variety of products at unbeatable prices."
    ];

    const [currentText, setCurrentText] = useState(textArray[0]);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        let currentTextIndex = 0;

        const interval = setInterval(() => {
            setFade(false); // Start fade-out
            setTimeout(() => {
                currentTextIndex = (currentTextIndex + 1) % textArray.length;
                setCurrentText(textArray[currentTextIndex]);
                setFade(true); // Trigger fade-in after text change
            }, 500); // Wait for fade-out to complete
        }, 4000); // Change text every 4 seconds

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);
    return (
        <div>
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
                    <img src="hamburger-menu.png" alt="Menu" className="hamburger-icon" />
                </button>
                {/* Logo */}
                <a className="navbar-brand" href="#">
                    <img
                    src="mototyres_logo 1.png"
                    alt="Mototyres Logo"
                    />
                </a>
                {/* Navbar Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/" style={{ color: "white" }}>
                        Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Products" style={{ color: "white" }}>
                        Products
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Categories" style={{ color: "white" }}>
                        Categories
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                        className="nav-link"
                        href="/PricelistPage"
                        style={{ color: "white" }}
                        >
                        Pricelist
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/" style={{ color: "white" }}>
                        Me
                        </a>
                    </li>
                    </ul>
                    <button
                    className="btn btn-login-signup ms-3 bg-primary" style={{ color: "white" }}
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                    >
                    Log In
                    </button>
                    {/* Search Button */}
                    <button
                    className="btn search-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#searchModal"
                    >
                    <img src="search (2).png" alt="Search" />
                    </button>
                    {/* Log In/Sign Up Button */}
                </div>
                </div>
            </nav>
            {/* Search Modal */}
            <div
                className="modal fade"
                id="searchModal"
                tabIndex={-1}
                aria-labelledby="searchModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="searchModalLabel">
                       
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    />
                    </div>
                    <div className="modal-body">
                    <input type="text" className="form-control" placeholder="Search..." />
                    </div>
                </div>
                </div>
            </div>
            {/* Login Modal */}
            <div
                className="modal fade"
                id="loginModal"
                tabIndex={-1}
                aria-labelledby="loginModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="loginModalLabel">
                        Log In
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    />
                    </div>
                    <div className="modal-body">
                    <form>
                        <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            Username
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Enter your username"
                        />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter your password"
                        />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                        Log In
                        </button>
                    </form>
                    <div className="mt-3 text-center">
                        <span className="text-muted">Don't have an account?</span>
                        <a href="#" className="text-decoration-none">
                        Sign Up
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            {/* carousel */}
            <section className="slideshow-container mt-5" data-aos="fade-up" data-aos-duration="1000"> 
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

            {/* 3 Brands */}
            <section className="brand-section">
                <div className="container">
                <div className="d-flex flex-wrap flex-lg-nowrap justify-content-center brand-container">
                    {/* Brand 1 */}
                    <div className="brand-card" data-aos="fade-up" data-aos-duration="1000">
                    <img src="https://via.placeholder.com/100" alt="Brand 1 Logo" />
                    <h5>Brand 1</h5>
                    <p>High-quality products for your lifestyle.</p>
                    <button className="btn btn-dark shop-btn">Shop Now</button>
                    </div>
                    {/* Brand 2 */}
                    <div className="brand-card" data-aos="fade-up" data-aos-duration="2000">
                    <img src="https://via.placeholder.com/100" alt="Brand 2 Logo" />
                    <h5>Brand 2</h5>
                    <p>Innovative solutions for your everyday needs.</p>
                    <button className="btn btn-dark shop-btn">Shop Now</button>
                    </div>
                    {/* Brand 3 */}
                    <div className="brand-card" data-aos="fade-up" data-aos-duration="3000">
                    <img src="https://via.placeholder.com/100" alt="Brand 3 Logo" />
                    <h5>Brand 3</h5>
                    <p>Trusted by professionals worldwide.</p>
                    <button className="btn btn-dark shop-btn">Shop Now</button>
                    </div>
                </div>
                </div>
            </section>


                {/* Top seller section */}
            {/* Top seller section */}
            <section className="itemsSection" data-aos="fade-up">
                <h3 className="mt-2">
                    Top Seller
                    <a href="#">View all</a>
                </h3>
                <div className="itemsContainer mt-5">
                    {/* Product 1 */}
                    <div className="item">
                        <img src="200x200.png" alt="Product 1" className="img-fluid" />
                        <h5>₱3,499.00</h5>
                        <h6>₱3,499.00</h6>
                        <p>Toyota Yamaha</p>
                        <button className="btn btn-dark">Add to Cart</button>
                    </div>

                    {/* Product 2 */}
                    <div className="item">
                        <img src="/200x200.png" alt="Product 2" className="img-fluid" />
                        <h5>₱2,999.00</h5>
                        <p>Honda CBR</p>
                        <button className="btn btn-dark">Add to Cart</button>
                    </div>

                    {/* Product 3 */}
                    <div className="item">
                        <img src="200x200.png" alt="Product 3" className="img-fluid" />
                        <h5>₱4,000.00</h5>
                        <p>Yamaha MT-09</p>
                        <button className="btn btn-dark">Add to Cart</button>
                    </div>

                    {/* Product 4 */}
                    <div className="item">
                        <img src="200x200.png" alt="Product 4" className="img-fluid" />
                        <h5>₱5,200.00</h5>
                        <p>BMW S1000RR</p>
                        <button className="btn btn-dark">Add to Cart</button>
                    </div>

                    {/* Product 5 */}
                    <div className="item">
                        <img src="200x200.png" alt="Product 5" className="img-fluid" />
                        <h5>₱2,500.00</h5>
                        <p>Kawasaki Ninja</p>
                        <button className="btn btn-dark">Add to Cart</button>
                    </div>
                </div>
            </section>

            {/* New Arrivals Section */}
            <section className="itemsSection mt-5">
                <h3 className="mt-2">
                    New Arrivals
                    <a href="#">View all</a>
                </h3>
                <div className="itemsContainer mt-5" data-aos="fade-up">
                    {/* Product 1 */}
                    <div className="item">
                        <img src="200x200.png" alt="Product 1" className="img-fluid" />
                        <h5>₱3,499.00</h5>
                        <p>Toyota Yamaha</p>
                        <button className="btn btn-dark">Add to Cart</button>
                    </div>

                    {/* Product 2 */}
                    <div className="item">
                        <img src="200x200.png" alt="Product 2" className="img-fluid" />
                        <h5>₱2,999.00</h5>
                        <p>Honda CBR</p>
                        <button className="btn btn-dark">Add to Cart</button>
                    </div>

                    {/* Product 3 */}
                    <div className="item">
                        <img src="200x200.png" alt="Product 3" className="img-fluid" />
                        <h5>₱4,000.00</h5>
                        <p>Yamaha MT-09</p>
                        <button className="btn btn-dark">Add to Cart</button>
                    </div>

                    {/* Product 4 */}
                    <div className="item">
                        <img src="200x200.png" alt="Product 4" className="img-fluid" />
                        <h5>₱5,200.00</h5>
                        <p>BMW S1000RR</p>
                        <button className="btn btn-dark">Add to Cart</button>
                    </div>

                    {/* Product 5 */}
                    <div className="item">
                        <img src="200x200.png" alt="Product 5" className="img-fluid" />
                        <h5>₱2,500.00</h5>
                        <p>Kawasaki Ninja</p>
                        <button className="btn btn-dark">Add to Cart</button>
                    </div>
                </div>
            </section>

            {/* Store Location Section */}
            <section className="store-section">
                <div className="glassmorph store-container" data-aos="fade-up">
                    <h2>Check our Locations</h2>
                    <p 
                        id="changing-text"
                        style={{
                            opacity: fade ? 1 : 0, 
                            transition: 'opacity 1s ease-in-out',
                        }}
                    >
                        {currentText}
                    </p>
                    <a href="nextpage.html" className="btn btn-success">Check now!!!</a>
                </div>
            </section>




        {/*HR SOLID RED*/}
        <div data-aos="fade-up" style={{ height: '5px', backgroundColor: 'red', width: '100%' }}></div>

        {/*FEATURE OF PAYMENT*/}
        <section className="payment-feature mt-5">
        <div className="payment-images" >
            {/*Provide 130x100 for picture if ever need to change*/}
            <img src="mop1.png" alt="Payment Option 1" data-aos="fade-up" data-aos-duration="1000" />
            <img src="mop2.png" alt="Payment Option 2" data-aos="fade-up" data-aos-duration="2000" />
            <img src="mop3.png" alt="Payment Option 3" data-aos="fade-up" data-aos-duration="3000" />
        </div>
        <h3 data-aos="fade-up">The Future of Online Motorbike Parts Purchasing</h3>
        <p data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid error
            praesentium tempora perferendis debitis autem sit suscipit provident
            possimus architecto quas, recusandae, cupiditate necessitatibus! Nobis nemo
            rerum omnis voluptatem praesentium?
        </p>
        </section>


            {/* Footer */}
            <footer className="bg-black text-white mt-5">
                <div className="container" style={{backgroundColor: 'black'}}>
                    <div className="row">
                        {/* First Column: Logo and Customer Support */}
                        <div className="col-md-3 mt-5">
                            <img src="mototyres_logo 1.png" alt="Mototyres Logo" data-aos="fade-up" className="footer-logo" style={{ width: '150px', height: 'auto' }} />
                            <h5 data-aos="fade-up">Customer Support</h5>
                            <ul className="list-unstyled mt-2" data-aos="fade-up">
                                <li className="mb-5"><i className="bi bi-geo-alt"></i>(+63)915-269-8366</li>
                                <li className="mb-5"><i className="bi bi-geo-alt"></i>Blk 27 Lot2 Saranay Road, Bagumbong, Caloocan city</li>
                                <li className="mb-5"><i className="bi bi-envelope"></i> mototyres@gmail.com</li>
                            </ul>
                        </div>

                        {/* Second Column: Top Categories */}
                        <div className="col-md-3 mt-5">
                            <h5 data-aos="fade-up">Top Categories</h5>
                            <ul className="list-unstyled" data-aos="fade-up">
                                <li className="mb-2"><a href="#" className="text-white">Engine Components</a></li>
                                <li className="mb-2"><a href="#" className="text-white">Transmission Parts</a></li>
                                <li className="mb-2"><a href="#" className="text-white">Suspension</a></li>
                                <li className="mb-2"><a href="#" className="text-white">Braking System</a></li>
                                <li className="mb-2"><a href="#" className="text-white">Wheels and Tires</a></li>
                            </ul>
                        </div>

                        {/* Third Column: About Mototyres */}
                        <div className="col-md-3 mt-5">
                            <h5 data-aos="fade-up">About Mototyres</h5>
                            <ul className="list-unstyled" data-aos="fade-up">
                                <li className="mb-2"><a href="#" className="text-white">Shop Product</a></li>
                                <li className="mb-2"><a href="#" className="text-white">Terms of Use</a></li>
                                <li className="mb-2"><a href="#" className="text-white">Privacy Policy</a></li>
                                <li className="mb-2"><a href="#" className="text-white">FAQ</a></li>
                                <li className="mb-2"><a href="#" className="text-white">Contact</a></li>
                                <li className="mb-2"><a href="#" className="text-white">Sales</a></li>
                            </ul>
                        </div>

                        {/* Fourth Column: Social Media */}
                        <div className="col-md-3 mt-5" >
                            <h5 data-aos="fade-up">Follow Us</h5>
                            <ul className="list-unstyled" data-aos="fade-up">
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
