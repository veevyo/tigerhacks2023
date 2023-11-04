const assert = require('assert');
const Tmdb = require('../../../src/tmdb-js/tmdb-js').TmdbClient;

// TMDb utils
const tmdbUtils = require('../../../src/utils/tmdb_utils');
const externalSources = tmdbUtils.externalSources;

exports.runTest = (authentication) => {

    let apiKey = authentication["apiKey"];

    let tmdb = new Tmdb(apiKey);

    describe('Find query tests.', () => {

        it('Find movie in external Source: IMDB.', done => {

            let movie = {id: 'tt0074256', title: 'Bugsy Malone'};
            tmdb.getFindSection(externalSources.IMDB_ID).findAsync(movie.id).then(json => {

                assert.strictEqual(json["movie_results"][0]["title"], movie.title);

                setImmediate(done);
            });
        });
    });
}