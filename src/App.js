import './App.css';
import Mensaje from './Mensaje';

const Descripcion= ()=>{
  return <strong>Estamos trabajando en ello</strong>
}

function App() {
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando'/>
      <Mensaje color='green' message='en un curso' />
      <Mensaje color='blue' message='en React' />
      <Descripcion />
    </div>
  );
}

export default App;
