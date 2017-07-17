import { browser } from './browser'

export const serialize = data => {
  return Object.keys(data).map(keyName => {
    return keyName + '=' + data[keyName]
  }).join('&')
}

export const sleep = ms => {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

const doc = document

// 解决在ios 微信等webview中无法修改document.title的情况
export const setTitle = title => {
  if (browser.ios) {
    setTimeout(() => {
      doc.title = title
      // 利用iframe的onload事件刷新页面
      let iframe = doc.createElement('iframe')
      iframe.style.visibility = 'hidden'
      iframe.style.width = '1px'
      iframe.style.height = '1px'
      iframe.onload = () => setTimeout(() => doc.body.removeChild(iframe), 0)
      // iframe.src = require('url-loader?limit=10!../assets/images/favicon.ico')
      doc.body.appendChild(iframe)
    }, 0)
  } else {
    doc.title = title
  }
}
