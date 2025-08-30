inputOfPlayer1=document.getElementById("player1-input")
inputOfPlayer2=document.getElementById("player2-input")

historyPlayer1=document.getElementById("player1-history")
historyPlayer2=document.getElementById("player2-history")

scorePlayer1=parseInt(document.getElementById("player1-score").innerText)
scorePlayer2=parseInt(document.getElementById("player2-score").innerText)

wordcheckP1=[]
wordcheckP2=[]

inputOfPlayer1.addEventListener("keyup", async function(e){
    if(e.key === "Enter" && inputOfPlayer1.value !== ""){
        try{
            const word = inputOfPlayer1.value.trim()
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            if (!response.ok) throw new Error("Word not found"); 

            if(wordcheckP1.includes(word)){
                alert("Already used this word")
                inputOfPlayer1.value =""
            }
            else{
                wordcheckP1.push(word)
                const wordP1= document.createElement('p')
                wordP1.innerText= word
                historyPlayer1.appendChild(wordP1)
                scorePlayer1 -=10
                document.getElementById("player1-score").innerText= scorePlayer1
                inputOfPlayer1.value =""
                inputOfPlayer1.disabled = true
                inputOfPlayer2.disabled = false
                inputOfPlayer2.focus()
            }
        }
        catch(err){
            alert("Not a valid English word!");
            inputOfPlayer1.value = ""; 
        } 
    }
})

inputOfPlayer2.addEventListener("keyup",async function(e){
    if(e.key === "Enter" && inputOfPlayer2.value !== ""){
        try{
            const word = inputOfPlayer2.value.trim()
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            if (!response.ok) throw new Error("Word not found");

            if(wordcheckP2.includes(word)){
                alert("Already used this word")
                inputOfPlayer2.value =""
            }
            else{
                wordcheckP2.push(word)
                const wordP2= document.createElement('p')
                wordP2.innerText= word
                historyPlayer2.appendChild(wordP2)
                scorePlayer2 -=10
                document.getElementById("player2-score").innerText= scorePlayer2
                inputOfPlayer2.value =""
                inputOfPlayer2.disabled = true
                inputOfPlayer1.disabled = false
                inputOfPlayer1.focus()
            }
        }
        catch(err){
            alert("Not a valid English word!");
            inputOfPlayer2.value = "";
        }
    }
})