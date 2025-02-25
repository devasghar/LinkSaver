document.addEventListener("DOMContentLoaded", function() {
    var addLinkForm = document.getElementById("addLinkForm");
    addLinkForm.addEventListener("submit", function(event) {
        event.preventDefault();
        var linkInput = document.getElementById("linkInput");
        var link = linkInput.value;
        chrome.runtime.sendMessage({type: "addLink", link: link}, function(response) {
            if (response.success) {
                linkInput.value = "";
                var statusDiv = document.getElementById("status");
                statusDiv.innerHTML = "Link saved successfully!";
            }
        });
    });
});
