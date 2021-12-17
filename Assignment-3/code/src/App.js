import React from 'react';
import './App.css';
import './user.css';
import Userinfo from './Userinfo';
const userdata = {
  "name": "Alan Ford",
  "Appointment": "09:00 (24-05-2016)",
  "EmployeeId": "0000515",
  "Email": "alan.ford@gmai.com",
  "Phone": "9661849483",
  "status": "In progress",
  "Door": "Open",
  "Time": "09:00"

}
function App() {
  return (
    <Userinfo data={userdata} />
  )
}
export default App;


