import { getCriminals, useCriminals } from '../criminals/criminalDataProvider.js'

document.querySelector("main").addEventListener("click", (eventObject) => {

    if(eventObject.target.id.includes("associates--")){
      const idOfCriminalClicked = eventObject.target.id.split("--").pop()
      const allTheCriminals = useCriminals()

      const matchingCriminal = allTheCriminals.find((singleCriminalInLoop) => {
        return singleCriminalInLoop.id === +idOfCriminalClicked
      })
      console.log("this should be the matching criminals associates", matchingCriminal.known_associates)

      document.querySelector(".known-associates-container").innerHTML = ""
      for(let i = 0; i < matchingCriminal.known_associates.length; i++){
        document.querySelector(".known-associates-container").innerHTML += `
        <p>${matchingCriminal.known_associates[i].name}</p>
        <p>${matchingCriminal.known_associates[i].alibi}</p>
        `
      }
    }
})
