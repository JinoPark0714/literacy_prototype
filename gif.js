const gifId = 'draggableGif';

function createGif(){
	const gifImage = document.createElement('img');
	gifImage.src = chrome.runtime.getURL('images/mao.gif');
	gifImage.classList.add('web-gif');
	gifImage.id = 'draggableGif';
	gifImage.draggable = true;
	document.body.appendChild(gifImage);
}

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