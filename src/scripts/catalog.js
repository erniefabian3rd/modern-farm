import { harvestPlants } from "./harvester.js"

export const Catalog = (plantArray) => {
    let HTMLString = ""
    for (const plant of plantArray) {
            HTMLString += `<section class="plant"> ${plant.type}</section>`
        
    }
    return HTMLString
}