export const baseUrl = 'https://projectarea.online/api/v1'
import axios from 'axios'

export const getUser = ({ setUser, userInfo }) =>
  axios
    .get(baseUrl + '/users/getById/' + userInfo.userId, {
      headers: {
        Authorization: `bearer ${userInfo.token}`,
      },
    })
    .then(({ data: { data } }) => {
      setUser(data)
    })
