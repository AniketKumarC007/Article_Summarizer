console.log(document.body) ;
let body = document.body;
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  sendResponse({ data: "body" });
});
