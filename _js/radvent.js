var SCHEDULE;

var date = new Date;
var request = new XMLHttpRequest;

var today = date.getDate() - 1;
var doors = document.querySelectorAll( '#doors button' );
var track = document.querySelector( '#player' );
var trackInfo = document.querySelector( '#player p');
var trackAudio = document.querySelector( '#player audio');

request.open('GET', '_js/radvent.json', true);
request.onload = function() {
    if (request.status >= 200 && request.status < 400){
	SCHEDULE = JSON.parse(request.responseText);
	doors.forEach( function( element, index ) {
	    
	    if ( index <= today ) {
		if ( index === today ) {
		    element.classList.add( 'today' );
		} else {
		    element.classList.add( 'ajar' );
		}
		element.title = `${SCHEDULE[index].song} by ${SCHEDULE[index].artist}`;
		element.innerHTML = `<img src="${SCHEDULE[index].artwork}" alt="${SCHEDULE[index].song} by ${SCHEDULE[index].artist}" />`;
		element.addEventListener( 'click', function( event ) {
		    event.preventDefault();
		    if ( this.classList.contains( 'open' ) ) {
			track.classList.add( 'open' );			
			trackInfo.innerHTML = `<img src="${SCHEDULE[index].artwork}" alt="${SCHEDULE[index].song} by ${SCHEDULE[index].artist}" /><strong>${SCHEDULE[index].song}</strong> by ${SCHEDULE[index].artist}`;
			trackAudio.pause();
			trackAudio.innerHTML = `<source src="${SCHEDULE[index].audio}" type="audio/mpeg" />`;
			trackAudio.load();
			trackAudio.play();
		    } else {
			this.classList.add( 'open' );
		    }
		    return false;
		});
		
	    } else {
		element.disabled = true;
		element.addEventListener('click', function( event ) {
		    event.preventDefault();
		    console.log('No skipping ahead, cheater!');
		    return false;
		});
		
	    }
	    
	});
	
    }
};

request.send();
