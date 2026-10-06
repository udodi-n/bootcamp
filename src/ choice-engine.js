import { choices } from './choice-catalog.js'

export async function grabChoice(choiceArray){
    const obj = choices.filter(item => choiceArray.includes(item.id))
    console.log(obj)
    return obj
}