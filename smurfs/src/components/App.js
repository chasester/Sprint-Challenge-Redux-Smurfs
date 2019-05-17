import React, { Component } from 'react';
import {connect} from 'react-redux';

import './App.css';
import './SmurfList'
import { SmurfList } from './SmurfList';
import {addSmurf, updateSmurf, deleteSmurf, getSmurfs} from "../actions"
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {
  componentWillMount()
  {
    this.props.getSmurfs();
  }
  render() {
    if(this.props.error !== undefined && this.props.error !== "" && this.props.error.length > 0) return <div>{this.props.error}</div>
    if(this.props.smurfs=== undefined || this.props.smurfs.length===0 || this.props.fetchingSmurfs) return <div className="App">Loading...</div>
    return (
      <div className="App">
        <SmurfList smurfs={this.props.smurfs}/>
      </div>
    );
  }
}

const mapStateToProps = (state) =>
{
  return{
    ...state
  }
}

export default connect(mapStateToProps, {addSmurf, updateSmurf, deleteSmurf, getSmurfs })(App);
