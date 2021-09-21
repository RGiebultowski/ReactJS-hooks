import React,{ useEffect, useState } from 'react';
import './App.css';

const App = () => {
 const [counter, setCounter] = useState(0);
 const [isActive, setIsActive] = useState(true);

 useEffect(() => {
   alert('Hello')
 }, []);

 const handler = () =>{
   setCounter(prevCounter => prevCounter + 1);
 }

 const toggleVisibilityCounter = () => setIsActive(prevValue => !prevValue);

 const counterComponent = isActive ? <Counter rerenderCounter={counter} /> : null;

  return (
    <div className="App">
      <button onClick={toggleVisibilityCounter}>Pokaż / ukryj komponent</button>
      <button onClick={handler}>Przerenderuj Komponent</button>
      {counterComponent}
    </div>
  );
}

const Counter = ({rerenderCounter}) => {
  const [counter, setCounter] = useState(0);

  const handleMouseMoove = event => setCounter(event.clientX);
  
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMoove);
    return () => { //zapobiega wyciakowi danych po odmonowaniu komponentu
      alert('Komponent jest odmontowywany, następuje odpięcie Listenera!'); 
      window.removeEventListener('mousemove', handleMouseMoove);
    }
  }, [rerenderCounter])

  return (
    <div>
      <p>{counter}</p>
      <p>{rerenderCounter}</p>
    </div> 
  );
}

export default App;
