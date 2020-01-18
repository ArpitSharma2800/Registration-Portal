import React, { Component } from 'react';
import LGOG from './workshop.svg'
import LGO from './download.png'
import bb from './blur.png'
import fire from './fire';
import Recaptcha from 'react-recaptcha'
import SUC from './gg.gif'
import er from './error.gif'
import Axios from 'axios';
import Progress from './Progress'

class App extends Component {
  state = {
    name: null,
    email: null,
    gender: null,
    year: null,
    regno: null,
    mobile: null,
    info: null,
    "g-recaptcha-response": null,
    loaded: false,
    img: false,
    uploadPercentage: 0,
    error_m: null,
    error: false,
    college: null,
    card: "cards top p-3"
  }

  fclick = e => {
    this.setState({

    })
  }
  verifyCallback = response => {
    console.log(response);
    if (response) {
      this.setState({
        loaded: true,
        "g-recaptcha-response": response,
      })
    }

  }
  Callback() {
    console.log('You aret not a robot')
  }
  onSubmit = (e) => {
    e.preventDefault();

    const newItem = (
      {
        candidate: {
          name: e.target.name.value,
          email: e.target.email.value,
          gender: e.target.ge.value,
          year: 1,
          college: e.target.college.value,
          regno: e.target.reg.value,
          mobile: e.target.num.value,
          info: e.target.comment.value
        },
        "g-recaptcha-response": this.state["g-recaptcha-response"]
      }
    )
    // async function postData(url = 'https://dscsrm.appspot.com/api/firebase/submissions', data = { newItem }) {
    //   // Default options are marked with *
    //   const response = await fetch('https://dscsrm.appspot.com/api/firebase/submissions', {
    //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //     mode: 'cors', // no-cors, *cors, same-origin
    //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //     credentials: 'same-origin', // include, *same-origin, omit
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     redirect: 'follow', // manual, *follow, error
    //     referrerPolicy: 'no-referrer', // no-referrer, *client
    //     body: JSON.stringify(data) // body data type must match "Content-Type" header
    //   });
    //   return await response.json(); // parses JSON response into native JavaScript objects
    // }

    // postData("https://dscsrm.appspot.com/api/firebase/submissions", {
    //   newItem
    // }).then(data => {
    //   console.log(data); // JSON data parsed by `response.json()` call
    // });
    // Axios.post('/t/1gssc-1579180158/post', newItem, {
    //   onUploadProgress: ProgressEvent => {
    //     this.setState({
    //       uploadPercentage: parseInt(Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total))
    //     })
    //   }
    // })
    Axios.post('https://dscsrm.appspot.com/api/firebase/submissions', newItem, {
      onUploadProgress: ProgressEvent => {
        this.setState({
          uploadPercentage: parseInt(Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total))
        })
      }
    })
      .then(response => {
        console.log(response);
        this.setState({
          img: true,
          loaded: false,
          card: "cardss top p-3"
        })
      })
      .catch(err => {
        console.log(err);
        if (err.response.status === 409) {
          this.setState({
            img: false,
            loaded: false,
            error: true,
            error_m: "No duplicate are allowed",
            uploadPercentage: 0
          })
        }
        if (err.response.status === 401) {
          this.setState({
            img: false,
            loaded: false,
            error: true,
            error_m: "Recaptcha error",
            uploadPercentage: 0
          })
        }

      })

    let messageRef = fire.database().ref('message').orderByKey().limitToLast(1500);
    fire.database().ref('message').push(newItem);
  }
  render() {
    return (
      <div className="App m-5">
        <div className="img1"><img src={LGO} alt="Avatar" /></div>
        <div className="text-white">

          <div><img src={LGOG} alt="Avatar" /></div>
        </div>
        <form className={this.state.card} onSubmit={this.onSubmit} id="mySubmit" >
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Name</label>
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Your Name" name="name" required="required" pattern="^[a-zA-Z\s]+" />
          </div>

          <div>
            <label htmlFor="exampleInputPassword1">Gender</label>
            <select className="custom-select" name="ge" required="required">
              <option value="M" selected>Male</option>s
              <option value="F">Female</option>
              <option value="Other">Other</option>
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
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Registration Number" name="reg" required="required" pattern="(RA19)\d{11}" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">College</label>
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="College name" name="college" required="required" pattern="^[a-zA-Z\s]+" />
          </div>
          {/* <div>
            <label htmlFor="exampleInputPassword1">Year</label>
            <select className="custom-select" name="se" required="required">
              <option value="2" selected>Second</option>s
              <option value="3">Third</option>
            </select>
          </div> */}
          {/* <br></br> */}
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Why do you want to attend workshop?</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="comment" required="required"></textarea>
          </div>
          {/* <div className="sname">
            Have you attended any of our previous workshop?
            <div className="checkbox">
              <div className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" id="customCheck1" name="toggle" />
                <label className="custom-control-label" htmlFor="customCheck1"></label>
              </div>
            </div>
          </div> */}
          {/* <br></br> */}
          <div className="cap">
            <div className="recaptcha">
              <Recaptcha
                sitekey="6LchFrwUAAAAAOog-kPn2_U6zAuM-mV2orPHFR0u"
                render="explicit"
                theme="light"
                size="normal"
                onloadCallback={this.Callback}
                verifyCallback={this.verifyCallback}
              />
            </div>
          </div>
          {/* <br></br> */}
          <Progress percentage={this.state.uploadPercentage} className="mt-sm-4" />
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
              <div>
                <div className="animation">
                  <img src={SUC} alt="Avatar" />
                </div>
              </div>
            ) : (
                <div></div>
              )
          }
          {
            this.state.error ? (
              <div className="animation">
                <img src={er} alt="Avatar" />
                <h5>{this.state.error_m}</h5>
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
