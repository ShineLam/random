/*!
 * regexp.js • v1.2.2
 * Ethan
 * ntc
 */

/* +------- Ethan Start ---------+*/

// 是否为数字
export function isNumber (chars) {
  return chars && chars.match(/^\d*$/)
}
// 是否为邮箱
export function isEmail (chars) {
  return /^\w+((-\w+)|(\.\w+))*\\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(chars)
}
// 是否为手机号码
export function isMobile (chars) {
  return /^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57])[0-9]{8}$/.test(chars)
}
// 是否为班次
export function isSchedules (chars) {
  return /^[a-zA-Z0-9]+$/.test(chars)
}
// 是否为地址
export function isAddress (chars) {
  return /^[a-zA-Z0-9\u4e00-\u9fa5]+$/.test(chars)
}

/* +------- Ethan End ---------+*/
