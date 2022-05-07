import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../../images/logo.jpg';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <div className={sidebar ? 'header active' : 'header'}>
                <div>
                    <Link to="/"><img src={logo} alt="Logo"/></Link>
                </div>
                {
                    sidebar ? (
                            <Link to='#' className='navbar'>
                                <CloseIcon onClick={showSidebar} />
                            </Link>
                        ) : (
                            <Link to='#' className='navbar'>
                                <DehazeIcon onClick={showSidebar} />
                            </Link>
                        )
                }
            <ul>
                <div>
                    <li onClick={showSidebar} ><Link to="/" >Home</Link></li>
                    <li onClick={showSidebar} ><Link to="/products">Products</Link></li>
                    <li onClick={showSidebar} ><Link to="/contact">Contact</Link></li>
                    <li onClick={showSidebar} ><Link to="/about">About</Link></li>
                </div>
                <div>
                    <li onClick={showSidebar} ><Link to="/search">Search</Link></li>
                    <li onClick={showSidebar} ><Link to="/login">Login</Link></li>
                </div>
            </ul>
        </div>
    );
};

export default Header;
