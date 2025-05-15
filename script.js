const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let generateButton = document.querySelector("#generate-btn")
let generatedPwd1 = document.querySelector("#generated-pwd1")
let generatedPwd2 = document.querySelector("#generated-pwd2")




generateButton.addEventListener("click", function() {
    // have to define the empty strings outside of the for loop to be able to concatenate inside the forloop
    let randomPwdString1 = "";
    let randomPwdString2 = "";

    //  i runs through the bracketed code 15 times 
    for (let i = 0; i < 15; i++) {
        randomPwdString1 += characters[Math.floor(Math.random()*characters.length)]
        randomPwdString2 += characters[Math.floor(Math.random()*characters.length)]
}

    generatedPwd1.textContent = randomPwdString1
    generatedPwd2.textContent = randomPwdString2

    generatedPwd1.addEventListener("click", function(){
        navigator.clipboard.writeText(generatedPwd1.textContent)
        .then(() => alert("Password 1 copied to clipboard!"))
    }
    )
generatedPwd2.addEventListener("click", function(){
        navigator.clipboard.writeText(generatedPwd2.textContent)
        .then(() => alert("Password 2 copied to clipboard!"))
    }
    )

})


//  run through the index randomly 15 times


// when the button is pressed, two strings is set into randompwd text and randompw 2
// button function should pick 15 random strings from characters

