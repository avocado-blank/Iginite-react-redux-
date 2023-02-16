import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { loadDetail } from '../actions/detailAction'
import { Link } from 'react-router-dom'
import { smallImage } from '../ulti'

function Games({ name, released, image, id }) {
  const stringId = id.toString()
  const dispatch = useDispatch()
  const loadDetailHandler = (id) => {
    document.body.style.overflow = 'hidden'
    dispatch(loadDetail(id))
  }

  // console.log(image)

  return (
    <Link to={`/game/${id}`}>
      <StyledGames onClick={() => loadDetailHandler(id)} layoutId={stringId}>
        <motion.h3 layoutId={`title${stringId}`}>{name}</motion.h3>
        <p>{released}</p>
        {image ? (
          <motion.img
            src={smallImage(image, 640)}
            alt={name}
            layoutId={`image${stringId}`}
          ></motion.img>
        ) : (
          <Nophoto>No Photo</Nophoto>
        )}
      </StyledGames>
    </Link>
  )
}

const StyledGames = styled(motion.div)`
  height: 50vh;
  text-align: center;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  cursor: pointer;
  user-select: none;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`

const Nophoto = styled(motion.div)`
  /* background: red; */
  color: red;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Games
