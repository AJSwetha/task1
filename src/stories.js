import React from "react";
import col1 from "./images/phnmarketing.jpg";
import col2 from "./images/col2.webp";

function Stories(){
    return(
        <div className="row stories">
            <div className="col-md-12">
            <p className="para1">What's Going On</p>
            <h2 className="head">Latest Stories</h2>
            <p className="para2">News from Abstrak And Around The World Of Web Design And<br/>Complete Solution of online Digital Marketing</p>
            <div className="row stry">
            <div className="col-md-3">
            <img src={col1} alt="" />
            </div>         
            <div className="col-md-3">
            <h2>Follow your own design<br/>Process, whatever do Yo...</h2>
            <p>Want to know the one thing that every<br/>successfull digital marketer does first<br/>ensure they get the biggest return on...</p>
            <h5>Learn More___</h5>
            </div>           
            <div className="col-md-3">
            <img src={col2} alt="" />
            </div>
            <div className="col-md-3">
            <h2>How To Use a Remarketing<br/>Strategy To Get More</h2>
            <p>Want to know the one thing that every<br/>successfull digital marketer does first<br/>ensure they get the biggest return on...</p>
            <h5>Learn More___</h5>
            </div>           
            </div>
            </div>
        </div>
    );
}
export default Stories;