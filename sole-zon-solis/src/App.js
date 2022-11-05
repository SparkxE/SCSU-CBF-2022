import logo from './SoleLogo.png';
import { Link } from "react-router-dom";
import { Nav } from 'rsuite';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
            <header className="App-header">
              <p>TEst</p>
                <Navbar/>
            </header>
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Saul%C4%97s_elektrin%C4%97.jpg/450px-Saul%C4%97s_elektrin%C4%97.jpg" alt=''/>
            </div>
            <footer></footer>
      </div>
    </>
  );
}
function Navbar(){
  return(
  <div>
    <Nav>
      <Nav.Item><Link to={"./App.js"}><img src={logo} alt=""/></Link></Nav.Item>
      <Nav.Item><Link to={"./Contact.js"}>Contact</Link></Nav.Item>
      <Nav.Item><Link to={"./Manufac.js"}>Manufacturing</Link></Nav.Item>
      <Nav.Item><Link to={"./Solargen.js"}>Solar Generation</Link></Nav.Item>
      <Nav.Item><Link to={"./Login.js"}></Link></Nav.Item>
    </Nav>
    {/* <Routes>
        <Route path="/home" element={<Link to={"./App.js"}><img src={logo} alt=""/></Link>} />
        <Route path="/contact" element={<Link to={"./Contact.js"}>Contact</Link>} />
        <Route path="/manufacturing" element={<Link to={"./Manufac.js"}>Manufacturing</Link>} />
        <Route path="/solar" element={<Link to={"./Solargen.js"}>Solar Generation</Link>} />
        <Route path="/login" element={<Link to={"./Login.js"}></Link>} />
    </Routes> */}
  </div>
  );
}

export default App;
