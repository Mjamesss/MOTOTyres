import React from 'react';
import './App.css';

function LoginModal({ show, onClose }) {
    if (!show) return null; // Don't render modal if show is false

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    <button onClick={onClose} className="close-btn">X</button>
                    <h2>Login</h2>
                </div>
                <div className="modal-body">
                    <input type="text" placeholder="Username" className="modal-input" />
                    <input type="password" placeholder="Password" className="modal-input" />
                </div>
                <div className="modal-footer">
                    <button onClick={onClose} className="close-btn">Close</button>
                    <button className="submit-btn">Submit</button>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;
