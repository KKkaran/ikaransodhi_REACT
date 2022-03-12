import React from "react";
import DisplayNavigation from "../../components/Nav"
function DisplayHeader(props){
    const {
        categories,
        setCurrentCategory,
        currentCategory
    } = props
    return(
        <>
            <DisplayNavigation 
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}/>
        </>

    )
}

export default DisplayHeader