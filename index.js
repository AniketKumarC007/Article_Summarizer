const API_KEY = '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';

const inputText = '';
console.log(inputText);

// chrome.runtime.sendMessage('fROMiNDEX.JS');
// chrome.runtime.onMessage.addListener((response, sender, sendResponse)=>
// {
//     console.log(response);
//     inputText = response;
// });

const handleSubmit = async () => {
 
  try {
   
    // chrome.runtime.sendMessage({ greeting: "hello" }, function (response) {
    //     console.log(response);
    //     inputText=response;
    // });
    chrome.runtime
  .sendMessage("hello from index")
  .then(console.log, console.error);
    const APIBody = {
      model: "text-davinci-003",
      prompt: "Give the summary of this text " + inputText,
      temperature: 1,
      max_tokens: 100,
    };

    await fetch("https://api.openai.com/v1/completions", {
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
        const summaryHere = document.getElementById('summaryHere');
        summaryHere.innerHTML = data.choices[0].text ;
        console.log(data.choices[0].text);
      });
  } catch (err) {
    console.log(err);
  }
};
handleSubmit();
