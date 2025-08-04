import React, { Component } from 'react'
import "./Section.css"
export class SectionFirst extends Component {
    render() {
        return (
            <div className='container-nav1'>
                <h1 className='first-text'>
                    Bring employee and customer  <br />
                    experiences together to drive growth
                </h1>
                <nav className='navbar1 rounded-pill'>
                    <button className='rounded-pill 
                    '>Business Phone</button>
                    <button className='btn1'>Contact center</button>
                    <button className='btn1'>Converstaion Intelligence</button>
                   <button className='btn1'>Events</button>
                </nav>
            </div>
        )
    }
}

export default SectionFirst

