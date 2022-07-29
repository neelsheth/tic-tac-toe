let cells = document.querySelectorAll('.cell')
cells = Array.from(cells)

let currentPlayer = "X"

let winningCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
var count = 0
function checkForWinner(){
    winningCombination.forEach(function(combination){
        let check = combination.every(idx => cells[idx].innerText.trim() == currentPlayer)
        if(check){
            highlightCells(combination) 
        }
    })
}

function highlightCells(combination){
    combination.forEach(function(idx){
        cells[idx].classList.add("highlight")  
    })
    count++;
    if(currentPlayer == 'X') alert("Congratulations!!! Player X won.");
    else alert("Congratulations!!! Player O won");
}


cells.forEach(function(cell){
    cell.addEventListener('click',function(){
        if(cell.innerText.trim() != "")return
        if(count != 0){
            alert("click play Again")
            return
        }
        cell.innerText = currentPlayer
        checkForWinner()
        currentPlayer = currentPlayer == "X" ? "O" : "X"
    })
})
