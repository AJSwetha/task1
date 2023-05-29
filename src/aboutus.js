import React from 'react';

function Aboutus(){
    return(
    
    <div className="row aboutus">
        <div className='col-md-6'>
       <p className='para'>About Us</p>
       <h1>We do design,code &<br/> develop.</h1>
       <p>Design Code means a set of building design criteria to be followed<br/> 
       when the Applicants submit a Reserved Matters Application or<br/>
       Detailed Planning Application for each plot.</p>
       <p> This coding phase of software development is concerned with<br/> 
       software translating design specification into the source code.</p> 
        </div>
        <div className='col-md-6'>
            <form>
                <h2>Get a free Keystroke<br/>quote now</h2>
                <label>Name</label><br/>
                <input type={'text'}/><br/>
                <label>Email</label><br/>
                <input type={'text'}/><br/>
                <label>PhoneNo</label><br/>
                <input type={'text'}/>
                <button className='btn btn-primary btn'>Get free quote</button>
            </form>
        </div>
    </div>
         
    );
}
export default Aboutus;