export const baseURL = 'https://www.youtube.com'

export function watch(id: string) {
  return `${baseURL}/watch?v=${id}`
}
