import React from 'react';
import web from "./images/website.png";

function Content(){
    return(
   
    <div className="row content">
        <div className="col-md-6">
            <h1>Build beautiful<br/> website & mobile<br/> apps.</h1>
            <p>Create live segments and target the right people for messages<br/> based on their behaviors. </p>
            <button class="clickbtn">Get Started</button>
        </div> 
        <div className="col-md-6">
            <img src={web} className="contentimg"/>
        </div>      
    </div>
   
      
    );
}
export default Content;