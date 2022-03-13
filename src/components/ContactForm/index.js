import React, {useState} from "react";
import {validateEmail} from "../../utils/helpers"
function DisplayContactForm(){

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
    function handleSubmit(e){
        e.preventDefault();
        console.log(formState)
        
    }
    function handleChange(e){
        
        //console.log(formState)
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
              } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                  } else {
                    setErrorMessage('');
                  }
              }
          }
        if(e.target.name === "name"){
            if(!e.target.value){
                setErrorMessage(`${e.target.name} is required.`);
            }else{
                setErrorMessage("")
            }
        }
        if(e.target.name === "message"){
            if(!e.target.value){
                setErrorMessage(`${e.target.name} is required.`);
            }else{
                setErrorMessage("")
            }
        }
        if (!errorMessage) {
            console.log("Sending to server on click")
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }
    return (
        <div className="border border-dark m-2 text-center">
            <article class="contact-flex-container" id="contact">
            <h2>CONTACT ME</h2>
            <div></div>
            <p>Have a question or want to work together?</p>
            
            <div className="">
            <form action="" class="form-container form-contact border border-dark p-md-5" style={{"margin":"auto"}} onSubmit={handleSubmit}>
            <div class="form-group">
                    
                    <input type="email" name="email" onBlur={handleChange} defaultValue={email} class="form-control" id="" placeholder="Enter your email" required/>
                </div>
                <div class="form-group">
        
                    <input type="text" onBlur={handleChange}   name="name" class="form-control" id="" aria-describedby="emailHelp" placeholder="Enter your name" defaultValue={name} required/>
                    
                </div>
                
                
                <div class="form-group">
                    
                    <textarea name="message" onBlur={handleChange} id="" cols="80" defaultValue={message} rows="6" className="w-100" placeholder="Enter your message" required></textarea>
                </div>
                {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
                )}
                <input type="submit" class="btn btn-primary"/>
            </form>
            </div>
            
        </article>
        </div>
    )


}

export default DisplayContactForm 