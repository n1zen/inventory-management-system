import { PlusIcon } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

import '../styles/components/NavBar.css';

const NavBar = () => {
    return (
        <header className="header-container">
            <div className="header-content">
                <div className="header-title">
                    <h1 className="header-title-text title-1">Inventory Management System</h1>
                    <h1 className="header-title-text title-2">IMS</h1>
                </div>
                <div className="nav-container">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/create-product" className="nav-link">
                                <PlusIcon className="nav-link-icon"/>
                                <span className="nav-link-text">Create Product</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default NavBar