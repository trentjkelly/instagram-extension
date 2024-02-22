console.log("It is working")
let search : HTMLElement | null = document.getElementById("search")
let explore  : HTMLElement | null = document.getElementById("explore")
let reels : HTMLElement | null  = document.getElementById("reels")
let messages : HTMLElement | null  = document.getElementById("messages")
let notifications : HTMLElement | null  = document.getElementById("notifications")

if(search != null){
    console.log("Here p2")
    search.addEventListener("click", toggleSearch)
}
if(explore != null){
    explore.addEventListener("click", toggleExplore)
}
if(reels != null){
    reels.addEventListener("click", toggleReels)
}
if(messages != null){
    messages.addEventListener("click", toggleMessages)
}
if(notifications != null){
    notifications.addEventListener("click", toggleNotifications)
}
