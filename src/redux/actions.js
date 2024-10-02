
//ActionTypes...
export const ADD_BLOCK = "ADD_BLOCK";
export const EDIT_BLOCK = "EDIT_BLOCK";
export const UPDATE_BLOCK_STATUS = "UPDATE_BLOCK_STATUS";
export const SET_FILTER = "SET_FILTER";
export const DELETE_BLOCK = "DELETE_BLOCK";

//Actions
export const addBLOCK = (block) => ({
  type: ADD_BLOCK,
  payload: block,
});

export const editBLOCK = (block) => ({
  type: EDIT_BLOCK,
  payload: block,
});

export const updateBLOCKStatus = (id, status) => ({
  type: UPDATE_BLOCK_STATUS,
  payload: { id, status },
});
export const deleteBLOCK = (id) => ({
  type: DELETE_BLOCK,
  payload: id,
});
export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});
