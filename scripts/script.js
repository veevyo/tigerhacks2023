const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGE3OTI3M2MxZTMzNTcyMzE1N2JmZTQ0YTEzZjNhMCIsInN1YiI6IjY1NDU3NTMwMWFjMjkyMDBhYmQ4NDFhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WmAGa5131zPQHt-0okCVjDq66nwhuUuSySijS0M-GUU'
    }
};
function test() {
    fetch('https://api.themoviedb.org/3/search/keyword?query=andrew', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
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