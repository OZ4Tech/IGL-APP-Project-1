// Global dom
let searchEl = document.getElementById('name-search')
let resultsEl = document.getElementById('results')
let submitEl = document.getElementById('submit')

console.log(searchEl)
console.log(resultsEl)
console.log(submitEl)

// request
submitEl.addEventListener('click', function(){
    let requestUrl = 'https://shazam.p.rapidapi.com/search?term=' + searchEl.value + '&locale=en-US&offset=0&limit=5/'
    console.log(requestUrl)
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7e218f9294mshed130077e09c28bp11d981jsnb67b9fe814b1',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };
    fetch(requestUrl, options)
	.then(response => response.json())
	.then(response => createResults(response))
        
	.catch(err => console.error(err));

})

function createResults(response){
    
    for(i=0;i<response.tracks.hits.length;i++){
        console.log(response.tracks.hits[i]);
        let resultsTab = document.createElement('div');


        let resultsName = document.createElement('a');
        let resultImg = document.createElement('img');

        resultsName.innerHTML = response.tracks.hits[i].track.title;
        // this line will add the img thumbnail. once bootstrap stylings are decided, we can add classes
        resultImg.setAttribute('src', response.tracks.hits[i].track.images.coverart)
        resultsName.setAttribute('href', response.tracks.hits[i].track.url)
        resultsName.setAttribute('target', '_blank')

        resultsEl.appendChild(resultsTab)
        resultsTab.appendChild(resultImg)
        resultsTab.appendChild(resultsName)
    }
}