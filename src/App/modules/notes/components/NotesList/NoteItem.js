import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateNote, deleteNote } from '../../notes.action'
import dayjs from 'dayjs'
import cs from 'classnames'
import styles from './NotesList.module.scss'

const NoteItem = ({ note }) => {
  const dispatch = useDispatch()
  const [value, setValue] = useState(note.context)
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.blur()
  }, [note])

  const submitHandler = event => {
    event.preventDefault()
    const context = value.trim()
    if (context && context !== note.context) {
      dispatch(updateNote({ context, id: note.id }))
    }
  }

  return (
    <div className={styles.item}>
      <form
        className={styles.form}
        onSubmit={submitHandler}
        onBlur={() => setValue(note.context)}
      >
        <input
          name="note"
          type="text"
          autoComplete="off"
          className={cs('basic', styles.input)}
          value={value}
          onChange={e => setValue(e.target.value)}
          ref={inputRef}
        />
        <button
          type="button"
          className="basic"
          onClick={() => dispatch(deleteNote(note.id))}
        >
          &times;
        </button>
      </form>
      <span>
        Last edit at <strong>{dayjs(note.editedAt).format('YYYY-MM-DD HH:mm')}</strong>
      </span>
    </div>
  )
}

export default NoteItem
