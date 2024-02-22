"use strict";
let home = document.getElementById("home");
let search = document.getElementById("search");
let explore = document.getElementById("explore");
let reels = document.getElementById("reels");
let messages = document.getElementById("messages");
let notifications = document.getElementById("notifications");
let create = document.getElementById("create");
let profile = document.getElementById("profile");
if (home !== null) {
    home.addEventListener("click", sendToggleHome);
}
if (search !== null) {
    search.addEventListener("click", sendToggleSearch);
}
if (explore !== null) {
    explore.addEventListener("click", sendToggleExplore);
}
if (reels !== null) {
    reels.addEventListener("click", sendToggleReels);
}
if (messages !== null) {
    messages.addEventListener("click", sendToggleMessages);
}
if (notifications !== null) {
    notifications.addEventListener("click", sendToggleNotifications);
}
if (create !== null) {
    create.addEventListener("click", sendToggleCreate);
}
if (profile !== null) {
    profile.addEventListener("click", sendToggleProfile);
}
function sendToggleHome() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        if (activeTab.id !== undefined) {
            chrome.tabs.sendMessage(activeTab.id, { action: "toggleHome" });
        }
    });
}
function sendToggleSearch() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        if (activeTab.id !== undefined) {
            chrome.tabs.sendMessage(activeTab.id, { action: "toggleSearch" });
        }
    });
}
function sendToggleExplore() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        if (activeTab.id !== undefined) {
            chrome.tabs.sendMessage(activeTab.id, { action: "toggleExplore" });
        }
    });
}
function sendToggleReels() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        if (activeTab.id !== undefined) {
            chrome.tabs.sendMessage(activeTab.id, { action: "toggleReels" });
        }
    });
}
function sendToggleMessages() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        if (activeTab.id !== undefined) {
            chrome.tabs.sendMessage(activeTab.id, { action: "toggleMessages" });
        }
    });
}
function sendToggleNotifications() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        if (activeTab.id !== undefined) {
            chrome.tabs.sendMessage(activeTab.id, { action: "toggleNotifications" });
        }
    });
}
function sendToggleCreate() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        if (activeTab.id !== undefined) {
            chrome.tabs.sendMessage(activeTab.id, { action: "toggleCreate" });
        }
    });
}
function sendToggleProfile() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        if (activeTab.id !== undefined) {
            chrome.tabs.sendMessage(activeTab.id, { action: "toggleProfile" });
        }
    });
}
