import axios from 'axios'
import { detailURL, screenURL } from '../api'

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: 'LOADING_DETAIL',
  })

  const loadData = await axios.get(detailURL(id))
  const screenData = await axios.get(screenURL(id))
  dispatch({
    type: 'GET_DETAIL',
    payload: {
      game: loadData.data,
      screen: screenData.data,
    },
  })
}
