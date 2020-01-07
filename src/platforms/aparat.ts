export const baseURL = 'https://www.aparat.com'

export function embed(id: string) {
  return `${baseURL}/video/video/embed/videohash/${id}/vt/frame`
}
