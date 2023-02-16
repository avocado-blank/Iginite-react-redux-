import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadGames } from '../actions/gamesAction'
import styled from 'styled-components'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import Games from './Games'
import GameDetail from './GameDetail'
import { useLocation } from 'react-router-dom'
function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadGames())
  }, [dispatch])

  const { popularGames, upcoming, news, searched } = useSelector(
    (state) => state.games,
  )
  const location = useLocation()
  const pathId = location.pathname.split('/')[2]
  // console.log(pathId)
  return (
    <GamesList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div>
            <Homenav>
              <button
                onClick={() => {
                  dispatch({ type: 'CLEAR_SEARCH' })
                }}
              >
                Back
              </button>
              <h2>Search Games</h2>
            </Homenav>
            <UpGames>
              {searched.map((game) => (
                <Games
                  name={game.name}
                  id={game.id}
                  released={game.released}
                  image={game.background_image}
                  key={game.id}
                ></Games>
              ))}
            </UpGames>
          </div>
        ) : (
          ''
        )}
        <h2>Upcoming Games</h2>
        <UpGames>
          {upcoming.map((game) => (
            <Games
              name={game.name}
              id={game.id}
              released={game.released}
              image={game.background_image}
              key={game.id}
            ></Games>
          ))}
        </UpGames>
        <h2>Popular Games</h2>
        <UpGames>
          {popularGames.map((game) => (
            <Games
              name={game.name}
              id={game.id}
              released={game.released}
              image={game.background_image}
              key={game.id}
            ></Games>
          ))}
        </UpGames>
        <h2>New Games</h2>
        <UpGames>
          {news.map((game) => (
            <Games
              name={game.name}
              id={game.id}
              released={game.released}
              image={game.background_image}
              key={game.id}
            ></Games>
          ))}
        </UpGames>
      </AnimateSharedLayout>
    </GamesList>
  )
}

const GamesList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`

const UpGames = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 5rem;
  grid-column-gap: 3rem;
`

const Homenav = styled(motion.div)`
  button {
    border: none;
    padding: 0.5rem 2rem;
    font-size: 1.5rem;
    color: white;
    background: #ff6767;
    cursor: pointer;
  }
  h2 {
    padding: 1rem 0rem 5rem 0rem;
  }
`

export default Home
