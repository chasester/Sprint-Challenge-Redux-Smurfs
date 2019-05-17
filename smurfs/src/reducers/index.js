/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

import {FETCH_START,FETCH_SUCCESS,FETCH_FAIL} from "../actions"

const initialState =
{
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: ""
}

export const smurfer = (state = initialState, action) => 
{
  switch(action.type)
  {
    case FETCH_START:
      console.log("in");
      return{
        ...state,
        fetchingSmurfs: true
      }
    case FETCH_SUCCESS:
      console.log(action.payload);
        return{
          ...state,
          fetchingSmurfs: false,
          smurfs: action.payload
        }
    case FETCH_FAIL:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload.message
      }
    default:
        return state;
  }
  
}