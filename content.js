const API_KEY = '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';
let body = toString(document.body);
const paragraphs = document.querySelectorAll('p');
let allParagraphsText = '';
paragraphs.forEach((paragraph) => {
  allParagraphsText += paragraph.textContent + '\n';
});
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
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
      console.log(data.choices[0].text);
      sendResponse(data.choices[0].text);
    })
    .catch(e =>
      console.log(e.message)
    )
  return true;
});
