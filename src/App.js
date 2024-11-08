import { useState } from 'react';

// import './App.css';
import {Button, Navbar, Popup}  from "./components"
import { Routing } from './routes/Routing';

function App() {
  const [isModalOpen,setIsModalOpen] = useState(false)

  const handleClick = () => {
    console.log("clicked")
    setIsModalOpen(!isModalOpen)
  }
  return (
    <div className="App">
      <Navbar/>
      <Routing/>
      <h1>hello</h1>
      <Button title="submit" handleClick={handleClick} />
      {isModalOpen ? <Popup/> : "" }
    </div>
  );
}

export default App;
