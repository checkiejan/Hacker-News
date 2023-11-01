import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const {inp, handleChange} = useGlobalContext();
  return <>
    <form className='search-form'>
      <h2>Search Hacker News</h2>
      <input
      type='text' 
      className='form-input'
      onChange={(e)=>handleChange(e)}
      value={inp}
      />
    </form>
  </>
}

export default SearchForm
