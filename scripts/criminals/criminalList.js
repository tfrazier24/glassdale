import { getCriminals, useCriminals } from './criminalDataProvider.js';
import { Criminal } from './criminal.js';

// let criminalHTMLContainer = document.querySelector(".criminal-list")  

export const CriminalList = (convictionFilter, arrestingOfficerFilter) => {
    let criminalListContainer = document.querySelector(".criminal-list");
    let officerListContainer = document.querySelector(".officer-list")
    criminalListContainer.innerHTML = ""
    officerListContainer.innerHTML = ""

    getCriminals().then(() => {
        let criminals = useCriminals();
        // If we get input from the convictions filter, filter our criminals so that we only see ones with that conviction
        if(convictionFilter){
             // the filter will create a new arrray of specific information from the original array of their conviction 
          criminals = criminals.filter(currentCriminal => {
              return currentCriminal.conviction === convictionFilter
          })
        }
        if(arrestingOfficerFilter){
            criminals = criminals.filter(currentOfficer => {
                return currentOfficer.arrestingOfficer === arrestingOfficerFilter
            })
        }
    // the forEach is a loop that will print the criminal with the correct conviction
        criminals.forEach((singleCriminal) => {
          criminalListContainer.innerHTML += Criminal(singleCriminal);
        });
        criminals.forEach((singleOfficer) => {
          officerListContainer.innerHTML += Criminal(singleOfficer);
        });
    });
}; 

document.querySelector("#criminals-nav-link").addEventListener("click", function() {
    // invoke the function that prints the criminals
    CriminalList()
})

