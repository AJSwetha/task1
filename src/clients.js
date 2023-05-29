import React from "react";

function Clients(){
    return(
        <div className="row clients">
            <div className="col-md-12"></div>
            <p className="para1">Top Clients</p>
         <h2>We've build solutions<br/>for...</h2>
         <p className="para2">Design anything from simple icons to fully featured<br/>Websites and applications.</p>
        <div className="row clnticon">
            <div className="col-md-3">
            <i class="fa fa-leaf" aria-hidden="true"></i>
            <h3>Wavey</h3>
            </div>
            <div className="col-md-3">
            <i class="fa fa-gg-circle" aria-hidden="true"></i>
            <h3>goldhs</h3>
            </div>
            <div className="col-md-3">
            <i class="fa fa-pagelines" aria-hidden="true"></i>
            <h3>Lotie</h3>
            </div>
            <div className="col-md-3">
            <i class="fa fa-opera" aria-hidden="true"></i>
            <h3>Triverse</h3>
            </div>
        </div>
        <div className="row clnticon">
            <div className="col-md-3">
            <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
            <h3>Triverse</h3>
            </div>
            <div className="col-md-3">
            <i class="fa fa-xing" aria-hidden="true"></i>
            <h3>Nexou</h3>
            </div>
            <div className="col-md-3">
            <i class="fa fa-linode" aria-hidden="true"></i>
            <h3>Emploi</h3>
            </div>
            <div className="col-md-3">
            <i class="fa fa-glide-g" aria-hidden="true"></i>
            <h3>Emploi</h3>
            </div>
        </div>
        </div>
    );
}
export default Clients;