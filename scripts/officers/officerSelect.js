import {useOfficers, getOfficers} from './officerDataProvider.js'
import { CriminalList } from '/scripts/criminals/criminalList.js';


const officerTarget = document.querySelector("#filters__officer") 

export const OfficerSelect = () => {
    getOfficers().then(() => {
        const officerArray = useOfficers()
        render(officerArray)
    }
    )
}

const render = officerCollection => {
    officerTarget.innerHTML = `
    <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${
                officerCollection.map(currentOfficer => {
                    const officerName = currentOfficer.name
                    return `<option>${officerName}</option>`
                })
            }
        </select>
    `
}

const eventHub = document.querySelector("main")
eventHub.addEventListener("change", (eventObject) => {
    console.log("You clicked somewhere in the main container")

    // To be more specific, we need to know specifically what we clicked on
    console.log("Here is the element you clicked on: ", eventObject.target)

    if(eventObject.target.id === "officerSelect"){
        console.log("You selected something from the officer dropdown")
        console.log("This is the officer that was selected: ", eventObject.target.value)
        // in CriminalList I had to give two paramaters to the export in CriminalList allowing it to pass by my conviction filter parameter
        CriminalList(undefined, eventObject.target.value)
    }
})
