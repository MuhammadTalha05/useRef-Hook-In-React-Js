// when we manuplating Dom element in react so we use useRef hook to change dom ELEMENt

// Note : Dont use direct method like docucment.getelement.... etc

import React, { useRef } from 'react'

const App = () => {
  const logo = useRef(null)

  // handleClick is Directly chnaging the dom
  const handleClick = ()=>{
    // logo.current.style.width="200px"
    let c = document.getElementById('hel')
    c.style.width="200px";
  }

  // HandleClick1 is Use useRef to Manupulating Dom This is recomended Method
  const handleClick1 = ()=>{
    logo.current.style.width="200px"
  }

  // useRef is return Object  
  console.log(logo);
  return (
    <div>
      <img src={'/vite.svg'} alt="logo" onClick={handleClick1} ref={logo} />
      <img  id='hel' src={'/vite.svg'} alt="logo" onClick={handleClick} />
    </div>
  )
}

export default App