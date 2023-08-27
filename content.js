console.log(document.body) ;
// // chrome.runtime.sendMessage(document.body);
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     sendResponse({ farewell: "goodbye" });
// });
// chrome.runtime
//   .sendMessage("hello from content")
//   .then(console.log, console.error);
chrome.runtime.onMessage.addListener(onMessage);

function onMessage(message) {
  console.log("background: onMessage", message);

  // 1: Causes the following to be logged in content:
  // "The message port closed before a response was received."
  return undefined;
}