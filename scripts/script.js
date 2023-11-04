
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGE3OTI3M2MxZTMzNTcyMzE1N2JmZTQ0YTEzZjNhMCIsInN1YiI6IjY1NDU3NTMwMWFjMjkyMDBhYmQ4NDFhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WmAGa5131zPQHt-0okCVjDq66nwhuUuSySijS0M-GUU'
    }
}

var keywordsearch = [];
var ids = [];
var movies = [];

function test() {
    let name = document.getElementById("name").value;
    fetch(`https://api.themoviedb.org/3/search/keyword?query=${name}`, options)
    .then(response => response.json())
    .then(response => keywordsearch.push(response))
    //.then(response => console.log(response))
    
    .catch(err => console.error(err));

    //console.log(stuff);

    //console.log(keywordsearch);

    for (i = 0; i < keywordsearch[0].results.length; i++) {
        ids.push(keywordsearch[0].results[i].id);
    }

    console.log(ids);

    for (i = 0; i < ids.length; i++) {
        fetch(`https://api.themoviedb.org/3/movie/${ids[i]}?language=en-US`, options)
        .then(response => response.json())
        .then(response => movies.push(response))
        //.then(response => console.log(response))
        .catch(err => console.error(err));

        console.log(movies);
    }
    
}
  

//import { TmdbClient }  from '../lib/tmdb-js-1.0.3/src/tmdb-js/tmdb-js'


/*searchName = async function() {

    let name = document.getElementById("name").value;

    let auth = getAuthenticator("87594bb664c20412e3f05addd6da739b")

    let apiKey = auth.apiKey;
    //let username = auth.username;
    //let password = auth.password;

    let tmdb = new TmdbClient(apiKey);

    //search
    let searchSection = tmdb.getSearchSection();
    let searchResult = await searchSection.multiSearchAsync(name);
    console.log(searchResult);
}*/