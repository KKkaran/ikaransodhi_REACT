import React from "react";
import DisplayAbout from "../aboutme";
import DisplayContactForm from "../ContactForm";
import DisplayPortfolio from "../Portfolio";
import DisplayResume from "../Resume";

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
            <DisplayResume/>
        )
    }else if(props.cc.name === "Contact"){
        return (
            <DisplayContactForm/>
        )
    }


}

export default DisplayMainSection 