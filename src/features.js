import React from "react";

function Features(){
    return(
        <div className="row ft">
              <div className="col-md-12">
            <div className="features">
           <p className="para1">Featured Case Study</p>
            <h2>Design startup movement</h2>
            <p className="para2">In vel varius turpis, non dictum sem, Aenean in efficitur ipsum, in<br/>egestas ipsum. Mauris in mi ac tellus.</p>
            </div>
        <div className="row frts">
            <div className="col-md-3 count">
                <i class="fa fa-trophy" aria-hidden="true" style={{color:"white",fontSize:"30px"}}></i>
                <h1>15+</h1>
                <p>Years of operation</p>
            </div>
            <div className="col-md-3 count">
            <i class="fa fa-paper-plane" aria-hidden="true" style={{color:"white",fontSize:"30px"}}></i>
                <h1>360+</h1>
                <p>Projects delivered</p>
            </div>
            <div className="col-md-3 count">
            <i class="fa fa-users" aria-hidden="true" style={{color:"white",fontSize:"30px"}}></i>
                <h1>600+</h1>
                <p>Specialist</p>
            </div>
            <div className="col-md-3 count">
            <i class="fa fa-apple" aria-hidden="true" style={{color:"white",fontSize:"30px"}}></i>
                <h1>64+</h1>
                <p>Years of operation</p>
            </div>
        </div>
        </div>
        </div>
    );
}
export default Features;