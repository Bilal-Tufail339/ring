import React, { Component } from 'react'
import "./Globle.css"

import iconpng from "./ai-icon-png-rendition.webp"
import Globleimg from "./latest-ringimg.webp"
// import Globlelogo1 from "./logo-main.png"
// import Globlelogo2 from "./logo-main2.png"
export class Globle extends Component {
    render() {
        return (
            <div className='globle-container'>
                <div className="globle-text">
                    <p className='globle-firsttext'><small>Global scale & RELIABILITY</small></p>
                    <p className='globe-leader'><strong>The global leader <br /> in AI communications</strong></p>
                    <p className='globle-mission'>RingCentral delivers mission-critical communications for organizations of <br /> all sizes. From small businesses to Fortune 1000 companies, brands <br /> across the planet rely on RingCentral to stay connected, secure, and <br /> compliant — from anywhere.</p>
                   <div className='globletext-end d-flex'>

                    <div className="globle1">
                     <p className='globlep'><strong>400k+</strong> <br /><small className='globle-word'>Customers worldwide</small></p>
<p className='globlep'><strong>194,712,251</strong><br /><small className='globle-word'>Total call minutes last 24h</small></p>

</div>
<div className="globle2">
<p className='globlep'><strong>100+</strong><br /><small className='globle-word'>Countries supported</small></p>
<p className='globlep'><strong>351,465</strong><br /><small className='globle-word'>Calls in the last hour</small></p>

</div>
<div className='globle3'>
    <p className='globlep globle3rd'><strong>99.999%</strong><br />
<small className='globle-word'>Availability</small></p>

</div>
</div>
<hr  />
<div className='globle-logos'>
    <img src={iconpng} alt="" style={{height:'40px'}} /> 
    <img src={iconpng} alt="" style={{height:'40px'}} /> 
    <img src={iconpng} alt="" style={{height:'40px'}} /> 
    <img src={iconpng} alt="" style={{height:'40px'}} /> 
    <img src={iconpng} alt="" style={{height:'40px'}} /> 
    <img src={iconpng} alt="" style={{height:'40px'}} /> 
    <img src={iconpng} alt="" style={{height:'40px'}} /> 
    <img src={iconpng} alt="" style={{height:'40px'}} /> 

</div>
                </div>
                <div className="globle-img"> 
                    <img src={Globleimg} alt="" style={{height:'600px'}}/>
                </div>
                
            </div>
        )
    }
}

export default Globle
