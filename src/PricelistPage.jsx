import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import './PricelistPage.css';
import AOS from 'aos'; // Correctly import AOS
import 'aos/dist/aos.css'; // Import the AOS CSS file
import axios from 'axios';

function PricelistPage() { // file name
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

    //function of pricelist
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 19;

    // Generate random price
    const generateRandomPrice = () => (Math.random() * (100000 - 50) + 50).toFixed(2);// sagabal lang yan boss 

    // Generate 10000 product data
    useEffect(() => {
        const products = [
        "Pipe", "Laptop", "Smartphone", "Headphones", "Keyboard", "Mouse", "Monitor", "TV",
        "Smartwatch", "Tablet", "Camera", "Speaker", "Printer", "Router", "External Hard Drive",
        "USB Drive", "Webcam", "Flashlight", "Power Bank", "Charger", "Microphone"
        ];

        const productData = Array.from({ length: 10000 }, (_, i) => ({
        id: i + 1,
        name: products[Math.floor(Math.random() * products.length)],
        status: Math.random() < 0.7 ? "In Stock" : "Out of Stock",
        price: generateRandomPrice(),
        }));

        setAllProducts(productData);
        setFilteredProducts(productData);
    }, []);

    const displayProducts = () => {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return filteredProducts.slice(start, end).map((product, index) => (
        <tr key={product.id}>
            <td>{start + index + 1}</td>
            <td>{product.name}</td>
            <td>{product.status}</td>
            <td className="text-right">₱{product.price}</td>
        </tr>
        ));
    };

    const handleSearchPricelist = (event) => {
        const query = event.target.value.toLowerCase();
        const filtered = allProducts.filter(product => product.name.toLowerCase().includes(query));
        setFilteredProducts(filtered);
        setCurrentPage(1);
    };

    const handlePageChange = (page) => {
        if (page >= 1 && page <= Math.ceil(filteredProducts.length / itemsPerPage)) {
        setCurrentPage(page);
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


                {/* price list content */}
                <main className="main-content">
                    <div className="container mb-5">
                        <header className="d-flex justify-content-between align-items-center">
                        <h1 id="titleH3" className="h3">Pricelist</h1>
                        <input
                            type="text"
                            className="form-control w-25"
                            placeholder="Search products..."
                            onInput={handleSearchPricelist}
                        />
                        </header>

                        <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead className="thead-dark">
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Status</th>
                                <th scope="col" className="text-right">SRP</th>
                            </tr>
                            </thead>
                            <tbody>
                            {displayProducts()}
                            </tbody>
                        </table>
                        </div>

                        <div className="d-flex justify-content-center align-items-center mt-4" id='buttonRadius'>
                        <button onClick={() => handlePageChange(1)} className="btn btn-outline-secondary mx-2">First</button>
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            style={{ fontWeight: 'bold' }}
                            className="btn btn-outline-secondary mx-2"
                            disabled={currentPage === 1}
                        >
                            &lt;&lt;
                        </button>
                        <div className="input-group mx-2" style={{ width: '120px' }}>
                            <input
                            type="number"
                            className="form-control"
                            min="1"
                            value={currentPage}
                            onChange={(e) => handlePageChange(Number(e.target.value))}
                            />
                            <div className="input-group-append">
                            <button
                                className="btn btn-outline-primary mx-2"
                                onClick={() => handlePageChange(currentPage)}
                            >
                                Go
                            </button>
                            </div>
                        </div>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            style={{ fontWeight: 'bold' }}
                            className="btn btn-outline-secondary mx-2"
                            disabled={currentPage >= Math.ceil(filteredProducts.length / itemsPerPage)}
                        >
                            &gt;&gt;
                        </button>
                        <button
                            onClick={() => handlePageChange(Math.ceil(filteredProducts.length / itemsPerPage))}
                            className="btn btn-outline-secondary mx-2"
                        >
                            Last
                        </button>
                        </div>
                    </div>
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

export default PricelistPage; // filename
