const BTN = document.querySelector('button');
const CONTENT = document.querySelector('#content');


BTN.addEventListener('click', function(){
    CONTENT.textContent = "Hello World";
});

const TIMER = document.querySelector('#affichage-heure');
setInterval(myTimer,1000);
function myTimer() {
    const date = new Date();
    TIMER.innerHTML = date.toLocaleTimeString("fr");
  
    const seconds = date.getSeconds();
    const isDivisibleBy3 = seconds % 3 === 0;
    TIMER.classList.toggle("text-danger", isDivisibleBy3);
    TIMER.classList.toggle("fw-bold", isDivisibleBy3);  
}

// setInterval(myTimer, 1000);

// function myTimer() {
//   const date = new Date();
//     document.getElementById("affichage-heure").innerHTML = date.toLocaleTimeString("fr");
//     myTimer = datexxxxxx;
//     const seconds = date.getSeconds();
//     const isDivisibleBy3 = seconds % 3 === 0;
//     myTimer.classList.toggle("text-danger", isDivisibleBy3);
//     myTimer.classList.toggle("fw-bold", isDivisibleBy3); 
// }