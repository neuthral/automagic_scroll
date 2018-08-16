![](myicon.png) ## chrome addon for automagix scrolling power for tabs ##

```javascript
document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.executeScript({
    code: 'setInterval(function(){ window.scrollBy(0, 1); }, 40)'
  })
}, false);
```
scroll 1px every 40ms
