import Nav from './Nav';
import Background from './Background';
import Queryform from './Queryform';
import Footer from './Footer';

const myAppname = "Spodemy";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Background appname={myAppname}/>
      <Queryform/>
      <div style={{padding:"1rem"}}>Disclaimer.............</div>
      <Footer appname={myAppname}/>
    </div>
  );
}

export default App;
