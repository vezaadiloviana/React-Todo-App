import React from "react";
import Button from "./Button";
import "../assets/css/formInput.css"

class FormInput extends React.Component {
    state = {
        text: ""
    }
    change = e => {
        this.setState({ text: e.target.value})
    }
    submit = e => {
        e.preventDefault()
        if(this.state.text !== ""){
            this.props.add(this.state.text)
        }
        this.setState({
            text: ""
        })
    }
    render() { 
        return ( 
            <form style={inputForm} onSubmit={this.submit}>
                <input onChange={this.change} style={input} type="text" placeholder="add task" value={this.state.text}/>
                <Button text="Add" variant="primary" action={this.submit}/>
            </form>
         );
    }
}
 
export default FormInput;

const inputForm = {
    background: "#ffff",
    // color: "black",
    display: "flex",
    alignItems: "center",
    height: "3rem",
    padding: "0 1rem",
    justifyContent: "space-between",
    margin: "0.25rem 0",
    gap: "1.25rem"
}

const input = {
    width : "100%",
    border : "none"
}