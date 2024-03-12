let timerId;
let textBubble;
// 선택된 텍스트를 GIF 위에 표시하는 함수
function showTextAboveGif(text) {
  textBubble = document.getElementById('textBubble');
  if (!textBubble) {
    textBubble = document.createElement('div');
    textBubble.id = 'textBubble';
    textBubble.classList.add('text-bubble');
    document.body.appendChild(textBubble);
  }
  textBubble.innerHTML = 
  `
    <h4>"Mao"에게 물어봐!</h4>
    어떤 문장이나 단어를 찾고 있니?<br><br>
    <p>${text}</p>
  `;

  if(timerId)
    clearTimeout(timerId)

  timerId = setTimeout(()=>{
    textBubble.remove();
  }, 60000);
}

function setPosition(){
  const textBubble = document.getElementById('textBubble');
  textBubble.style.bottom = "250px";
}