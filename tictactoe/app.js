"use strict";
var States;
(function (States) {
    States["none"] = "";
    States["X"] = "X";
    States["O"] = "O";
})(States || (States = {}));
var Board = /** @class */ (function () {
    function Board() {
        this.isP1Winner = false;
        this.isP2Winner = false;
        this.isTie = false;
        this.playerActive = 1;
        this.cellArray = [];
        this.turn = 0;
        this.size = 5;
    }
    Board.prototype.generateBoard = function (size) {
        var array = [];
        var table = document.querySelector('table');
        for (var i = 1; i <= size; i++) {
            var row = document.createElement('tr');
            var rowArray = [];
            for (var j = 1; j <= size; j++) {
                var cell = document.createElement('td');
                cell.id = "" + i + j;
                row.appendChild(cell);
                var cellObject = new Cell();
                cellObject.id = i * 10 + j;
                rowArray.push(cellObject);
            }
            array.push(rowArray);
            table === null || table === void 0 ? void 0 : table.appendChild(row);
        }
        this.cellArray = array;
    };
    // initializeCells() {
    //     let array = [];
    //     for (let i = 1; i <= 3; i++) {
    //         let row = [];
    //         for (let j = 1; j <= 3; j++) {
    //             let C = new Cell();
    //             C.id = i * 10 + j;
    //             row.push(C);
    //         }
    //         array.push(row);
    //     }
    //     this.cellArray = array;
    // }
    Board.prototype.assignCells = function () {
        this.cellArray.forEach(function (element) {
            element.forEach(function (cell) {
                var d = document.getElementById("" + cell.id);
                var f = function () {
                    if (b.playerActive === 1) {
                        if (d)
                            d.innerText = "X";
                        b.playerActive = 2;
                        d === null || d === void 0 ? void 0 : d.removeEventListener('click', f);
                        var pos = cell.id.toString();
                        var posy = parseFloat(pos.charAt(0));
                        var posx = parseFloat(pos.charAt(1));
                        b.cellArray[posy - 1][posx - 1].state = States.X;
                        b.checkWinHorizontally();
                        b.checkWinVertically();
                        b.checkWinDiagonally();
                        b.checkTie();
                    }
                    else if (b.playerActive === 2) {
                        if (d)
                            d.innerText = "O";
                        b.playerActive = 1;
                        d === null || d === void 0 ? void 0 : d.removeEventListener('click', f);
                        var pos = cell.id.toString();
                        var posy = parseFloat(pos.charAt(0));
                        var posx = parseFloat(pos.charAt(1));
                        b.cellArray[posy - 1][posx - 1].state = States.O;
                        b.checkWinHorizontally();
                        b.checkWinVertically();
                        b.checkWinDiagonally();
                        b.checkTie();
                    }
                };
                d === null || d === void 0 ? void 0 : d.addEventListener('click', f);
            });
        });
    };
    Board.prototype.gameFinished = function () {
        var d = document.querySelector("#winner");
        var t = document.querySelector("table");
        if (t)
            t.style.pointerEvents = "none";
        if (this.isP1Winner === true) {
            if (d)
                d.innerHTML = "P1 WINS";
        }
        else if (this.isP2Winner === true) {
            if (d)
                d.innerHTML = "P2 WINS";
        }
        else if (this.isTie === true) {
            if (d)
                d.innerHTML = "TIE";
        }
    };
    Board.prototype.turnCounter = function () {
        this.turn++;
        var d = document.querySelector('#counter');
        if (d)
            d.innerHTML = this.turn.toString();
    };
    Board.prototype.checkTie = function () {
        this.turnCounter();
        if (this.turn === this.size * this.size &&
            this.isP1Winner === false &&
            this.isP2Winner === false) {
            this.isTie = true;
            console.log("TIE");
            this.gameFinished();
        }
    };
    // Nie sprawdza dynamicznie
    Board.prototype.checkWinDiagonally = function () {
        if (this.cellArray[0][0].state === States.X &&
            this.cellArray[1][1].state === States.X &&
            this.cellArray[2][2].state === States.X) {
            this.isP1Winner = true;
            console.log("P1 WIN!");
            this.gameFinished();
        }
        else if (this.cellArray[0][2].state === States.X &&
            this.cellArray[1][1].state === States.X &&
            this.cellArray[2][0].state === States.X) {
            this.isP1Winner = true;
            console.log("P1 WIN!");
            this.gameFinished();
        }
        else if (this.cellArray[0][0].state === States.O &&
            this.cellArray[1][1].state === States.O &&
            this.cellArray[2][2].state === States.O) {
            this.isP2Winner = true;
            console.log("P2 WIN!");
            this.gameFinished();
        }
        else if (this.cellArray[0][2].state === States.O &&
            this.cellArray[1][1].state === States.O &&
            this.cellArray[2][0].state === States.O) {
            this.isP2Winner = true;
            console.log("P2 WIN!");
            this.gameFinished();
        }
    };
    Board.prototype.checkWinVertically = function () {
        var counter = "";
        for (var i = 0; i <= 2; i++) {
            for (var j = 0; j < this.cellArray.length; j++) {
                counter = counter + this.cellArray[j][i].state;
            }
            if (counter === "XXX") {
                console.log("P1 WIN!");
                this.isP1Winner = true;
                this.gameFinished();
                break;
            }
            else if (counter === "OOO") {
                console.log("P2 WIN!");
                this.isP2Winner = true;
                this.gameFinished();
                break;
            }
            counter = "";
        }
    };
    Board.prototype.checkWinHorizontally = function () {
        var counter = "";
        for (var _i = 0, _a = this.cellArray; _i < _a.length; _i++) {
            var row = _a[_i];
            for (var _b = 0, row_1 = row; _b < row_1.length; _b++) {
                var cell = row_1[_b];
                counter = counter + cell.state;
            }
            if (counter === "XXX") {
                console.log("P1 WIN!");
                this.isP1Winner = true;
                this.gameFinished();
                break;
            }
            else if (counter === "OOO") {
                console.log("P2 WIN!");
                this.isP2Winner = true;
                this.gameFinished();
                break;
            }
            counter = "";
        }
    };
    return Board;
}());
var Cell = /** @class */ (function () {
    function Cell() {
        this.state = States.none;
        this.id = 0;
    }
    return Cell;
}());
var b = new Board();
b.generateBoard(b.size);
b.assignCells();
