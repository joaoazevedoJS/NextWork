import { TOKEN_KEY } from './config.json'

export const getToken = () => localStorage.getItem(TOKEN_KEY)
export const login = (token: string) => localStorage.setItem(TOKEN_KEY, token)
export const logout = () => localStorage.removeItem(TOKEN_KEY)