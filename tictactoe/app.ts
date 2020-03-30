enum States {
    none = "",
    X = "X",
    O = "O"
}

class Board {
    isP1Winner: boolean;
    isP2Winner: boolean;
    isTie: boolean;
    playerActive: number;
    cellArray: Cell[][];
    turn: number;

    constructor() {
        this.isP1Winner = false;
        this.isP2Winner = false;
        this.isTie = false;
        this.playerActive = 1;
        this.cellArray = [];
        this.turn = 0;
    }

    initializeCells() {
        let array = [];
        for (let i = 1; i <= 3; i++) {

            let row = [];

            for (let j = 1; j <= 3; j++) {

                let C = new Cell();
                C.id = i * 10 + j;
                row.push(C);

            }

            array.push(row);
        }
        this.cellArray = array;
    }

    assignCells() {

        this.cellArray.forEach(element => {

            element.forEach(cell => {

                const d = document.getElementById("" + cell.id);

                let f = function () {

                    if (b.playerActive === 1) {

                        if (d) d.innerText = "X";
                        b.playerActive = 2;
                        d?.removeEventListener('click', f);
                        let pos = cell.id.toString();
                        let posy = parseFloat(pos.charAt(0));
                        let posx = parseFloat(pos.charAt(1));
                        b.cellArray[posy - 1][posx - 1].state = States.X;
                        b.checkWinHorizontally();
                        b.checkWinVertically();
                        b.checkWinDiagonally();
                        b.checkTie();

                    } else if (b.playerActive === 2) {

                        if (d) d.innerText = "O";
                        b.playerActive = 1;
                        d?.removeEventListener('click', f);
                        let pos = cell.id.toString();
                        let posy = parseFloat(pos.charAt(0));
                        let posx = parseFloat(pos.charAt(1));
                        b.cellArray[posy - 1][posx - 1].state = States.O;
                        b.checkWinHorizontally();
                        b.checkWinVertically();
                        b.checkWinDiagonally();
                        b.checkTie();
                    }
                }

                d?.addEventListener('click', f);
            });
        });

    }

    gameFinished() {
        let d = document.querySelector("#winner");
        let t = document.querySelector("table");
        if(t) t.style.pointerEvents = "none";
        if (this.isP1Winner === true) {
            if(d) d.innerHTML = "P1 WINS";
        } else if (this.isP2Winner === true) {
            if(d) d.innerHTML = "P2 WINS";
        }else if(this.isTie === true){
            if(d) d.innerHTML = "TIE";
        }
    }

    turnCounter() {
        this.turn++;
        const d = document.querySelector('#counter');
        if (d) d.innerHTML = this.turn.toString();
    }
    checkTie() {
        this.turnCounter();
        if (this.turn === 9 &&
            this.isP1Winner === false &&
            this.isP2Winner === false) {
            this.isTie = true;
            console.log("TIE");
            this.gameFinished();
        }
    }

    checkWinDiagonally() {
        if (this.cellArray[0][0].state === States.X &&
            this.cellArray[1][1].state === States.X &&
            this.cellArray[2][2].state === States.X) {
            this.isP1Winner = true;
            console.log("P1 WIN!");
            this.gameFinished();
        } else if (this.cellArray[0][2].state === States.X &&
            this.cellArray[1][1].state === States.X &&
            this.cellArray[2][0].state === States.X) {
            this.isP1Winner = true;
            console.log("P1 WIN!");
            this.gameFinished();
        } else if (this.cellArray[0][0].state === States.O &&
            this.cellArray[1][1].state === States.O &&
            this.cellArray[2][2].state === States.O) {
            this.isP2Winner = true;
            console.log("P2 WIN!");
            this.gameFinished();
        } else if (this.cellArray[0][2].state === States.O &&
            this.cellArray[1][1].state === States.O &&
            this.cellArray[2][0].state === States.O) {
            this.isP2Winner = true;
            console.log("P2 WIN!");
            this.gameFinished();
        }
    }

    checkWinVertically() {
        let counter = "";
        for (let i = 0; i <= 2; i++) {
            for (let j = 0; j < this.cellArray.length; j++) {
                counter = counter + this.cellArray[j][i].state;

            }

            if (counter === "XXX") {
                console.log("P1 WIN!");
                this.isP1Winner = true;
                this.gameFinished();
                break;
            } else if (counter === "OOO") {
                console.log("P2 WIN!");
                this.isP2Winner = true;
                this.gameFinished();
                break;
            }
            counter = "";
        }

    }

    checkWinHorizontally() {
        let counter = "";
        for (let row of this.cellArray) {
            for (let cell of row) {
                counter = counter + cell.state;

            }

            if (counter === "XXX") {
                console.log("P1 WIN!");
                this.isP1Winner = true;
                this.gameFinished();
                break;
            } else if (counter === "OOO") {
                console.log("P2 WIN!");
                this.isP2Winner = true;
                this.gameFinished();
                break;
            }
            counter = "";
        }

    }

}

class Cell {
    state: States;
    id: number;
    constructor() {
        this.state = States.none;
        this.id = 0;
    }

}
let b = new Board();
b.initializeCells();
b.assignCells();