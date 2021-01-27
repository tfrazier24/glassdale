import { getOfficers, useOfficers } from './officerDataProvider.js'
import { Officer } from './officer.js'

let officerHTMLContainer = document.querySelector(".officer-list")

export const OfficerList = () => {
    getOfficers()
    .then(() => {
        let officerListHTML = ""
        const officers = useOfficers()
            for(let i = 0; i < officers.length; i++){
                officerListHTML += Officer(officers[i])
            }
            officerHTMLContainer.innerHTML = officerListHTML
    }
    )
}

document.querySelector("#officers-nav-link").addEventListener("click", function() {
    // invoke the function that prints the officers
    OfficerList()
})