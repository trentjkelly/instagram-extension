let home : HTMLElement | null = document.getElementById("home")
let search : HTMLElement | null = document.getElementById("search")
let explore  : HTMLElement | null = document.getElementById("explore")
let reels : HTMLElement | null  = document.getElementById("reels")
let messages : HTMLElement | null  = document.getElementById("messages")
let notifications : HTMLElement | null  = document.getElementById("notifications")
let create : HTMLElement | null  = document.getElementById("create")
let profile : HTMLElement | null  = document.getElementById("profile")

if(home !== null){
    home.addEventListener("click", sendToggleHome)
}
if(search !== null){
    search.addEventListener("click", sendToggleSearch)
}
if(explore !== null){
    explore.addEventListener("click", sendToggleExplore)
}
if(reels !== null){
    reels.addEventListener("click", sendToggleReels)
}
if(messages !== null){
    messages.addEventListener("click", sendToggleMessages)
}
if(notifications !== null){
    notifications.addEventListener("click", sendToggleNotifications)
}
if(create !== null){
    create.addEventListener("click", sendToggleCreate)
}
if(profile !== null){
    profile.addEventListener("click", sendToggleProfile)
}

function sendToggleHome() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];

        if(activeTab.id !== undefined){
            chrome.tabs.sendMessage(activeTab.id, {action: "toggleHome"});
        }
    });
}

function sendToggleSearch() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];

        if(activeTab.id !== undefined){
            chrome.tabs.sendMessage(activeTab.id, {action: "toggleSearch"});
        }
    });
}

function sendToggleExplore() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];

        if(activeTab.id !== undefined){
            chrome.tabs.sendMessage(activeTab.id, {action: "toggleExplore"});
        }
    });
}

function sendToggleReels() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];

        if(activeTab.id !== undefined){
            chrome.tabs.sendMessage(activeTab.id, {action: "toggleReels"});
        }
    });
}

function sendToggleMessages() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];

        if(activeTab.id !== undefined){
            chrome.tabs.sendMessage(activeTab.id, {action: "toggleMessages"});
        }
    });
}

function sendToggleNotifications() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];

        if(activeTab.id !== undefined){
            chrome.tabs.sendMessage(activeTab.id, {action: "toggleNotifications"});
        }
    });
}

function sendToggleCreate() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];

        if(activeTab.id !== undefined){
            chrome.tabs.sendMessage(activeTab.id, {action: "toggleCreate"});
        }
    });
}

function sendToggleProfile() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];

        if(activeTab.id !== undefined){
            chrome.tabs.sendMessage(activeTab.id, {action: "toggleProfile"});
        }
    });
}
