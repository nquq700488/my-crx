<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

// const crxConnect = chrome.runtime.connect({ name: 'GET_COUNT' })

const count = ref(0)
// const link = ref('https://github.com/guocaoyi/create-chrome-ext')

onMounted(() => {
  console.log('Content Page Mounted', chrome)
  chrome.storage?.sync.get(['count'], (result) => {
    count.value = result.count ?? 0
  })

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const { action, data } = request
    sendResponse({ received: true  })
    if (action === 'GET_COUNT') {
      count.value = data ?? 0
    }
  })
})
</script>

<template>
  <main class="content">
    <div>count</div>
    <div>{{ count }}</div>
  </main>
</template>

<style scoped>
@import url('./css/index.css');
</style>
