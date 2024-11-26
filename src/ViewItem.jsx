
import './App.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import './ViewItem.css';
import AOS from 'aos'; // Correctly import AOS
import 'aos/dist/aos.css'; // Import the AOS CSS file

function PricelistPage() { //file name
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
            duration: 1200, // Animation duration in milliseconds
            offset: 200, //
            once: true, // Animation should happen only once
        });
    }, []); // Empty dependency array ensures this runs only once when component mounts
  
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
                        <a className="nav-link" href="#" style={{ color: "white" }}>
                        Products
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{ color: "white" }}>
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
                        Search
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

            {/* Context Page*/}
            <h3 id="titleH3">Fetch</h3>
            <main className="container my-5">
                <div className="row align-items-start item-section">
                {/* Right Image */}
                <div className="col-lg-4 col-md-6 mb-4 mt-2">
                    <img
                    src="https://via.placeholder.com/300"
                    alt="Product Image"
                    className="img-fluid rounded"
                    />
                </div>
                {/* Left Content */}
                <div className="col-lg-4 col-md-6 mb-4 mt-2">
                    <div>
                    <h4 className="unit">Unit Name</h4>
                    <h5 className="brand">Brand Name</h5>
                    <div className="d-flex align-items-center mb-2">
                        <div className="star-rating me-2">★★★★☆</div>
                        <span>(150 reviews)</span>
                    </div>
                    <div className="mb-2 fw-bold" style={{ color: "blue" }}>
                        In Stock
                    </div>
                    <hr />
                    <div className="price mb-3 fs-4 fw-bold">₱129.99</div>
                    <button id="wishlistButton" className="btn btn-outline-primary me-2">
                        Add to Wishlist
                    </button>
                    <button className="btn btn-dark">Add to Cart</button>
                    </div>
                </div>
                {/* Right Boxes */}
                <div className="col-lg-4 col-md-12">
                    {/* Payment Options Box */}
                    <div className="payment-box">
                    <h6>Payment Options</h6>
                    <hr />
                    <div className="d-flex">
                        <img src="/gcash.png" alt="Visa" />
                        <img src="/gcash.png" alt="Mastercard" />
                        <img src="/gcash.png" alt="PayPal" />
                    </div>
                    </div>
                    {/* Warranty Box */}
                    <div className="info-box">
                    <h6>Warranty Information</h6>
                    <hr />
                    <ul>
                        <li>
                        <img src="warranty.png" alt="Check" /> 2-Year Manufacturer
                        Warranty
                        </li>
                        <li>
                        <img src="warranty.png" alt="Check" /> 30-Day Money-Back Guarantee
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                {/* Divider */}
                <hr />
                <br />
                {/* Description Section */}
                <section>
                <h4 data-aos="fade-up">Description</h4>
                <p data-aos="fade-up">
                    This is a high-quality product designed to meet all your expectations.
                    It features superior craftsmanship and cutting-edge technology to
                    deliver excellent performance and durability.
                </p>
                </section>
                <br />
                {/* Product Specification Section */}
                <section>
                <h4 data-aos="fade-up" data-aos-duration="1000">Product Specifications</h4>
                <ul>
                    <li data-aos="fade-up" >Durable material for long-lasting use</li>
                    <li data-aos="fade-up" >Compact and lightweight design</li>
                    <li data-aos="fade-up" >Available in multiple colors</li>
                    <li data-aos="fade-up" >Eco-friendly and sustainable manufacturing</li>
                </ul>
                </section>
                {/* Divider */}
                <hr />
                <br />
                {/* Customer Reviews Section */}
                <section>
                <h4 data-aos="fade-up" data-aos-duration="1000">Customer Reviews</h4>
                <div className="reviews">
                    {/* 5-Star Reviews */}
                    <div className="d-flex align-items-center review-item mb-2">
                    <span className="stars me-2" data-aos="fade-up" >★★★★★</span>
                    <div className="progress review-progress me-2">
                        <div className="progress-bar bg-success" style={{ width: "70%" }} data-aos="fade-up"  />
                    </div>
                    <span className="percentage" data-aos="fade-up" >70%</span>
                    </div>
                    {/* 4-Star Reviews */}
                    <div className="d-flex align-items-center review-item mb-2">
                    <span className="stars me-2" data-aos="fade-up" >★★★★☆</span>
                    <div className="progress review-progress me-2">
                        <div className="progress-bar bg-info" style={{ width: "20%" }} data-aos="fade-up"  />
                    </div>
                    <span className="percentage" data-aos="fade-up" >20%</span>
                    </div>
                    {/* 3-Star Reviews */}
                    <div className="d-flex align-items-center review-item mb-2">
                    <span className="stars me-2" data-aos="fade-up" >★★★☆☆</span>
                    <div className="progress review-progress me-2">
                        <div className="progress-bar bg-primary" style={{ width: "5%" }} data-aos="fade-up"  />
                    </div>
                    <span className="percentage" data-aos="fade-up" >5%</span>
                    </div>
                    {/* 2-Star Reviews */}
                    <div className="d-flex align-items-center review-item mb-2">
                    <span className="stars me-2" data-aos="fade-up" >★★☆☆☆</span>
                    <div className="progress review-progress me-2">
                        <div className="progress-bar bg-warning" style={{ width: "3%" }} data-aos="fade-up"  />
                    </div>
                    <span className="percentage" data-aos="fade-up" >3%</span>
                    </div>
                    {/* 1-Star Reviews */}
                    <div className="d-flex align-items-center review-item">
                    <span className="stars me-2" data-aos="fade-up" >★☆☆☆☆</span>
                    <div className="progress review-progress me-2">
                        <div className="progress-bar bg-danger" style={{ width: "2%" }} data-aos="fade-up"  />
                    </div>
                    <span className="percentage" data-aos="fade-up" >2%</span>
                    </div>
                </div>
                </section>
                {/* Divider */}
                <hr />
                <br />
                {/* Reviews Section */}
                <section>
                <h4 data-aos="fade-up" data-aos-duration="1000">Reviews</h4>
                <div className="review-list">
                    {/* Review Item 1 */}
                    <div className="review-item border rounded p-3 mb-4">
                    <div className="d-flex align-items-center justify-content-between">
                        <span className="stars" data-aos="fade-up" data-aos-duration="1000">★★★★☆</span>
                        <span className="review-date text-muted" data-aos="fade-up">Nov 27, 2024</span>
                    </div>
                    <h6 className="user-name mt-2 mb-1" data-aos="fade-up">John Doe</h6>
                    <p className="product-name text-primary mb-2" data-aos="fade-up" >Product: Pipe</p>
                    <p className="review-text mb-2" data-aos="fade-up">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                        commodi assumenda porro soluta culpa facere ipsum est, laboriosam
                        fuga molestiae suscipit similique eos praesentium beatae ducimus,
                        quam aspernatur accusamus ex.
                    </p>
                    <img
                        data-aos="fade-up"
                        src="/200x200.png"
                        alt="User review image"
                        className="review-img img-fluid rounded"
                    />
                    </div>
                </div>
                </section>
                <hr />
                <br />
                {/* Related Items Section */}
                <section className="related-items my-5">
                <h3 className="text-center mb-4">Related Items</h3>
                <div className="row">
                    {/* Item 1 */}
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                    <div className="related-item text-dark p-3 rounded" data-aos="fade-up" data-aos-duration="600">
                        <img
                        src="/200x200.png"
                        alt="Item 1"
                        className="img-fluid mb-2"
                        />
                        <h5 className="item-title">Item 1</h5>
                        <p className="item-description">Description of Item 1</p>
                        <button className="btn btn-outline-dark w-100">View Item</button>
                    </div>
                    </div>
                    {/* Item 2 */}
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                    <div className="related-item text-dark p-3 rounded" data-aos="fade-up" data-aos-duration="1200">
                        <img
                        src="/200x200.png"
                        alt="Item 2"
                        className="img-fluid mb-2"
                        />
                        <h5 className="item-title">Item 2</h5>
                        <p className="item-description">Description of Item 2</p>
                        <button className="btn btn-outline-dark w-100">View Item</button>
                    </div>
                    </div>
                    {/* Item 3 */}
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                    <div className="related-item text-dark p-3 rounded" data-aos="fade-up" data-aos-duration="1800">
                        <img
                        src="/200x200.png"
                        alt="Item 3"
                        className="img-fluid mb-2"
                        />
                        <h5 className="item-title">Item 3</h5>
                        <p className="item-description">Description of Item 3</p>
                        <button className="btn btn-outline-dark w-100">View Item</button>
                    </div>
                    </div>
                    {/* Item 4 */}
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                    <div className="related-item  text-dark p-3 rounded" data-aos="fade-up" data-aos-duration="2400">
                        <img
                        src="/200x200.png"
                        alt="Item 4"
                        className="img-fluid mb-2"
                        />
                        <h5 className="item-title">Item 4</h5>
                        <p className="item-description">Description of Item 4</p>
                        <button className="btn btn-outline-dark w-100">View Item</button>
                    </div>
                    </div>
                    {/* Item 5 */}
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                    <div className="related-item text-dark p-3 rounded" data-aos="fade-up" data-aos-duration="3000">
                        <img
                        src="/200x200.png"
                        alt="Item 5"
                        className="img-fluid mb-2"
                        />
                        <h5 className="item-title">Item 5</h5>
                        <p className="item-description">Description of Item 5</p>
                        <button className="btn btn-outline-dark w-100">View Item</button>
                    </div>
                    </div>
                </div>
                </section>
            </main>

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
