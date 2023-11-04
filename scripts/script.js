
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGE3OTI3M2MxZTMzNTcyMzE1N2JmZTQ0YTEzZjNhMCIsInN1YiI6IjY1NDU3NTMwMWFjMjkyMDBhYmQ4NDFhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WmAGa5131zPQHt-0okCVjDq66nwhuUuSySijS0M-GUU'
    }
}

var keywordsearch = [];
var ids = [];
var names = [];
var movies = [];
var movieTitles = [];
var releases = [];

async function test() {
    

    let name = document.getElementById("name").value;
    await fetch(`https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US`, options)
    .then(response => response.json())
    .then(response => keywordsearch.push(response))
    //.then(response => console.log(response))
    
    .catch(err => console.error(err));

    //console.log(stuff);

    console.log(keywordsearch);

    for (i = 0; i < keywordsearch[0].results.length; i++) {
        movieTitles.push(keywordsearch[0].results[i].original_title);
        releases.push(keywordsearch[0].results[i].release_date);
        //names.push(keywordsearch[0].results[i].name);
    }

    //console.log(ids);

    for (i = 0; i < ids.length; i++) {
        await fetch(`https://api.themoviedb.org/3/movie/${ids[i]}?language=en-US`, options)
        .then(response => response.json())
        .then(response => movies.push(response))
        //.then(response => console.log(response))
        .catch(err => console.error(err));

        console.log(movies);
    }

    for (i = 0; i < movies.length; i++) {
        movieTitles.push(movies[i].original_title);
        console.log(movies[i]);
    }

    console.log(movieTitles);

    

    for (i = 0; i < movieTitles.length; i++) {
        var div = document.createElement("div");
        var h3 = document.createElement("h3");
        var sub = document.createElement("small")

        div.className = "card-body";
        sub.className = "text-muted";

        h3.innerHTML = movieTitles[i];
        sub.innerHTML = releases[i];

        div.appendChild(h3);
        div.appendChild(sub);
        document.getElementById("card").appendChild(div);
        
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