const min = document.getElementById('min');
const max = document.getElementById('max');
const genBtn = document.getElementById('generate');
const resetBtn = document.getElementById('reset');
const randNumDisplay = document.getElementById('randomNumber');


//Function to generate a random number
 function genRandum() {
    const minVal = parseInt(min.value);
    const maxVal = parseInt(max.value);


    //validate inputs
if(isNaN(minVal) || isNaN(maxVal) ||  minVal >= maxVal) {
    alert("Entrer le nombre minimum et la valeur maximum valide");  
    return;
}

    //Generate a random number within the range
    const randNum = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
    randNumDisplay.textContent = randNum;

}
//Reset the inputs and result
function reset() {
    min.value = 1;
    max.value = 100;
    randNumDisplay.textContent = "Cliquez sur le bouton pour générer";
}

//Event listeners
genBtn.addEventListener('click', genRandum);
resetBtn.addEventListener('click', reset);

