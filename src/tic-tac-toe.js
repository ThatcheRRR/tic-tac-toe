class TicTacToe {
    constructor() {    
        this.field = [[null, null, null], [null, null, null], [null, null, null]];
        this.сurrentPlayer = 'x';
    }
  
    getCurrentPlayerSymbol() {
        return this.сurrentPlayer;
    }
  
    nextTurn(rowIndex, colIndex) {
        if (!this.field[rowIndex][colIndex]){
            this.field[rowIndex].splice(colIndex, 1, this.сurrentPlayer);
            if (this.сurrentPlayer == 'x'){
                this.сurrentPlayer = 'o';
            } else {
                this.сurrentPlayer = 'x';
            }
        }
    }
  
    isFinished() {
        if (this.getWinner() || this.noMoreTurns()) {
            return true;
        } else {
            return false;
        }
    }
  
    getWinner() {
        let field = this.field;
        let firstPlayer = 'x';
        let secondPlayer = 'o';
        if ((field[0][0] == firstPlayer && field[0][1] == firstPlayer && field[0][2] == firstPlayer) ||
            (field[1][0] == firstPlayer && field[1][1] == firstPlayer && field[1][2] == firstPlayer) ||
            (field[2][0] == firstPlayer && field[2][1] == firstPlayer && field[2][2] == firstPlayer) ||
            (field[0][0] == firstPlayer && field[1][0] == firstPlayer && field[2][0] == firstPlayer) ||
            (field[0][1] == firstPlayer && field[1][1] == firstPlayer && field[2][1] == firstPlayer) ||
            (field[0][2] == firstPlayer && field[1][2] == firstPlayer && field[2][2] == firstPlayer) ||
            (field[0][0] == firstPlayer && field[1][1] == firstPlayer && field[2][2] == firstPlayer) ||
            (field[0][2] == firstPlayer && field[1][1] == firstPlayer && field[2][0] == firstPlayer)) {
            return firstPlayer;
        };
        if ((field[0][0] == secondPlayer && field[0][1] == secondPlayer && field[0][2] == secondPlayer) ||
            (field[1][0] == secondPlayer && field[1][1] == secondPlayer && field[1][2] == secondPlayer) ||
            (field[2][0] == secondPlayer && field[2][1] == secondPlayer && field[2][2] == secondPlayer) ||
            (field[0][0] == secondPlayer && field[1][0] == secondPlayer && field[2][0] == secondPlayer) ||
            (field[0][1] == secondPlayer && field[1][1] == secondPlayer && field[2][1] == secondPlayer) ||
            (field[0][2] == secondPlayer && field[1][2] == secondPlayer && field[2][2] == secondPlayer) ||
            (field[0][0] == secondPlayer && field[1][1] == secondPlayer && field[2][2] == secondPlayer) ||
            (field[0][2] == secondPlayer && field[1][1] == secondPlayer && field[2][0] == secondPlayer)) {
            return secondPlayer;
        };
        return null;
    }
  
    noMoreTurns() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
            if (!this.field[j][i]) {
                return false;
                }
            }
        }
      return true;
    }
  
    isDraw() {
        if (this.noMoreTurns() && this.getWinner() == null) {
            return true;
        } else {
            return false;
        }
    }
  
    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}
  
module.exports = TicTacToe;