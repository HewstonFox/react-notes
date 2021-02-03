import Axios from 'axios'

const ROUTE = 'http://localhost:3001/notes'

export const getAllNotes = async () => {
  const response = await Axios.get(ROUTE)
  return response.data
}

export const createNote = async value => {
  const response = await Axios.post(ROUTE, { context: value })
  return response.data
}

export const deleteNote = async id => {
  await Axios.delete(`${ROUTE}/${id}`)
  return id
}

export const updateNote = async note => {
  const res = await Axios.put(`${ROUTE}/${note.id}`, { context: note.context })
  return res.data
}
