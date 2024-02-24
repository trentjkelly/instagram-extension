// content.ts
// This file is an injected content script that can control instagram's webpage and its DOM

// Storing div's child # from instagram page
const DivLocations = {
    HOME: "div:nth-child(1)",
    SEARCH: "div:nth-child(2)",
    EXPLORE: "div:nth-child(3)",
    REELS: "div:nth-child(4)",
    MESSAGES: "div:nth-child(5)",
    NOTIFICATIONS: "div:nth-child(6)",
    CREATE: "div:nth-child(7)",
    PROFILE: "div:nth-child(8)",
    THREADS: "div:nth-child(1)",
    MORE: "span"
}

// Storing div class name from instagram page
const sideGroups = {
    upperGroup: "x1iyjqo2.xh8yej3",
    lowerGroup: "xl5mz7h.xhuyl8g"
}

// Assigns each potential chrome message recieved to a function
const actionHandlers = {
    "home" : () => toggleSideBarButtons(DivLocations.HOME, sideGroups.upperGroup),
    "search" : () => toggleSideBarButtons(DivLocations.SEARCH, sideGroups.upperGroup),
    "explore" : () => toggleSideBarButtons(DivLocations.EXPLORE, sideGroups.upperGroup),
    "reels" : () => toggleSideBarButtons(DivLocations.REELS, sideGroups.upperGroup),
    "messages" : () => toggleSideBarButtons(DivLocations.MESSAGES, sideGroups.upperGroup),
    "notifications" : () => toggleSideBarButtons(DivLocations.NOTIFICATIONS, sideGroups.upperGroup),
    "create" : () => toggleSideBarButtons(DivLocations.CREATE, sideGroups.upperGroup),
    "profile" : () => toggleSideBarButtons(DivLocations.PROFILE, sideGroups.upperGroup),
    "threads" : () => toggleSideBarButtons(DivLocations.THREADS, sideGroups.lowerGroup),
    "more" : () => toggleSideBarButtons(DivLocations.MORE, sideGroups.lowerGroup)
}

// (Un)hides the buttons
function toggleSideBarButtons(divLocation : string, sideMenuGroup : string) {
    let body : Element | null = document.querySelector("body")
    if(body != null) {
        let divs : HTMLCollection | null = body.children
        if(divs != null) {
            let secondDiv : Element = divs[1]
            if(secondDiv != null){
                let searchButton : HTMLElement | null = secondDiv.querySelector(`div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div.x78zum5.xdt5ytf.x1t2pt76.x1n2onr6.x1ja2u2z.x10cihs4 > div.x9f619.xvbhtw8.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1uhb9sk.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.x1q0g3np.xqjyukv.x1qjc9v5.x1oa3qoh.x1qughib > div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1.x1dr59a3.xixxii4.x13vifvy.xeq5yr9.x1n327nk > div > div > div > div > div.${sideMenuGroup} > ${divLocation}`)
                if (searchButton !== null) {
                    if(divLocation == "span"){
                        if(searchButton.style.display == 'none'){
                            searchButton.style.display = 'block'
                        } else {
                            searchButton.style.display = 'none';
                        }
                    }
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
