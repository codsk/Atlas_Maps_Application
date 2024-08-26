import React from 'react'

function Bootstrap() {
  // const form=document.querySelector('form')
  // form.addEventListener('submit',e=>{
  //   if(!form.checkValidity()){
  //     e.preventDefault()
  //   }
  //   form.classList.add(`was-validate`)
  // })
  return (
   <>
    <div className="container">
      <button className='btn btn-primary' ></button>
    <div className="alert alert-success alert-dismissible " role='alert'>Alert
      <button className='btn btn-close' aria-label='close' ></button>
    </div>
    </div> 
   </>
  )
}

export default Bootstrap
