import React, { useContext }  from 'react'
import { themeContext } from '../contexts/ThemeContext'
import { QueContext } from '../contexts/QueryContext'
import { useWindowSize } from '../customHooks/useWindowSize'

function Search() {
const [mode]=useContext(themeContext)
const [,setQuery]=useContext(QueContext)
// const windowSize=useWindowSize() //custom hook
  return (
    <>
    <div className={`container-fluid d-flex justify-content-between  ${mode?'bg-light':'bg-dark'}`}>
    <section className={`d-flex align-items-center navbar ${mode?'bg-light':'bg-dark'}`}>
      <input  onChange={(e)=>setQuery(e.target.value.toLowerCase())}type="text" placeholder='Enter Country Name' />
    </section>
    {/* <h1>{windowSize.width} X {windowSize.height}</h1> */}
    <section className='d-flex- align-items-center navbar'>
      <select className="Filter BY Region" onChange={(e)=>setQuery(e.target.value)}>
        <option hidden>Filter By Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </section>
    </div>
    </>
  )
}

export default Search
