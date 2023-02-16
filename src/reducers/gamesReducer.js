const initState = {
  popularGames: [],
  upcoming: [],
  news: [],
  searched: [],
}

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_GAMES':
      return {
        ...state,
        popularGames: action.payload.popularGames,
        upcoming: action.payload.upcoming,
        news: action.payload.news,
      }
    case 'FETCH_SEARCH':
      return {
        ...state,
        searched: action.payload.searched,
      }
    case 'CLEAR_SEARCH':
      return {
        ...state,
        searched: [],
      }
    default:
      return { ...state }
  }
}

export default gamesReducer
