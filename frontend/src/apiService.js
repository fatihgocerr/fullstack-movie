export const baseUrl = 'https://projectarea.online/api/v1'
import axios from 'axios'
import _ from 'lodash'

export const queryResults = _.memoize(async (query) => {
  const {
    data: { data },
  } = await axios.get(`${baseUrl}/search/search?search=${query}`)
  return data
})
