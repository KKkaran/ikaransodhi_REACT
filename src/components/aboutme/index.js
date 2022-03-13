import React from "react";
import tc from "../../assets/tomcruise.png"
function DisplayAbout(){

    return(
    <div className=" m-2 p-3">
        <h3>About Me</h3>
        <div className="p-2  ">
            <img src={tc} height="250" width="200" alt="tomcruise" />
            <p className="abtmebio">With these points in mind, in this Challenge you’ll set 
            yourself up for future succesapplying the core skills
            you've recently learned: flexbox, mqueries, and CSS
            variables. You'll get to practice new skills while 
            creating something that you'll use duyour job search. 
            It’s a win-win that you'll likelgrateful for in the future!You'll get to practice new skills while 
            </p>
        </div>
    </div>
    )
}

export default DisplayAbout