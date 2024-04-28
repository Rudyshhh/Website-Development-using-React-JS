// import logo from './logo.svg';

import Navbar from './Navbar';
import Home from './Home';

function App() {
  // const title="Welcome to my blog";
  // const likes=50
  // const link="http://www.google.com"
  // const person ={name:"Ezio",age:"35"};// booleans and objects not allowed
  return (
    <div className="App">
    <Navbar></Navbar>
      <div className="content">
        <Home />
        
      </div>
    </div>
  );
}

export default App;
