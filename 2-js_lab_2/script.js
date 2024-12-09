function getNumbers() {
    let numbers = [];
    for (let i = 1; i <= 5; i++) {
        let number = parseFloat(prompt(`Enter number ${i}:`));
        if (!isNaN(number)) {
            numbers.push(number);
        } else {
            alert("Please enter a valid number.");
            i--; 
        }
    }
    return numbers;
}


function sortAndDisplay() {
    let numbers = getNumbers(); 
    document.write(`<span style="color: red;"> you have entered the values of </span>` + `<span>${numbers}</span><br>` )
    let descending = [...numbers].sort((a, b) => b - a);
    document.write(`<span style="color: red;">Descending Order: </span>` + `<span>${descending}</span><br>`);
    let ascending = [...numbers].sort((a, b) => a - b);
    document.write(`<span style="color: red;">Ascending Order: </span>` + `<span>${ascending}</span><br>`);

}


sortAndDisplay();
