/**
 * Created with WebStorm.
 * User: stoneship
 * Email:258137678@qq.com
 * Date: 16/11/7
 * Time: 上午10:31
 * To change this template use File | Settings | File Templates.
 */
import axios from 'axios'
// import Cookie from 'js-cookie'
function Utf8ArrayToStr (array) {
  var out, i, len, c
  var char2, char3
  out = ''
  len = array.length
  i = 0
  while (i < len) {
    c = array[i++]
    switch (c >> 4) {
      case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
        // 0xxxxxxx
        out += String.fromCharCode(c)
        break
      case 12: case 13:
        // 110x xxxx   10xx xxxx
        char2 = array[i++]
        out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F))
        break
      case 14:
        // 1110 xxxx  10xx xxxx  10xx xxxx
        char2 = array[i++]
        char3 = array[i++]
        out += String.fromCharCode(((c & 0x0F) << 12) |
          ((char2 & 0x3F) << 6) |
          ((char3 & 0x3F) << 0))
        break
    }
  }
  return out
}
var instance = axios.create({
  baseURL: 'http://yapi.amh-group.com/mock/479/',
  timeout: 3600 * 1000,
  headers: {},
  trimNull: true, // 是否去除空值
  withCredentials: true, // default
  needLoading: false, // 是否需要加载效果
  ignoreCode: false // 是否忽略服务端的错误提示
})
instance.interceptors.request.use(function (config) {
  config.data = config.data || {}
  if (config.trimNull && !(config.data instanceof window.FormData)) {
    let _data = Object.assign({}, config.data)
    isNull(_data)
    config.data = _data
  }
  if (config.mock) {
    config.withCredentials = false
  }
  // config.headers = Object.assign({}, config.headers, { 'ymmoa-passport': Cookie.get('ymmoa_passport') })
  if (config.download) {
    config.responseType = 'arraybuffer'
  }
  if (config.headers['Content-Type'] == 'application/x-www-form-urlencoded') {
    config.data = qs.stringify(config.data)
  }
  return config
  function isNull (obj) {
    for (let [key, value] of Object.entries(obj)) {
      if (value && typeof value == 'object' && !(value instanceof Date)) isNull(value)
      if (!value && typeof value != 'number') {
        obj[key] = null
      }
    }
  }
}, function (error) {
  return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
  var code = response.data.code
  var result = response.data.result
  if (((code !== undefined && code !== 0) || (result !== undefined && result !== 1)) && !response.config.ignoreCode) {
    switch (code) {
      case 999:
        break
      default:
    }
    return Promise.reject(response)
  } else if (code === 0 || result === 1 || response.config.ignoreCode) {
    if (response.config.download) {
      try {
        createAndDownloadFile(response)
      } catch (e) {
        return Promise.reject(e)
      }
    }
    return response
  } else {
    return Promise.reject(response)
  }
}, function (error) {
  var status = error.response && error.response.status
  // var message = error.message || '请求失败,请联系管理员。'
  if (status != 200) {
    switch (status) {
      case 401:
        break
      case 406:
        break
      case 403:
        break
      default:
    }
  }
  return Promise.reject(error)
})

function createAndDownloadFile (res) {
  let filename = ''
  let type = res.headers['content-type']
  filename = res.headers['content-disposition'] && decodeURIComponent(res.headers['content-disposition'].match(/filename=(.+)/)[1])
  let blob = new window.Blob([res.data], { type: type })
  if (typeof window.navigator.msSaveBlob !== 'undefined') {
    window.navigator.msSaveBlob(blob, filename)
  } else {
    let URL = window.URL || window.webkitURL
    let downloadUrl = URL.createObjectURL(blob)
    let a = document.createElement('a')
    if (filename) {
      if (typeof a.download === 'undefined') {
        window.location = downloadUrl
      } else {
        a.href = downloadUrl
        a.download = filename
        document.body.appendChild(a)
        a.click()
      }
    } else {
      var err
      try {
        err = JSON.parse(Utf8ArrayToStr(new Uint8Array(res.data)))
      } catch (e) { }
      throw new Error((err && err.errorMsg) || '文件不存在')
    }
    setTimeout(function () {
      URL.revokeObjectURL(downloadUrl)
    }, 100) // cleanup
  }
}

export default instance
