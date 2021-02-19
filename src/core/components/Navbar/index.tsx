import React from 'react';
import {Link} from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
    <header className="row main-nav">
        <div className="col-2" >
            <Link to = "/" >
                <h2 className="nav-tex"> Bootcamp DevSuperior</h2>
            </Link>
        </div>
    </header>

);

export default Navbar;
