inputOfPlayer1=document.getElementById("player1-input")
inputOfPlayer2=document.getElementById("player2-input")

historyPlayer1=document.getElementById("player1-history")
historyPlayer2=document.getElementById("player2-history")

scorePlayer1=parseInt(document.getElementById("player1-score").innerText)
scorePlayer2=parseInt(document.getElementById("player2-score").innerText)

inputOfPlayer1.addEventListener("keyup",function(e){
    if(e.key === "Enter" && inputOfPlayer1.value !== ""){
        const wordP1= document.createElement('p')
        wordP1.innerText= inputOfPlayer1.value
        historyPlayer1.appendChild(wordP1)
        scorePlayer1 -=10
        document.getElementById("player1-score").innerText= scorePlayer1
        inputOfPlayer1.value =""
        inputOfPlayer1.disabled = true
        inputOfPlayer2.disabled = false
        inputOfPlayer2.focus()
    }
})

inputOfPlayer2.addEventListener("keyup",function(e){
    if(e.key === "Enter" && inputOfPlayer2.value !== ""){
        const wordP2= document.createElement('p')
        wordP2.innerText= inputOfPlayer2.value
        historyPlayer2.appendChild(wordP2)
        scorePlayer2 -=10
        document.getElementById("player2-score").innerText= scorePlayer2
        inputOfPlayer2.value =""
        inputOfPlayer2.disabled = true
        inputOfPlayer1.disabled = false
        inputOfPlayer1.focus()
    }
})