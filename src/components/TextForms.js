import React, { useState } from 'react'
import './TextForms.css'
import './Utility.css'

export default function TextForms(props) {
    const [text, setText] = useState("")

    const handleOnClick = () =>{
        // console.log("uppercase clicked")
        let newText = text.toUpperCase();
        setText(newText)   
        props.showAlert("You have capitalized the text!", "success") 
    }
    const lowerCase = () =>{
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("You have lower case the text!", "success") 
    }

    const clearText = () =>{
      setText("");
      console.clear();
      props.showAlert("You have cleared the text!", "success") 
    }

    const copyText = () =>{
      navigator.clipboard.writeText(text);
      // console.log("Message has copied in clipboard!")
      props.showAlert("Message has copied in clipboard!", "success") 
    }

    const handler = (e) =>{
        // console.log("On change")
        setText(e.target.value)
    }
  return (
    <>
    <div className='container' style={{color : props.mode === 'light'? 'black':'white'}}>
      <div className="heading">
      <h1>Enter Your Text Here</h1>
      </div>
      <form action="" style={{color : props.mode === 'light'? 'black':'white'}}>
        <label htmlFor="">{props.email}</label>
        <div className="tex">
        <textarea type="text" value={text} onChange={handler} style={{backgroundColor : props.mode === 'light'? '#F8F9FA':'#2B3035', color : props.mode === 'light'? 'black':'white'}} name="" id=""></textarea>
        </div>
      </form>
      <button className='m-x' onClick={handleOnClick}>Upper Case</button>
      <button className='m-x' onClick={lowerCase}>Lower Case</button>
      <button className='m-x' onClick={clearText}>Clear Text</button>
      <button onClick={copyText}>Copy Text</button>

    </div>

    <div className="container" style={{color : props.mode === 'light'? 'black':'white'}}>
      <p className='f-size'>Your text summary</p>
      <p>{text.split(" ").length} are words and {text.length} are character   </p>
      <p>{0.008 * text.split(" ").length} will take time for you to read whole paragraph</p>
      <p className='f-size m-y'>Preview</p>
      <p>{text.length>0 ? text : "Enter something in above textbox to preview here"}</p>
    </div>

    </>
  )
}
