import React, { Component } from 'react';
import LGOG from './workshop.svg'
import LGO from './download.png'
import fire from './fire';
import Recaptcha from 'react-recaptcha'
import SUC from './success.gif'
class App extends Component {
  state = {
    name: null,
    email: null,
    reg: null,
    year: null,
    toggle: null,
    loaded: false,
    img: false
  }

  verifyCallback = e => {
    this.setState({
      loaded: true
    })
  }

  Callback() {
    console.log('You aret not a robot')
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      img: true
    })
    const newItem = {
      name: e.target.name.value,
      email: e.target.email.value,
      reg: e.target.reg.value,
      year: e.target.se.value,
      toggle: e.target.toggle.value,
    }
    let messageRef = fire.database().ref('message').orderByKey().limitToLast(100);
    fire.database().ref('message').push(newItem);
  }
  render() {
    return (
      <div className="App m-5">
        <div className="img1"><img src={LGO} alt="Avatar" /></div>
        <div className="text-white">

          <div><img src={LGOG} alt="Avatar" /></div>
        </div>
        <form className="cards top p-3" onSubmit={this.onSubmit} >
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Name</label>
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Your Name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" ref="email" name="email" required pattern="^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Registration Number</label>
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Registration Number" name="reg" />
          </div>
          <div>
            <label htmlFor="exampleInputPassword1">Year</label>
            <select className="custom-select" name="se">
              <option selected>Present Year</option>
              <option value="2">Second</option>s
              <option value="3">Third</option>
            </select>
          </div>
          <br></br>
          <div className="custom-control custom-switch">
            <input type="checkbox" className="custom-control-input" id="customSwitch1" name="toggle" />
            <label className="custom-control-label" htmlFor="customSwitch1">Have you ever attended Our previous Workshop</label>
          </div>
          <br></br>
          <div className="cap">
            <Recaptcha
              sitekey=""
              render="explicit"
              theme="light"
              size="compact"
              onloadCallback={this.Callback}
              verifyCallback={this.verifyCallback}
            />
          </div>
          <br></br>
          {
            this.state.loaded ? (
              <div>
                <button type="submit" className="btn btn-light" >Submit</button>
              </div>
            ) : (
                <div></div>
              )
          }
          {
            this.state.img ? (
              <div className="animation">
                <img src={SUC} alt="Avatar" />
              </div>
            ) : (
                <div></div>
              )
          }

        </form >
      </div >

    );
  }
}

export default App;
