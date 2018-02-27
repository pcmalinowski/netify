//"use strict"

// class Movie {

// 	constructor (titleName, description, source, year){
// 		this.titleName = titleName;
// 		this.description = description;
// 		this.source = source;
// 		this.year = year;
// 	}
// }

// var MOVIE_RESULTS = {
// 	"Movies": [
//         {
//             "titleName": "Bad Movie",
//             "description": "Lorem ipsem doler doler lorem ipsum",
//             "source": "Netflix",
//             "year": "1990",
//             "id": "1111"
//         },
//         {
//             "titleName": "Good Movie",
//             "description": "Lorem ipsem doler doler lorem ipsum",
//             "source": "Hulu",
//             "year": "2000",
//             "id": "2222"
//         },
//         {
//             "titleName": "Better Movie",
//             "description": "Lorem ipsem doler doler lorem ipsum",
//             "source": "Amazon Prime",
//             "year": "2010",
//             "id": "3333"
//         },
//         {
//             "titleName": "Best Movie",
//             "description": "Lorem ipsem doler doler lorem ipsum",
//             "source": "Unavailable",
//             "year": "2018",
//             "id": "4444"
//         }
//     ]
// };

const MongoClient = require(`mongodb`).MongoClient;
const url = 'mongodb://127.0.0.1:27017/netify';

MongoClient.connect(url, function(err, db) {
    db.collection(`movies`).find().toArray(function(error, movies){
        if(error){
            console.error(error);
            return;
        }
        console.log(movies);
    });
});


// this function's name and argument can stay the
// same after we have a live API, but its internal
// implementation will change. Instead of using a
// timeout function that returns mock data, it will
// use jQuery's AJAX functionality to make a call
// to the server and then run the callbackFn
function getNewMovieUpdates(callbackFn) {
    // we use a `setTimeout` to make this asynchronous
    // as it would be with a real AJAX call.
	setTimeout(function(){ callbackFn(MOVIE_RESULTS)}, 1);
}

// this function stays the same when we connect
// to real API later
function displayMovieUpdates(data) {
    for (index in data.Movies) {
	   $('div').append(
        '<p>' + data.Movies[index].titleName + `, realesed in ` + data.Movies[index].year + `, about ` + data.Movies[index].description + `, is on ` + data.Movies[index].source + `.` + '</p>');
    }
}

// this function can stay the same even when we
// are connecting to real API
function getAndDisplayMovieUpdates() {
	getNewMovieUpdates(displayMovieUpdates);
}

//  on page load do this
$(function() {
	getAndDisplayMovieUpdates();
})