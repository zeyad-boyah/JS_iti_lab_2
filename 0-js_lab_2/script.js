let user_name;
let user_name_counter = 0;
do {
    if (user_name_counter == 0){
        user_name = prompt("Please enter your name.");
    }
    else{
        user_name = prompt("Please provide a valid name.");
    }
    user_name_counter++
} while (user_name.trim() === "" || !/^[A-Za-z\s]+$/.test(user_name));

let phone_number;
let phone_number_counter = 0;
do {
    if (phone_number_counter== 0){
        phone_number = prompt("Please enter your phone number.");
    }
    else{
        phone_number = prompt("Please provide a valid phone number.");
    }
    phone_number_counter++
} while (!/^[0-9]{8}$/.test(phone_number));

let mobile_number ;
let mobile_number_counter = 0;
do {
    if(mobile_number_counter == 0){
        mobile_number = prompt("Please enter your mobile number this time.")
    }
    else{
        mobile_number = prompt("Please enter a valid mobile number.")
    }
    mobile_number_counter++
} while ( !/^01[0-2]{1}[0-9]{8}$/.test(mobile_number));

let email;
let email_counter = 0;
do {

    if(email_counter==0){
        email = prompt("please provide your Email.")
    }
    else{
        email = prompt("please provide a valid Email.")
    }
    email_counter++
} while (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email));



let choice;
let color;
do {
    choice = prompt(
        "Please choose a color:\n" +
        "1. Red\n" +
        "2. Green\n" +
        "3. Blue\n" +
        "Enter 1, 2, or 3:"
    );
} while (choice !== "1" && choice !== "2" && choice !== "3");

switch (choice) {
    case "1":
        color = "red";
        break;
    case "2":
        color = "green";
        break;
    case "3":
        color = "blue";
        break;
}


console.log(`%c hello ${user_name}, I hope you are having a wonderful day`, `color: ${color};`)
console.log(`%c your phone number is ${phone_number}`, `color: ${color};`)
console.log(`%c your mobile number is ${mobile_number}`, `color: ${color};`)
console.log(`%c your Email is ${email}`, `color: ${color};`)


