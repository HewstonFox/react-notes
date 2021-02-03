import { NOTES_TYPES } from './notes.action'

const initialState = {
  list: [],
  loading: false
}

export const notes = (state = initialState, action) => {
  switch (action.type) {
    case NOTES_TYPES.LOADER.SHOW:
      return {
        ...state,
        loading: true
      }

    case NOTES_TYPES.LOADER.HIDE:
      return {
        ...state,
        loading: false
      }

    case NOTES_TYPES.FETCH.SUCCESS:
      return {
        ...state,
        list: action.payload
      }

    case NOTES_TYPES.CREATE.SUCCESS:
      return {
        ...state,
        list: [action.payload, ...state.list]
      }

    case NOTES_TYPES.UPDATE.SUCCESS:
      return {
        ...state,
        list: [
          action.payload,
          ...state.list.filter(n => n.id !== action.payload.id)
        ]
      }

    case NOTES_TYPES.DELETE.SUCCESS:
      return {
        ...state,
        list: state.list.filter(n => n.id !== action.payload)
      }

    default:
      return state
  }
}
