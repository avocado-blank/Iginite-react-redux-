import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { smallImage } from '../ulti'

function GameDetail({ pathId }) {
  const { game, screen, isLoading } = useSelector((state) => state.detail)
  const history = useHistory()
  const exitHandler = (e) => {
    const element = e.target
    // console.log(element)
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto'
      history.push('/')
    }
  }

  const backHandler = () => {
    document.body.style.overflow = 'auto'
  }
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitHandler}>
          <Detail layoutId={pathId}>
            <Link to="/">
              <BackBtn onClick={backHandler}>Back</BackBtn>
            </Link>
            <hr></hr>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title${pathId}`}>{game.name}</motion.h3>
                <p>Rating : {game.rating}</p>
              </div>
              <Info>
                <h3>PlatForms</h3>
                <PlatForms>
                  {game.platforms.map((data) => (
                    <h3 key={data.platform.id}>{data.platform.name}</h3>
                  ))}
                </PlatForms>
              </Info>
            </Stats>
            <Media>
              {game.background_image ? (
                <motion.img
                  src={smallImage(game.background_image, 640)}
                  alt="img"
                  layoutId={`image${pathId}`}
                ></motion.img>
              ) : (
                <div className="no-photo">No Photo</div>
              )}
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results.map((screen) => (
                <img
                  src={smallImage(screen.image, 640)}
                  alt="game"
                  key={screen.id}
                ></img>
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  )
}

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  position: fixed;
  overflow-y: scroll;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 10rem;
  position: absolute;
  background: white;
  left: 10%;
  color: black;
  img {
    width: 100%;
    padding: 0.5rem 0;
  }
`
const Stats = styled(motion.div)`
  display: flex;
  justify-content: space-between;
`
const Info = styled(motion.div)`
  text-align: center;
  h3 {
    font-size: 1.5rem;
  }
`
const PlatForms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  h3 {
    padding: 0 0.5rem;
    font-size: 0.8rem;
  }
`

const Media = styled(motion.div)`
  margin-top: 3rem;

  .no-photo {
    color: red;
  }
`
const Description = styled(motion.div)`
  margin: 3rem 0;
`
const BackBtn = styled(motion.div)`
  margin: 1.5rem 0;
  font-size: 1.5rem;
  font-weight: bolder;
  color: black;
  transition: all 0.3s ease;
  &:hover {
    color: #ff6767;
  }
`
export default GameDetail
