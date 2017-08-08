export const setLocal = (key, val) => {
  if (window.localStorage) {
    window.localStorage.setItem(key, JSON.stringify({obj: val}))
  }
}

export const getLocal = (key, clear) => {
  if (window.localStorage) {
    let val = window.localStorage.getItem(key)
    if (clear) {
      window.localStorage.removeItem(key)
    }
    return val && JSON.parse(val).obj
  }
}
