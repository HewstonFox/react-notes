import * as notesService from '../../../services/notes'

export const NOTES_TYPES = {
  LOADER: {
    SHOW: 'NOTES_LOADER_SHOW',
    HIDE: 'NOTES_LOADER_HIDE'
  },
  FETCH: {
    SUCCESS: 'NOTES_FETCH_SUCCESS',
    FAILURE: 'NOTES_FETCH_FAILURE'
  },
  CREATE: {
    SUCCESS: 'NOTE_CREATE_SUCCESS',
    FAILURE: 'NOTE_CREATE_FAILURE'
  },
  UPDATE: {
    SUCCESS: 'NOTE_UPDATE_SUCCESS',
    FAILURE: 'NOTE_UPDATE_FAILURE'
  },
  DELETE: {
    SUCCESS: 'NOTE_DELETE_SUCCESS',
    FAILURE: 'NOTE_DELETE_FAILURE'
  }
}

export const fetchNotes = () => async dispatch => {
  try {
    dispatch({ type: NOTES_TYPES.LOADER.SHOW })
    const response = await notesService.getAllNotes()
    dispatch({ type: NOTES_TYPES.FETCH.SUCCESS, payload: response })
    return response
  } catch (e) {
    dispatch({ type: NOTES_TYPES.FETCH.FAILURE, payload: e })
  } finally {
    dispatch({ type: NOTES_TYPES.LOADER.HIDE })
  }
}

export const createNote = note => async dispatch => {
  try {
    const response = await notesService.createNote(note)
    dispatch({ type: NOTES_TYPES.CREATE.SUCCESS, payload: response[0] })
  } catch (e) {
    dispatch({ type: NOTES_TYPES.CREATE.FAILURE, payload: e })
  }
}

export const updateNote = note => async dispatch => {
  try {
    const response = await notesService.updateNote(note)
    dispatch({ type: NOTES_TYPES.UPDATE.SUCCESS, payload: response[0] })
  } catch (e) {
    dispatch({ type: NOTES_TYPES.UPDATE.FAILURE, payload: e })
  }
}

export const deleteNote = note => async dispatch => {
  try {
    const response = await notesService.deleteNote(note)
    dispatch({ type: NOTES_TYPES.DELETE.SUCCESS, payload: response })
  } catch (e) {
    dispatch({ type: NOTES_TYPES.DELETE.FAILURE, payload: e })
  }
}
