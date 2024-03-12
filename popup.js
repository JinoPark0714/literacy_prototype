/**
 * 사용자가 선택한 모델을 저장하기 위해 popup.js 파일을 생성하고 popup.html에 연결합니다. 사용자가 "저장" 버튼을 클릭하면 선택된 모델을 크롬 스토리지에 저장합니다.
 */
document.getElementById('saveBtn').addEventListener('click', function() {
  const model = document.getElementById('modelSelect').value;
  chrome.storage.local.set({selectedModel: model}, function() {
      console.log('모델 저장됨:', model);
  });
});