const assert = require('assert');
const Tmdb = require('../../../src/tmdb-js/tmdb-js').TmdbClient;

exports.runTest = (authentication) => {

    let apiKey = authentication["apiKey"];

    const tmdb = new Tmdb(apiKey);

    describe('Keyword GET tests', () => {

        const keyword = {id: "14999", name: "devil"};
        it('Should get keyword data.', done => {
            tmdb.getKeywordSection().getKeyword(keyword.id).getDetailsAsync().then(json => {

                // Assert the results
                assert.strictEqual(json.name, keyword.name);

                setImmediate(done);
            });
        });

        it("Should get data of movies with a certain keyword.", async () => {
            let data = await tmdb.getKeywordSection().getKeyword(keyword.id).getMovies();
            assert.ok(data);
            assert.ok(data["total_pages"]);
        });
    });
}