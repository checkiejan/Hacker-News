import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

const reducer = (state, action) => {
  switch(action.type){
    case SET_LOADING:
    {
      if(action.arg === false){
        return {...state, loading: false}
      }else{
        return {...state, loading: true}
      }
    }
    case SET_STORIES:
    {
      const tmp = action.arg;
      return {...state, display: tmp}
    }
    case REMOVE_STORY:
    {
      const tmp = state.display.filter(item => item.title !== action.arg)
     return {...state, display: tmp}
    }
    case HANDLE_PAGE:
    {
      const tmp = action.arg;
      return {...state, page: tmp}
    }
    case HANDLE_SEARCH:
    {
      const tmp = action.arg;
      return {...state, inp: tmp}
    }
    default:
    {
      return state
    }
  }
  
}
export default reducer
