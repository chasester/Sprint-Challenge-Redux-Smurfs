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
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL"

export function addSmurf(data, id=-1)
{
  var putid = id.toString(10);
  if(id === -1) {
    return function(dispatch) {
      return axios.post(`http://localhost:3333/smurfs/`, data).then(res => {
        const loggedInAction = { type: FETCH_SUCCESS, payload: res.data }
        dispatch(loggedInAction);
      });
    };
  }
  {
    return function(dispatch) {
      return axios.put(`http://localhost:3333/smurfs/${id}`, data).then(res => {
        const loggedInAction = { type: FETCH_SUCCESS, payload: res.data }
        dispatch(loggedInAction);
      });
    };
  }
}

export function updateSmurf(data, id)
{
 
}

export function deleteSmurf(id)
{
  return function(dispatch) {
    return axios.delete(`http://localhost:3333/smurfs/${id}`).then(res => {
      const loggedInAction = { type: FETCH_SUCCESS, payload: res.data }
      dispatch(loggedInAction);
    });
  } 
}

export const getSmurfs = () => dispatch => 
{
  dispatch({ type: FETCH_START });
  axios
    .get('http://localhost:3333/smurfs/')
    .then(res =>{
      dispatch({ type: FETCH_SUCCESS, payload: res.data })
    }
    )
    .catch(err => { dispatch({ type: FETCH_FAIL, payload: err })});
}