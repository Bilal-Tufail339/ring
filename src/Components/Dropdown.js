import React, { Component } from "react";
import "./Dropdown.css";
import cardpic from "./cardimg-3.jpg"

export class Dropdown extends Component {
  
  render() {
    return (

      <>
      
     
      <div className="dropmain-container">
      <div className="drop-container">
        <div className="dropdown">
          <button
            className="btn  dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
           <strong> Product</strong>
          </button>

          <div className="dropdown-menu custom-dropdown" aria-labelledby="dropdownMenu2">
            <div className="dropdown-grid">
              <div className="dropdown-box">
               <div className="first-box rounded-top-3 rounded-bottom-3">
                 <p className="title">RingEX</p>
                <small>ai cloud communications</small>
                <br />
                <span className="powerbtn rounded-pill">AI powered</span>
                     </div> <br /><br />
                <p><strong>business phone system</strong>
                <small>Lorem ipsum dolor sit amet.</small></p>
                <p><strong>personal ai Assistant</strong><br />
                <small>Lorem ipsum dolor sit amet.</small></p>
                <p><strong>personal ai Assistant</strong><br />
                <small>Lorem ipsum dolor sit amet.</small></p>
                <p><strong>personal ai Assistant</strong><br />
                <small>Lorem ipsum dolor sit amet.</small></p>
                
           </div>


              <div className="dropdown-box">
                <div className="first-box rounded-top-3 rounded-bottom-3 ">
                <p className="title">Business Phone</p>
             <small>Lorem ipsum dolor sit amet consectetur <br /><br />  <span className="powerbtn rounded-pill">AI powered</span>.</small>
                </div> <br /><br />
                  <p><strong>business phone system</strong>
                <small>Lorem ipsum dolor sit amet.</small></p>
                <p><strong>personal ai Assistant</strong><br />
                <small>Lorem ipsum dolor sit amet.</small></p>
                <p><strong>personal ai Assistant</strong><br />
                <small>Lorem ipsum dolor sit amet.</small></p>
                <p><strong>personal ai Assistant</strong><br />
                <small>Lorem ipsum dolor sit amet.</small></p>
              </div>


              <div className="dropdown-box">
                <div className="first-box rounded-top-3 rounded-bottom-3">
                <p className="title">Personal AI Assistant</p>
                <small>Lorem ipsum dolor sit amet consectetur.</small>
                </div><br /><br />
                 <p><strong>business phone system</strong>
                <small>Lorem ipsum dolor sit amet.</small></p>
                <p><strong>personal ai Assistant</strong><br />
                <small>Lorem ipsum dolor sit amet.</small></p>
              </div>

              <div className="dropdown-box">
                <div className="first-box rounded-top-3 rounded-bottom-3">
                <p className="title">Messaging</p>
                <small>Lorem ipsum dolor sit amet consectetur.</small>
                </div> <br /><br />
                 <p><strong>business phone system</strong>
                <small>Lorem ipsum dolor sit amet.</small></p>
                <p><strong>personal ai Assistant</strong><br />
                <small>Lorem ipsum dolor sit amet.</small></p>
              </div>
              
              <div className="dropdown-box">
                <div className="first-box rounded-top-3 rounded-bottom-3">
                <p className="title">Messaging</p>
                <small>Lorem ipsum dolor sit amet consectetur.</small>
                </div><br /><br />
 <p><strong>business phone system</strong>
                <small>Lorem ipsum dolor sit amet.</small></p>
                <p><strong>personal ai Assistant</strong><br />
                <small>Lorem ipsum dolor sit amet.</small></p>
              
              </div>


            </div>
          </div>
        </div>
      </div>
      <div className="drop-container">
        <div className="dropdown">
          <button
            className="btn  dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
          <strong>  Solution</strong>
          </button>

          <div className="dropdown-menu custom-dropdown solutions" aria-labelledby="dropdownMenu2">
            <div className="dropdown-grid">
              <div className="dropdown-box">
               <div className="second-box rounded-top-3 rounded-bottom-3">
                 <p className="title">By Audience</p>
                
                  <li>Enterprise</li>
                  <li>small business</li>
                  <li>startups</li>
                  <li>ringcentralvintures</li>
            
                
               </div> 
                
                
           </div>


              <div className="dropdown-box">
                <div className="second-box rounded-top-3 rounded-bottom-3 ">
                <p className="title">By Industry</p>
                 <li>Enterprise</li>
                  <li>small business</li>
                  <li>startups</li>
                  <li>ringcentralvintures</li>

                </div> 
                 
              </div>


              <div className="dropdown-box">
                <div className="second-box rounded-top-3 rounded-bottom-3">
                <p className="title"></p>
                <div className="third-li">
                  <li>Enterprise</li>
                  <li>small business</li>
                  <li>startups</li>
                  <li>ringcentralvintures</li>
                </div>
              
                </div>
                
              </div>

              <div className="dropdown-box">
                <div className="second-box rounded-top-3 rounded-bottom-3">
                <p className=" team-text">Ringcentral for Microsoft team</p>
              <div className="drop-card">
                <img src={cardpic} alt="" style={{height:'100px'}} />
                <p>Integrate with Microsoft ringcentralvintures</p>
                <p>learn more ➡</p>
              </div>
                </div> 
              
               
              </div>
              
             </div>
          </div>
        </div>
      </div>
      {/* 3rd */}
         <button
            className="btn  "
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
           <strong> Plan&pricing</strong>
          </button>
   
      {/* 4rth */}
       <div className="drop-container">
        <div className="dropdown">
          <button
            className="btn  dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
         <strong>partners </strong>
          </button>

          <div className="dropdown-menu custom-dropdown partners" aria-labelledby="dropdownMenu2">
            <div className="dropdown-grid">
              <div className="dropdown-box">
               <div className="second-box rounded-top-3 rounded-bottom-3">
                 <p className="title">By Audience</p>
                
                  <li>Enterprise</li>
                  <li>small business</li>
                  <li>startups</li>
                  <li>ringcentralvintures</li>
            
                
               </div> 
                
                
           </div>


              <div className="dropdown-box">
                <div className="second-box rounded-top-3 rounded-bottom-3 ">
                <p className="title">By Industry</p>
                 <li>Enterprise</li>
                  <li>small business</li>
                  <li>startups</li>
                  <li>ringcentralvintures</li>

                </div> 
                 
              </div>


              <div className="dropdown-box">
                <div className="second-box rounded-top-3 rounded-bottom-3">
                <p className="title"></p>
                <div className="third-li">
                  <li>Enterprise</li>
                  <li>small business</li>
                  <li>startups</li>
                  <li>ringcentralvintures</li>
                </div>
              
                </div>
                
              </div>

              <div className="dropdown-box">
                <div className="second-box rounded-top-3 rounded-bottom-3">
                <p className=" team-text">Ringcentral for Microsoft team</p>
              <div className="drop-card">
                <img src={cardpic} alt="" style={{height:'100px'}} />
                <p>Integrate with Microsoft ringcentralvintures</p>
                <p>learn more ➡</p>
              </div>
                </div> 
              
               
              </div>
              
             </div>
          </div>
        </div>
      </div>
    {/* 5th */}
     <div className="drop-container ">
        <div className="dropdown">
          <button
            className="btn  dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
           <strong>Resources</strong>
          </button>

          <div className="dropdown-menu custom-dropdown resorces" aria-labelledby="dropdownMenu2">
            <div className="dropdown-grid">
              <div className="dropdown-box">
               <div className="second-box rounded-top-3 rounded-bottom-3">
                 <p className="title">By Audience</p>
                
                  <li>Enterprise</li>
                  <li>small business</li>
                  <li>startups</li>
                  <li>ringcentralvintures</li>
            
                
               </div> 
                
                
           </div>


              <div className="dropdown-box">
                <div className="second-box rounded-top-3 rounded-bottom-3 ">
                <p className="title">By Industry</p>
                 <li>Enterprise</li>
                  <li>small business</li>
                  <li>startups</li>
                  <li>ringcentralvintures</li>

                </div> 
                 
              </div>


              <div className="dropdown-box">
                <div className="second-box rounded-top-3 rounded-bottom-3">
                <p className="title"></p>
                <div className="third-li">
                  <li>Enterprise</li>
                  <li>small business</li>
                  <li>startups</li>
                  <li>ringcentralvintures</li>
                </div>
              
                </div>
                
              </div>

              <div className="dropdown-box">
                <div className="second-box rounded-top-3 rounded-bottom-3">
                <p className=" team-text">Ringcentral for Microsoft team</p>
              <div className="drop-card">
                <img src={cardpic} alt="" style={{height:'100px'}} />
                <p>Integrate with Microsoft ringcentralvintures</p>
                <p>learn more ➡</p>
              </div>
                </div> 
              
               
              </div>
              
             </div>
          </div>
        </div>
      </div>
  {/* ?6th */}
 <button
            className="btn  "
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
           <strong> Company</strong>
          </button>
      
   </div>
     </>
    );
  }
}

export default Dropdown;
