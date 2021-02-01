export function Criminal(criminalObject){
    return `<section class="criminal-card">
    <h3>${criminalObject.name}</h3>
    <p>Age: ${criminalObject.age}</p>
    <p>Conviction: ${criminalObject.conviction}</p>
    <p>Term: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')} - ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</p>
    </section>
    <button id="associates--${criminalObject.id}">Known Associatees</button>
    `
}