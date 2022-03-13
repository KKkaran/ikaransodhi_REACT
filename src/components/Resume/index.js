import React from "react";

function DisplayResume(){
    return (
        <div className=" p-3">
            <div>
                <h5>Download my <span><a href="" download>RESUME</a></span></h5>
            </div>
            <div className="container p-3 ">
                <h4>Proficiencies</h4>
                <div className="container">
                    <h5>Back-end:</h5>
                    <div className="container  p-3">
                        <ul style={{"listStyle":"none"}}>
                            <li>Apis</li>
                            <li>Express</li>
                            <li>Mongoose</li>
                            <li>NodeJs</li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <h5>Front-end:</h5>
                    <div className="container  p-3">
                    <ul style={{"listStyle":"none"}}>
                        <li>REACT</li>
                        <li>Bootstrap</li>
                        <li>HTML5</li>
                        <li>Jquery</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayResume