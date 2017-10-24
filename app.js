'use strict';

var play = prompt('Can I play the guitar?');
if (play.toLowerCase() === 'yes' || play.toLowerCase() === 'y' ) { 
    confirm( 'You\'re correct! I do.');
    console.log( 'do i play guitar?', play);
} else if ( play.toLowerCase() === 'no' || play.toLowerCase() === 'n' ) {
    alert( 'Actually I do play guitar.' );
    console.log( 'do i play guitar?', play);
};

var more = prompt('Do you think I can play any other instruments?');
if (more.toLowerCase() === 'yes' || more.toLowerCase() === 'y' ) { 
    var evenMore = prompt( 'Yep. I can play another instrument. How many do you think I can play?');
    if ( evenMore === '2') {
        alert( 'Close. I play 3. Mandolin. Guitar. And Bass.')
    } else if (evenMore === '3'); {
        confirm( 'Nailed it! I play 3. Mandolin. Guitar. And Bass.')
        console.log( 'How many instruments:', evenMore);       
    }

} else if ( more.toLowerCase() === 'no' || more.toLowerCase() === 'n' ) {
    alert( 'Actually I do play others. I can play Mandolin, Guitar and Bass.' );
    console.log( 'Do I play other instruments.', play);
};



