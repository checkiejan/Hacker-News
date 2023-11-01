import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
  const {click, data, page} = useGlobalContext()
  return <>
    <div className='btn-container'>
      <button onClick={(e) => click(e)} name='prev'>prev</button>
      <p>{page+1} of {data.nbPages?data.nbPages:'50'}</p>
      <button onClick={(e) => click(e)} name='next'>next</button>
    </div>
  </>
}

export default Buttons
 