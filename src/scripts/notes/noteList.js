import {getNotes, useNotes} from "./noteDataProvider.js"
import { Note } from "./note.js"
import { useCriminals, getCriminals } from "../criminals/criminalDataProvider.js"

// This may be a slight refactor to what you have in your code. We added a render function to print our criminals to the DOM. You can use the render function as we do in this example, or you can keep your logic in your NoteList function-- it's up to you.

let contentTarget = document.querySelector(".noteContainer")

const render = (noteCollection, criminalCollection) => {
     contentTarget.innerHTML = noteCollection.map(note => {
        // Find the related criminal
        const relatedCriminal = criminalCollection.find(criminal => criminal.id === +note.criminalId)
        
        return `
            <section class="note">
                <h2>Note about ${relatedCriminal.name}</h2>
                ${note.text}
            </section>
        `
    }).join("")
}

export function NoteList(){
    getNotes()
    .then(getCriminals)
    .then(() => {
        const notes = useNotes()
        const criminals = useCriminals()
        render(notes, criminals)
    })
}
