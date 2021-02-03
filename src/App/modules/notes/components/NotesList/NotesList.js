import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { fetchNotes } from '../../notes.action'
import { getNotes, getNotesLoading } from '../../notes.selectors'
import Loader from '../../../shared/components/Loader'
import NoteItem from './NoteItem'
import styles from './NotesList.module.scss'

const NotesList = () => {
  const dispatch = useDispatch()
  const notes = useSelector(getNotes())
  const loading = useSelector(getNotesLoading())

  useEffect(() => {
    dispatch(fetchNotes())
  }, [dispatch])

  return (
    <>
      {loading && <Loader />}
      {!notes.length && !loading && (
        <span className={styles.heading}>No notes</span>
      )}
      <TransitionGroup timeout={200} className={styles.transitionWrapper}>
        {notes.map(note => (
          <CSSTransition
            key={note.id}
            timeout={200}
            classNames={{
              enter: styles.enter,
              enterActive: styles.enterActive,
              exit: styles.exit,
              exitActive: styles.exitActive
            }}
          >
            <NoteItem note={note} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  )
}

export default NotesList
