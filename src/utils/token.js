import store from 'store'

const TOKEN = 'token'

export const setToken = (token) => {
  store.set(TOKEN, token)
}

export const getToken = () => {
  return store.get(TOKEN)
}

export const clearToken = () => {
  store.remove(TOKEN)
}
