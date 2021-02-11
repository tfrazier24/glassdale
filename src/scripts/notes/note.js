export const Note = noteObject => `
    <div class="note-card">
        <p>${noteObject.text}</p>
        <p>Date: ${noteObject.date}</p>
        <p>Suspect: ${noteObject.suspect}</p>
    </div>
`