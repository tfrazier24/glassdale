import { saveNote } from './noteDataProvider.js'
import {NoteList} from './noteList.js'

const contentTarget = document.querySelector(".noteFormContainer")

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            text: document.querySelector("#note-name").value,
            date: document.querySelector("#note-date").value,
            suspect: document.querySelector("#note-message").value
        }
    
        // // Change API state and application state
        saveNote(newNote)
         .then(NoteList) // Refresh your list of notes once you've saved your new one
    }
})

 export const NoteForm = () => {
    contentTarget.innerHTML = `
        
        <input type="text" placeholder="add name"id="note-name"></input>
        <input type="date" id="note-date"></input>
        <input type="text" placeholder="message.." id="note-message"></input>

        <button id="saveNote">Save Note</button>
    `
}
