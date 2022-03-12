import React from "react";
import DisplayContactForm from "../ContactForm";


function DisplayMainSection(props){


    if(props.cc.name === "About Me"){
        return (
            <>{props.cc.name}</>
        )
    }else if(props.cc.name === "Portfolio"){
        return (
            <>{props.cc.name}</>
        )
    }else if(props.cc.name === "Resume"){
        return (
            <>{props.cc.name}</>
        )
    }else if(props.cc.name === "Contact"){
        return (
            <DisplayContactForm/>
        )
    }


}

export default DisplayMainSection 