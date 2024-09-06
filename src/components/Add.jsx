import React, { useState } from 'react'

const Add = () => {

  const [first, setfirst] = useState('hello')

  function handleinput(e){
    setfirst(e.target.value)
    if(e.target.value<0){
      setfirst("Please Enter Positive NUmber")
      e.target.value = ''
    }
   else if(e.target.value>=18){
      setfirst("You Are Eligible to Vote")
    }
    else{
      setfirst("You Are Not Eligible to Vote")
    }
  }
  function handleinput(e){
    // e.target.value = ''
  }
  return (
    <>
    {/* onChange={(e)=>handleinput(e)} */}
        <h1>hello</h1>
        <input 
        type="text" onChange={(e)=>handleinput(e)}
        placeholder='Enter Your Age'
        required
        />
        <button className='button1' onClick={handleinput}>RESET</button>
        <p>{first}</p>
    </>
  )
}

export default Add