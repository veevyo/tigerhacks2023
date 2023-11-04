import { TmdbClient }  from '../lib/tmdb-js-1.0.3/src/tmdb-js/tmdb-js'


searchName = async function() {

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
}