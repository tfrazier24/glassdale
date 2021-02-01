import { ConvictionSelect } from './convictions/convictionSelect.js'
import { OfficerSelect } from './officers/officerSelect.js'
import {NoteForm} from './notes/noteForm.js'
import {} from './notes/noteList.js'
import {  } from "./associates/associateList.js";

const darkModeButton = document.querySelector("#dark-mode")

document.querySelector("#dark-mode").addEventListener("click", function(){
// our logic for activating dark mode goes here-- this code only runs AFTER the button is clicked

// Select the entire body tag
  const bodyElement = document.querySelector("body")
// Add a class
  bodyElement.classList.toggle("dark-background")

})

ConvictionSelect()
OfficerSelect()
NoteForm()