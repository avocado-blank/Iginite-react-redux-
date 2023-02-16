import { motion } from 'framer-motion'
import { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { searchGames } from '../actions/gamesAction'
function Nav() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const updateInput = (e) => {
    setText(e.target.value)
  }

  const fetchSearch = () => {
    // console.log(text)
    const inputText = text.trim()
    console.log(inputText)
    if (inputText === '') {
      return
    } else {
      dispatch(searchGames(inputText))
    }
  }

  const clearInput = () => {
    setText('')
  }

  const clearSearch = () => {
    dispatch({ type: 'CLEAR_SEARCH' })
  }
  return (
    <>
      <Navbar>
        <Heading onClick={clearSearch}>
          <h2>Ignite</h2>
        </Heading>

        <div className="search">
          <input value={text} onChange={updateInput} type="text" />
          <button className="clear" onClick={clearInput}>
            X
          </button>
          <button onClick={fetchSearch}>Search</button>
        </div>
      </Navbar>
    </>
  )
}

const Navbar = styled(motion.div)`
  text-align: center;
  padding: 2rem 0;
  input {
    width: 30%;
    font-size: 1.5rem;
    border: none;
    font-weight: bold;
    padding: 0.5rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    background: #ff6767;
    padding: 0.5rem 2rem;
    border: none;
    cursor: pointer;
    color: white;
  }
  .clear {
    background-color: white;
    color: black;
    font-weight: bolder;
  }
`
const Heading = styled(motion.div)`
  padding: 2rem;
  cursor: pointer;
`
export default Nav
