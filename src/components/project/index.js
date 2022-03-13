import React from "react";

function DisplayProject(){

    const projects = [{
        name:"ai"
    },{
        name:"blog"
    },{
        name:"getfit"
    },{
        name:"raspberry"
    },{
        name:"runbuddy"
    },{
        name:"sellquicker"
    }]
    return (
        <div className=" p-2">
            <h3>Portfolio</h3>
            <div className="d-flex flex-wrap justify-content-center">
            {
                projects.map((p,i)=>{
                    return  <div className=" p-2">
                        <img style={{}}
                            src={require(`../../assets/${p.name}/1.jpg`)}
                            alt={p.name}
                            width="500px"
                            height="330px"
                            className="mx-1 imgsize"
                            key={i}
                        />  
                    </div>
                        
                    
                })
            }
            
            </div> 
        </div> 
    )
}

export default DisplayProject