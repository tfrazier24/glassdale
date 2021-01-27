import { useOfficers, getOfficers } from './officers/officerDataProvider.js'
import { useCriminals, getCriminals } from './criminals/criminalDataProvider.js' 
import { CriminalList } from './criminals/criminalList.js'
import { OfficerList } from './officers/officerList.js'
import { FacilityList } from './facilities/facilityList.js'
import { getConvictions } from './convictions/convictionDataProvider.js'
import { ConvictionSelect } from './convictions/convictionSelect.js'

// console.log(FacilityList())

// console.log(OfficerList())

// console.log(CriminalList())

const darkModeButton = document.querySelector("#dark-mode")

document.querySelector("#dark-mode").addEventListener("click", function(){
    // our logic for activating dark mode goes here-- this code only runs AFTER the button is clicked
  
  // Select the entire body tag
  const bodyElement = document.querySelector("body")

  // Add a class
  bodyElement.classList.toggle("dark-background")

})

ConvictionSelect()