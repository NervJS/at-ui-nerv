/**
 * 常用方法
 */

const SPECIAL_CHARS_REGEXP = /([:\-_]+(.))/g
const MOZ_HACK_REGEXP = /^moz([A-Z])/

const trim = function (string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}

/**
 * [camelCaseToHyphen 将驼峰命名转换为连字符]
 * @param  {[string]} str [驼峰命名的字符串]
 * @return {[string]}     [连字符的字符串]
 */
export function camelCaseToHyphen (str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

export function camelCase (name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter
  }).replace(MOZ_HACK_REGEXP, 'Moz$1')
}

export function getStyle (element, styleName) {
  if (!element || !styleName) { return null }

  styleName = camelCase(styleName)
  if (styleName === 'float') {
    styleName = 'cssFloat'
  }

  try {
    const computed = document.defaultView!.getComputedStyle(element, '')
    return element.style[styleName] || computed ? computed[styleName] : null
  } catch (e) {
    return element.style[styleName]
  }
}

function typeOf (obj) {
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  return map[Object.prototype.toString.call(obj)]
}

export function deepCopy (data) {
  const type = typeOf(data)
  let obj

  if (type === 'array') {
    obj = []
  } else if (type === 'object') {
    obj = {}
  } else {
    return data
  }

  if (type === 'array') {
    for (let i = 0; i < data.length; i++) {
      obj.push(deepCopy(data[i]))
    }
  } else if (type === 'object') {
    for (const i in data) {
      obj[i] = deepCopy(data[i])
    }
  }

  return obj
}

export function hasClass (el, cls) {
  if (!el || !cls) { return false }
  if (cls.indexOf(' ') !== -1) { throw new Error('className should not contain space.') }
  if (el.classList) {
    return el.classList.contains(cls)
  }
  return (` ${el.className} `).indexOf(` ${cls} `) > -1
}

export function addClass (el, cls) {
  if (!el) { return }

  const classes = (cls || '').split(' ')
  let curClass = el.className

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i]
    if (!clsName) { continue }

    if (el.classList) {
      el.classList.add(clsName)
    } else if (!hasClass(el, clsName)) {
      curClass += ` ${clsName}`
    }
  }
  if (!el.classList) {
    el.className = curClass
  }
}

export function removeClass (el, cls) {
  if (!el || !cls) { return }
  const classes = cls.split(' ')
  let curClass = ` ${el.className} `

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i]
    if (!clsName) { continue }

    if (el.classList) {
      el.classList.remove(clsName)
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(` ${clsName} `, ' ')
    }
  }
  if (!el.classList) {
    el.className = trim(curClass)
  }
}

export function findComponentUpward (context, componentName, componentNames) {
  if (typeof componentName === 'string') {
    componentNames = [componentName]
  } else {
    componentNames = componentName
  }

  let parent = context.$parent
  let name = parent.$options.name
  while (parent && (!name || componentNames.indexOf(name) < 0)) {
    parent = parent.$parent
    if (parent) { name = parent.$options.name }
  }

  return parent
}

export function findComponentsUpward (context, componentName, components: any[] = []) {
  let parent = context.$parent
  let name = parent.$options.name

  while (parent && name) {
    if (componentName === name) {
      components.push(parent)
    }

    parent = parent.$parent
    if (parent) {
      name = parent.$options.name
    }
  }

  return components
}

export function findComponentDownward (context, componentName) {
  const childrens = context.$children
  let children

  if (childrens.length) {
    childrens.forEach((child) => {
      if (child.$options.name === componentName) {
        children = child
      }
    })

    for (let i = 0, len = childrens.length; i < len; i++) {
      const child = childrens[i]
      const name = child.$options.name

      if (name === componentName) {
        children = child
        break
      } else {
        children = findComponentDownward(child, componentName)
        if (children) { break }
      }
    }
  }

  return children
}

export function findComponentsDownward (context, componentName, components: any[] = []) {
  const childrens = context.$children

  if (childrens.length) {
    childrens.forEach((child) => {
      const subChildren = child.$children
      const name = child.$options.name

      if (name === componentName) {
        components.push(child)
      }
      if (subChildren.length) {
        const findChildren = findComponentsDownward(child, componentName, components)
        if (findChildren) {
          components.concat(findChildren)
        }
      }
    })
  }

  return components
}

