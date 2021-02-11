import { saveNote } from './noteDataProvider.js'
import {NoteList} from './noteList.js'
import {Criminal} from '../criminals/criminal.js'
import { getCriminals, useCriminals } from '../criminals/criminalDataProvider.js'

const contentTarget = document.querySelector(".noteFormContainer")

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        // Make a new object representation of a note
        let noteText = document.getElementById("note-message")
        let selectedCriminalId = document.getElementById("noteForm--criminal")
        const noteToSave = {
            // Key/value pairs here
            text: noteText.value,
            criminalId: selectedCriminalId.value
        }
    
        // // Change API state and application state
        saveNote(noteToSave)
         .then(NoteList) // Refresh your list of notes once you've saved your new one
    }
})

 export const NoteForm = () => {
     getCriminals()
     .then(() =>{
         let criminals = useCriminals()
    

    //  console.log(criminalString)
    contentTarget.innerHTML = `
 
    <input type="text" placeholder="message.." id="note-message"></input>
    <select id="noteForm--criminal" class="criminalSelect">
     ${criminalString(criminals)}
    </select>

        <button id="saveNote">Save Note</button>
            `
    })
}

const criminalString = (criminals) =>{ 
    let optionString =criminals.map((criminal) =>
        `<option value="${ criminal.id }">${ criminal.name }</option>`
    ) 
    return optionString
 }