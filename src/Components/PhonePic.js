import React, { Component } from 'react'
import "./Phone.css"
import AllOnepic from "./allone-png.webp"
export class PhonePic extends Component {
    render() {
        return (
            <div className='phone-pic'>

                <div className=''>
                    <img src={AllOnepic} alt="" style={{height:'350px'}} />
                </div>
            </div>
        )
    }
}

export default PhonePic
