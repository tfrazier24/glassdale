import { useConvictions, getConvictions } from "./convictionDataProvider.js";
import { CriminalList } from '/scripts/criminals/criminalList.js';

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector("#filters__crime")

export const ConvictionSelect = () => {
    // Get all convictions from application state
    getConvictions().then(() => {
        const convictionsArray = useConvictions()
        render(convictionsArray)
})
}

// Renders the select drop down list to the browser with a list of all possible convictions
const render = convictionsCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map(currentConviction => {
                    const crimeName = currentConviction.name
                    return `<option>${crimeName}</option>`
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

    if(event.target.id === "crimeSelect"){
        console.log("You selected something from the crime dropdown")
        console.log("This is the crime that was selected: ", eventObject.target.value)
        // Your code goes here!
        // - When we select a crime, we need to filter the criminals in CriminalList.
        // - Start by importing the CriminalList component at the top of this file.
        // - Then call CriminalList, and pass in information about the crime that was chosen
        CriminalList(eventObject.target.value)
    }
})
