
import { makechoice } from './ choice-engine.js'

export default async function actEngine(act){
    for (let i = 0; i < act.length-1; i++){
        const key = Object.keys(act[i+1])
        const acc = act[i+1][key];
        console.log(`${acc.speaker}: ${acc.text}`)
        await makechoice(acc.choices)
    }
}