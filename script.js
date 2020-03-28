
var turn = 1
var counter = 0
var win = 0
var matrix = [
    [-1, -2, -3],
    [-4, -5, -6],
    [-7, -8, -9],
]
var backSound = new Audio("262839__pc2752__footprints-guitar.wav");
function whatToFill(mark, row, col) {
    backSound.loop = true
    backSound.volume = 0.3;
    backSound.play()
    if (mark.innerHTML != '') return; // not to click the same button
    if (win != 0) return; //stop filling XO when Gameover
    matrix[row][col] = turn
    
    if (turn == 1) {
        mark.innerHTML = 'X'
        document.getElementById('status').innerHTML= "Ø's turn"
        turn = 2
    } 
    else if (turn == 2) {
        mark.innerHTML = 'Ø'
        document.getElementById('status').innerHTML= "X's turn"
        turn = 1
    }

    //horizontal check
    for (var i = 0; i < 3; i++) {
        if (matrix[i][0] == matrix[i][1] && matrix[i][1] == matrix[i][2]) {
            win = matrix[i][0];
        }
    }
    //vertical check
    for (let m = 0; m < 3; m++) {
        if (matrix[0][m] == matrix[1][m] && matrix[1][m] == matrix[2][m]) win= matrix[0][m];
    }
    //diagonal check
    if (matrix[0][0] == matrix[1][1] && matrix[1][1]== matrix[2][2]) win= matrix[1][1];
    if (matrix[0][2] == matrix[1][1] && matrix[1][1] == matrix[2][0]) win= matrix[1][1];

    counter++;
    // GAME STOPPER (WINNER, LOSER, DRAW)
    if (win != 0) {
        if (win == 1) win = 'X';
        if (win == 2) win = 'Ø';
        document.getElementById('status').innerHTML= `Game over. ${win} wins!`
        document.getElementById('status2').innerHTML= `Revenge? ⌘R`
    }
    else if (counter == 9) {
        document.getElementById('status').innerHTML= `Meh. Nobody wins.`
        document.getElementById('status2').innerHTML= `Poor child. Feel free to ⌘R`
    }
}


