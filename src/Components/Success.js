import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import './Success.css'
import LGOO from './moulin.gif'
import LGO from '../download.png'
class Success extends Component {

    render() {
        return (
            <div className="bg">
                < img src={LGO} alt="Avatar" />
                < img src={LGOO} alt="Avatar" />
                <div className="text">Registration successful</div>
            </div>
        )
    }
}

export default Success

