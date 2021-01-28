import { getOfficers, useOfficers } from './officerDataProvider.js';
import { Officer } from './officer.js';

// let officerHTMLContainer = document.querySelector(".officer-list")

export const OfficerList = (arrestingOfficerFilter) => {
    let officerListContainer = document.querySelector(".officer-list");
    officerListContainer.innerHTML = "";

    getOfficers().then(() => {
        let arrestingOfficer = useOfficers();
        console.log(arrestingOfficer)
        if(arrestingOfficerFilter){
            arrestingOfficer = arrestingOfficer.filter(officerThatArrested => {
                return officerThatArrested.name === arrestingOfficerFilter
            })
        }
        arrestingOfficer.forEach((singleOfficer) => {
            officerListContainer.innerHTML += Officer(singleOfficer)
        }

        )
    }

    )
}


document.querySelector("#officers-nav-link").addEventListener("click", function() {
    // invoke the function that prints the officers
    OfficerList()
})
