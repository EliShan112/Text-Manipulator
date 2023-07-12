// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import { useState } from 'react';
import TextForms from './components/TextForms';
import Alert from './components/Alert';
import * as React from "react";
// import {
//   BrowserRouter,
//   Route,
//   Link,
//   Routes,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  
  const [alert, setAlert] = useState(null)

  const showAlert =(message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode("dark")
      document.body.style.backgroundColor = '#2B3035'
      // '#2B3035'
      showAlert("You have enabled dark mode", "success")
    }

    else{
      setMode("light")
      document.body.style.backgroundColor = '#F8F9FA'
      // '#F8F9FA'
      showAlert("You have enabled light mode", "success")
    }


  }

  return (
    <>
    {/* <BrowserRouter> */}
    <Navbar title="Eli" contact="Contact Me" about="About Us" home="Home" mode={mode} toggleMode ={toggleMode}/>
    <Alert alert = {alert} />

    {/* <About mode={mode}/> */}
    

    <TextForms mode={mode} showAlert ={showAlert}/>
     
      {/* <Routes>
        <Route exact path="/" element={<TextForms mode={mode} showAlert ={showAlert}/>}/>
        <Route exact path="about" element={<About  mode={mode}/>} />
      </Routes>
    </BrowserRouter> */}
  </>
  );
}

export default App;
