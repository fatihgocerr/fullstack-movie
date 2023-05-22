import { apiSlice } from './apiSlice'
const USER_URL = '/users/login'

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const { useLoginMutation } = usersApiSlice
