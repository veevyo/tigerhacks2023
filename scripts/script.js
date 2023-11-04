
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
var posterLinks = [];

async function test() {
    document.getElementById("card").innerHTML = "";
    document.getElementById("card-wrapper").style = "display: block !important;";
    keywordsearch = [];
    movies = [];
    movieTitles = [];
    releases = [];
    posterLinks = [];

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
        releases.push(keywordsearch[0].results[i].release_date.slice(0,4));
        posterLinks.push(keywordsearch[0].results[i].poster_path);
        //names.push(keywordsearch[0].results[i].name);
    }

    //console.log(ids);

    for (i = 0; i < ids.length; i++) {
        await fetch(`https://api.themoviedb.org/3/movie/${ids[i]}?language=en-US`, options)
        .then(response => response.json())
        .then(response => movies.push(response))
        //.then(response => console.log(response))
        .catch(err => console.error(err));

        //console.log(movies);
    }

    for (i = 0; i < movies.length; i++) {
        console.log(movies[i].results);
        movieTitles.push(movies[i].original_title);
        posterLinks.push(movies[i].results.poster_path);
        //console.log(movies[i]);
    }

    //console.log(movieTitles);
    //console.log(posterLinks);
    

    for (i = 0; i < movieTitles.length; i++) {
        

        var link = document.createElement("a");
        var cardLeft = document.createElement("div");
        var cardRight = document.createElement("div");
        var h3 = document.createElement("h3");
        var sub = document.createElement("small")
        var hr = document.createElement("hr");
        var poster = document.createElement("img");

        cardLeft.className = "col-md-3";
        cardRight.className = "col-md-3";
        sub.className = "text-muted";

        h3.innerHTML = movieTitles[i];
        link.href = `https://www.themoviedb.org/search/movie?query=${movieTitles[i]}&language=en-US&`
        sub.innerHTML = releases[i];
        poster.src = `https://image.tmdb.org/t/p/w185//${posterLinks[i]}`;
        link.target = "_blank";

        cardLeft.appendChild(h3);
        cardLeft.appendChild(sub);
        cardLeft.appendChild(hr);
        cardRight.appendChild(link);
        link.appendChild(poster);
        
        //cardRight.appendChild(poster);
        document.getElementById("card").appendChild(cardLeft);
        document.getElementById("card").appendChild(cardRight);

        
    }


    
}