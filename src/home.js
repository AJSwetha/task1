import React from 'react';
import Aboutus from "./aboutus";
import Clients from './clients';
import Content from "./content";
import Features from './features';
import Footer from './footer';
import Header from "./header"
import Images from './images';
import Pricing from './pricing';
import Project from './project';
import Services from './services';
import Stories from './stories';
import Testimonial from './testimonial';

function Home(){
    return(
        <div className='container-fluid'>
    <Header/>
    <Content/>
    <Services/>
    <Aboutus/>
    <Images/>
    <Features/>
    <Testimonial/>
    <Pricing/>
    <Clients/>
    <Stories/>
    <Project/>
    <Footer/>
    </div>
    )
}
export default Home;