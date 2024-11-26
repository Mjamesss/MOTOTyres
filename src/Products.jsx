import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import './Products.css';
import AOS from 'aos'; // Correctly import AOS
import 'aos/dist/aos.css'; // Import the AOS CSS file
import axios from 'axios';

function Products() { // file name
    // Modal JS login
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
            offset: 200,
            once: true, // Animation should happen only once
        });
    }, []); // Empty dependency array ensures this runs only once when component mounts

    // Filter Modal
    const [showModalF, setShowModalF] = useState(false);

    const toggleModalF = () => {
        setShowModalF(!showModalF);
    };

    // My wishlist button
    const [products, setProducts] = useState([]); // Initialize state
    const [isInWishlist, setIsInWishlist] = useState(false);
    const toggleWishlist = () => {
        setIsInWishlist(!isInWishlist);
    };
    //data base item
    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await axios.get('http://localhost:5000/api/products');
            setProducts(response.data); // Set the fetched products in state
          } catch (error) {
            console.error("Error fetching products:", error);
          }
        };
      
        fetchProducts();
      }, []);
      
      
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
                        <a className="nav-link" href="" style={{ color: "white" }}>
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

                {/* Item 200x200 image fetch to db */}
                <div className="products-section">
                    <div className="product-list">
                        {products.map((product) => (
                            <div key={product._id} className="product-item">
                                {/* Link should only wrap image, name, and brand */}
                                <a className="toNextPage" href="/ViewItem">
                                    <img src={`http://localhost:5000/images/${product.image}`} alt={product.name} className="product-image" />
                                    <h3>{product.name}</h3>
                                    <p className="product-brand">Brand: {product.brand}</p>
                                </a>
                                <p className="product-unit">Unit: {product.unit}</p>
                                <p className="product-price">
                                    <span className="discounted-price">${product.price}</span>
                                    <span className="original-price">${product.originalPrice}</span>
                                </p>

                                {/* Product actions (Add to Cart and Wishlist) should not be inside the link */}
                                <div className="product-actions">
                                    <button className="add-to-cart-btn">Add to Cart</button>
                                    <img
                                        src={isInWishlist ? 'fillHeart.png' : 'heart.png'}
                                        alt="Wishlist"
                                        className="wishlist-icon"
                                        onClick={toggleWishlist}
                                    />
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>

                
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

export default Products; // filename
