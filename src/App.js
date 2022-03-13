import './App.css';
import DisplayHeader from "./components/header"
import DisplayFooter from './components/footer'; 
import { useState } from 'react';
import DisplayContactForm from './components/ContactForm';
import DisplayMainSection from './components/MainSection';

function App() {

  const [categories] = useState([
    {
      name:"About Me"
    },
    {
      name:"Portfolio"
    },
    {
      name:"Resume"
    },
    {
      name:"Contact"
    }
  ])

  const [currentCategory, setCurrentCategory] = useState(()=>categories[0])

  return (
    <div className="container border border-dark p-1 d-flex flex-column" style={{"minHeight":"100vh"}}>
        <div>
          <DisplayHeader 
            categories={categories}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}/>
          <main>
            <DisplayMainSection cc={currentCategory}></DisplayMainSection>
          </main>
          </div>
        <DisplayFooter/>
    </div>
  );
}

export default App;
