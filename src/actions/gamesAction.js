import axios from 'axios'
import {
  newGamesURL,
  popularGamesURL,
  searchURL,
  upcomingGamesURL,
} from '../api'

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL())
  const upcomingData = await axios.get(upcomingGamesURL())
  const newGamesData = await axios.get(newGamesURL())

  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popularGames: popularData.data.results,
      upcoming: upcomingData.data.results,
      news: newGamesData.data.results,
    },
  })
}

export const searchGames = (gameName) => async (dispatch) => {
  const searchedGamesData = await axios.get(searchURL(gameName))
  dispatch({
    type: 'FETCH_SEARCH',
    payload: {
      searched: searchedGamesData.data.results,
    },
  })
}
