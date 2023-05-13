import React from "react";
import Button from "./Button";
import "../assets/css/formInput.css"

class FormInput extends React.Component {
    render() { 
        return ( 
            <form style={inputForm}>
                <input style={input} type="text" placeholder="add task"/>
                <Button/>
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