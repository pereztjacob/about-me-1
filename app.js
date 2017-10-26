'use strict';

// // // Greeting asking user's name
const username = prompt( 'Hello and welcome. What is your name?' );
confirm('Hi ' + username);

// // //Initial question on if I can play guitar.
// // const play = prompt(username + ', can I play the guitar?');
// // if (play.toLowerCase() === 'yes' || play.toLowerCase() === 'y' ) {
// //     confirm( 'You\'re correct,' + '. I do.');
// //     console.log( 'Do i play guitar? Answer:', play);
// // } else if ( play.toLowerCase() === 'no' || play.toLowerCase() === 'n' ) {
// //     alert( 'Actually I do play guitar.' );
// //     console.log( 'Do i play guitar? Answer:', play);
// // };

// // //For question on if I play additional instruments.
// // const more = prompt('Ok, ' + username + 'Do you think I can play any other instruments?');
// // if (more.toLowerCase() === 'yes' || more.toLowerCase() === 'y' ) {
// //     console.log( 'Do I play other instruments? Answer:', more);
// //     const evenMore = prompt( 'Yep. I can play another instrument. How many do you think I can play?');
// //     // 3rd question asking how many inst can I play.
// //     if ( evenMore === '2' || evenMore === '4' || evenMore === 'two' || evenMore === 'four') {
// //         alert( 'OOooo, ' + username + 'close. I play 3 instruments total. Mandolin, Guitar and Bass.');
// //         console.log( 'How many instruments can I play? Answer:', evenMore);
// //     }
// //     else if (evenMore === '3' || evenMore === 'three') {
// //         confirm( 'Nailed it! I play 3. Mandolin, Guitar and Bass.');
// //         console.log( 'How many instruments can I play? Answer:', evenMore);
// //     }
// //     else {
// //         alert( 'It\s cool.  I see you don\'t care. Moving on.' );
// //     }
// // }
// // //if answering no to how many I can play. Still question 3.
// // else if ( more.toLowerCase() === 'no' || more.toLowerCase() === 'n' ) {
// //     console.log('Do I play other instruments? Answer:',  more );
// //     const evenMore = prompt( 'Actually. I can play another instrument. You don\'t know me at all. How many do you think I can play?');
// //     if ( evenMore === '2' || evenMore === '4' || evenMore === 'two' || evenMore === 'four') {
// //         alert( 'Close. I play 3. Mandolin, Guitar and Bass.');
// //         console.log( 'How many instruments can I play? Answer:', evenMore);
// //     }
// //     else if (evenMore === '3' || evenMore === 'three') {
// //         confirm( 'Nailed it! I play 3. Mandolin, Guitar and Bass.');
// //         console.log( 'How many instruments can I play? Answer:', evenMore);
// //     }
// //     else {
// //         alert( 'It\s cool. I can tell you\'re bored. Moving on.' );
// //         console.log( 'How many instruments can I play? Answer:', evenMore);
// //     }
// // }

// // // Question four about my favorite genre
// // const genre = prompt( 'Ok, moving on.' + username + ', is my favorite genre acoustic instrumental?' );
// // if (genre.toLowerCase() === 'yes' || genre.toLowerCase() === 'y' ) {
// //     confirm( 'You damn skippy it is!');
// //     console.log( 'Is my favorite genre acoustic instrumental? Answer:', genre);
// // } else if ( genre.toLowerCase() === 'no' || genre.toLowerCase() === 'n' ) {
// //     alert( 'I know it sounds weird but it is.' + username + '! You should check it out.' );
// //     console.log( 'Is my favorite genre acoustic instrumental? Answer:', genre);
// // };

// // // Last question asking if I am from Oregon.
// // const oregon = prompt( 'Last question! I swear. Ok, ' + username + ', from what you know of me thus far do you think I am from Oregon?' );
// // if (oregon.toLowerCase() === 'yes' || oregon.toLowerCase() === 'y' ) {
// //     confirm( 'Nope. I came from Seattle via California! But not with a banjo on my knee and I don\'t know anyone named Susana.');
// //     console.log( 'Am I from Oregon? Answer:', oregon);
// // } else if ( oregon.toLowerCase() === 'no' || oregon.toLowerCase() === 'n' ) {
// //     alert( 'That\'s correct. I came from Seattle via California!' );
// //     console.log( 'Am I from oregon? Answer:', oregon);
// // };

// // alert('You made it through the most boring "Get-to-know-me" ever! Here is a bit more about me and what I\'m doing now. You must be reeeeeally bored.');


// // alert( 'Fooled you!! More questions. Muahahaha!' + username + ', now comes the guessing game.');

const mKind = [ 'rock' , 'acoustic' , 'celtic' ];

let mPlay = prompt( 'What is one genre of music from these 6 that I currently play.' );

let guess = 0;
while (guess < 5) {
    // console.log(mKind.includes(mPlay));
    // console.log(mPlay);

    if (mKind.includes(mPlay)) {
        confirm('You got it, ' + username + '! I play Rock, Acoustic and Celtic music.');
        break;
    }
    else if (!mKind.includes(mPlay)) {
        mPlay = prompt('Not quite correct. Guess again. ' + username + ' You have ' + (5 - guess) + ' tries remaining.');
        guess++;
    
    }

    if (!mKind.includes(mPlay) && (5 - guess) === 0) {
        alert( 'Awww, looks like you\'re out of guesses. I currently play Rock, Acoustic and Celtic music' );
    }
}
