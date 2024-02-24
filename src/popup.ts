// popup.ts
// This file is the script controlling features for the extension's popup window

// Each of the Extension's popup window's Checkboxes for hiding/unhiding features
// id: the HTML id of the element
// sendAction: function called when a checkbox is (un)checked--tells the content script to hide or unhide the buttons on instagram
// storageAction: function called when a checkbox is (un)checked--updates the status of the checkboxes in chrome storage
const features = [
    {id: "home", sendAction: sendToggleFeature.bind(null, "home"), storageAction: storageSend.bind(null, "home")},
    {id: "search", sendAction: sendToggleFeature.bind(null, "search"), storageAction: storageSend.bind(null, "search")},
    {id: "explore", sendAction: sendToggleFeature.bind(null, "explore"), storageAction: storageSend.bind(null, "explore")},
    {id: "reels", sendAction: sendToggleFeature.bind(null, "reels"), storageAction: storageSend.bind(null, "reels")},
    {id: "messages", sendAction: sendToggleFeature.bind(null, "messages"), storageAction: storageSend.bind(null, "messages")},
    {id: "notifications", sendAction: sendToggleFeature.bind(null, "notifications"), storageAction: storageSend.bind(null, "notifications")},
    {id: "create", sendAction: sendToggleFeature.bind(null, "create"), storageAction: storageSend.bind(null, "create")},
    {id: "profile", sendAction: sendToggleFeature.bind(null, "profile"), storageAction: storageSend.bind(null, "profile")},
    {id: "threads", sendAction: sendToggleFeature.bind(null, "threads"), storageAction: storageSend.bind(null, "threads")},
    {id: "more", sendAction: sendToggleFeature.bind(null, "more"), storageAction: storageSend.bind(null, "more")},
    {id: "stories", sendAction: sendToggleFeature.bind(null, "stories"), storageAction: storageSend.bind(null, "stories")},
]

// Setup each checkbox to use the functions when checked
features.forEach(({id, sendAction, storageAction}) => {
    const element: HTMLElement | null = document.getElementById(id);
    if(element) {
        element.addEventListener("click", sendAction)
        element.addEventListener("click", storageAction)
    }
});

// Tells content.ts to (un)hide button on Instagram webpage
function sendToggleFeature(toggleFeature : string) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];

        if(activeTab.id !== undefined){
            chrome.tabs.sendMessage(activeTab.id, {action: toggleFeature});
        }
    });
}

// Updates chrome storage with the status of each checkbox in the popup window
function storageSend(checkboxID : string) {
    const element = document.getElementById(checkboxID) as HTMLInputElement;
    let isChecked : boolean = element!.checked;
    chrome.storage.local.set({ [checkboxID] : isChecked });
}

// Updates the popup window everytime its opened to remember user preferences for what should be checked
document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get(null, (items) => {
        Object.entries(items).forEach(([key, value]) => {
            const checkbox = document.getElementById(key) as HTMLInputElement;
            if (checkbox) {
                checkbox.checked = value;
            }
        })
    });
});
