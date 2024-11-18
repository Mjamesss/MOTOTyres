import React, { useState } from 'react';
import './App.css'; // Ensure your styles are correctly imported

function LandingPage() {
    const [showModal, setShowModal] = useState(false); // Modal visibility state

    const toggleModal = () => setShowModal(!showModal); // Toggle modal visibility

    // Close modal
  const closeModal = () => {
    setShowModal(false);
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
                                <a className="nav-link" href="#" style={{ color: 'white' }}>Pricelist</a>
                            </li>
                        </ul>

                        {/* Desktop Icons and Log In */}
                        <div className="d-flex align-items-center ms-auto d-none d-lg-flex">
                            <button className="search-btn">
                                <img src="search (2).png" alt="Search" className="search-logo" style={{ width: '25px' }} />
                            </button>
                            <input type="text" id="searchInput" className="search-input" placeholder="Search..." />
                            <div className="d-flex align-items-center ms-5">
                                <img src="/market.png" alt="Market" className="me-2 logo-icon" />
                                <img src="/delivery.png" alt="Delivery" className="me-2 logo-icon" />
                                <img src="/heart.png" alt="Wishlist" className="me-2 logo-icon" />
                                <img src="/shopping-cart.png" alt="Cart" className="logo-icon" />
                                <img src="/user.png" alt="User" className="logo-icon" />
                                <span
                                    className="nav-link ms-3"
                                    style={{ color: 'white', cursor: 'pointer' }}
                                    onClick={toggleModal} // Trigger modal toggle
                                >
                                    Log In
                                </span>
                            </div>
                        </div>
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
                                <li className="mb-2"><a href="#" className="text-white">About Us</a></li>
                            </ul>
                        </div>

                        {/* Fourth Column: Follow Us */}
                        <div className="col-md-3 mt-5">
                            <h5>Follow Us</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="#" className="text-white"><i className="bi bi-facebook"></i> Facebook</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="text-center mt-4">
                        <p>&copy; 2024 Mototyres. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;
