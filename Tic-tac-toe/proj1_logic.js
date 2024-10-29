let boxes = document.querySelectorAll(".box");
let img = document.querySelector(".bg1");
let turn = true;
let winner = document.querySelector("#winner");
let arr = [[0, 3, 6], [0, 1, 2], [3, 4, 5], [6, 7, 8], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]];
let count = 0;
function check(count) {

    if (count % 2 === 0) {
        for (let i = 0; i < 8; i++) {
            let v = true;
            for (let j = 0; j < 3; j++) {
                if (boxes[arr[i][j]].innerText !== "X")
                    v = false;

            }
            if (v) {
                winner.innerText = "WINNER IS PLAYER 2";
                for (let k = 0; k < 9; k++) {
                    boxes[k].disabled = true;
                }
                return;

            }

        }
    }
    else {
        for (let i = 0; i < 8; i++) {
            let v = true;
            for (let j = 0; j < 3; j++) {
                if (boxes[arr[i][j]].innerText !== "O")
                    v = false;

            }
            if (v) {
                winner.innerText = "WINNER IS PLAYER 1";
                for (let k = 0; k < 9; k++) {
                    boxes[k].disabled = true;
                }
                return;

            }

        }
    }
    if (count === 9) {
        winner.innerText = "DRAW";
    }


}
for (let i = 0; i < 9; i++) {

    boxes[i].addEventListener("click", () => {
        count++;

        if (turn) {
            boxes[i].innerText = "O";

            turn = false;
        }
        else {
            boxes[i].innerText = "X";
            turn = true;
        }
        boxes[i].disabled = true;
        check(count);
    });
}
let reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    for (let i = 0; i < 9; i++) {
        boxes[i].innerText = "";
        boxes[i].disabled = false;
        winner.innerText = "";

    }
    turn = true;
    count = 0;
})