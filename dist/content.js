"use strict";
chrome.runtime.onMessage.addListener((message, sender, response) => {
    if (message.action === "toggleHome") {
        toggleHome();
    }
    if (message.action === "toggleSearch") {
        toggleSearch();
    }
    if (message.action === "toggleExplore") {
        toggleExplore();
    }
    if (message.action === "toggleReels") {
        toggleReels();
    }
    if (message.action === "toggleMessages") {
        toggleMessages();
    }
    if (message.action === "toggleNotifications") {
        toggleNotifications();
    }
    if (message.action === "toggleCreate") {
        toggleCreate();
    }
    if (message.action === "toggleProfile") {
        toggleProfile();
    }
});
var DivLocations;
(function (DivLocations) {
    DivLocations[DivLocations["Home"] = 1] = "Home";
    DivLocations[DivLocations["Search"] = 2] = "Search";
    DivLocations[DivLocations["Explore"] = 3] = "Explore";
    DivLocations[DivLocations["Reels"] = 4] = "Reels";
    DivLocations[DivLocations["Messages"] = 5] = "Messages";
    DivLocations[DivLocations["Notifications"] = 6] = "Notifications";
    DivLocations[DivLocations["Create"] = 7] = "Create";
    DivLocations[DivLocations["Profile"] = 8] = "Profile";
})(DivLocations || (DivLocations = {}));
function toggleHome() {
    toggleSideBarButtons(DivLocations.Home);
}
function toggleSearch() {
    toggleSideBarButtons(DivLocations.Search);
}
function toggleExplore() {
    toggleSideBarButtons(DivLocations.Explore);
}
function toggleReels() {
    toggleSideBarButtons(DivLocations.Reels);
}
function toggleMessages() {
    toggleSideBarButtons(DivLocations.Messages);
}
function toggleNotifications() {
    toggleSideBarButtons(DivLocations.Notifications);
}
function toggleCreate() {
    toggleSideBarButtons(DivLocations.Create);
}
function toggleProfile() {
    toggleSideBarButtons(DivLocations.Profile);
}
function toggleSideBarButtons(divLocation) {
    let body = document.querySelector("body");
    let myNum = divLocation;
    if (body != null) {
        let divs = body.children;
        if (divs != null) {
            let secondDiv = divs[1];
            if (secondDiv != null) {
                let searchButton = secondDiv.querySelector(`div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div.x78zum5.xdt5ytf.x1t2pt76.x1n2onr6.x1ja2u2z.x10cihs4 > div.x9f619.xvbhtw8.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1uhb9sk.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.x1q0g3np.xqjyukv.x1qjc9v5.x1oa3qoh.x1qughib > div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1.x1dr59a3.xixxii4.x13vifvy.xeq5yr9.x1n327nk > div > div > div > div > div.x1iyjqo2.xh8yej3 > div:nth-child(${myNum})`);
                if (searchButton !== null) {
                    if (searchButton.hidden) {
                        searchButton.hidden = false;
                    }
                    else {
                        searchButton.hidden = true;
                    }
                }
            }
        }
    }
}
