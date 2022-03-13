import React from "react";
import { SocialIcon } from 'react-social-icons';

function DisplayProject(){

    const projects = [{
        name:"Artificial Intelligence",
        link:"google.com"
    },{
        name:"Blog",
        link:"google.com"
    },{
        name:"Get-Fit",
        link:"google.com"
    },{
        name:"Raspberry",
        link:"google.com"
    },{
        name:"RunBuddy",
        link:"google.com"
    },{
        name:"SellQuicker",
        link:"google.com"
    }]
    return (
        <div className=" p-2">
            <h3>Portfolio</h3>
            <div className="d-flex flex-wrap justify-content-center ">
            {
                projects.map((p,i)=>{
                    console.log(p.name)
                    return  <div className=" p-2 hover">
                        <img style={{}}
                            src={require(`../../assets/${p.name}/1.jpg`)}
                            alt={p.name}
                            width="500px"
                            height="330px"
                            className="mx-1 imgsize "
                            key={i}
                        />  
                        <div className="button p-2">
                        <SocialIcon className="links1" url="https://github.com/jaketrent" />
                            <a className="links2" href={p.link}>{p.name}</a>
                        </div>
                    </div>
                        
                    
                })
            }
            
            </div> 
        </div> 
    )
}

export default DisplayProject