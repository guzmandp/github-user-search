import React from 'react';
import {Link} from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
    <nav className="row main-nav">
        <div className="col-2" >
            <Link to = "/" >
                <h2 className="nav-tex"> Bootcamp DevSuperior</h2>
            </Link>
        </div>
    </nav>

);

export default Navbar;
