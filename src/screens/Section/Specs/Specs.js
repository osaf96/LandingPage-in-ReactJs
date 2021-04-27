import React from 'react';
import './Specs.css'; 

const data = [  
    { icon: "far fa-window-maximize fa-2x", ratingTag:"Smart Price", desc: "Just book last minute, or off-peak"},
    { icon: "far fa-credit-card fa-2x", ratingTag:"Book 24/7", desc: "From bed, or the bus"},
    { icon: "fas fa-map-marker-alt fa-2x", ratingTag:"Choice of top-rated salons", desc: "Thousands of venues(and reviews)"}

]
const Specs = () => {
    return ( 
        <div className="specs container">
           {
           data.map((c,i)=>
                <div className="specs-item" key={i}>
                    <div className="ic-div"> 
                        <i className={c.icon}></i>
                    </div>  
                    <h5>{c.ratingTag}</h5>  
                    <p>{c.desc}</p> 
                </div> 
            ) 
               
           }
        </div>
    );
}

export default Specs;