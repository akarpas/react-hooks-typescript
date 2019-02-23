import * as React from "react";
import { useState } from "react";
import './App.css';
import AppSub from './AppSub';

const App = () => {
  const [tempName, setTempName] = useState('');
  const [name, setName] = useState('Andreas');

  return (
    <React.Fragment>
      <AppSub
        name={name}
        age={34}
        address="Parlament 22"
        dob={new Date("10/11/1984")}
      />
      <form className="Controls">
        <input className="Input" type="text" onChange={(event) => setTempName(event.target.value)}/>
        <button className="Button" onClick={(event) => {event.preventDefault(); setName(tempName ? tempName : name)}}>Change Name</button>
      </form>
    </React.Fragment>
  )
}

export default App;