export function debounce (func, wait, immediate?) {
  let timeout
  let args
  let context
  let timestamp
  let result
  const later = function later () {
    const last = +new Date() - timestamp
    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) {
          context = null
          args = null
        }
      }
    }
  }
  return function debounced () {
    context = this
    args = arguments
    timestamp = +new Date()

    const callNow = immediate && !timeout
    if (!timeout) {
      timeout = setTimeout(later, wait)
    }

    if (callNow) {
      result = func.apply(context, args)
      context = null
      args = null
    }

    return result
  }
}

export function throttle (fn, threshhold, scope?) {
  threshhold || (threshhold = 250)
  let last = +new Date()
  let deferTimer
  return function () {
    const context = scope || this
    const now = +new Date()
    const args = arguments
    if (last && now < last + threshhold) {
      clearTimeout(deferTimer)
      deferTimer = setTimeout(() => {
        last = now
        fn.apply(context, args)
      }, threshhold)
    } else {
      last = now
      fn.apply(context, args)
    }
  }
}

export function styleStr2Obj (str) {
  const obj = {}
  if (typeof str === 'string') {
    const arr = str.split(';')
    arr.forEach((item) => {
      if (item.length > 0) {
        const arrTemp = item.split(':')
        const key = arrTemp[0]
        const value = arrTemp[1]
        obj[key] = value
      }
    })
  }
  return obj
}
export function calculatePosition (placement, trigger, popover) {
  const position = {
    left: 0,
    top: 0
  }
  switch (placement) {
    case 'top' :
      position.left = trigger.offsetLeft - (popover.offsetWidth / 2) + (trigger.offsetWidth / 2)
      position.top = trigger.offsetTop - popover.offsetHeight
      break
    case 'top-left':
      position.left = trigger.offsetLeft
      position.top = trigger.offsetTop - popover.offsetHeight
      break
    case 'top-right':
      position.left = trigger.offsetLeft + trigger.offsetWidth - popover.offsetWidth
      position.top = trigger.offsetTop - popover.offsetHeight
      break
    case 'left':
      position.left = trigger.offsetLeft - popover.offsetWidth
      position.top = trigger.offsetTop + (trigger.offsetHeight / 2) - (popover.offsetHeight / 2)
      break
    case 'left-top':
      position.left = trigger.offsetLeft - popover.offsetWidth
      position.top = trigger.offsetTop
      break
    case 'left-bottom':
      position.left = trigger.offsetLeft - popover.offsetWidth
      position.top = trigger.offsetTop + trigger.offsetHeight - popover.offsetHeight
      break
    case 'right':
      position.left = trigger.offsetLeft + trigger.offsetWidth
      position.top = trigger.offsetTop + (trigger.offsetHeight / 2) - (popover.offsetHeight / 2)
      break
    case 'right-top':
      position.left = trigger.offsetLeft + trigger.offsetWidth
      position.top = trigger.offsetTop
      break
    case 'right-bottom':
      position.left = trigger.offsetLeft + trigger.offsetWidth
      position.top = trigger.offsetTop + trigger.offsetHeight - popover.offsetHeight
      break
    case 'bottom':
      position.left = trigger.offsetLeft - (popover.offsetWidth / 2) + (trigger.offsetWidth / 2)
      position.top = trigger.offsetTop + trigger.offsetHeight
      break
    case 'bottom-left':
      position.left = trigger.offsetLeft
      position.top = trigger.offsetTop + trigger.offsetHeight
      break
    case 'bottom-right':
      position.left = trigger.offsetLeft + trigger.offsetWidth - popover.offsetWidth
      position.top = trigger.offsetTop + trigger.offsetHeight
      break
    default:
      // if user set wrong placement, then use default 'top'
      position.left = trigger.offsetLeft - (popover.offsetWidth / 2) + (trigger.offsetWidth / 2)
      position.top = trigger.offsetTop - popover.offsetHeight
      break
  }
  return position
}
