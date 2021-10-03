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
const pokeballsPlayer = document.querySelectorAll('.pokeballs-player')

const pokemonMachine = document.querySelector(".pokemon-machine")
const machineHealthText = document.querySelector(".machine-health-text")
const machineLife = document.querySelector(".machine-life")
const pokeballsMachine = document.querySelectorAll('.pokeballs-machine')

const btnAttack = document.querySelector(".btn-attack")
const btnPotion = document.querySelector(".btn-potion")

const historyDiv = document.querySelector(".history-content")

let randomPlayer = Math.floor(Math.random() * arrayPokemons.length)
let randomMachine = Math.floor(Math.random()* arrayPokemons.length)

//Potions variables
let pokemonsPlayer, pokemonsMachine, potions = 6
const potionCure = 20

let healthPlayerAttack = arrayPokemons[randomPlayer].health
let setPokemonPlayerName =  arrayPokemons[randomPlayer].name.toUpperCase()

let healthMachineAttack = arrayPokemons[randomMachine].health
let setPokemonMachineName = arrayPokemons[randomMachine].name.toUpperCase()


let countPokeballsPlayer = 6
let countPokeballsMachine =  6

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

    console.log(healthPlayerAttack);
    if(healthPlayerAttack > 0){
        //POKEMON PLAYER ATTACK
        let pokemonPlayerAttack = Math.round(Math.random()* (10 - 1) + 1) * arrayPokemons[randomPlayer].attack 
        
        //MACHINE HEALTH AFTER PLAYER ATTACK
        healthMachineAttack = healthMachineAttack - pokemonPlayerAttack
        machineLife.value = healthMachineAttack
        healthMachineAttack > 0 ? machineHealthText.textContent = `HEALTH: ${healthMachineAttack}%` : machineHealthText.textContent = `HEALTH: 0%`

        //CREATE <p></p> on History DIV
        let resumeHistory = document.createElement("p")
        resumeHistory.textContent = `▶PLAYER: Pokemon ${setPokemonPlayerName} attack:${pokemonPlayerAttack} ▷CPU: Pokemon life ${healthMachineAttack > 0 ? healthMachineAttack : 0 }%`
    
        historyDiv.childNodes.length > 5 ? historyDiv.removeChild(historyDiv.firstChild) :  historyDiv.appendChild(resumeHistory)  
        
    }
    btnAttack.disabled = true;

     //MACHINE ATTACK PLAYER AFTER 3s
     healthMachineAttack > 0 ? setTimeout(()=>{machineAttack()},3000) :  changePokemon()

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
    resumeHistory.textContent = `▶CPU: Pokemon ${setPokemonMachineName} attack:${pokemonMachineAttack} ▷PLAYER: Pokemon life ${healthPlayerAttack > 0 ? healthPlayerAttack : 0 }%`
    historyDiv.childNodes.length > 5 ? historyDiv.removeChild(historyDiv.firstChild) :  historyDiv.appendChild(resumeHistory)

    if(healthPlayerAttack <= 0){
        changePokemon()
    }
    btnAttack.disabled = false;
}

const changePokemon = () =>{

    let resumeHistory = document.createElement("p")

    if(healthPlayerAttack <= 0){

        if(pokemonsPlayer == 0){ alert("PLAYER WON");}
        randomPlayer = Math.floor(Math.random() * arrayPokemons.length)
        setPokemonPlayerName =  arrayPokemons[randomPlayer].name.toUpperCase()
        pokemonPlayer.textContent = setPokemonPlayerName
        playerHealthText.textContent = `HEALTH : ${arrayPokemons[randomPlayer].health}%`
        playerLife.value = arrayPokemons[randomPlayer].health
        healthPlayerAttack = arrayPokemons[randomPlayer].health
        
        pokeballsPlayer[countPokeballsPlayer -1].style.filter = "grayscale(100%)"
        countPokeballsPlayer = countPokeballsPlayer - 1

        pokemonsPlayer = pokemonsPlayer - 1
        console.log(pokemonsPlayer);
        
        resumeHistory.textContent = `▶PLAYER: ${setPokemonPlayerName}  I CHOOSE YOU !!!`
        historyDiv.childNodes.length > 6 ? historyDiv.removeChild(historyDiv.firstChild) :  historyDiv.appendChild(resumeHistory)  
        
        setTimeout(()=>{machineAttack()},3000)

    }
    
    if(healthMachineAttack <= 0){

        if(pokemonsMachine == 0){ alert("PLAYER WON");}

        randomMachine = Math.floor(Math.random() * arrayPokemons.length)
        setPokemonMachineName =  arrayPokemons[randomMachine].name.toUpperCase()
        pokemonMachine.textContent = setPokemonMachineName
        machineHealthText.textContent = `HEALTH : ${arrayPokemons[randomMachine].health}%`
        machineLife.value = arrayPokemons[randomMachine].health
        healthMachineAttack = arrayPokemons[randomMachine].health

        pokeballsMachine[countPokeballsMachine -1].style.filter = "grayscale(100%)"
        countPokeballsMachine = countPokeballsMachine -  1

        resumeHistory.textContent = `▶CPU: ${setPokemonMachineName}  I CHOOSE YOU !!!`
        historyDiv.childNodes.length > 6 ? historyDiv.removeChild(historyDiv.firstChild) :  historyDiv.appendChild(resumeHistory)  
        btnAttack.disabled = false
        
        pokemonsMachine = pokemonsMachine - 1
        console.log(pokemonsMachine);
    }

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

// EVENTS
window.addEventListener("load",startGame())
btnAttack.addEventListener("click", ()=>{playerAttack()})
btnPotion.addEventListener("click",()=>{consumePotions()})


