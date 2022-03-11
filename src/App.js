import './App.css';
import DisplayHeader from "./components/header"
import DisplayFooter from './components/footer'; 


function App() {
  return (
    <div className="container border border-dark p-1">
        <DisplayHeader/>
        <DisplayFooter/>
    </div>
  );
}

export default App;
