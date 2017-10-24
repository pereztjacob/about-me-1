'use strict';

//Initial question on guitar.
var play = prompt('Can I play the guitar?');
if (play.toLowerCase() === 'yes' || play.toLowerCase() === 'y' ) { 
    confirm( 'You\'re correct! I do.');
    console.log( 'do i play guitar?', play);
} else if ( play.toLowerCase() === 'no' || play.toLowerCase() === 'n' ) {
    alert( 'Actually I do play guitar.' );
    console.log( 'do i play guitar?', play);
};

//For question on additional instruments.
var more = prompt('Do you think I can play any other instruments?');
if (more.toLowerCase() === 'yes' || more.toLowerCase() === 'y' ) { 
    var evenMore = prompt( 'Yep. I can play another instrument. How many do you think I can play?'); //technically 3rd question
    if ( evenMore === '2' || evenMore === '4' || evenMore === 'two' || evenMore === 'four') {
        alert( 'Close. I play 3. Mandolin. Guitar. And Bass.')
        console.log( 'How many instruments?', evenMore)
    } 
    else if (evenMore === '3' || evenMore === 'three') {
        confirm( 'Nailed it! I play 3. Mandolin. Guitar. And Bass.')
        console.log( 'How many instruments?', evenMore) 
    } 
    else {
        alert( 'It\s cool. Moving on.' )
    }
} 

else if ( more.toLowerCase() === 'no' || more.toLowerCase() === 'n' ) {
    var evenMore = prompt( 'Acutally. I can play another instrument. You don\'t know me at all. How many do you think I can play?'); //technically 3rd question
    if ( evenMore === '2' || evenMore === '4' || evenMore === 'two' || evenMore === 'four') {
        alert( 'Close. I play 3. Mandolin. Guitar. And Bass.')
        console.log( 'How many instruments?', evenMore)
    } 
    else if (evenMore === '3' || evenMore === 'three') {
        confirm( 'Nailed it! I play 3. Mandolin. Guitar. And Bass.')
        console.log( 'How many instruments?', evenMore) 
    } 
    else {
        alert( 'It\s cool. I can tell you\'re bored. Moving on.' )
        console.log( 'How many instruments?', evenMore)
    }
}

var genre = prompt( 'Ok, moving on. Is my favorite genre acoustic instrumental?' );
if (genre.toLowerCase() === 'yes' || genre.toLowerCase() === 'y' ) { 
    confirm( 'You damn skippy it is!');
    console.log( 'Is my favorite genre acoustic instrumental?', genre);
} else if ( genre.toLowerCase() === 'no' || genre.toLowerCase() === 'n' ) {
    alert( 'I know it sounds weird but it is. You should check it out.' );
    console.log( 'Is my favorite genre acoustic instrumental?', genre);
};

var oregon = prompt( 'Last question! I swear. Am I from Oregon?' );
if (oregon.toLowerCase() === 'yes' || oregon.toLowerCase() === 'y' ) { 
    confirm( 'Nope. I came from Seattle via California!');
    console.log( 'Am I from Oregon?', oregon);
} else if ( oregon.toLowerCase() === 'no' || oregon.toLowerCase() === 'n' ) {
    alert( 'That\'s correct. I came from Seattle via California!' );
    console.log( 'Am I from oregon?', oregon);
};

alert('You made it through the most boring "Get-to-know-me" ever! Here is a bit more about me and what I\'m doing now. You must be reeeeeally bored.');