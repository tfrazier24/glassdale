export function Facility(facilityObject){
    return `<section>
    <h3>${facilityObject.facilityName}</h3>
    <p>Security Level:${facilityObject.securityLevel}</p>
    <p>Capacity: ${facilityObject.capacity}</p>
    </section>`
}