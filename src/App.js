import { useState } from 'react';
import Dropdown from './Dropdown';
import './style.css'

function App() {
  const [selected, setSelected] = useState("Choose one")
    return (
 <Dropdown selected={selected} setSelected={setSelected}/>
  );
}

export default App;
