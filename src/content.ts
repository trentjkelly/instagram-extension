enum DivLocations {
    Search = 2,
    Explore = 3,
    Reels = 4,
    Messages = 5,
    Notifications = 6
}

function listForChecks() {

    console.log("listForChecks check")

    let search = document.getElementById("search")
    let explore = document.getElementById("explore")
    let reels = document.getElementById("reels")
    let messages = document.getElementById("messages")
    let notifications = document.getElementById("notifications")
    
    if(search != null){
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
}

function toggleSearch() {
    toggleSideBarButtons(DivLocations.Search)
}

function toggleExplore() {
    toggleSideBarButtons(DivLocations.Explore)
}

function toggleReels() {
    toggleSideBarButtons(DivLocations.Reels)
}

function toggleMessages() {
    toggleSideBarButtons(DivLocations.Messages)
}

function toggleNotifications() {
    toggleSideBarButtons(DivLocations.Notifications)
}

function toggleSideBarButtons(divLocation: DivLocations) {
    let body : Element | null = document.querySelector("body")
    let myNum : number = divLocation

    if(body != null) {
        let divs : HTMLCollection | null = body.children

        if(divs != null) {
            let secondDiv : Element = divs[1]
            if(secondDiv != null){
                let searchButton : HTMLElement | null = secondDiv.querySelector(`div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div.x78zum5.xdt5ytf.x1t2pt76.x1n2onr6.x1ja2u2z.x10cihs4 > div.x9f619.xvbhtw8.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1uhb9sk.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.x1q0g3np.xqjyukv.x1qjc9v5.x1oa3qoh.x1qughib > div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1.x1dr59a3.xixxii4.x13vifvy.xeq5yr9.x1n327nk > div > div > div > div > div.x1iyjqo2.xh8yej3 > div:nth-child(${myNum})`)

                if (searchButton == null) {
                    console.log("Failed to toggle side bar button")
                } else {
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

// // Check to see if the boxes are checked in the first place
// listForChecks()