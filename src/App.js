import React, { Component } from 'react';
import LGOG from './workshop.svg'
import LGO from './download.png'
import fire from './fire';
import Recaptcha from 'react-recaptcha'
import SUC from './gg.gif'

class App extends Component {
  state = {
    name: null,
    email: null,
    reg: null,
    year: null,
    toggle: null,
    num: null,
    loaded: false,
    comment: null,
    gender: null,
    img: false
  }
  fclick = e => {
    this.setState({

    })
  }
  verifyCallback = e => {
    console.log(e);
    if (e) {
      this.setState({
        loaded: true
      })
    }

  }

  Callback() {
    console.log('You aret not a robot')
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      img: true,
      loaded: false

    })
    const newItem = {
      name: e.target.name.value,
      email: e.target.email.value,
      reg: e.target.reg.value,
      year: e.target.se.value,
      toggle: e.target.toggle.value,
      num: e.target.num.value,
      comment: e.target.comment.value,
      gender: e.target.ge.value
    }
    let messageRef = fire.database().ref('message').orderByKey().limitToLast(200);
    fire.database().ref('message').push(newItem);
  }
  render() {
    return (
      <div className="App m-5">
        <div className="img1"><img src={LGO} alt="Avatar" /></div>
        <div className="text-white">

          <div><img src={LGOG} alt="Avatar" /></div>
        </div>
        <form className="cards top p-3" onSubmit={this.onSubmit} id="mySubmit" >
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Name</label>
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Your Name" name="name" required="required" />
          </div>

          <div>
            <label htmlFor="exampleInputPassword1">Gender</label>
            <select className="custom-select" name="ge" required="required">
              <option selected>Gender</option>
              <option value="Male">Male</option>s
              <option value="Female">Female</option>
            </select>
          </div>
          <br></br>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="SRM Email Address" ref="email" name="email" required="required" pattern="(.+@srmist.edu.in|.+@srmuniv.edu.in)" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Mobile Number</label>
            <input type="tel" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Mobile Number" name="num" required="required" pattern="(7|8|9)\d{9}" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Registration Number</label>
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Registration Number" name="reg" required="required" />
          </div>
          <div>
            <label htmlFor="exampleInputPassword1">Year</label>
            <select className="custom-select" name="se" required="required">
              <option selected>Present Year</option>
              <option value="2">Second</option>s
              <option value="3">Third</option>
            </select>
          </div>
          <br></br>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Why do you want to attend workshop?</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="comment" required="required"></textarea>
          </div>
          <div className="sname">
            Have You ever attended our previos Workshop?
            <div className="checkbox">
              <div className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" id="customCheck1" name="toggle" />
                <label className="custom-control-label" htmlFor="customCheck1"></label>
              </div>
            </div>
          </div>
          <br></br>
          <div className="cap">
            <div className="recaptcha">
              <Recaptcha
                sitekey="6LcWvs4UAAAAADdEHZiMPI2P1Z4tNogaau7Fc_i0"
                render="explicit"
                theme="light"
                size="normal"
                onloadCallback={this.Callback}
                verifyCallback={this.verifyCallback}
              />
            </div>
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
