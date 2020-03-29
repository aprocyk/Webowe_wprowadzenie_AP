"use strict";
var States;
(function (States) {
    States[States["none"] = 0] = "none";
    States[States["X"] = 1] = "X";
    States[States["O"] = 2] = "O";
})(States || (States = {}));
var Board = /** @class */ (function () {
    function Board() {
        this.isP1Winner = false;
        this.isP2Winner = false;
        this.isBoardFull = false;
        this.playerActive = 1;
        this.cellArray = [];
    }
    Board.prototype.initializeCells = function () {
        var array = [];
        for (var i = 1; i <= 3; i++) {
            var row = [];
            for (var j = 1; j <= 3; j++) {
                var C = new Cell();
                C.id = i * 10 + j;
                row.push(C);
            }
            array.push(row);
        }
        this.cellArray = array;
    };
    Board.prototype.assignCells = function () {
        this.cellArray.forEach(function (element) {
            element.forEach(function (cell) {
                var d = document.getElementById("" + cell.id);
                var f = function () {
                    if (b.playerActive === 1) {
                        if (d)
                            d.innerText = "X";
                        console.log("X");
                        b.playerActive = 2;
                        d === null || d === void 0 ? void 0 : d.removeEventListener('click', f);
                        var pos = cell.id.toString();
                        var posy = parseFloat(pos.charAt(0));
                        var posx = parseFloat(pos.charAt(1));
                        b.cellArray[posy - 1][posx - 1].state = States.X;
                        // b.cellArray[posy - 1].splice(posx - 1, 1);
                    }
                    else if (b.playerActive === 2) {
                        if (d)
                            d.innerText = "O";
                        console.log("O");
                        b.playerActive = 1;
                        d === null || d === void 0 ? void 0 : d.removeEventListener('click', f);
                        var pos = cell.id.toString();
                        var posy = parseFloat(pos.charAt(0));
                        var posx = parseFloat(pos.charAt(1));
                        b.cellArray[posy - 1][posx - 1].state = States.O;
                        // b.cellArray[posy - 1].splice(posx - 1, 1);
                    }
                };
                d === null || d === void 0 ? void 0 : d.addEventListener('click', f);
            });
        });
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
b.initializeCells();
b.assignCells();
