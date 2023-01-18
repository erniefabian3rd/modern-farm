import { usePlants } from "./field.js"

/*
Create a function, harvestPlants, that takes in the fieldOfPlants
    as a parameter
Create a seedsArray variable set to an empty array
Iterate the parameter's array and access the output property for each object
Return the object equal to the number in the output property

Corn is the exception, return half
*/

export const harvestPlants = (fieldOfPlants) => {
    let seedsArray = []
    for (const plant of fieldOfPlants) {
        if (plant.type === "Corn") {
            let output = plant.output / 2
            for (let i = 0; i < output; i++) {
                seedsArray.push(plant)
            }
        } else {
            for (let i = 0; i < plant.output; i++) {
                seedsArray.push(plant)
            }
        }
    }
    return seedsArray
}