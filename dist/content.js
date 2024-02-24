"use strict";
// content.ts
// This file is an injected content script that can control instagram's webpage and its DOM
console.log("atleast here");
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
};
// Storing div class name from instagram page
const sideGroups = {
    upperGroup: "x1iyjqo2.xh8yej3",
    lowerGroup: "xl5mz7h.xhuyl8g"
};
const areas = {
    sideBar: "div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div.x78zum5.xdt5ytf.x1t2pt76.x1n2onr6.x1ja2u2z.x10cihs4 > div.x9f619.xvbhtw8.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1uhb9sk.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.x1q0g3np.xqjyukv.x1qjc9v5.x1oa3qoh.x1qughib > div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1.x1dr59a3.xixxii4.x13vifvy.xeq5yr9.x1n327nk > div > div > div > div > div.",
    stories: "div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div.x78zum5.xdt5ytf.x1t2pt76.x1n2onr6.x1ja2u2z.x10cihs4 > div.x9f619.xvbhtw8.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1uhb9sk.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.x1q0g3np.xqjyukv.x1qjc9v5.x1oa3qoh.x1qughib > div.x1gryazu.xh8yej3.x10o80wk.x14k21rp.x17snn68.x6osk4m.x1porb0y > section > main > div.x78zum5.x1q0g3np.xl56j7k.xh8yej3 > div > div > div.xmnaoh6 > div"
};
// Assigns each potential chrome message recieved to a function
const actionHandlers = {
    "home": () => toggleFeature(areas.sideBar, true, DivLocations.HOME, sideGroups.upperGroup),
    "search": () => toggleFeature(areas.sideBar, true, DivLocations.SEARCH, sideGroups.upperGroup),
    "explore": () => toggleFeature(areas.sideBar, true, DivLocations.EXPLORE, sideGroups.upperGroup),
    "reels": () => toggleFeature(areas.sideBar, true, DivLocations.REELS, sideGroups.upperGroup),
    "messages": () => toggleFeature(areas.sideBar, true, DivLocations.MESSAGES, sideGroups.upperGroup),
    "notifications": () => toggleFeature(areas.sideBar, true, DivLocations.NOTIFICATIONS, sideGroups.upperGroup),
    "create": () => toggleFeature(areas.sideBar, true, DivLocations.CREATE, sideGroups.upperGroup),
    "profile": () => toggleFeature(areas.sideBar, true, DivLocations.PROFILE, sideGroups.upperGroup),
    "threads": () => toggleFeature(areas.sideBar, true, DivLocations.THREADS, sideGroups.lowerGroup),
    "more": () => toggleFeature(areas.sideBar, true, DivLocations.MORE, sideGroups.lowerGroup),
    "stories": () => toggleFeature(areas.stories, false)
};
// (Un)hides the buttons
function toggleFeature(area, isSideBar, divLocation, sideMenuGroup) {
    let body = document.querySelector("body");
    let feature;
    if (body != null) {
        let divs = body.children;
        if (divs != null) {
            let secondDiv = divs[1];
            if (secondDiv != null) {
                if (isSideBar) {
                    feature = secondDiv.querySelector(`${area}${sideMenuGroup} > ${divLocation}`);
                }
                else {
                    feature = secondDiv.querySelector(`${area}`);
                }
                if (feature !== null) {
                    if (divLocation == "span") {
                        if (feature.style.display == 'none') {
                            feature.style.display = 'block';
                        }
                        else {
                            feature.style.display = 'none';
                        }
                    }
                    if (feature.hidden) {
                        feature.hidden = false;
                    }
                    else {
                        feature.hidden = true;
                    }
                }
            }
        }
    }
}
// If Checkbox gets (un)checked, update buttons
chrome.runtime.onMessage.addListener((message, sender, response) => {
    let elementName = message.action;
    const handler = actionHandlers[elementName];
    if (handler) {
        handler();
    }
});
// Immediately un(hide) buttons based on user preferences in storage
function immediateButtonUpdate() {
    chrome.storage.local.get(null, (items) => {
        Object.entries(items).forEach(([key, value]) => {
            let elementName = key;
            if (value) {
                const handler = actionHandlers[elementName];
                if (handler) {
                    handler();
                }
            }
        });
    });
}
// Wait for document to be loaded first, then (un)hide buttons
if (document.readyState === "loading") {
    document.addEventListener('DOMContentLoaded', immediateButtonUpdate);
}
else {
    immediateButtonUpdate();
}
