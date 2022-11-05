import logo from './SoleLogo.png';
import { Link } from "react-router-dom";
import { Nav } from 'rsuite';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
            <header className="App-header">
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
  <div className='App-navbar'>
    <Nav>
      <Nav.Item><Link to={"./App.js"}><img src={logo} style={{width: 200, height: 70}} alt=""/></Link></Nav.Item>
      <Nav.Item><Link to={"./Contact.js"}> Contact </Link></Nav.Item>
      <Nav.Item><Link to={"./Manufac.js"}> Manufacturing </Link></Nav.Item>
      <Nav.Item><Link to={"./Solargen.js"}> Solar Generation </Link></Nav.Item>
      <Nav.Item><Link to={"./Login.js"}> Login </Link></Nav.Item>
    </Nav>
  </div>
  );
}

export default App;
