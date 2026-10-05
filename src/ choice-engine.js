const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export async function makechoice(choiceArray){
    await delay(2000)
    console.log(choiceArray[1])
    await delay(1000)
}