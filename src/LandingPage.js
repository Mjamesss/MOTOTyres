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

    // Top Sellers Section
    const topSellerSliderContainer = useRef(null);
    const newArrivalSliderContainer = useRef(null);
    
    const [topSellerCurrentScrollPosition, setTopSellerCurrentScrollPosition] = useState(0);
    const [newArrivalCurrentScrollPosition, setNewArrivalCurrentScrollPosition] = useState(0);
    
    const itemWidth = 200 + 30; // Item width + margin
    const visibleItems = 4;
    
    const handleTopSellerScroll = (direction) => {
        const sliderContainer = topSellerSliderContainer.current;
        const maxScrollPosition = (sliderContainer.children.length - visibleItems) * itemWidth;
        let newScrollPosition = topSellerCurrentScrollPosition;

        if (direction === 'left') {
        newScrollPosition = Math.max(newScrollPosition - itemWidth * visibleItems, 0);
        } else if (direction === 'right') {
        newScrollPosition = Math.min(newScrollPosition + itemWidth * visibleItems, maxScrollPosition);
        }

        setTopSellerCurrentScrollPosition(newScrollPosition);
        sliderContainer.style.transform = `translateX(-${newScrollPosition}px)`;
    };

    const handleNewArrivalScroll = (direction) => {
        const sliderContainer = newArrivalSliderContainer.current;
        const maxScrollPosition = (sliderContainer.children.length - visibleItems) * itemWidth;
        let newScrollPosition = newArrivalCurrentScrollPosition;

        if (direction === 'left') {
        newScrollPosition = Math.max(newScrollPosition - itemWidth * visibleItems, 0);
        } else if (direction === 'right') {
        newScrollPosition = Math.min(newScrollPosition + itemWidth * visibleItems, maxScrollPosition);
        }

        setNewArrivalCurrentScrollPosition(newScrollPosition);
        sliderContainer.style.transform = `translateX(-${newScrollPosition}px)`;
    };

    const [heartStatesTs, setHeartStatesTs] = useState([false, false, false, false, false]);

    const toggleHeartTs = (index) => {
        const updatedStates = [...heartStatesTs];
        updatedStates[index] = !updatedStates[index];
        setHeartStatesTs(updatedStates);
    };

    const [heartStatesNa, setHeartStatesNa] = useState([false, false, false, false, false]);
    const toggleHeartNa = (index) => {
        const updatedStates = [...heartStatesNa];
        updatedStates[index] = !updatedStates[index];
        setHeartStatesNa(updatedStates);
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
                <div className="modalOverlay" data-aos="fade-up" onClick={closeModal}>
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
            <section className="brandsSection mt-5">
            <div className="container">
                <div className="row g-5">
                {/* Brand 1 */}
                <div className="col-12 col-sm-6 col-md-4 mb-4" data-aos="fade-up">
                    <div className="brand">
                    <img src="/brandDummy.png" alt="Brand 1" className="brandImg" />
                    <button className="shopNowButton">Shop Now</button>
                    </div>
                </div>
                {/* Brand 2 */}
                <div className="col-12 col-sm-6 col-md-4 mb-4" data-aos="fade-up">
                    <div className="brand">
                    <img src="/brandDummy.png" alt="Brand 2" className="brandImg" />
                    <button className="shopNowButton">Shop Now</button>
                    </div>
                </div>
                {/* Brand 3 */}
                <div className="col-12 col-sm-6 col-md-4 mb-4" data-aos="fade-up">
                    <div className="brand">
                    <img src="/brandDummy.png" alt="Brand 3" className="brandImg" />
                    <button className="shopNowButton">Shop Now</button>
                    </div>
                </div>
                </div>
            </div>
            </section>


            {/* Top Sellers */}
            <section className="itemSlider mt-5">
            <button className="scrollButton leftScroll" onClick={() => handleTopSellerScroll('left')}>
            <img src="right-arrow.png" alt="Scroll Left" />
            </button>
            <div className="itemSliderWrapper">
            <h3 className="mt-2">Top Seller</h3>
            <div className="itemSliderContainer" ref={topSellerSliderContainer}>
                {Array(10).fill().map((_, index) => (
                <div key={index} className="topSellerItem">
                    <img src="topseller.jpg" alt={`Product ${index + 1}`} className="img-fluid" id="imgSizing" />
                    <h5 className="mt-3 pr-2">₱3,499.00</h5>
                    <p>Toyota Yamaha</p>
                    <button id="addToCartButton">Add to Cart</button>
                    <button
                    id="heartButton"
                    onClick={() => toggleHeartTs(index)}
                    className={heartStatesTs[index] ? "clicked" : ""}
                >
                <img
                    src={heartStatesTs[index] ? "fillHeart.png" : "love.png"}
                    alt="Heart Icon"
                        />
                    </button>

                </div>
                ))}
            </div>
            </div>
            <button className="scrollButton rightScroll" onClick={() => handleTopSellerScroll('right')}>
            <img src="right-arrow.png" alt="Scroll Right" />
            </button>
        </section>

        {/* New Arrivals Section */}
        <section className="itemSlider mt-5">
            <button className="scrollButton leftScroll" onClick={() => handleNewArrivalScroll('left')}>
            <img src="right-arrow.png" alt="Scroll Left" />
            </button>
            <div className="itemSliderWrapper">
            <h3 className="mt-2">New Arrivals</h3>
            <div className="itemSliderContainer" ref={newArrivalSliderContainer}>
                {Array(2).fill().map((_, index) => (
                <div key={index} className="topSellerItem">
                    <img src="topseller.jpg" alt={`Product ${index + 1}`} className="img-fluid" id="imgSizing" />
                    <h5 className="mt-3 pr-2">₱3,499.00</h5>
                    <p>Toyota Yamaha</p>
                    <button id="addToCartButton">Add to Cart</button>
                    <button
                    id="heartButton"
                    onClick={() => toggleHeartNa(index)}
                    className={heartStatesNa[index] ? "clicked" : ""}
                >
                <img
                    src={heartStatesNa[index] ? "fillHeart(2).png" : "love(2).png"}
                    alt="Heart Icon"
                        />
                    </button>
                </div>
                ))}
            </div>
            </div>
            <button className="scrollButton rightScroll" onClick={() => handleNewArrivalScroll('right')}>
            <img src="right-arrow.png" alt="Scroll Right" />
            </button>
        </section>
        {/*Rating Section*/}
        <section className="customer-feedback mt-5">
        <h2>What Customers Say About Us</h2>
        <div className="feedback-container">
            <div className="feedback-item">
            <p className="feedback-text">"Amazing service and high-quality products!"</p>
            <div className="star-rating">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
                <i className="bi bi-star"></i>
            </div>
            <h4 className="customer-name">John Doe</h4>
            </div>
            <div className="feedback-item">
            <p className="feedback-text">"I love the quick delivery and excellent support."</p>
            <div className="star-rating">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star"></i>
            </div>
            <h4 className="customer-name">Jane Smith</h4>
            </div>
            <div className="feedback-item">
            <p className="feedback-text">"Great experience overall. Will shop again!"</p>
            <div className="star-rating">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
            </div>
            <h4 className="customer-name">Mike Johnson</h4>
            </div>
        </div>
        </section>
        {/*HR SOLID RED*/}
        <div className='mt-5' style={{ height: '5px', backgroundColor: 'red', width: '100%' }}></div>

        {/*FEATURE OF PAYMENT*/}
        <section className="payment-feature mt-5">
        <div className="payment-images">
            {/*Provide 130x100 for picture if ever need to change*/}
            <img src="mop1.png" alt="Payment Option 1" />
            <img src="mop2.png" alt="Payment Option 2" />
            <img src="mop3.png" alt="Payment Option 3" />
        </div>
        <h3>The Future of Online Motorbike Parts Purchasing</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid error
            praesentium tempora perferendis debitis autem sit suscipit provident
            possimus architecto quas, recusandae, cupiditate necessitatibus! Nobis nemo
            rerum omnis voluptatem praesentium?
        </p>
        </section>


            {/* Footer */}
            <footer className="bg-black text-white mt-5">
                <div className="container">
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
