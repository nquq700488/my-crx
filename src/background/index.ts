console.log('background is running')

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const { type, count = 0 } = request
  sendResponse({ injected: true, received: true })
  if (type === 'COUNT') {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs: any) {
      if (tabs.length > 0) {
        const activeTab = tabs[0]
        chrome.tabs.sendMessage(activeTab.id, { action: 'GET_COUNT', data: count })
      }
    })
  }
})
