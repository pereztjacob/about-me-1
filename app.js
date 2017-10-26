'use strict';

// // Greeting asking user's name
const username = prompt( 'Hello and welcome. What is your name?' );
confirm('Hi ' + username);


guitar();
inst();
favMusic();
fromState();


//Initial question on if I can play guitar.
function guitar(){
    const play = prompt(username + ', can I play the guitar?');
    if (play.toLowerCase() === 'yes' || play.toLowerCase() === 'y' ) {
        confirm( 'You\'re correct,' + '. I do.');
        console.log( 'Do i play guitar? Answer:', play);
    } else if ( play.toLowerCase() === 'no' || play.toLowerCase() === 'n' ) {
        alert( 'Actually I do play guitar.' );
        console.log( 'Do i play guitar? Answer:', play);
    };
}
//For question on if I play additional instruments.
function inst(){
    const more = prompt('Ok, ' + username + '. Do you think I can play any other instruments?');
    if (more.toLowerCase() === 'yes' || more.toLowerCase() === 'y' ) {
        console.log( 'Do I play other instruments? Answer:', more);
        const evenMore = prompt( 'Yep. I can play another instrument. How many do you think I can play?');
        // 3rd question asking how many inst can I play.
        if ( evenMore === '2' || evenMore === '4' || evenMore === 'two' || evenMore === 'four') {
            alert( 'OOooo, ' + username + ' close. I play 3 instruments total. Mandolin, Guitar and Bass.');
            console.log( 'How many instruments can I play? Answer:', evenMore);
        }
        else if (evenMore === '3' || evenMore === 'three') {
            confirm( 'Nailed it! I play 3. Mandolin, Guitar and Bass.');
            console.log( 'How many instruments can I play? Answer:', evenMore);
        }
        else {
            alert( 'It\s cool.  I see you don\'t care. Moving on.' );
        }
    }
//if answering no to how many I can play. Still question 3.
    else if ( more.toLowerCase() === 'no' || more.toLowerCase() === 'n' ) {
        console.log('Do I play other instruments? Answer:',  more );
        const evenMore = prompt( 'Actually. I can play another instrument. You don\'t know me at all. How many do you think I can play?');
        if ( evenMore === '2' || evenMore === '4' || evenMore === 'two' || evenMore === 'four') {
            alert( 'Close. I play 3. Mandolin, Guitar and Bass.');
            console.log( 'How many instruments can I play? Answer:', evenMore);
        }
        else if (evenMore === '3' || evenMore === 'three') {
            confirm( 'Nailed it! I play 3. Mandolin, Guitar and Bass.');
            console.log( 'How many instruments can I play? Answer:', evenMore);
        }
        else {
            alert( 'It\s cool. I can tell you\'re bored. Moving on.' );
            console.log( 'How many instruments can I play? Answer:', evenMore);
        }
    }
}


// Question four about my favorite genre
function favMusic(){
    const genre = prompt( 'Ok, moving on. ' + username + ', is my favorite genre acoustic instrumental?' );
    if (genre.toLowerCase() === 'yes' || genre.toLowerCase() === 'y' ) {
        confirm( 'You damn skippy it is!');
        console.log( 'Is my favorite genre acoustic instrumental? Answer:', genre);
    } else if ( genre.toLowerCase() === 'no' || genre.toLowerCase() === 'n' ) {
        alert( 'I know it sounds weird but it is. ' + username + '! You should check it out.' );
        console.log( 'Is my favorite genre acoustic instrumental? Answer:', genre);
    };
}


// Last question asking if I am from Oregon.
function fromState(){
    const oregon = prompt( 'Last question! I swear. Ok, ' + username + ', from what you know of me thus far do you think I am from Oregon?' );
    if (oregon.toLowerCase() === 'yes' || oregon.toLowerCase() === 'y' ) {
        confirm( 'Nope. I came from Seattle via California! But not with a banjo on my knee and I don\'t know anyone named Susana.');
        console.log( 'Am I from Oregon? Answer:', oregon);
    } else if ( oregon.toLowerCase() === 'no' || oregon.toLowerCase() === 'n' ) {
        alert( 'That\'s correct. I came from Seattle via California!' );
        console.log( 'Am I from oregon? Answer:', oregon);
    };
}

alert('You made it through the most boring "Get-to-know-me" ever! Here is a bit more about me and what I\'m doing now. You must be reeeeeally bored.');


alert( 'Fooled you!! More questions. Muahahaha ' + username + ', now comes the guessing game. To get to know me more let\'s see if you can guess my age. I\'ll give a hint. It\s between 30 and 40');

//Number guessing game for my age.

//Initial age guessing info





function quest6 () {
    const age = 34;
    let myAge = parseInt( prompt('Ok. Ready, ' + username + '? How old am I? You have 4 tries' ) );
    
    
    for (let i = 0; i < 3; i++) {
        if ( myAge === age) {
            alert('Well, I\'ll be! That\'s correct' + username + 'I am ' + age);
            console.log(myAge);
            break;
        }
    
        else if ( myAge <= age ) {
            myAge = parseInt( prompt('Nope! Too low. Try again. You have ' + (3 - i) + ' tries remaining') );
            console.log(myAge);
        }
    
        else if (myAge >= age) {
            myAge = parseInt( prompt('Nope! Too high. Try again. You have ' + (3 - i) + ' tries remaining') );
            console.log(myAge);
        }
    }
}

const age = 34;
let myAge = parseInt( prompt('Ok. Ready, ' + username + '? How old am I? You have 4 tries' ) );


for (let i = 0; i < 3; i++) {
    if ( myAge === age) {
        alert('Well, I\'ll be! That\'s correct' + username + 'I am ' + age);
        console.log(myAge);
        break;
    }

    else if ( myAge <= age ) {
        myAge = parseInt( prompt('Nope! Too low. Try again. You have ' + (3 - i) + ' tries remaining') );
        console.log(myAge);
    }

    else if (myAge >= age) {
        myAge = parseInt( prompt('Nope! Too high. Try again. You have ' + (3 - i) + ' tries remaining') );
        console.log(myAge);
    }
}


function quest7 () {
    //Question 7 Guessing which genre of music I currently play.
    const mKind = [ 'rock' , 'acoustic' , 'celtic' ];

    let mPlay = prompt( 'What is one genre of music I currently play.' );
    let guess = 0;

    while (guess < 5) {

        if (mKind.includes(mPlay)) {
            confirm('You got it, ' + username + '! Well done. I play' + mPlay.indexOf[0] + mPlay.indexOf[1], mPlay.indexOf[2]  + mPlay.indexOf[0, 1, 2] + 'music.');
            break;
            console.log(mPlay);
        }
        else if (!mKind.includes(mPlay)) {
            mPlay = prompt('Not quite correct. Guess again. ' + username + ' You have ' + (5 - guess) + ' tries remaining.');
            guess++;
        }

        if (!mKind.includes(mPlay) && (5 - guess) === 0) {
            alert( 'Awww, looks like you\'re out of guesses. I currently play Rock, Acoustic and Celtic music' );
        }
    }
}
