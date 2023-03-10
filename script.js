
let p1attack = document.getElementById('attack1')
let p2attack = document.getElementById('attack2')
let p1heal = document.getElementById('heal1')
let p2heal = document.getElementById('heal2')
let playButton = document.getElementById('play')
let resultDiv = document.getElementById('result')
let p1NameDiv = document.getElementById('p1Name')
let p2NameDiv = document.getElementById('p2Name')
let p1HealthDiv = document.getElementById('p1Health')
let p2HealthDiv = document.getElementById('p2Health')
alert("This game can be accessed on both PC and mobile devices. On PC, Player 1 can use the keys 'Q' to attack and 'A' to heal, while Player 2 can use the keys 'P' to attack and 'L' to heal. On mobile devices, the game can be played in horizontal mode by using touch input.");

let name1 = prompt("enter player1 name")
let name2 = prompt("enter player2 name")


const updateGame = (p1, p2, gameState) => {
  


    p1HealthDiv.innerText = p1.health
    p2HealthDiv.innerText = p2.health
    if (p1.health <= 0 || p2.health <= 0) {
        game.isOver = true;
        gameState = game.isOver;
        result.innerText = game.declareWinner(game.isOver, p1, p2)
    }
    return gameState;

    

}

class Player {
    constructor(name, health, attackDamage) {
        this.name = name;
        this.health = health;
        this.attackDmg = attackDamage;
    }
   
    strike(player, enemy, attackDmg) {
        const damageAmount = Math.ceil(Math.random() * attackDmg)
        enemy.health -= damageAmount
        updateGame(p1, p2, game.isOver)
        return `${player.name} attacks ${enemy.name} for ${damageAmount}`


    }

    heal(player) {

        let hpamount = Math.ceil(Math.random() * 5)

        player.health += hpamount

        updateGame(p1, p2, game.isOver)

        return ` ${player.name} heals for ${hpamount} Hp`

    }
}
class Game {
    constructor() {
        this.isOver = false;
    }
    declareWinner(isOver, p1, p2) {


        let message = "tie";
        if (isOver == true && p1.health <= 0) {
            message = `${p2.name} Wins`
        } else if (isOver == true && p2.health <= 0) {
            message = `${p1.name} Wins`
        }

        document.getElementById("victory").play()
    
        return message
    }


    reset(p1, p2) {
      
        p1.health = 100
        p2.health = 100
        this.isOver = false
        resultDiv.innerText = ''
        updateGame(p1, p2,this.isOver)
    }

   
    play(p1, p2) {
      
        this.reset(p1, p2);
     
        while (!this.isOver) {
           
            p1.strike(p1, p2, p1.attackDmg)
            p2.strike(p2, p1, p2.attackDmg)
            p1.heal(p1)
            p2.heal(p2)
        }
       return this.declareWinner(this.isOver, p1, p2)
       
     

    }

}


let player1 = new Player(name1, 100, 10)
let player2 = new Player(name2, 100, 10)

let p1 = player1;
let p2 = player2;
p1NameDiv.innerText += ` ${p1.name}`
p2NameDiv.innerText += ` ${p2.name}`


let game = new Game()
updateGame(p1, p2, Game.isOver)
console.log(game)




let gameState;

playButton.onclick = () => result.innerText = game.play(p1,p2)


document.addEventListener('keydown', function(e) {
    
    if (e.key == 'q' && p2.health > 0 && game.isOver == false) {
        p1.strike(p1, p2, p1.attackDmg)
        document.getElementById('p1attack').play()
    }
  

});

document.addEventListener('keydown', function(e) {

    if (e.key == 'a' && p2.health > 0 && game.isOver == false) {
        p1.heal(p1)
        document.getElementById('p1heal').play()
    }

   

});


document.addEventListener('keydown', function(e) {


    if (e.key == 'p' && p1.health > 0 && game.isOver == false) {
        p2.strike(p2, p1, p2.attackDmg)
        document.getElementById('p2attack').play()
    }


});

document.addEventListener('keydown', function(e) {
    if (e.key == 'l' && p1.health > 0 && game.isOver == false) {
        p2.heal(p2)
        document.getElementById('p2heal').play()
    }


});



p1attack.addEventListener('click', function() {
  
    if ( p2.health > 0 && game.isOver == false) {
        p1.strike(p1, p2, p1.attackDmg)
        document.getElementById('p1attack').play()
    }


});

p1heal.addEventListener('click', function() {

   
    if ( p2.health > 0 && game.isOver == false) {
        p1.heal(p1)
        document.getElementById('p1heal').play()
    }

   

});

p2attack.addEventListener('click', function() {

    if (  p1.health > 0 && game.isOver == false) {
        p2.strike(p2, p1, p2.attackDmg)
        document.getElementById('p2attack').play()
    }
 

});

p2heal.addEventListener('click', function() {
   
    if (p1.health > 0 && game.isOver == false) {
        p2.heal(p2)
        document.getElementById('p2heal').play()
    }
  

});


