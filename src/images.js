import React from "react";
import Img1 from "./images/creative.jpg";
import Img2 from "./images/digital1.jpg";
import Img3 from "./images/digital agency.jpg";
import Img4 from "./images/plan.webp";
import Img5 from "./images/social.jpg";
import Img6 from "./images/web.webp";

function Images(){
    return(
        <div className="row">
            <div className="col-md-12">
        <div className="imageheader">
        <p>Our Project</p>
        <h2>Some of our<br/>finest work.</h2>
        <ul className="imageheaderul">
            <li>All Works</li>
            <li>Branding</li>
            <li>Mobile</li>
        </ul>
        
        <div className="row image">
            <div className="col-md-6 border">
                <img src={Img1} className="Img"/>
                <h2>Creative  Agency</h2>
                <p>Branding, Website, App</p>
            </div>
            <div className="col-md-6 border">
                <img src={Img2} className="Img"/>
                <h2>Digital Marketing</h2>
                <p>Logo, Website, Mobile</p>
            </div>
        </div>
        <div className="row image">
            <div className="col-md-6 border">
                <img src={Img3} className="Img"/>
                <h2>Digital Agency</h2>
                <p>Website, UI/UX</p>
            </div>
            <div className="col-md-6 border">
                <img src={Img4} className="Img"/>
                <h2>Plan Management</h2>
                <p>Branding, Website, Mobile</p>
            </div>
        </div>
        <div className="row image">
            <div className="col-md-6 border">
                <img src={Img5} className="Img"/>
                <h2>Social Engagement</h2>
                <p>Design, Development</p>
            </div>
            <div className="col-md-6 border">
                <img src={Img6} className="Img"/>
                <h2>Web Application</h2>
                <p>Logo, Webapp, Mobile</p>
            </div>
        </div>
        </div>
        </div>
        </div>
        
       
    );
}
export default Images;