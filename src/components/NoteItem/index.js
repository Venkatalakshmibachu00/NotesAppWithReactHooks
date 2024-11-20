// Write your code here
import {NoteListContainer, Name, Discription} from './styledComponents'

const NoteItem = props => {
  const {eachNote} = props
  const {titleInput, textAreaInput} = eachNote

  return (
    <NoteListContainer>
      <Name>{titleInput}</Name>
      <Discription>{textAreaInput}</Discription>
    </NoteListContainer>
  )
}

export default NoteItem
