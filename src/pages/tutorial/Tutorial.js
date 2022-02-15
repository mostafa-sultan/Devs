import React from 'react';
import Content from '../../component/content/Content';
import Quote from '../../component/content/Quote';
import Recomended from '../../component/content/Recomended';
import Navbar from '../../component/navbar/Navbar';
import './Tutorial.css';



const recomendSec = () => {
    if (window.innerWidth < 768) {
        return null;
    }
    return (
        <div>
            <div className="p-4">
                <Recomended />
            </div>
            <div className="p-3">
                <h4 className="fst-italic">Follow us</h4>
                <ol className="list-unstyled">
                    <li><a href="https://github.com/mostafa-sultan" target="_blank">GitHub</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="https://www.quora.com/profile/Mostafa-Soltan-3/" target="_blank">quora</a></li>
                </ol>
            </div>
        </div>
    );
};
const Tutorial = () => {
    console.log(window.innerWidth);
    return (
        <>
            <Navbar />
            <main className="container mt-9">
                <br /> <br /> <br />
                <div className="row g-5 " id="content">
                    <div className="col-md-4 ">
                        <div className="position-sticky" style={{ top: '5rem' }}>

                            <Quote /> 

                            {recomendSec()}
                        </div>
                    </div> 

                    <div className="col-md-8 ">
                        <Content />
                    </div> 
                </div>
            </main>

        </>
    );
}

export default Tutorial;
