const API_KEY = 'Enter API Key';
let summary = "";
const paragraphs = document.querySelectorAll('p');
let allParagraphsText = '';
paragraphs.forEach((paragraph) => {
  allParagraphsText += paragraph.textContent + '\n';
});
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if(summary!=="") {
    sendResponse(
      {
        id: request.id,
        data: summary
      }
    );
  }
  else {
    const APIBody = {
      model: "text-davinci-003",
      prompt: "Give the summary of this text " + allParagraphsText,
      temperature: 1,
      max_tokens: 100,
    };
  
    fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + API_KEY,
      },
      body: JSON.stringify(APIBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        summary = data.choices[0].text;
        sendResponse(
          {
            id: request.id,
            data: summary
          }
        );
      })
      .catch(e =>
        console.log(e.message)
      )
  }
  return true;
});
