import { createPlan } from './plan.js'
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"

/*
Create a function, plantSeeds, that passes in yearlyPlan as parameter
Iterate the yearlyPlan array
Iterate the individual objects of the yearlyPlan array
Check for each type and return it's corresponding factory function
    inside of the addPlant function from the field module
*/

export const plantSeeds = (yearlyPlan) => {
    for (const plan of yearlyPlan) {
        for (const type of plan) {
            if (type === "Asparagus") {
                addPlant(createAsparagus())
            } else if (type === "Corn") {
                addPlant(createCorn())
            } else if (type === "Potato") {
                addPlant(createPotato())
            } else if (type === "Soybean") {
                addPlant(createSoybean())
            } else if (type === "Sunflower") {
                addPlant(createSunflower())
            } else if (type === "Wheat") {
                addPlant(createWheat())
            }
        }
    }
}