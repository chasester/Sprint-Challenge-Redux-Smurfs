import React from "react";

import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            name: this.props.name,
            age: this.props.age,
            height: this.props.height
        }
    }

    handleSubmit()
    {
        if(!this.evalutate()) return;
        let val = this.state;
        this.setState({ 
            name: "",
            age: "",
            height: ""
        })
        console.log("posted");
        this.props.addSmurf(val);
    }

    evalutate()
    {
        return this.state.name!=="" && this.state.age!=="" && this.state.height!=="";
    }
    render()
    {
        return (
            <div>
                <input placeholder= "Name" id="name" value={this.state.name} onChange={(e)=> this.setState({[e.target.id]: e.target.value})} onKeyPress={(e)=> { if(e.charCode === 13)this.handleSubmit()}} />
                <input placeholder= "age" id="age" value={this.state.age} onChange={(e)=> this.setState({[e.target.id]: e.target.value})} onKeyPress={(e)=> { if(e.charCode === 13)this.handleSubmit()}} />
                <input placeholder= "height" id="height" value={this.state.height} onChange={(e)=> this.setState({[e.target.id]: e.target.value})} onKeyPress={(e)=> { if(e.charCode === 13)this.handleSubmit()}} />
            </div>
        );
    }
}

const mapStateToProps = (state) =>
{
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps, { addSmurf })(SmurfForm);