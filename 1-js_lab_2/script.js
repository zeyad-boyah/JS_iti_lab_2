function Large_string (sentence){
    let neo_sentence = sentence.split(" ")
    let current_big_word =""; 
    for(let word of neo_sentence){
        if (current_big_word.length > word.length){
            continue;
        }
        else{
            current_big_word = word;
        }
    }
    return current_big_word;
}

let the_big_word;
let num_of_tries =0;

do {
    let sentence = prompt(num_of_tries == 0 ? "Please enter the sentence" : "Please make sure that the sentence doesn't contain numbers");
    if (/^[A-Za-z\s]+$/.test(sentence)) {
        the_big_word = Large_string(sentence);
    } else {
        the_big_word = ""; 
    }
    num_of_tries++;
} while (the_big_word.trim() === "");


alert(the_big_word);