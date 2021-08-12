import React from 'react'
import {Link} from 'react-router-dom'

export const Header: React.FunctionComponent = () => {
    return <nav className="green darken-2">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">Home</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contacts">Contacts</Link></li>
                    </ul>
                </div>
            </nav>
};