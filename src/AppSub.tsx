import * as React from "react";
import moment from "moment";
import UserInterface from './UserInterface';
import './App.css';

class App extends React.Component<UserInterface, {}> {
  constructor (props: UserInterface){
    super(props);
  }

  render() {
    const { name, age, address, dob } = this.props;
    return (
      <div className="AppContent">
        <div><strong>Name:</strong> {name}</div>
        <div><strong>Age:</strong> {age}</div>
        <div><strong>Address:</strong> {address}</div>
        <div><strong>Date of Birth:</strong> {moment(dob).format('DD-MM-YYYY')}</div>
      </div>
    );
  }
}

export default App;
