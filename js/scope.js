console.log("Life Is A Garden Dig It!")
// make sure code works and make a commit
// Title: Pokeman Game
// Type: Lab/HW
// Duration: 3 hr
// Creator: WDI-Archer, WDI-Funke 
// Adapted + Modified by: Jim Haff
// Topics: Using objects, the keyword `this` and methods to create a game while focusing on OOP, array filter
// -------------------
// 06/19/2018 tuesday
// -------------------
// You are going to create a simple card game in which a player 
// will be able to battle the autoplayer. The game will keep 
// an array 0f cards and will deal 3 as the autoplayer to 
// "fight" against the three that you play. Each of your 
// cards will have some values associated with it. You will 
// have to compare the value of your card to the computer's 
// card to see which one wins.

// Inside your folder for today, create a folder called 
// pokemon_card_app_lab_hw with our file structure.

// Object Oriented Programming

// For this lab, we're going to continue using objects, 
// giving them data and behaviors (methods). They will interact
// with one another to make our game work!

// The Cards
// se the following data for your cards:

// [{name: "Bulbasaur", damage:60}, {name: "Caterpie", damage:40},
// {name: "Charmander", damage:60},{name: "Clefairy", damage:50},
// {name: "Jigglypuff", damage:60},{name: "Mankey", damage:30},
// {name: "Meowth", damage:60},{name: "Nidoran - female", damage:60},
// {name: "Nidoran - male", damage:50},{name: "Oddish", damage:40},
// {name: "Pidgey", damage:50},{name: "Pikachu", damage:50},
// {name: "Poliwag", damage:50},{name: "Psyduck", damage:60},
// {name: "Rattata", damage:30}, {name: "Squirtle", damage:60},
// {name: "Vulpix", damage:50}, {name: "Weedle", damage:40}]

// ++++++++++++++++++
// Step-by-Step
// ++++++++++++++++++
// The Game object

// • NOTE: Think about the best datatype (number, string, array, 
//   object) for each part and whether you need to create 
// a method.

// The game should be able to:
// 2. know what cards have been played

// 3. know how many cards are left to be played overall

// 4. track points for both the player and the computer 
// Note: Points are determine by the following: If the 
// player's card beats the computer's card, the player 
// gets one point (and vice versa). If there is a tie, 
// no one gets a point.

// 5. track rounds

// 6. track number of rounds won for both player and computer

// 7. automatically deal 3 cards from the library to 
// the player and 3 cards to the computer each round

// 8. determine the winner of each play

// 9. stop once there are no cards left or not enough 
// to deal 3 to each the player and computer

// The Player object
// The player should be able to:

// 1. see their stats: their points and how many rounds 
// they've won.

// 2. see what cards they have been dealt by the game that round.
// 3. pick a card from the hand that has been dealt to them. 
// Play this card agaist the computer's card. Do this again 

// (3 times total) until the round end.

// 4. recieive new cards given to them by the game each round.

// 5. see the cards that they have played in the past.




const library = 
[{name: "Bulbasaur", damage:60},
{name: "Caterpie", damage:40},
{name: "Charmander", damage:60},
{name: "Clefairy", damage:50},
{name: "Jigglypuff", damage:60},
{name: "Mankey", damage:30},
{name: "Meowth", damage:60},
{name: "Nidoran - female", damage:60},
{name: "Nidoran - male", damage:50},
{name: "Oddish", damage:40},
{name: "Pidgey", damage:50},
{name: "Pikachu", damage:50},
{name: "Poliwag", damage:50},
{name: "Psyduck", damage:60},
{name: "Rattata", damage:30}, 
{name: "Squirtle", damage:60},
{name: "Vulpix", damage:50}, 
{name: "Weedle", damage:40}];

const computer = {

  name: "computer",
  computerHand: [],
  field: [],
  roundsWon: 0,
  score: 0,
  foldDeck: [],
};
//player will push card first and be field[0] in the array always
const player = {
  Name: "",
  playerHand: [],
  roundsPlayed: 0,
  roundsWon: 0,
  score: 0,
    battle(){
      for (i = 0; i < 3; i++){
      if ((player.playerHand == 0) && (computer.computerHand == 0)){
        player.playerHand.push(library[i]);
        computer.computerHand.push(library[i]);
      }
      }
      if (playerHand > 0){
      player.playerHand.push(computer.field)
      computer.playerHand.push(computer.field)
      }
      if (computer.field[0].damage > computer.field[1].damage){
        this.score += 1;
        this.roundsWon += 1;
        this.roundsplayed += 1;
        console.log("player has won!");
        computer.field[0].push(foldDeck);
        computer.field[1].push(foldDeck);
        } else if (computer.field[1].damage > computer.field[0].damage){
        computer.score += 1;
        console.log("Computer has Won!")
        computer.roundsWon += 1;
        this.roundsplayed += 1;
        computer.field[0].push(foldDeck);
        computer.field[1].push(foldDeck);
        } else if (computer.field[1].damage === computer.field[0].damage){
        console.log("Tie");
        computer.field[0].push(foldDeck);
        computer.field[1].push(foldDeck);
        } else if (player.roundsWon > computer.roundsWon){
        alert("You Won!");
        console.log("Game Over")
        } else if (computer.roundsWon > player.roundsWon){
        alert("Sorry you lost");
        console.log("game over")  
        }
      }

 };
/*3.1*/for (cardsLeft = 0; cardsLeft < library.length; cardsLeft++){
       console.log("there are only " + library.length + " cards left in the deck!");
       }
/*2.1*/for (beenPlayed = 0; beenPlayed < computer.foldDeck.length; beenPlayed++){
       console.log(computer.foldDeck[beenPlayed].name + " has already been played!")
       }


player.battle();

// /*3.1*/console.log("there are only " + library.length + " cards left in the deck!");
// const foldDeck = []:
// /*2.1*/console.log(cardsPlayed[i].length + " have all been played");
// /*4.1*/console.log("The score is Player1" + player.score + " to " + computer.Score)
// /*5.1*/console.log("Plays won by player1: " + player.roundsWond + ", " + "Plays won by Computerhand: " + computer.roundsWon);
// /*6.1*/


