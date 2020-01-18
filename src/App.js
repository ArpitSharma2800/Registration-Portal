
import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom"
import Form from './Form'
import Success from './Components/Success'

class App extends Component {


  render() {
    return (
      <div className="App" >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Form} />
            <Route exact path="/success" component={Success} />
          </Switch>
        </BrowserRouter>
      </div>

    );
  }
}

export default App;