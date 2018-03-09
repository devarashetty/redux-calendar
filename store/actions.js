export const ADD_NOTES = 'ADD_NOTES';
export const DELETE_NOTES = 'DElETE_NOTES';
export const UPDATE_NOTES = 'UPDATE_NOTES';
 
export const availableActions = {
  ADD_NOTES: 'ADD_NOTES',
  DELETE_NOTES: 'DELETE_NOTES',
  UPDATE_NOTES: 'UPDATE_NOTES'
};



export function addNotes(note) {
  return { type: ADD_NOTES,note}
}
 
export function updateNotes(note) {
  return { type: UPDATE_NOTES, note}
}
 
export function deleteNotes(note) {
  return { type: DELETE_NOTES, note }
}