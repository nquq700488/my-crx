import { createApp } from 'vue'
import Content from './Content.vue'

const id = 'crx-content'

console.warn('content script running')

init()

function init() {
  const ctxContent = document.querySelector(`#${id}`)
  if (ctxContent) {
    createApp(Content).mount(`#${id}`)
    return
  }
  const div = document.createElement('div')
  div.id = id
  document.body.appendChild(div)
  createApp(Content).mount(`#${id}`)
}
