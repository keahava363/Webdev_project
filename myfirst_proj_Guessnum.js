
let number = Math.floor((Math.random()*5));
let count = 1;
let condition = true;
document.getElementById("guessnumber").onclick=function(){
{
    let input = parseInt(prompt("Guess the the number"));
    if (input === number) {
       // condition = false;
        if (count === 1) {
            document.getElementById("message").innerText=`Thats the Golden Guess !!!you took only one Guess,congrats!!!`;
        }

        else {
            document.getElementById("message").innerText=`You took ${count} Guess to Reveal number!!!`;
            document.getElementById("GuessedNumber").innerText=` Random Number you have guessed is ${number}!!!`
            startConfetti();
            //break;
        }
    }
    else {

            if (input>=number) {
               alert("you entered larger number!!");
            }
            else {
                alert("you entered smaller number");
            }

        }

        count += 1
        console.log("try again");
    }

};
// Function to generate confetti
// Function to generate confetti
function generateConfetti() {
    const confettiContainer = document.getElementById("confetti-container");

    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");

        // Randomize size, position, and color
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.width = `${Math.random() * 10 + 5}px`; // Random width
        confetti.style.height = `${Math.random() * 10 + 5}px`; // Random height
        confetti.style.left = Math.random() * 100 + "vw"; // Random horizontal position
        confetti.style.top = `${Math.random() * 20 - 10}vh`; // Start slightly above screen

        // Randomize rotation and animation speed
        const animationDuration = Math.random() * 3 + 2; // Random duration between 2-5s
        confetti.style.animation = `fall ${animationDuration}s linear forwards, swirl ${animationDuration}s linear forwards`;

        confettiContainer.appendChild(confetti);

        // Remove confetti after animation ends
        setTimeout(() => {
            confetti.remove();
        }, animationDuration * 10000); // Matches the animation duration
    }
}

// Function to generate random color
function getRandomColor() {
    const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
    return colors[Math.floor(Math.random() * colors.length)];
}
// Function to continuously generate confetti
function startConfetti() {
    // Keep generating confetti every 1.5 seconds (adjust timing as needed)
    setInterval(generateConfetti, 1500);
}