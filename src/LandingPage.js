import React from 'react';
import './App.css'; // Ensure your styles are correctly imported

function LandingPage() {
    const toggleSearch = () => {
        const searchInput = document.getElementById('searchInput');
        searchInput.classList.toggle('active'); // Toggles the class to trigger animation

        // Handle visibility of the input field after animation
        if (searchInput.classList.contains('active')) {
            searchInput.style.display = 'inline-block';
            searchInput.focus();
        } else {
            searchInput.value = '';
            setTimeout(() => {
                searchInput.style.display = 'none';
            }, 300); // Allow animation to finish before hiding input
        }
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

                        {/* Desktop Icons */}
                        <div className="d-flex align-items-center ms-auto d-none d-lg-flex">
                            <button className="search-btn" onClick={toggleSearch}>
                                <img src="search (2).png" alt="Search" className="search-logo" style={{ width: '25px' }} />
                            </button>
                            <input type="text" id="searchInput" className="search-input" placeholder="Search..." />
                            <div className="d-flex align-items-center ms-5">
                                <img src="/market.png" alt="Market" className="me-2 logo-icon" />
                                <img src="/delivery.png" alt="Delivery" className="me-2 logo-icon" />
                                <img src="/heart.png" alt="Wishlist" className="me-2 logo-icon" />
                                <img src="/shopping-cart.png" alt="Cart" className="logo-icon" />
                                <img src="/user.png" alt="User" className="logo-icon" />
                                <span className="nav-link ms-3" style={{ color: 'white' }}>Log In</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            
            <div className="">dito niyo lagay </div>
            {/* dito niyo lagay gawa using section dapat */}




















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
                                <li className="mb-5"><i className="bi bi-geo-alt"></i>Blk 27 Lot2 Saranay Road, Bagumbong, Caloocan dity</li>
                                <li className="mb-5"><i className="bi bi-envelope"></i> support@mototyres.com</li>
                            </ul>
                        </div>

                        {/* Second Column: Top Categories */}
                        <div className="col-md-3 mt-5">
                            <h5>Top Categories</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="#" className="text-white">Tyres</a></li>
                                <li className="mb-2"><a href="#" className="text-white">Rims</a></li>
                                <li className="mb-2"><a href="#" className="text-white">Accessories</a></li>
                                <li className="mb-2"><a href="#" className="text-white">Tools</a></li>
                                <li className="mb-2"><a href="#" className="text-white">Batteries</a></li>
                                <li className="mb-2"><a href="#" className="text-white">Car Care</a></li>
                                <br></br>
                                
                            </ul>
                        </div>

                        {/* Third Column: About Mototyres */}
                        <div className="col-md-3 mt-5">
                            <h5>About Mototyres</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="#" className="text-white">Our Story</a></li>
                                <li className="mb-2"><a href="#" className="text-white">Mission</a></li>
                                <li className="mb-2"><a href="#" className="text-white">Vision</a></li>
                                <li className="mb-2"><a href="#" className="text-white">Values</a></li>
                                <li className="mb-2"><a href="#" className="text-white">Careers</a></li>
                                <li className="mb-2"><a href="#" className="text-white">News</a></li>
                                <li className="mb-2"><a href="#" className="text-white">Contact Us</a></li>
                                
                            </ul>
                        </div>
                        {/* Fourth Column: Follow Us */}
                    <div className="col md-3 mt-5">
                        <div className="col-md-12">
                        <h5>Follow Us</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="#" className="text-white"><i className="bi bi-facebook"></i> Facebook</a></li>
                            </ul>
                        </div>
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
