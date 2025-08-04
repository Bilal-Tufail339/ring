import React, { Component } from 'react'
import "./Industry.css"
import Healthcare from "./healthcare.jpg"
import ringlogo from "./ring-logo.png"
export class Industry extends Component {
    render() {
        return (
            <div className='industry-container'>
            <p className='industry-heading'><strong>Solutions for every industry</strong></p>
                <nav>
                    <button className='rounded-pill healthbtn'>Healthcare</button>
                    <button className='rounded-pill industrybtn'>Financial Serivce</button>
                    <button className='rounded-pill industrybtn'>Education</button>
                    <button className='rounded-pill industrybtn'>Retail</button>
                    <button className='rounded-pill industrybtn'>Government</button>
                </nav>
                <div className="industry-pic">
                    <div className="pic">
                        <img src={Healthcare} alt="" style={{height:'400px'}}/>
                    </div>
                    <div className="industry-text">
                   
                            <p className='smart-text'><strong>Create smart, secure experiences <br />
                        for patients, staff, and partners.</strong></p>
                        <pre className='learn-text'>Learn more <i class="fa-solid fa-arrow-right learn-icon"></i></pre>
                    
                    <hr />
                   <div className='d-flex ring-logo'>
                     <img src={ringlogo} alt=""  style={{height:'30px'}}/>
                    <p><strong>42% increase in HCAHPS <br />patient satisfaction</strong></p>
                         </div>
                  
                   </div>
                </div>

                
            </div>
        )
    }
}

export default Industry
