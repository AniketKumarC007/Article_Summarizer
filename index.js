document.getElementById("submit").addEventListener(('click'), ()=>{
  handleSubmit();
});

const handleSubmit = async () => {
  try {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
        console.log(response);
        const summaryHere = document.getElementById('summaryHere');
        summaryHere.innerHTML = response ;
      });
    });
  } catch (err) {
    console.log(err);
  }
};
