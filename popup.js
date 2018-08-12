document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.executeScript({
    code: 'setInterval(function(){ window.scrollBy(0, 1); }, 40)'
  })
}, false);
