import React from 'react';
import {FcDribbble,FcAdvertising,FcOldTimeCamera,FcMultipleDevices,FcDebt,FcPositiveDynamic} from 'react-icons/fc';

function Services(){
    return(
         
        <div className="row services">
            <div className='col-md-12'>
         <p className="para1">What We Can Do For You</p>
         <h2>Services we can help<br/>You with</h2>
         <p className="para2">Nulla facillisi.Nullam in magna id dolor blandit rutrum<br/>eget vulputate augue sed eu imperdiet.</p>
         
         <div className="row allservices">
            <div className="col-md-4 box">
            <FcDribbble style={{color:'#FFB200',fontSize:"65px"}}/><h4>Design</h4>
                <p>Simply drag and drop photos and<br/> videos  into your workspace to<br/> automatically add them to your<br/>  collab cloud library.</p>
                <h5>____find out more</h5>
            </div>
            <div className="col-md-4 box">
            <FcMultipleDevices style={{fontSize:"75px"}}/><h4>Development</h4>
                <p>Simply drag and drop photos and<br/> videos  into your workspace to<br/> automatically add them to your<br/>  collab cloud library.</p>
                <h5>____find out more</h5>
            </div>
            <div className="col-md-4 box">
            <FcAdvertising style={{fontSize:"75px"}}/><h4>Online marketing</h4>
                <p>Simply drag and drop photos and<br/> videos  into your workspace to<br/> automatically add them to your<br/>  collab cloud library.</p>
                <h5>____find out more</h5>
            </div>
        </div>
        <div className="row allservices">
            <div className="col-md-4 box">
            <FcDebt  style={{fontSize:"75px"}}/><h4>Business</h4>
                <p>Simply drag and drop photos and<br/> videos  into your workspace to<br/> automatically add them to your<br/>  collab cloud library.</p>
                <h5>____find out more</h5>
            </div>
            <div className="col-md-4 box">
            <FcPositiveDynamic style={{fontSize:"75px"}}/><h4>Technology</h4>
                <p>Simply drag and drop photos and<br/> videos  into your workspace to<br/> automatically add them to your<br/>  collab cloud library.</p>
                <h5>____find out more</h5>
            </div>
            <div className="col-md-4 box">           
            <FcOldTimeCamera style={{fontSize:"75px"}}/><h4>Content strategy</h4>
                <p>Simply drag and drop photos and<br/> videos  into your workspace to<br/> automatically add them to your<br/>  collab cloud library.</p>
                <h5>____find out more</h5>
            </div>
        </div> 
        </div>
    </div>
    
        
    );
}
export default Services;