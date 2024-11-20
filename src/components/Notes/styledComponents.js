// Style your elements here
import styled from 'styled-components'

export const NotesContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-cntent: center;
  align-items: center;
  gap: 15px;
  padding: 40px;
`

export const Title = styled.h1`
  color: #4c63b6;
  font-family: 'Bree Serif';
  font-size: 35px;
  font-weight: 550;
  `

export const InputContainer = styled.div`
  height: 200px;
  width: 70vw;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #cbd5e1;
  border-radius: 3px;
  gap: 15px;
  background-color: #ffffff;
`

export const TitleInput = styled.input`
  background-color: transporent;
  border: none;
  color: #aab8c8;
`

export const TextAreaInput = styled.textarea`
  background-color: transporent;
  border: none;
  color: #aab8c8;
`

export const Button = styled.button`
  color: #ffffff;
  background-color: #4c63b6;
  border: none;
  padding: 8px;
  padding-left: 12px;
  padding-right: 12px;
`

export const ButtonContainer = styled.div`
  align-self: flex-end;
`

export const UnorderListContainer = styled.ul`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`

export const EmptyViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-cntent: center;
  align-items: center;
  margin-top: 25px;
`

export const BulbImg = styled.img`
  height: 70px;
  width: 70px;
`

export const Heading = styled.h3`
  font-size: 22px;
  color: #334155;
`

export const Discription = styled.p`
  font-size: 15px;
  color: #aab8c8;
`
