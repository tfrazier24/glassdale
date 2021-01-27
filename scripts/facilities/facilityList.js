import { getFacilities, useFacilities } from './facilityDataProvider.js'
import { Facility } from './facility.js'

let facilityHTMLContainer = document.querySelector(".facility-list")

export const FacilityList = () => {
    getFacilities()
    .then(() => {
        let facilityListHTML = ""
        const facilities = useFacilities()
            for(let i =0; i < facilities.length; i++){
                facilityListHTML += Facility(facilities[i])
        }
        facilityHTMLContainer.innerHTML = facilityListHTML
    }
    )
}

document.querySelector("#facilities-nav-link").addEventListener("click", function() {
    // invoke the function that prints the criminals
    FacilityList()
})