import React from "react";

function DisplayContactForm(){

    return (
        <div className="border border-dark m-2 text-center">
            <article class="contact-flex-container" id="contact">
            <h2>CONTACT ME</h2>
            <div></div>
            <p>Have a question or want to work together?</p>
            
            <div className="">
            <form action="" class="form-container form-contact border border-dark p-md-5" style={{"margin":"auto"}}>
                <div class="form-group">
        
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    
                </div>
                <div class="form-group">
                    
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your password"/>
                </div>
                
                <div class="form-group">
                    
                    <textarea name="" id="" cols="80" rows="6" className="w-100" placeholder="Enter your message"></textarea>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>
            
        </article>
        </div>
    )


}

export default DisplayContactForm 