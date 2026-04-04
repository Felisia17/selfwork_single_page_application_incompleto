import Header from "./components/Header";
import List from "./components/List";
import Navbar from "./components/Navbar";


function App() {

const project = 'React';

const names = ['Zena', 'Athena', 'Alaska', 'Africa'];

  return (
    <>
    
    <Navbar/>
    
    <h1 className="titleClass">Io sono il titolo del mio nuovo progetto {project}</h1>
    <input className="inputClass" type="text" id="input1"/>
    <label className="labelClass" htmlFor="input1">Io sono l'input</label>
    <Header/>
    <List names={names}/>
    </>
      
      
    
  )
}

export default App
