import React from 'react';
import './App.css'; // Ensure your styles are correctly imported

function LandingPage() {
    const toggleSearch = () => {
        const searchInput = document.getElementById('searchInput');
        searchInput.classList.toggle('active');

        if (searchInput.classList.contains('active')) {
            searchInput.style.display = 'inline-block';
            searchInput.focus();
        } else {
            searchInput.value = '';
            setTimeout(() => {
                searchInput.style.display = 'none';
            }, 300);
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Categories</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricelist</a>
                        </li>
                    </ul>

                    {/* Desktop Icons */}
                    <div className="d-flex align-items-center ms-auto d-none d-lg-flex">
                        <button className="search-btn" onClick={toggleSearch}>
                            <img src="/loupe.png" alt="Search" className="search-logo" style={{ width: '25px' }} />
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

                {/* Mobile View Icons */}
                <div className="d-flex align-items-center ms-5 d-lg-none">
                    <img src="/heart.png" alt="Wishlist" className="me-2 logo-icon" style={{ width: '20px' }} />
                    <img src="/shopping-cart.png" alt="Add to Cart" className="me-2 logo-icon" style={{ width: '20px' }} />
                    <img src="/user.png" alt="User" className="logo-icon" style={{ width: '20px' }} />
                    <span className="nav-link ms-3" style={{ color: 'white' }}>Log In</span>
                </div>
            </div>
        </nav>
    );
}

export default LandingPage;
