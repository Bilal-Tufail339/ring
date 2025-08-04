import React, { Component } from 'react'
import "./Ringcard.css"
import Cardimg1 from "./cardimg-1.webp"
import Cardimg2 from "./cardimg-2.jpg"
import Cardimg3 from "./cardimg-3.jpg"
export class Ringcard extends Component {
    render() {
        return (
      
      <div className='card-container'>
      <div>  <strong className='card-heading'>The leader in AI communications</strong></div>
                <div className="card-group w-90%">
                  <div className='responsive-card'>
  <div className="card h-90%">
    <img src={Cardimg1} className="card-img-top rounded-top rounded-bottom cardimg-1" alt="..." style={{height:'250px',width:'85%'}}/>
    <div className="card-body">
      <h5 className="card-title">Thought Leadership</h5>
      <p className="card-text1">How RingCentral's agentic AI is <br /> redefining enterprise intelligence

</p>
      <p className="card-text"><small>Explore our voice-first approach to AI with Kira Makagon, RingCentral President & COO.</small></p>
    </div>
  </div>
  <div className="card h-90%">
    <img src={Cardimg2} className="card-img-top rounded-top rounded-bottom" alt="..." style={{height:'250px',width:'85%'}}/>
    <div className="card-body">
      <h5 className="card-title">Research Report</h5>
      <p className="card-text1">RingSense AI named Overall Best of <br /> Enterprise Connect 2024

</p>
      <p className="card-text"><small >See how RingSense AI is setting the stage for a new era of AI at work.</small></p>
    </div>
  </div>
  <div className="card h-50%">
    <img src={Cardimg3} className="card-img-top rounded-top rounded-bottom cardimg-3" alt="..." style={{height:'250px',width:'85%'}}/>
    <div className="card-body">
      <h5 className="card-title">Thought Leadership</h5>
      <p className="card-text1">Metrigy explores how AI is changing <br /> employee and customer experiences

</p>
      <p className="card-text"><small>Metrigy & RingCentral partner to see how leading companies use AI to <br /> improve efficiencies and boost customer satisfaction.</small></p>
    </div>
  </div>
</div>
</div>
   </div>             
            
        )
    }
}

export default Ringcard
