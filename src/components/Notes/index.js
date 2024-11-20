// Write your code here
import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  NotesContainer,
  Title,
  InputContainer,
  TitleInput,
  TextAreaInput,
  ButtonContainer,
  Button,
  UnorderListContainer,
  EmptyViewContainer,
  BulbImg,
  Heading,
  Discription,
} from './styledComponents'

const Notes = () => {
  const [titleInput, setTitle] = useState('')
  const [textAreaInput, setTextArea] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeTitleInput = event => setTitle(event.target.value)

  const onChangeTextAreaInput = event => setTextArea(event.target.value)

  const onSubmitNotes = event => {
    event.preventDefault()

    const newList = {
      id: uuidv4(),
      titleInput,
      textAreaInput,
    }
    setNotesList(prevList => [...prevList, newList])
    setTitle('')
    setTextArea('')
  }

  const listLength = notesList.length
  console.log(notesList)

  return (
    <NotesContainer>
      <Title>Notes</Title>
      <form onSubmit={onSubmitNotes}>
        <InputContainer>
          <TitleInput
            type="text"
            placeholder="Title"
            onChange={onChangeTitleInput}
            value={titleInput}
          />
          <TextAreaInput
            rows="4"
            placeholder="Take a Note..."
            onChange={onChangeTextAreaInput}
            value={textAreaInput}
          ></TextAreaInput>
          <ButtonContainer>
            <Button type="submit">Add</Button>
          </ButtonContainer>
        </InputContainer>
      </form>
      {listLength > 0 ? (
        <UnorderListContainer>
          {notesList.map(eachNote => (
            <NoteItem key={eachNote.id} eachNote={eachNote} />
          ))}
        </UnorderListContainer>
      ) : (
        <EmptyViewContainer>
          <BulbImg
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <Heading>No Notes Yet</Heading>
          <Discription>Notes you add will appear here</Discription>
        </EmptyViewContainer>
      )}
    </NotesContainer>
  )
}

export default Notes
