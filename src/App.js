import { Navbar}  from "./components"
import { ProtectedRouting } from "./routes/ProtectedRouting";
import { Routing } from './routes/Routing';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Routing/>
      <ProtectedRouting/>
    </div>
  );
}

export default App;
