import { choices } from './choice-weight.js'

export async function getSet(arr){
    let finalX = 0
    let finalY = 0
    const filtered = Object.entries(choices).filter(([key, value])=> {
        return arr.includes(key)
    })
    for(let i = 0; i < filtered.length; i++){
        finalX += filtered[i][1].x
        finalY += filtered[i][1].y
    }

   const radarPlane = {x: finalX/18, y: finalY/18}
//    console.log(radarPlane, finalX, finalY)
   return radarPlane
} 