// Global dom
let searchEl = document.getElementById('search')
let resultsEl = document.getElementById('results-area')
let submitEl = document.getElementById('search-btn')

// request
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7e218f9294mshed130077e09c28bp11d981jsnb67b9fe814b1',
		'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
	}
};

fetch('https://shazam.p.rapidapi.com/search?term=I%20have%20emotionally%20motion%20sicknesss&locale=en-US&offset=0&limit=5/', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

submitEl.addEventListener('click', function(){
    console.log(searchEl.value)
})