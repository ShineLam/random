/*!
 * browser.js for Vue • v1.2.2
 * Ethan
 * ntc
 */

// 判断浏览器
export const browser = (function () {
  var u = navigator.userAgent
  return {
    // Chrome
    chrome: u.indexOf('Chrome') > -1 && u.indexOf('Edge') === -1,
    // IE
    trident: u.indexOf('Trident') > -1,
    // webkit 内核(Chrome , Safari)
    webkit: u.indexOf('AppleWebKit') > -1,
    // 火狐
    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1,
    // 是否为移动终端
    mobile: !!u.match(/AppleWebKit.*Mobile.*/),
    // 是否为mac
    mac: u.indexOf('Mac') > -1,
    // ios终端
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    // android终端或者uc浏览器
    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
    // 是否为iPhone
    iPhone: u.indexOf('iPhone') > -1,
    iPad: u.indexOf('iPad') > -1,
    // 微信webview
    weixin: u.indexOf('MicroMessenger') > -1,
    // 支付宝webview
    alipay: u.indexOf('Alipay') > -1
  }
}())
