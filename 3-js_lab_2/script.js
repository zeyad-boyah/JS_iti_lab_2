function circle_area(radius){
     return (Math.pow(radius ,2) * Math.PI)
}

let radius;
let number_of_tries = 0;
do {
    if (number_of_tries== 0){
        radius = prompt("Please enter the circle radius.");
    }
    else{
        radius = prompt("Please provide a valid radius.");
    }
    number_of_tries++
} while (!/^[0-9]$/.test(radius));

alert (`the circle area is ${circle_area(radius)}`);

function sqrt_of_num ( number){
    return Math.sqrt(number);
}

let number;
number_of_tries = 0;

do {
    if (number_of_tries== 0){
        number = prompt("Please enter the number you want the square root for.");
    }
    else{
        number = prompt("Please provide a valid number.");
    }
    number_of_tries++
} while (!/^[0-9]$/.test(number));

alert (`the square root of the number ${number} is ${sqrt_of_num(number)}`);

function cosine_angle (angle){
    return Math.cos(angle * (Math.PI/180)).toFixed(4);
}

let angle;
number_of_tries = 0;

do {
    if (number_of_tries== 0){
        angle = prompt("Please enter the angle you want the cosine of.");
    }
    else{
        angle = prompt("Please provide a valid angle.");
    }
    number_of_tries++

    angle = parseFloat(angle.replace("°", ""));
} while ( isNaN(angle));

document.write(`<p> cos ${angle}° is ${cosine_angle(angle)}`)