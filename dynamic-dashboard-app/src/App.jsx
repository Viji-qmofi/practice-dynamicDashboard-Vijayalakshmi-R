import { useState } from 'react'
import './App.css'
import DynamicDashboard from './components/DynamicDashboard';

const App = () =>{
let userName = "Alex";
const isPremium = true;


return(
  <div>
  <DynamicDashboard />

  </div>
);
}


export default App
 