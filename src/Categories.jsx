import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import './Categories.css';
import AOS from 'aos'; // Correctly import AOS
import 'aos/dist/aos.css'; // Import the AOS CSS file
import axios from 'axios';


function Categories() { //file name
    const [showModal, setShowModal] = useState(false); // Modal visibility state
    const toggleModal = () => setShowModal(!showModal); // Toggle modal visibility
    const closeModal = () => setShowModal(false); // Close modal

    const handleSearch = () => {
        const query = document.getElementById('searchInput').value;
        console.log('Search Query:', query); // You can replace this with actual search functionality
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


            {/*Categories item Section*/}
            <div>
            {/* Categories Section Header */}
            <header>
                <h3 id="titleH3">Categories</h3>
            </header>
            {/* Categories Grid Section */}
            <section className="container mt-5">
                <div className="row">
                {/* Category Item 1 */}
                <article className="col-md-4 mb-4 col-6">
                    <div className="category-item">
                    <a href="" className="d-block">
                        <img src="200x200.png" alt="Category 1" className="img-fluid" />
                        <h4>Category 1</h4>
                    </a>
                    </div>
                </article>
                {/* Category Item 2 */}
                <article className="col-md-4 mb-4 col-6">
                    <div className="category-item">
                    <a href="#" className="d-block">
                        <img
                        src="https://via.placeholder.com/200"
                        alt="Category 2"
                        className="img-fluid"
                        />
                        <h4>Category 2</h4>
                    </a>
                    </div>
                </article>
                {/* Category Item 3 */}
                <article className="col-md-4 mb-4 col-6">
                    <div className="category-item">
                    <a href="#" className="d-block">
                        <img
                        src="https://via.placeholder.com/200"
                        alt="Category 3"
                        className="img-fluid"
                        />
                        <h4>Category 3</h4>
                    </a>
                    </div>
                </article>
                {/* Category Item 4 */}
                <article className="col-md-4 mb-4 col-6">
                    <div className="category-item">
                    <a href="#" className="d-block">
                        <img
                        src="https://via.placeholder.com/200"
                        alt="Category 4"
                        className="img-fluid"
                        />
                        <h4>Category 4</h4>
                    </a>
                    </div>
                </article>
                </div>
            </section>
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

export default Categories; //filename
