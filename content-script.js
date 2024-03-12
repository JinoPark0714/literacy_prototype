const gifImage = document.createElement('img');
gifImage.src = chrome.runtime.getURL('images/mao.gif');
gifImage.classList.add('web-gif');
gifImage.id = 'draggableGif';
gifImage.draggable = true;

document.body.appendChild(gifImage);


// // 텍스트 드래그
// document.addEventListener('mouseup', async function (e) {
//   const selectedText = window.getSelection().toString().trim();
//   if (selectedText.length > 0) {
//     definition = await getResponse(selectedText)
//     showTextAboveGif(definition);
//   }
// });

// // 일해라 극우년
// // 파이썬에서 문자열 내 변수를 삽입하는 방법
// async function getResponse(sentence){
//   const response = await fetch(`http://localhost:8000/user?prompt=${sentence}`);
//   const data = await response.json();
//   return data;
// }

let offsetX, offsetY;

const gifElement = document.getElementById('draggableGif');

gifElement.addEventListener('dragstart', (event)=>{
  offsetX = event.clientX - gifElement.getBoundingClientRect().left;
  offsetY = event.clientY - gifElement.getBoundingClientRect().top;
});

gifElement.addEventListener('dragend', function(event) {
  gifElement.style.left = (event.clientX - offsetX) + 'px';
  gifElement.style.top = (event.clientY - offsetY) + 'px';
  setPosition()
});

gifElement.addEventListener('dragover', function(event) {
  event.preventDefault();
});

gifElement.addEventListener('drop', function(event) {
  event.preventDefault();
});