import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createNote } from '../../notes.action'
import styles from './AddNoteForm.module.scss'

const AddNoteForm = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef(null)

  const dispatch = useDispatch()

  const submitHandler = event => {
    event.preventDefault()
    if (value.trim()) {
      dispatch(createNote(value))
      setValue('')
    }
    inputRef.current.blur()
  }

  return (
    <form className={styles.addForm} onSubmit={submitHandler}>
      <input
        className="basic"
        name="context"
        type="text"
        autoComplete="off"
        value={value}
        onChange={e => setValue(e.target.value)}
        ref={inputRef}
      />
      <button type="submit" className="basic">
        +
      </button>
    </form>
  )
}

export default AddNoteForm
