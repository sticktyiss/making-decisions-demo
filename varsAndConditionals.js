/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let obiwanAttack = 25
let anakinAttack = 35

if (obiwanAttack>anakinAttack) {
    console.log("Obiwan has a better attack than Anakin")
} else if (anakinAttack>obiwanAttack) {
    console.log('Anakin has a better attack than Obiwan')
} else {
    console.log('Anakin and Obiwan have the same attack')
}

let obiwanHealth = 100
let obiwanDefense = 0

let anakinHealth = 100
let anakinDefense = 0

if (obiwanHealth - anakinAttack > 0) {
    obiwanHealth -= anakinAttack
    console.log(`Obiwan took damage but survived with ${obiwanHealth} health` )
} else {
    console.log('Obiwan has been slain')
}

obiwanDefense = 30

let coinFlip = 'heads'

if (coinFlip !== 'heads') {
    console.log('Anakin flees from Obiwan')
} else {
    console.log('The fight continues!')
}

for(let i = 0; i < 5; i++){
    if(obiwanHealth > anakinAttack - obiwanDefense) {
        obiwanHealth -= anakinAttack - obiwanDefense
        console.log(`Obiwan took damage but survived with ${obiwanHealth} health` )
    } else {
        console.log('Obiwan was slain by Anakin, becoming even more powerful than Anakin can imagine.')
    }
}

while(obiwanHealth>0) {
    obiwanHealth -= anakinAttack - obiwanDefense
    console.log(`Obiwan's health is now at ${obiwanHealth}`)
    if(obiwanHealth<=0){
        console.log('Obiwan is with the force.')
    } 
}