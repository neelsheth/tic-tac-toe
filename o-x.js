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
var count = 0 //this will check any player won or not--> if count == 0 (than no player won). if count > 0 (match won)
var filled = 0 // if (filled = 9 && count 0 )means all cell filled and no player won...that means game is draw.

//checking Winnner
function checkForWinner(){
    winningCombination.forEach(function(combination){
        let check = combination.every(idx => cells[idx].innerText.trim() == currentPlayer)
        if(check){
            highlightCells(combination) 
        }
    })
}

//Highlighting winning cell
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
        if(cell.innerText.trim() != ""){
            if(filled >= 8){
                alert("Play Again")
            }
            return
        }
        if(count != 0){
            alert("click play Again")
            return
        }
        cell.innerText = currentPlayer
        checkForWinner()
        currentPlayer = currentPlayer == "X" ? "O" : "X"
        filled++
        if(filled >= 9 && count == 0){
            alert("Match Draw - Play Again")
        }
    })
})
