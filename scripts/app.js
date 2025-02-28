let numberInput = document.querySelector("#numberInput");
console.log(numberInput);


numberInput.addEventListener("input", function() {
    if(numberInput.value <= -10 || numberInput.value >= 10)
    {
        alert("The number should be between -10 and 10");
    }
});



const fruitNameElement = document.querySelector("#fruitName");
const fruitColorElement = document.querySelector("#fruitColor");
const fruitTasteElement = document.querySelector("#fruitTaste");

const fruit = {
    name: "Mango",
    color: "Yellow",
    taste: "Sweet"
};

fruitNameElement.textContent = `Name: ${fruit.name}`;
fruitColorElement.textContent = `Color: ${fruit.color}`;
fruitTasteElement.textContent = `Taste: ${fruit.taste}`;

