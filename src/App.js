import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount (count + 1);
  }

  const decrementCount = () => {
    if(count > 0){
      setCount (count - 1);
    } else {
      alert("lowest value is zero")
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{display: 'flex', gap: '30px', alignItems: 'center'}}>
          <button onClick={decrementCount} style={{fontSize: 30, fontWeight: 900, color: 'white', border: '1px solid white', background: 'black', padding: '5px',minWidth: '100px', borderRadius: 25}}>-</button>
          <div style={{fontSize: 30, fontWeight: 900, color: 'white'}}> {count} </div>
          <button onClick={incrementCount} style={{fontSize: 30, fontWeight: 900, color: 'white', border: '1px solid white', background: 'black', padding: '5px',minWidth: '100px', borderRadius: 25}}>+</button>
        </div>
      </header>
    </div>
  );
}

export default App;
