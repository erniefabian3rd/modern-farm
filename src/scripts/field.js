/*
Create an empty array and assign it a variable
Create a function, addPlant, and pass in the seedObject
    as a parameter
Use the .push method to add the plant to the empty array


Create a second function, usePlants, that returns a copy of the array
*/

let fieldOfPlants = [];

export const addPlant = (seedObject) => {
    if (Array.isArray(seedObject)) {
        for (const object of seedObject) {
            fieldOfPlants.push(object)
        }
    } else {
        fieldOfPlants.push(seedObject)
    }
}

export const usePlants = () => {
    return fieldOfPlants
}