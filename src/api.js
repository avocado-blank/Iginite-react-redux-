const baseUrl = 'https://api.rawg.io/api/'
const apiKey = 'f5f26411a2d1431ea1d7ea798f0876a0'
//getDate

const getCurrentDate = () => {
  const currentDay = new Date().getDate()
  if (currentDay < 10) {
    return `0${currentDay}`
  } else {
    return currentDay
  }
}

const getCurrentMonth = () => {
  const currentMonth = new Date().getMonth() + 1
  if (currentMonth < 10) {
    return `0${currentMonth}`
  } else {
    return currentMonth
  }
}

const getCurrentYear = () => {
  const currentYear = new Date().getFullYear()
  return currentYear
}

const currentYear = `${getCurrentYear()}-${getCurrentMonth()}-${getCurrentDate()}`
const lastYear = `${
  getCurrentYear() - 1
}-${getCurrentMonth()}-${getCurrentDate()}`
const nextYear = `${
  getCurrentYear() + 1
}-${getCurrentMonth()}-${getCurrentDate()}`

const popularGames = `games?key=${apiKey}&dates=${lastYear},${currentYear}&ordering=-rating&page_size=10`
const upcomingGames = `games?key=${apiKey}&dates=${currentYear},${nextYear}&ordering=-added&page_size=10`
const newGames = `games?key=${apiKey}&dates=${lastYear},${currentYear}&ordering=-released&page_size=10`
// const popularGamesURL = `${baseUrl}${popularGames}`
// console.log(popularGamesURL)
export const popularGamesURL = () => `${baseUrl}${popularGames}`
export const upcomingGamesURL = () => `${baseUrl}${upcomingGames}`
export const newGamesURL = () => `${baseUrl}${newGames}`
export const detailURL = (game_id) => `${baseUrl}games/${game_id}?key=${apiKey}`
export const screenURL = (game_id) =>
  `${baseUrl}games/${game_id}/screenshots?key=${apiKey}`
export const searchURL = (game_name) =>
  `${baseUrl}games?key=${apiKey}&search=${game_name}&page_size=9`
