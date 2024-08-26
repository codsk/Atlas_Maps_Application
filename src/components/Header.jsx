import React, { useContext } from 'react'
import { themeContext } from '../contexts/ThemeContext'
function Header() {
  function handleSubmit(){
    setMode(!(mode))
    localStorage.setItem('isDarkMode',!mode)
    // console.log(props.mode)
  }
  const [mode,setMode]=useContext(themeContext)

  return (
    <>
      <header className={`navbar d-flex justify-content-between border ${mode?'bg-light':'bg-dark'} sticky-top`}>
        <h2 className='text-primary'>where in the world?</h2>
        <button onClick={()=>handleSubmit()} >{mode?"Dark Mode":"light Mode"}</button>
      </header>
    </>
  )
}

export default Header
