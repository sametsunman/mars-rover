const N = 1;
const E = 2;
const S = 3;
const W = 4;
var x = 0;
var y = 0;
var facing = N;

function calculate() {

    x = document.getElementById("coordinateX").value;
    y = document.getElementById("coordinateY").value;
    facing = document.getElementById("facing").value;
    
    process(document.getElementById("command").value);
    
}

function process(command) {
    for (let idx = 0; idx < command.length; idx++) {
        
        if (command.charAt(idx) === 'L') {
            turnLeft();
        } else if (command.charAt(idx) === 'R') {
            turnRight();
        } else if (command.charAt(idx) === 'M') {
            move();
        } else {
            alert("Please, enter command correctly!");

        }
    }

    printPosition();
}

function printPosition() {
    let dir = 'N';
    if (facing == 1) {
        dir = 'N';
    } else if (facing == 2) {
        dir = 'E';
    } else if (facing == 3) {
        dir = 'S';
    } else if (facing == 4) {
        dir = 'W';
    }

    document.getElementById('result').innerHTML = x + " " + y + " " + dir;

}

function move() {
    if (facing == N) {
        y++;
    } else if (facing == E) {
        x++;
    } else if (facing == S) {
        y--;
    } else if (facing == W) {
        x--;
    }
}
function turnLeft() {
    facing = (facing - 1) < N ? W : facing - 1;
}
function turnRight() {
    facing = (facing + 1) > W ? N : facing + 1;
}

