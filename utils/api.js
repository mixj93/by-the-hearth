import fetch from 'isomorphic-unfetch'
import { HEARTHSTONE_API_URL, HEARTHSTONE_API_TOKEN } from '../utils/common'

export const fetchData = async (path) => {
  const res = await fetch(`${HEARTHSTONE_API_URL}${path}?locale=zhCN`, { headers: { 'X-Mashape-Key': HEARTHSTONE_API_TOKEN } })
  const data = await res.json()

  return data
}