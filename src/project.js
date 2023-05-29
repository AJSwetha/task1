import React from "react";
import develop from "./images/webimg.png";

function Project(){
    return(
        <div className="row project">
            <div className="col-md-12">
            <p className="para1">Let's Work Together</p>
            <h2>Need a successful<br/>project?</h2>
            <button>Estimate project</button><br/>
            <img src={develop} alt="" />
        </div>
        </div>
    );
}
export default Project;