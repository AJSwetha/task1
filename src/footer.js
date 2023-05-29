import React from "react";

function Footer(){
    return(
        <>
        <div className="row footer">
        <div className="col-sm-12">
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-pinterest-p" aria-hidden="true"></i>
            <i class="fa fa-linkedin-square" aria-hidden="true"></i>           
            <i class="fa fa-instagram" aria-hidden="true"></i>           
            <i class="fa fa-vimeo" aria-hidden="true"></i>            
            <i class="fa fa-dribbble" aria-hidden="true"></i>
            <i class="fa fa-behance" aria-hidden="true"></i>
        </div>
        </div>
            <div className="row ftr">
                <div className="col-md-6 column">
                    <div className="row">
                        <div className="col-md-12">
                        <h2>Get in touch!</h2>
                        <p>Fusce varius, dolor tempor interdum tristique, dui urna bib<br/>endum magna, ut ullamcorper purus</p>
                        <div className="row ftrbtn">
                            <div className="col-md-6">
                            <p><i class="fa fa-envelope" aria-hidden="true" style={{color:"rgb(128, 123, 123)",fontSize:"15px",padding:"5px"}}></i>Email address</p>
                            </div>
                            <div className="col-md-6">
                            <i class="fa fa-envelope" aria-hidden="true" style={{color:" rgb(8, 183, 90)",fontSize:"15px",padding:"5px"}}></i><button>Subscribe</button></div>  
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row ftrlist">
                            <div className="col-md-6">
                                <h5>Services</h5>
                                <ul>
                                    <li>Design</li>
                                    <li>Development</li>
                                    <li>Online marketing</li>
                                    <li>Bussiness</li>
                                    <li>Technology</li>
                                    <li>Content strategy</li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h5>Resourses</h5>
                                <ul>
                                    <li>Blog</li>
                                    <li>Case studies</li>
                                    <li>Portfolio</li>
                                    </ul>
                            </div>
                            <div className="col-md-3">
                                <h5>Support</h5>
                                <ul>
                                    <li>Contact</li>
                                    <li>Privacy policy</li>
                                    <li>Terms of use</li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
        </>       
            
        
    );
}
export default Footer;