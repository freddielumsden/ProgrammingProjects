document.getElementById("clear_storage").addEventListener("click", clear_storage);

function clear_storage() {
    chrome.storage.local.clear(function() {
        var error = chrome.runtime.lastError;
        if (error) {
            console.error(error);
        }
    });
}

function getActivities() {
    return chrome.storage.local.get(null);
}

function getActivity(_activity) {
    return chrome.storage.local.get(_activity);
}
function addActivity(_activity) {
    chrome.storage.local.set({_activity: []});
}

function removeActivity(_activity) {
    chrome.storage.local.remove(_activity);
}

function updateActivity(_activity, _newTab) {
    chrome.storage.local.set({_activity: [getActivity(_activity)] + _newTab});
}

function getCurrentTabName() {
    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, function(tabs) {
        // and use that tab to fill in out title and url
        let tab = tabs[0];
        let url = new URL(tab.url);
        return url.hostname;
    });
}

clear_storage();
addActivity("phasersTo");
console.log(getActivity("phasersTo"));
updateActivity("phasersTo", getCurrentTabName());
console.log(getActivity("phasersTo"));
let activities = getActivities();
console.log(activities);