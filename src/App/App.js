import AddNote from './modules/notes/components/AddNoteForm'
import NotesList from './modules/notes/components/NotesList'
import LanguageSwitch from './modules/shared/components/LanguageSwitch'
import styles from './App.module.scss'

const App = () => {
  return (
    <div className={styles.wrapper}>
      <LanguageSwitch />
      <h1>Notes</h1>
      <AddNote />
      <NotesList />
    </div>
  )
}
export default App
