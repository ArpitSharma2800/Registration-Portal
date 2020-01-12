import React, { Component } from 'react';
import LGOG from './workshop.svg'
import LGO from './download.png'
class App extends Component {
  state = {
    name: '',
    email: '',
    reg: '',
    year: '',
    toggle: ''
  }
  onSubmit = (e) => {
    e.preventDefault();

    this.setState({
      name: e.target.name.value,
      email: e.target.email.value,
      reg: e.target.reg.value,
      year: e.target.se.value,
      toggle: e.target.toggle.value
    })
    const name = this.refs.email.value;
    console.log('Your name is', name);
  }
  render() {
    return (
      <div className="App m-5">
        <div className="img1"><img src={LGO} alt="Avatar" /></div>
        <div className="text-white"><h3>Google DSC is back!!</h3>

          <div><img src={LGOG} alt="Avatar" /></div>
        </div>
        <form className="cards p-3" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Name</label>
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Your Name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" ref="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Registration Number</label>
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="" name="reg" />
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
          {/* <div>{this.state.email}</div> */}
          <br></br>
          <button type="submit" className="btn btn-outline-success" >Submit</button>
        </form>
      </div >

    );
  }
}

export default App;
