import './Home.css'
import React, { Fragment } from 'react'
import About from '../layout/About/About'
import Product from '../Product/Products'
import Talk from '../layout/Talk/Talk'
import Services from '../layout/Services/Services'
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Footer from '../layout/Footer/Footer'


const Home = () => {
    return (
        <Fragment>
                <div className="hero">
                    <div className="banner">
                    <h1>Authentic Art is the</h1>
                    <p>leading destination to find & showcase...</p>
                    <p>creative work and home to the world's best designs.</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#111633" fill-opacity="1" d="M0,224L48,218.7C96,213,192,203,288,208C384,213,480,235,576,229.3C672,224,768,192,864,176C960,160,1056,160,1152,165.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                    </div>
                    <Product/>
                    <About/>
                <Services />
                <Talk />
                <Footer/>
                <MessengerCustomerChat
                    pageId="101548111648661"
                    appId="400921818046298"
                    />
                </div>
        </Fragment>
    );
};

export default Home;
