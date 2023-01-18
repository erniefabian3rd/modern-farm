import { createPlan } from './plan.js'
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"

const yearlyPlan = createPlan();
//console.log(yearlyPlan);

const asparagusSeed = createAsparagus()
const cornSeed = createCorn()
const potatoSeed = createPotato()
const soybeanSeed = createSoybean()
const sunflowerSeed = createSunflower()
const wheatSeed = createWheat()
//console.log(asparagusSeed)

const asparagusAdd = addPlant(asparagusSeed)
const cornAdd = addPlant(cornSeed)
const potatoAdd = addPlant(potatoSeed)
const soybeanAdd = addPlant(soybeanSeed)
const sunflowerAdd = addPlant(sunflowerSeed)
const wheatAdd = addPlant(wheatSeed)
//console.log(asparagusAdd)

const asparagusUsed = usePlants()
const cornUsed = usePlants()
const potatoUsed = usePlants()
const soybeanUsed = usePlants()
const sunflowerUsed = usePlants()
const wheatUsed = usePlants()
//console.log(asparagusUsed)


const seedPlanter = plantSeeds(yearlyPlan)
//console.log(usePlants())

const useThePlants = usePlants()

const plantHarvester = harvestPlants(useThePlants)
//console.log(plantHarvester)

const parentHTMLElement = document.querySelector(".container")
parentHTMLElement.innerHTML = Catalog(plantHarvester)


//console.log("Welcome to the main module")

