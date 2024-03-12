// 텍스트 드래그
document.addEventListener('mouseup', async (e) => {
  const selectedText = window.getSelection().toString().trim();
  if (selectedText.length > 0) {
    definition = await _getResponse(selectedText);
    showTextAboveGif(definition);
  }
});


async function _getResponse(sentence) {

  const fetchOption = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `OPENAI_KEY`
    },
    body: JSON.stringify({
      "model": "gpt-3.5-turbo",
      "messages": [
        {
          "role": "system",
          "content": `당신은 초등학생들에게 단어를 알려주는 단어도우미입니다. 사용자들에게 친근하면서 다정한 말투로 답변을 제공해야 합니다. 사용자가 특정 단어를 언급할 때, 그 단어의 정의를 한 문장으로 설명하고, 아이들이 쉽게 이해할 수 있도록 부연설명을 한 문장으로 표현하면서 6~7세 기준 대체단어를 하나 제시합니다.`
        },
        {
          "role": "user",
          "content": sentence
        }
      ]
    })
  };

  const response = await fetch(`https://api.openai.com/v1/chat/completions`, fetchOption);
  const data = await response.json();
  return data.choices[0].message.content;
}