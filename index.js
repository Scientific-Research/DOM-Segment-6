let Balance = 100;
document.querySelector('#balance').innerHTML = Balance + "€";

function run(){
    
    /* Aufrufen six Dices */
    const random1 = getDice(Math.round(Math.random() * 5 + 1), "one");
    const random2 = getDice(Math.round(Math.random() * 5 + 1), "two");
    const random3 = getDice(Math.round(Math.random() * 5 + 1), "three");
    const random4 = getDice(Math.round(Math.random() * 5 + 1), "four");
    const random5 = getDice(Math.round(Math.random() * 5 + 1), "five");
    const random6 = getDice(Math.round(Math.random() * 5 + 1), "six");

        /* Aufrufen drei Dices */
    // getDice1(random1, "fa-dice-one");
    // getDice2(random2, "fa-dice-two");
    // getDice3(random3, "fa-dice-three");
    
    // if (random1 == random2 && random1== random3&&random1== random4&&random1== random5&&random1== random6&&
    //     random2 == random3 && random2== random4&&random2== random5&&random2== random6&&
    //     random3== random4&&random3 == random5 && random3== random6&&
    //     random4== random5&&random4== random6&&
    //     random5== random6&&random5== random6) {
        if(random1 == random2 == random3== random4 == random5 == random6){

        document.querySelector("#number").innerHTML = "Sehr gut!!! +35€ für dich!";
        Balance = Balance + 35;
    } else {
        document.querySelector("#number").innerHTML = "";
        Balance = Balance -1; 
    }
    
    document.querySelector("#balance").innerHTML = Balance + "€";
}

function getDice(random, param){
    switch (random) {
        case 1:
        document.querySelector("." + param).classList = "fa-solid fa-dice-one fa-4x " + " " + param ;
        break;
        case 2:
            document.querySelector("." + param).classList = "fa-solid fa-dice-two fa-4x " + " " + param ;
            break;
        case 3:
            document.querySelector("." + param).classList = "fa-solid fa-dice-three fa-4x " + " " + param ;
            break;
        case 4:
            document.querySelector("." + param).classList = "fa-solid fa-dice-four fa-4x " + " " + param ;
            break;
        case 5:
            document.querySelector("." + param).classList = "fa-solid fa-dice-five fa-4x " + " " + param ;
            break;
        case 6:
            document.querySelector("." + param).classList = "fa-solid fa-dice-six fa-4x " + " " + param ;
            break;
        
        default:
        break;
    }
    // return random;
}

function reset()    {
    Balance = 100;
    document.querySelector("#balance").innerHTML = Balance + "€";
    document.querySelector("#number").innerHTML = "";
}
