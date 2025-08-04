import React, { Component } from 'react'
import "./Main.css"
import Mainimg from "./img-ring.webp"
import lineimg1 from "./line-pic.webp"
import lineimg2 from "./line2-pic.webp"
import logoai from "./ai-icon-png-rendition.webp"
export class Main extends Component {
    render() {
        return (
            <>
            <div className='main-container1'>
                <div>
                    <img className='rounded-top rounded-bottom' src={Mainimg} alt="" style={{height:'350px',width:'350px'}} />
                </div>
                <div className='text-btn'>
                    <p className='ai-text'>AI for everyone</p>
                    <p className='meet-text'> Meet your AI icon <img src={logoai} alt="" style={{height:'30px'}} /><span className='aiasistent'> AI Assistant</span></p>
                    <p className='paragraph'>Make interactions smarter with live call notes, personalised AI insights, and seamless message writing <br /> and translation. Built with privacy by design, RingEX AI Assistant transforms productivity, enhances team <br /> effectiveness, and automates tasks across everyday workflows.</p>
                    <div className='container-btnwatch'>
                        <button className='rounded-pill watch-btn '><i class="fa-solid fa-circle-play"></i> watch video</button>
                        <button className='rounded-pill watch-btn '>learn more
                            
                        </button>
                    </div>
                </div>
                
               </div>
               <div className='main-container-pic'>
                 <div className="line-pic">
                    <div className="first-img">
                   
                        <img className=' rounded-top-5 rounded-bottom-5' src={lineimg1} alt="" style={{height:'320px'}} />

                        <p className='main-text'><strong>Gartner® names RingCentral a Magic Quadrant™ <br />Leader for the 10th year in a row</strong></p>
                        <p className='main-firsttext'>RingCentral is proud to be recognised as a 2024 Gartner Magic Quadrant Leader for  <br /> UCaaS worldwide.</p>
                        <button className='rounded-pill report-btn'>Get the report</button>

                  </div>
                    
                   <div className='second-img'>
                     <img className=' rounded-top-5 rounded-bottom-5' src={lineimg2} alt=""  style={{height:'320px'}} />
                     <p className='main-text'><strong>Synergy names RingCentral the #1 cloud <br /> communications provider worldwide</strong></p>
<p className='main-secondtext'>RingCentral was named the market leader based on revenue and subscriber seats by <br /> Synergy Research, an independent market research firm.</p>
<button className='learn-btn rounded-pill'>Learn more</button>
                   </div>

                    </div>
                </div>
                </>
        )
    }
}

export default Main
