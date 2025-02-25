chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.type === "addLink") {
        chrome.storage.sync.get(["links"], function(result) {
            var links = result.links || [];
            links.push(message.link);
            chrome.storage.sync.set({"links": links}, function() {
                sendResponse({success: true});
            });
        });
        return true;
    }
});
