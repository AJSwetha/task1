import React from "react";

function Pricing(){
    return(
        <div className="row pricing">
            <div className="col-md-12">
            <p className="para1">Pricing Plan</p>
            <h2>We've builts solutions for...</h2>
            <p className="para2">Flexible pricing options for freelancers and design teams.</p>
            <button className="btnout"><button className="btnin">Billed Yearly</button>Billed Monthly</button>
            <div className="row pricrow">
                <div className="col-md-4 form">
                <h2>Professional</h2>
                <p className="para">A beautiful, simple Website</p>
                <h1>$199.99</h1>
                <button>Get started today</button>
                <div className="iconpara">
                <p><i class="fa fa-check" aria-hidden="true"></i>10 Pages Responsive Website</p>
                <p><i class="fa fa-check" aria-hidden="true"></i>5 PPC Campaigns </p>
                <p><i class="fa fa-check" aria-hidden="true"></i>10 SEO Keywords</p>
                <p><i class="fa fa-check" aria-hidden="true"></i>5 Facebook Complaigns</p>
                <p><i class="fa fa-check" aria-hidden="true"></i>2 Video Complaigns</p>
                </div>
                </div>
                <div className="col-md-4 form">
                <h2>Standard</h2>
                <p className="para">Small Team</p>
                <h1>$219.99</h1>
                <button>Get started today</button>
                <div className="iconpara">
                <p><i class="fa fa-check" aria-hidden="true"></i>20 Pages Responsive Website</p>
                <p><i class="fa fa-check" aria-hidden="true"></i>Unlimited PPC Campaigns </p>
                <p><i class="fa fa-check" aria-hidden="true"></i>Unlimited SEO Keywords</p>
                <p><i class="fa fa-check" aria-hidden="true"></i>Unlimited Facebook Complaigns</p>
                <p><i class="fa fa-check" aria-hidden="true"></i>Unlimited Video Complaigns</p>
                </div>
                </div>
                <div className="col-md-4 form">               
                <h2>Ultimate</h2>
                <p className="para">Large Team</p>
                <h1>$199.99</h1>
                <button>Get started today</button>
                <div className="iconpara">
                <p><i class="fa fa-check" aria-hidden="true"></i>50 Pages Responsive Website</p>
                <p><i class="fa fa-check" aria-hidden="true"></i>Unlimited PPC Campaigns </p>
                <p><i class="fa fa-check" aria-hidden="true"></i>Unlimited SEO Keywords</p>
                <p><i class="fa fa-check" aria-hidden="true"></i>Unlimited Facebook Complaigns</p>
                <p><i class="fa fa-check" aria-hidden="true"></i>Unlimited Video Complaigns</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}
export default Pricing;