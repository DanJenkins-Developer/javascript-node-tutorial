/* 
🌟 APP: Fighting Game

Create an updateGame() function that will update the DOM with the state of the game 👇
========================================

- updateGame()

These are the 2 classes you must create and their methods 👇
========================================

class Player {
  - strike()
  - heal()
}

class Game {
  - play()
  - checkIsOver()
  - declareWinner()
  - reset()
}

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'play' = Button to run simulation
#2 ID 👉 'result' = Div that holds the winner of the match
#3 ID 👉 'p1Name' = Div that holds player 1's Name
#4 ID 👉 'p2Name' = Div that holds player 2's Name
#5 ID 👉 'p1Health' = Div that holds player 1's health
#6 ID 👉 'p2Health' = Div that holds player 2's health
*/

// ** Grabs elements from the DOM and stores them into variables **
let playButton = document.getElementById('play')
let resultDiv = document.getElementById('result')
let p1NameDiv = document.getElementById('p1Name')
let p2NameDiv = document.getElementById('p2Name')
let p1HealthDiv = document.getElementById('p1Health')
let p2HealthDiv = document.getElementById('p2Health')

// ** Check if either players health is  0 and if it is, then update isOver to true **
const updateGame = () => {
  // Update the DOM with the names and the latest health of players

  p1NameDiv.innerHTML = p1.name
  p2NameDiv.innerHTML = p2.name

  p1HealthDiv.innerHTML = p1.health
  p2HealthDiv.innerHTML = p2.health
  // Condition IF either player health is <= 0 then set isOver to true and declareWinner

  if (p1.health <=0 || p2.health <=0) {
    game.isOver = true
    let result = game.declareWinner()
    console.log(result)
    resultDiv.innerHTML = game.declareWinner()
  }
  // console.log("In update game")
  // console.log("1 ::", p1)
  // console.log("2 ::", p2)
  // console.log("3 ::", game.isOver)
  

}

// ** Create the Player class which can create a player with all it's attributes and methods **
// qazi = new Player('Qazi', 100, 7)
// qazi.name 👉 'Qazi'
// qazi.health 👉 100
// qazi.attackDmg 👉 7
class Player {
  constructor(name, health, attackDamage) {
    this.name = name;
    this.health = health;
    this.attackDmg = attackDamage;
  }
  // ** Attack an enemy with a random number from 0 to YOUR attackDmg bonus **
  strike (enemy) {
    let message = ""
    
    // Get random number between 1 - 10 and that is damageAmount
    const damageAmount = Math.floor(Math.random() * 10) + 1

    // Subtract the enemy health with the damageAmount
    let newEnemyHealth = enemy.health - damageAmount
    enemy.health = newEnemyHealth
    
    //  Update the game and DOM with updateGame()
    updateGame() 

    //  Return a message of 'player name attacks enemy name for damageAmount'
    message = `${this.name} attacks ${enemy.name} for ${damageAmount}`
    resultDiv.innerHTML = message
    //return message
  }
  heal () {
    
    // Get random number between 1 - 5 and store that in hpAmount
    const hpAmount = Math.floor(Math.random() * 10) + 1
    // Add hpAmount to players health
    this.health = this.health + hpAmount
    //  Update the game and DOM with updateGame()
    updateGame()
    //  Return a message of 'player name heals for hpAmount HP'

  }
}
// ** Create the Game class with all it's attributes and methods to run a match **
// game = new Game()
// game.isOver 👉 false
class Game {
  constructor() {
    this.isOver = false;
  }

  // ** If the game is over and a player has 0 health declare the winner! **
  declareWinner() {
    
    // Create a message variable that will hold a message based on the condition
    let message = ""
    // If isOver is true AND p1 health is <= 0 then update message variable  to 'p1 WINS!'
    if (p1.health > p2.health) {
      message = "p1 WINS!!"
      
    } else {
      message = "p2 WINS!!"
      
    }
    // Else if isOver is true AND p2 health is <= 0 then update message variable        to 'p2 WINS!'
    
    // Play victory sound
    document.getElementById('victory').play()
    
    
    // Return message variable 
    return message
  }

  // ** Reset the players health back to it's original state and isOver to FALSE **
  reset(p1,p2) {
    // set p1 health and p2 health back to 100 and isOver back to false and clear resultDiv.innerText and don't forget to updateGame()
  
  }
  
  // ** Simulates the whole match untill one player runs out of health **
  play(p1, p2) {
    // Reset to make sure player health is back to full before starting

    // Make sure the players take turns untill isOver is TRUE
    while (!this.isOver) {
      //Make sure both players get strike() and heal() once each loop
    }
    // Once isOver is TRUE run the declareWinner() method 
    
  }

}

// ** Create 2 players using the player class **


// ** Save original Player Data into a variable in order to reset **
// let p1;
// let p2;
let p1 = new Player ("Dan", 100, 15)
let p2 = new Player ("Not Dan", 100, 12)
let game = new Game()
// ** Create the game object from the Game class **

// ** Intialize the game by calling updateGame() **


// ** Save intial isOver from the game object inside this variable **


//updateGame()
//console.log(gameState)


// ** Add a click listener to the simulate button that runs the play() method on click and pass in the players **


// Add functionality where players can press a button to attack OR heal

// ** Player 1 Controls **
document.addEventListener('keydown', function(e) {
  // if you press Q AND the enemy health is greater than 0 AND isOver is still false then strike()
  if ((e.key == "q") && (p2.health > 0) && (!game.isOver)) {
    //console.log("Hello")
    p1.strike(p2)
    document.getElementById('p1attack').play()
  }
    // After striking then play attack sound

});

document.addEventListener('keydown', function(e) {
  
  // if you press a AND the player health is greater than 0 AND isOver is still false then strike()
  if ((e.key == "a") && (p1.health > 0) && (!game.isOver)) {
    p1.heal()
    document.getElementById('p1heal').play()
  }

    // After healing then play heal sound

});

// ** Player 2 Controls **
document.addEventListener('keydown', function(e) {
  
  // if you press p AND enemy health is greater than 0 AND isOver is still false then stike()
  if ((e.key == "p") && (p1.health > 0) && (!game.isOver)) {
    //console.log("Hello")
    p2.strike(p1)
    document.getElementById('p2attack').play()
  }
    // After striking then play attack sound

});

document.addEventListener('keydown', function(e) {
  // if you press l AND the player health is greater than 0 AND isOver is still false then heal()
  if ((e.key == "l") && (p2.health > 0) && (!game.isOver)) {
    p2.heal()
    document.getElementById('p2heal').play()
  }
    // After healing then play heal sound

});




