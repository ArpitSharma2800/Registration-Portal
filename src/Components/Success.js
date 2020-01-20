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
                <div className="text">Registration successful<br></br>25th jan, 2020<br></br>9:00AM-5:00PM</div>
            </div>
        )
    }
}

export default Success

