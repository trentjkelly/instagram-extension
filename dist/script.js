"use strict";
console.log("It is working");
let search = document.getElementById("search");
let explore = document.getElementById("explore");
let reels = document.getElementById("reels");
let messages = document.getElementById("messages");
let notifications = document.getElementById("notifications");
if (search != null) {
    console.log("Here p2");
    search.addEventListener("click", toggleSearch);
}
if (explore != null) {
    explore.addEventListener("click", toggleExplore);
}
if (reels != null) {
    reels.addEventListener("click", toggleReels);
}
if (messages != null) {
    messages.addEventListener("click", toggleMessages);
}
if (notifications != null) {
    notifications.addEventListener("click", toggleNotifications);
}
