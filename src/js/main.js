// const pokemons = [ 
//     "bulbasaur", 
//     "ivysaur", 
//     "venusaur" ,
//     "charmander",
//     "charmeleon", 
//     "charizard", 
//     "squirtle",
//     "wartortle", 
//     "blastoise", "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata", "raticate", "spearow", "fearow" ,"ekans", "arbok" ,"pikachu", "raichu", "sandshrew", "sandslash" ,"nidoran-f" ,"nidorina" ,"nidoqueen", "nidoran-m", "nidorino", "nidoking" ,"clefairy", "clefable", "vulpix", "ninetales", "jigglypuff" ,"wigglytuff" ,"zubat" ,"golbat", "oddish" ,"gloom", "vileplume", "paras" ,"hypno" ,"krabby", "kingler", "voltorb",];


const arrayPokemons = [ 
        {
            name:"bulbasaur",
            health: 100,
            attack:10,
        }, 
        {
            name:"ivysaur",
            health: 100,
            attack:10,
        }, 
        {
            name:"venusaur",
            health: 100,
            attack:10,
        }, 
        {
            name:"charmander",
            health: 100,
            attack:10,
        }, 
        {
            name:"charmeleon",
            health: 100,
            attack:10,
        }, 
        {
            name:"charizard",
            health: 100,
            attack:10,
        }, 
        {
            name:"squirtle",
            health: 100,
            attack:10,
        }, 
        {
            name:"wartortle",
            health: 100,
            attack:10,
        }, 
        {
            name:"blastoise",
            health: 100,
            attack:10,
        }, 
];


const pokemonPlayer = document.querySelector(".pokemon-player")
const playerHealthText = document.querySelector(".player-health-text")
const playerLife = document.querySelector(".player-life")


const pokemonMachine = document.querySelector(".pokemon-machine")
const machineHealthText = document.querySelector(".machine-health-text")
const machineLife = document.querySelector(".machine-life")

const btnAttack = document.querySelector(".btn-attack")
const btnPotion = document.querySelector(".btn-potion")

const historyDiv = document.querySelector(".history-content")

const randomPlayer = Math.floor(Math.random() * arrayPokemons.length)
const randomMachine = Math.floor(Math.random()* arrayPokemons.length)

//Potions variables
let potions = 6
const potionCure = 20

console.log(randomPlayer);

let healthPlayerAttack = arrayPokemons[randomPlayer].health
let setPokemonPlayerName =  arrayPokemons[randomPlayer].name.toUpperCase()

let healthMachineAttack = arrayPokemons[randomMachine].health
let setPokemonMachineName = arrayPokemons[randomMachine].name.toUpperCase()

const startGame = () =>{

    pokemonPlayer.textContent = setPokemonPlayerName
    playerHealthText.textContent = `HEALTH : ${arrayPokemons[randomPlayer].health}%`
    playerLife.value = arrayPokemons[randomPlayer].health

    pokemonMachine.textContent = arrayPokemons[randomMachine].name.toUpperCase()
    machineHealthText.textContent = `HEALTH : ${arrayPokemons[randomMachine].health}%`
    machineLife.value = arrayPokemons[randomMachine].health

    btnPotion.textContent = `POTION (${potions})🧪`
   

}


const playerAttack = () =>{

    //POKEMON PLAYER ATTACK
    let pokemonPlayerAttack = Math.round(Math.random()* (10 - 1) + 1) * arrayPokemons[randomPlayer].attack 
    
    //MACHINE HEALTH AFTER PLAYER ATTACK
    healthMachineAttack = healthMachineAttack - pokemonPlayerAttack
    machineLife.value = healthMachineAttack
    healthMachineAttack > 0 ? machineHealthText.textContent = `HEALTH: ${healthMachineAttack}%` : machineHealthText.textContent = `HEALTH: 0%`

    //CREATE <p></p> on History DIV
    let resumeHistory = document.createElement("p")
    resumeHistory.textContent = `▶PLAYER: Pokemon ${setPokemonPlayerName} attack:${pokemonPlayerAttack} ▷MACHINE: Pokemon life ${healthMachineAttack > 0 ? healthMachineAttack : 0 }%`
   
    historyDiv.childNodes.length > 5 ? historyDiv.removeChild(historyDiv.firstChild) :  historyDiv.appendChild(resumeHistory)

    //MACHINE ATTACK PLAYER AFTER 3s
    healthMachineAttack != 0 ? setTimeout(()=>{machineAttack()},3000) :  changePokemon
    
}

const machineAttack = () =>{
    //POKEMON CPU ATTACK
    let pokemonMachineAttack = Math.round(Math.random()* (10 - 1) + 1) * arrayPokemons[randomMachine].attack

    //PLAYER HEALTH AFTER MACHINE ATTACK
    healthPlayerAttack = healthPlayerAttack - pokemonMachineAttack
    playerLife.value = healthPlayerAttack
    healthPlayerAttack > 0 ? playerHealthText.textContent = `HEALTH: ${healthPlayerAttack}%` :  playerHealthText.textContent = `HEALTH: 0%`


    //CREATE <p></p> on History DIV
    let resumeHistory = document.createElement("p")
    resumeHistory.textContent = `▶CPU: Pokemon ${setPokemonMachineName} attack:${pokemonMachineAttack} ▷PLAYER: Pokemon life ${healthPlayerAttack > 0 ? healthMachineAttack : 0 }%`
    
    historyDiv.childNodes.length > 5 ? historyDiv.removeChild(historyDiv.firstChild) :  historyDiv.appendChild(resumeHistory)

}

const changePokemon = ()=>{


}

// FUNCTION TO CONSUME THE POTIONS
const consumePotions = ()=>{
    if (potions != 0 && (healthPlayerAttack > 0 && healthPlayerAttack <= 80)){
        healthPlayerAttack = healthPlayerAttack + potionCure
        potions = --potions
        playerLife.value = healthPlayerAttack
        playerHealthText.textContent = `HEALTH: ${healthPlayerAttack}%`
        btnPotion.innerHTML = `POTION (${potions})🧪`
    }
}




window.addEventListener("load",startGame())
btnAttack.addEventListener("click", ()=>{playerAttack()})
btnPotion.addEventListener("click",()=>{consumePotions()})


