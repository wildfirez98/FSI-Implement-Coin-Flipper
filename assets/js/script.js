// TODO: Declare any global variables we need
let totalHeads = 0
let totalTails = 0
let totalFlipped = 0// 0 and increment by one every time
let headsPercentage = 0 //Figuring percentages is the worst in Javascript :)
let tailsPercentage = 0

let images = [
    {
        imagePath: "assets/images/penny-heads.jpg",
        message: "You flipped heads!",
        side: "heads"
    },
    {
        imagePath: "assets/images/penny-tails.jpg",
        message: "You flipped tails!",
        side: "tails"
    }
]

let defaultMessage = "Let's Get Rolling!"
   
    // TODO: Add event listener and handler for flip and clear buttons
    document.getElementById("flip").addEventListener("click", function() {
        
        let randomImage = images[Math.floor(Math.random() * images.length)]       
        
        document.querySelector("#image").setAttribute("src", randomImage.imagePath)

        if (randomImage.side === "heads"){
            totalHeads++
            totalFlipped++

            document.getElementById("heads").innerHTML = totalHeads
            document.querySelector(".message-container").textContent = randomImage.message
            
        } else {
            totalTails++
            totalFlipped++

            document.getElementById("tails").innerHTML = totalTails
            document.querySelector(".message-container").textContent = randomImage.message
        }
         
        headsPercentage = Math.round(totalHeads * 100 / totalFlipped)
        tailsPercentage = Math.round(totalTails * 100 / totalFlipped)
        
        document.getElementById("heads-percent").textContent = headsPercentage + "%"
        document.getElementById("tails-percent").textContent = tailsPercentage + "%"
    })

    // clear button
    document.getElementById("clear").addEventListener("click", function() {
        totalHeads = 0
        totalTails = 0
        headsPercentage = 0 + "%"
        tailsPercentage = 0 + "%"
        totalFlipped = 0

        document.getElementById("heads").textContent = totalHeads
        document.getElementById("tails").textContent = totalTails
        document.getElementById("heads-percent").textContent = headsPercentage
        document.getElementById("tails-percent").textContent = tailsPercentage
        document.querySelector(".message-container").textContent = defaultMessage
    })