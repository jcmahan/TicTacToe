/*----- constants -----*/
var game = {
    'currentPlayer' : '', 
    'move': 0, 
    'playerOne' : 'X',
    'playerTwo' : 'O'
};

/*----- app's state (variables) -----*/
var numberOfPlayers = 2;
var playerOne = "X";
var playerTwo = "O";
var input = "";


/*----- cached element references -----*/
var displayEl = document.querySelector('.gameboard');

/*----- event listeners -----*/
// click event listener
document.querySelector('table').addEventListener('click', playerTurn);


/*----- functions -----*/
initialize();
// render();
// move();

function setFig(id) {
    game.playerOne = 'X';
    game.playerTwo = 'O';
}

function setCurrPl(currentPlayer) {
    if (game.move% /2) === 1) { 
    (game.currentPlayer = playerTwo);
        } else { 
    (game.currentPlayer = playerOne);
  };

function playerTurn(e) {
    if (e.target.textContent === 'X' || "O") return;
    var cont = e.target.textContent;
    if (curr = playerOne) 
        {e.target.textContent = "X"}
    else 
        {e.target.textContent = "O"}
    ;
        function add(move) {
            (game.move+1)
        }
        break;
        render()
    }



//     }
//     e.target.textContent = "X";
// }

function initialize() {
    currentPlayer = playerOne = playerTwo = null
}