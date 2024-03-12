chrome.runtime.onInstalled.addListener(function() {
  // 초기 설정 코드
});

chrome.action.onClicked.addListener((tab)=>{
  chrome.scription,executeScript({
    target: {tabId: tab.id},
    files: ["content-script.js"]
  });
});