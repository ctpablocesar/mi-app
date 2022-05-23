import { ContadorRed } from "./components/ContadorRed";
import { Counter } from "./components/Counter";
import { Formulario } from "./components/Formulario";
import { Formulario2 } from "./components/Formulario2";
import { TimerPadre } from './components/TimerPadre';
import { Usuario } from './components/Usuario';


function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr />
      <Counter />
      <Usuario />
      <TimerPadre />
      <ContadorRed />
      <Formulario />
      <Formulario2 />
    </>
  );
}

export default App;
