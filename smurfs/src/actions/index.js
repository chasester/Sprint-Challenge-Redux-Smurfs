/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - addSmurf
   U - updateSmurf
   D - deleteSmurf
*/

import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_END = "FETCH_END";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL"

export const ADD_SMURF = 'ADD_SMURF';
export const UPD_SMURF = 'UPDATE_SMURF';
export const DEL_SMURF = 'DELETE_SMURF';

export function addSmurf(data, id=-1)
{
  var putid = id.toString(10);
  var func = "axios.put";
  if(id === -1) { putid = ""; func = "axios.post"}
  return function(dispatch) {
    return eval(func)(`http://localhost:3333/smurfs/${putid}`, data).then(res => {
      const loggedInAction = { type: ADD_SMURF, payload: res.data }
      dispatch(loggedInAction);
    });
  };
}

export function updateSmurf(data, id)
{
 
}

export function deleteSmurf(data)
{
}

export function getSmurfs()
{
  dispatch({ type: FETCH_START });
  axios
    .get('http://localhost:3333/smurfs/')
    .then(res =>{
      dispatch({ type: FETCH_SUCCESS, payload: res.data.results })
    }
    )
    .catch(err => { dispatch({ type: FETCH_FAIL, payload: err })});
}