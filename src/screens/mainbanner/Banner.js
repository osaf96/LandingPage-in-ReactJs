import React from 'react';
import './Banner.css';
import logo from '../../assets/images/logo.png';

const Banner = () => {
    return ( 
        <section className="header">
            <div className="navbar">
                <div className="logo_section">
                    <img src={logo} alt="logo"/>
                    <h3>Jamali</h3>
                </div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Capelli</a></li>
                    <li><a href="#">Viso</a></li>
                    <li><a href="#">Depilozione</a></li>
                    <li><a href="#">Corpo</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className="login_section">
                    <p><i className="fas fa-phone-alt"></i> 8 832 - 334 - 4599</p>
                    <p><i className="fas fa-user-circle fx-2"></i></p>
                    <p>EN <i className="fas fa-angle-down"></i></p>
                </div>
            </div>
            <div className="main_text">
                <h1>Book your halal treatment</h1>
                <p>Morbi mollis vestibulum sollicitudin. Nunc in eros a justo facilisis rutrum. 
                    Aenean id ullamcorper libero. Vestibulum imperdiet nibh vel magna .
                </p>
            </div>
        </section>  
    );
}

export default Banner;