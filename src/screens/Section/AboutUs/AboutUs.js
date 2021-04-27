import React from 'react';
import './AboutUs.css';
import image from '../../../assets/images/image.png';

const AboutUs = () => {
    return ( 
        <div className="aboutus">
            <div className="desc">
                <p>best muslim beauty booking online </p>  
                <h1>JAMALI</h1> 
                <h1>Cosa facciamo…</h1> 
                <p>Morbi mollis vesbulum sollicitudin. Nunc in eros a justo facilisis rutrum.
                    Aenean id ullamcorper libero. Vesbulum imperdiet nibh vel magna lacinia
                    ultrices. Tortor nec commodo ultricies, <span>lectus nisl facilisis</span>  enim, vitae viverra
                    urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem ncidunt
                    id.
                    </p>  
                    <p>
                        Donec maximus placerat tempor. Class aptent taci sociosqu ad litora
                        torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibus
                    </p>
                    <a>Read More</a>
                    
                 
            </div>
            <div className="img">
                <img src={image} alt="image"/>
            </div>
        </div>
    );
}

export default AboutUs;