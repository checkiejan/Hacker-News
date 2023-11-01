import React, { useContext, useEffect, useReducer, useState } from 'react'
import useFetch from './useFetch'
import {
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'
import reducer from './reducer'


const initialState = {
  inp: 'react',
  page: 0,
  display: []
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {data, stateFetch} = useFetch({page: state.page, query: state.inp});
  

  // const [inp, setInp] = useState('react');
  // const [page, setPage] = useState(0);
  // const [display, setDisplay] = useState(data.hits);
  // console.log(stateFetch.loading);
  useEffect(()=>{
    dispatch({type:SET_STORIES, arg: data.hits})
  },[data]);
  const handleChange = (e) => {
    dispatch({type: HANDLE_SEARCH, arg:e.target.value});
    dispatch({type: HANDLE_PAGE, arg:0});
    // setInp(e.target.value);
    // setPage(page => 0);
  }
  const removeItem = (title) => {
    dispatch({type:REMOVE_STORY, arg:title});
    {/* setDisplay((display) => display.filter(item => item.title !== title)); */}
  }
  const check = (num) => {
    if(num<0){
      return data.nbPages-1
    }else if(num>=data.nbPages){
      return 0;
    }
    return num;
  }
  const click = (e) => {
    if(e.target.name === 'prev'){
      // setPage(page => check(page-1)); 
      dispatch({type: HANDLE_PAGE, arg:check(state.page-1)});
    }else if(e.target.name === 'next'){
      // setPage(page => check(page+1)); 
      dispatch({type: HANDLE_PAGE, arg:check(state.page+1)});
    }
  }
  return <AppContext.Provider
   value={{
     data,
     loading : stateFetch.loading,
     display: state.display,
     inp: state.inp,
     page: state.page,
     click,
     removeItem,
     handleChange
   }}
   >
   {children}
   </AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
