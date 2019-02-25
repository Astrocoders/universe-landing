export const resizeWindow = (x, y) => {
  window.innerWidth = x
  window.innerHeight = y
  window.dispatchEvent(new Event('resize'))
}
