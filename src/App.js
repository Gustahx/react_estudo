import './App.css';
import HelloWorld from './components/HelloWorld'
import Pessoa from './components/Pessoa'
import SayMyName from './components/SayMyName'
import Frase from './components/Frase'

function App() {
  const name = "Julia";
  return (
    <div className="App">
      <HelloWorld/>
      <Frase/>
      <h1>Testando CSS</h1>
      <SayMyName name = {name}/>
      <Pessoa
        name = "Gustavo"
       age = "20"
       profession = "Desempregado"
       photo = "https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
