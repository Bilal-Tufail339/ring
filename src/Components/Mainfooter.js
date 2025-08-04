import React, { Component } from 'react'
import "./Mainfooter.css"
export class Mainfooter extends Component {
    render() {
        return (
            <>
            <div className='mainfooter-container'>
                <div className='footer-firstdiv'>
                  
                    <ul className='footerfirst-ul'>
                        <p><strong>  product</strong></p>
                        <li>  RingCentral RingEX™</li>
                        <li>Message</li>
                        <li>video</li>
                        <li>phone</li>
                        <li>fax</li>
                        <li>RingCentral Webinar™</li>
                        <li>RingCentral Events</li>
                        <li>Customer experience</li>
                        <li>Features</li>
                        <li>Phones and headsets</li>
                          
                       
                    </ul>
                </div>
                <div className='footerdiv-2'>
                   <ul className='footerfirst-ul'>
                    <p><strong> partners</strong></p>
                    <li>Global service providers</li>
                    <li>Channel partners</li>
                    <li>ISV partners</li>
                    <li>Connectivity partners</li>
                    <li>Affiliate partners</li>
                    <li>Strategic alliances</li>
                   </ul>
                </div>
                <div className='footerdiv-3'>
                  <ul className='footerfirst-ul'>
                    <p><strong>OPENECOSYSTEM</strong></p>
                    <li>Developer platform</li>
                    <li>APIs</li>
                    <li>Integrated apps</li>
                    <li>App gallery</li>
                    <li>Developer support</li>
                    <li>Developer community</li>
                    <li>Games and rewards</li>
                  </ul>
                </div>
                <div className='footerdiv-4'>
                    <ul className='footerfirst-ul'>
                        <p><strong>RESOURCES</strong></p>
                        <li>What's new</li>
                        <li>Resource centre</li>
                        <li>Blog</li>
                        <li>Customer stories</li>
                        <li>Newsroom</li>
                        <li>Product demos</li>
                        <li>Product releases</li>
                        <li>Events</li>
                    </ul>
                </div>
                <div className="footerdiv-5">
                    <ul className='footerfirst-ul'>
                        <p><strong>ABOUT US</strong></p>
                        <li>Our company</li>
                        <li>Leadership</li>
                        <li>Awards</li>
                        <li>Investor relations</li>
                        <li>Ventures</li>
                        <li>Trust Centre</li>
                        <li>Corporate Responsibility</li>
                        <li>Diversity and inclusion</li>
                    </ul>
                </div>
                <div className="footerdiv-6">
                    <ul className='footerfirst-ul'>
                        <p><strong>QUICK LINKS</strong></p>
                        <li>App Download</li>
                        <li>Join a meeting</li>
                        <li>RingCentral App Login</li>
                        <li>Admin Portal Login</li>
                        <li>Careers</li>
                        <li>Support</li>
                        <li>Contact Sales</li>
                    </ul>
                </div>
                
            </div>
            <hr />
            <p className='contact-us'><strong>How can we help? <span>Contact us</span></strong></p>
            <hr />
            <div className="icon">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-x-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-tiktok"></i>
                </div>
                <div className="last-footer">
                    <div className="last-footer-text">
                        <pre>Legal |</pre>
                        <pre> Privacy |</pre>
                        <pre> Cookie Notice |</pre>
                        <pre> Site Map |</pre>
                        <pre> Accessibility |</pre>
                        <pre> Contact Us |</pre>
                        <pre> Cookie Preferences</pre>
                    </div>
                    <div className="lasttext">
                        <p>© 2025 RingCentral, Inc. All rights reserved.</p>
                    </div>
                </div>
           </>
        )
    }
}

export default Mainfooter
