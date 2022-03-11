import React from 'react'

function DisplayNavigation(){
//about me, portfolio, contact, resume
    return (
        <div>
            <div className='navbar navbar-expand-lg bg-dark navbar-dark' >
                <h2 className='text-light'>Karan Sodhi</h2>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navmenu">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navmenu">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a href="#learning" className="nav-link">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a href="#questions" className="nav-link">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a href="#instructors" className="nav-link">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a href="#instructors" className="nav-link">Resume</a>
                    </li>
                </ul>
            </div>
            </div>
        </div>

    )
}

export default DisplayNavigation