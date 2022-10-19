
import './App.css';
import NavBar from './components/NavBar';
import SideDisplay from './components/SideDisplay';

function App() {
  return (
    <div className="App">
      <NavBar />
      <section>
        <SideDisplay/>
      </section>
      
    </div>
  );
}

export default App;
