enum States {
    none,
    X,
    O
}

class Board {
    isP1Winner: boolean;
    isP2Winner: boolean;
    isBoardFull: boolean;
    playerActive: number;
    cellArray: Cell[][];

    constructor() {
        this.isP1Winner = false;
        this.isP2Winner = false;
        this.isBoardFull = false;
        this.playerActive = 1;
        this.cellArray = [];
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
                        console.log("X");
                        b.playerActive = 2;
                        d?.removeEventListener('click', f);

                        let pos = cell.id.toString();
                        let posy = parseFloat(pos.charAt(0));
                        let posx = parseFloat(pos.charAt(1));
                        b.cellArray[posy-1][posx-1].state = States.X;
                        // b.cellArray[posy - 1].splice(posx - 1, 1);
                        
                    } else if (b.playerActive === 2) {
                        if (d) d.innerText = "O";
                        console.log("O");
                        b.playerActive = 1;
                        d?.removeEventListener('click', f);
                        let pos = cell.id.toString();
                        let posy = parseFloat(pos.charAt(0));
                        let posx = parseFloat(pos.charAt(1));
                        b.cellArray[posy-1][posx-1].state = States.O;
                        // b.cellArray[posy - 1].splice(posx - 1, 1);

                    }

                }
                d?.addEventListener('click', f);



            });
        });

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