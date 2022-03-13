import React, { useEffect } from 'react'

function DisplayNavigation(props){
//about me, portfolio, contact, resume
    const {
        categories,
        setCurrentCategory,
        currentCategory  
    } = props

    useEffect(()=>{
      document.title = currentCategory.name
    },[currentCategory])

    console.log(currentCategory)
    return (
        <div>
            {console.log(categories)}
            <nav className='navbar navbar-expand-lg bg-dark navbar-dark' >
                <h2 className='text-light'>Karan Sodhi</h2>
                <button class="navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation" type="button" data-toggle="collapse" data-target="#navmenu">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navmenu">
                  <ul className='navbar-nav ml-auto'>
                      {
                        categories.map(cat=>(
                          <li key={cat.name} className={`mx-2 nav-item navIn ${currentCategory.name === cat.name && 'navA'}`}
                          >
                            <span className='' style={{"cursor":"pointer"}}
                            
                            onClick={() => {
                            setCurrentCategory(cat)
                          }}>
                              <h5>{cat.name}</h5>
                            </span>
                          </li>
                        ))
                      
                      }
                  </ul>
                </div>
            </nav>
        </div>

    )
}

export default DisplayNavigation