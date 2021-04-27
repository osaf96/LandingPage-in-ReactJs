import React from 'react';
import './AppDownload.css';
import image from '../../../assets/images/image2.png';
import playstore from '../../../assets/images/google-play.png';

const AppDownload = () => {
    return ( 
        <div className="app-download">
            <div className="desc"> 
                <h1>Download Jamali APP</h1>  
                 
                <p>
                    Donec maximus placerat tempor. Class aptent taci sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibus
                </p> 
                {/* <img className="playstore-img" src={playstore} alt="stores"/> */}
                 <a className="btn">Download</a>
            </div>
            <div className="img">
                <img src={image} alt="image"/>
            </div>
        </div>
    );
}

export default AppDownload;