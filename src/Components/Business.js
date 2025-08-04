import React, { Component } from 'react'
import "./Business.css"
import businesslogo from "./capterra-png-rendition.webp"
import Businesslogo1 from "./capterra-png-rendition.webp"
import Healthimg from "./healthcare.jpg"
export class Business extends Component {
    render() {
        return (
            <div className='business-container'>
                <p className='business-heading'>
                    <strong>Loved by over 400,000 businesses of all sizes</strong>
                </p>
                <p className='business-stories'>See all customer stories <i class="fa-solid fa-arrow-right"></i></p>
                
                <div className="business-logos">
                    <img className='business-logo1' src={businesslogo} alt="" style={{height:'50px'}} />
                     <img className='business-logo1' src={businesslogo} alt="" style={{height:'50px'}} />
                      <img className='business-logo1' src={businesslogo} alt="" style={{height:'50px'}} />
                       <img className='business-logo1' src={businesslogo} alt="" style={{height:'50px'}} />
                </div>
              
                <div className="health-container">
                    <div className="health-left">
                       <div className='health-img'>
                         <img src={Healthimg} alt="" style={{height:'400px'}}/>
                       </div>
                         <button className='story-btn rounded-pill'>Get their story</button>
                    </div>
                    
  <div className='ring-card'>
                    <div className="health-right">
                        <p className='right-firsttext'>RingEx drives smarter Growth, <br />
                        collaboration, and cost savings <br />
                        for carbon Health
                        </p>
                        <div className='agents-text'>
                            <p ><strong className='agent-strong'>50%</strong><br />
                            annual savings</p>
                            <p ><strong className='agent-strong'>8hrs</strong><br />
                            saved onboarding new agents</p>
                        </div>
                        <hr />
                        <pre className='business-lasttext'><strong className='product-text'>product used:</strong> <span>business phone</span> <span>contact center</span> RingSense</pre>
                    </div>
                    </div>
                </div>
                <p className='business-text1'><strong>An award-winning platform, trusted by customers around the world</strong></p>
                <div className="business-logos">
                    
                    <img src={Businesslogo1} alt="" style={{height:'60px'}} />
                    <img src={Businesslogo1} alt="" style={{height:'60px'}} />
                    <img src={Businesslogo1} alt="" style={{height:'60px'}} />
                    <img src={Businesslogo1} alt="" style={{height:'60px'}} />
                    <img src={Businesslogo1} alt="" style={{height:'60px'}} />
                    <img src={Businesslogo1} alt="" style={{height:'60px'}} />
                    <img src={Businesslogo1} alt="" style={{height:'60px'}} />
                    <img src={Businesslogo1} alt="" style={{height:'60px'}} />
                    <img src={Businesslogo1} alt="" style={{height:'60px'}} />
                    <img src={Businesslogo1} alt="" style={{height:'60px'}} />
                </div>
            </div>
        )
    }
}

export default Business
