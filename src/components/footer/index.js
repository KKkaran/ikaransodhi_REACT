import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialIcon } from 'react-social-icons';
function DisplayFooter(){
    return (
        <div className=" bg-dark text-center d-flex justify-content-center" style={{"margin-top":"auto"}}>
            
            <div className="m-2"><SocialIcon url="https://twitter.com/karansodhi"/></div>
            <div className="m-2"><SocialIcon url="https://facebook.com/karan.sodhi" /></div>
            <div className="m-2"><SocialIcon url="https://google.com/karan.sodhi" /></div>
            <div className="m-2"><SocialIcon url="https://github.com/jaketrent" /></div>
            
        </div>
    )
}

export default DisplayFooter
