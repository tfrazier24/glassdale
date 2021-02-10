import {getNotes, useNotes} from "./noteDataProvider.js"
import { Note } from "./note.js"

export function NoteList(){
    getNotes()
    .then(() => {
        const allTheNotes = useNotes()

        // This is an element we added!
        const contentTarget = document.querySelector(".noteListContainer")

        // This does the same thing as printing with a for loop! We just use a .map() to loop over our collection and call the Note function instead of a for loop
        
        contentTarget.innerHTML = allTheNotes.map(singleNote => Note(singleNote))
    })
}
