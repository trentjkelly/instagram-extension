// content.ts
// This file is an injected content script that can control instagram's webpage and its DOM

// Storing div's child # from instagram page
enum DivLocations {
    Home = 1,
    Search = 2,
    Explore = 3,
    Reels = 4,
    Messages = 5,
    Notifications = 6,
    Create = 7,
    Profile = 8,
    Threads = 1,
    More = 2
}

// Storing div class name from instagram page
const sideGroups = {
    upperGroup: "x1iyjqo2.xh8yej3",
    lowerGroup: "xl5mz7h.xhuyl8g"
}

// Assigns each potential chrome message recieved to a function
const actionHandlers = {
    "home" : () => toggleSideBarButtons(DivLocations.Home, sideGroups.upperGroup),
    "search" : () => toggleSideBarButtons(DivLocations.Search, sideGroups.upperGroup),
    "explore" : () => toggleSideBarButtons(DivLocations.Explore, sideGroups.upperGroup),
    "reels" : () => toggleSideBarButtons(DivLocations.Reels, sideGroups.upperGroup),
    "messages" : () => toggleSideBarButtons(DivLocations.Messages, sideGroups.upperGroup),
    "notifications" : () => toggleSideBarButtons(DivLocations.Notifications, sideGroups.upperGroup),
    "create" : () => toggleSideBarButtons(DivLocations.Create, sideGroups.upperGroup),
    "profile" : () => toggleSideBarButtons(DivLocations.Profile, sideGroups.upperGroup),
    "threads" : () => toggleSideBarButtons(DivLocations.Threads, sideGroups.lowerGroup),
    "more" : () => toggleSideBarButtons(DivLocations.More, sideGroups.lowerGroup)
}

// (Un)hides the buttons
function toggleSideBarButtons(divLocation : DivLocations, sideMenuGroup : string) {
    let body : Element | null = document.querySelector("body")
    let myNum : number = divLocation

    if(body != null) {
        let divs : HTMLCollection | null = body.children

        if(divs != null) {
            let secondDiv : Element = divs[1]
            if(secondDiv != null){
                let searchButton : HTMLElement | null = secondDiv.querySelector(`div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div.x78zum5.xdt5ytf.x1t2pt76.x1n2onr6.x1ja2u2z.x10cihs4 > div.x9f619.xvbhtw8.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1uhb9sk.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.x1q0g3np.xqjyukv.x1qjc9v5.x1oa3qoh.x1qughib > div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1.x1dr59a3.xixxii4.x13vifvy.xeq5yr9.x1n327nk > div > div > div > div > div.${sideMenuGroup} > div:nth-child(${myNum})`)
                if (searchButton !== null) {
                    if(searchButton.hidden){
                        searchButton.hidden = false
                    } else {
                        searchButton.hidden = true
                    }
                }
            }
        }
    }
}

// If Checkbox gets (un)checked, update buttons
chrome.runtime.onMessage.addListener((message, sender, response) => {
    let elementName = message.action as keyof typeof actionHandlers;
    const handler = actionHandlers[elementName];
    if(handler) {
        handler();
    }
});

// Immediately un(hide) buttons based on user preferences in storage
function immediateButtonUpdate() {
    chrome.storage.local.get(null, (items) =>{
        Object.entries(items).forEach(([key, value]) => {
            console.log(`${key} and ${value}`)
            let elementName = key as keyof typeof actionHandlers;
            if(value){
                const handler = actionHandlers[elementName];
                if(handler) {
                    handler();
                }
            }
        })
    })
}

// Wait for document to be loaded first, then (un)hide buttons
if (document.readyState === "loading") {
    document.addEventListener('DOMContentLoaded', immediateButtonUpdate);
} else {
    immediateButtonUpdate();
}
