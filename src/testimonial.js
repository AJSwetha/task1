import React from "react";
import logo1 from "./images/google.png";
import logo2 from "./images/instagram.png";
import logo3 from "./images/facebook.png";
import pic1 from "./images/pic1.jpg";
import pic2 from "./images/pic2.jpg";
import pic3 from "./images/pic3.jpg"

function Testimonial(){
    return(
        <div className="row testimonial">
            <div className="col-md-12">
            <p className="para1">Testimonial</p>
            <h2>From getting started</h2>
            <p className="para2">Nulla facillisi.Nullam in magna id dolor blandit rutrum eget vulputate<br/>augue sed eu imperdiet.</p>
            <div className="row tstmol">
            <div className="col-md-4 test">
                <img src={logo1} alt=""></img>
                <p>"Donec metus lorem, vulputate at<br/>sapien sit amet, auctor iaculis lorem. In<br/>vel hendrerit nisi. Vestibulum eget risus<br/>velit."</p>
                <div className="row">
                    <div className="col-md-2 pics">
                    <img src={pic2} alt="" className="image"/>
                    </div>
                    <div className="col-md-10 pictxt">
                        <h3>Darrell Steward</h3>
                        <p>Executive Chairman</p>
                    </div>
                </div>
                </div>
        
            <div className="col-md-4 test">
                <img src={logo2}></img>
                <p>"Donec metus lorem, vulputate at<br/>sapien sit amet, auctor iaculis lorem. In<br/>vel hendrerit nisi. Vestibulum eget risus<br/>velit."</p>
                <div className="row">
                    <div className="col-md-2 pics">
                    <img src={pic1} alt="" className="image"/>
                    </div>
                    <div className="col-md-10 pictxt">
                        <h3>Floyd Miles</h3>
                        <p>Executive Chairman</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 test">
                <img src={logo3} alt=""></img>
                <p>"Donec metus lorem, vulputate at<br/>sapien sit amet, auctor iaculis lorem. In<br/>vel hendrerit nisi. Vestibulum eget risus<br/>velit."</p>
                <div className="row">
                    <div className="col-md-2 pics">
                    <img src={pic3} alt="" className="image"/>
                    </div>
                    <div className="col-md-10 pictxt">
                        <h3>Savannah Nguyend</h3>
                        <p>Executive Chairman</p>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
}
export default Testimonial;