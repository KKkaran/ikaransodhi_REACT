import React from "react";
import DisplayAbout from "../aboutme";
import DisplayContactForm from "../ContactForm";
import DisplayPortfolio from "../Portfolio";

function DisplayMainSection(props){


    if(props.cc.name === "About Me"){
        return (
            <DisplayAbout/>
        )
    }else if(props.cc.name === "Portfolio"){
        return (
            <DisplayPortfolio/>
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