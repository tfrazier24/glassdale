import { getCriminals, useCriminals } from './criminalDataProvider.js';
import { Criminal } from './criminal.js';



// let criminalHTMLContainer = document.querySelector(".criminal-list")  

export const CriminalList = (convictionFilter) => {
    let criminalListContainer = document.querySelector(".criminal-list");

    criminalListContainer.innerHTML = ""

    getCriminals().then(() => {
        let criminals = useCriminals();

        // If we get input from the convictions filter, filter our criminals so that we only see ones with that conviction
        if(convictionFilter){
             // write your filter here
          criminals = criminals.filter(currentCriminal => {
              return currentCriminal.conviction === convictionFilter
          })
    
        }
    
        criminals.forEach((singleCriminal) => {
          criminalListContainer.innerHTML += Criminal(singleCriminal);
        });  
    });
}; 

document.querySelector("#criminals-nav-link").addEventListener("click", function() {
    // invoke the function that prints the criminals
    CriminalList()
})

// let criminalListHTML = ""
// const criminals = useCriminals()
//     for(let i = 0; i < criminals.length; i++){
//         criminalListHTML += Criminal(criminals[i])
//     }
//     criminalHTMLContainer.innerHTML = criminalListHTML
// }    
// )

// }
