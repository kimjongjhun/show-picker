angular
    .module('tvdb', [])
    .service('tvdbService', ['$http', tvdbController]);

function tvdbController($http) {
    angular.extend(this, {
        getDescription: getDescription
    });

    var linkBase = 'https://api.thetvdb.com';
    var seriesMod = '/series/';
    var episodeMod1 = '/episodes/query?airedSeason=';
    var episodeMod2 = '&airedEpisode=';
    // https://api.thetvdb.com/series/73255/episodes/query?airedSeason=3&airedEpisode=17

    function getDescription(id, season, episode) {
        console.log(id, season, episode);
        $http({
            method: 'GET',
            url: linkBase + seriesMod + id + episodeMod1 + season + episodeMod2 + episode,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MDQzMDE5ODMsImlkIjoiU2hvdyBQaWNrZXIiLCJvcmlnX2lhdCI6MTUwNDIxNTU4MywidXNlcmlkIjo0ODY4MDUsInVzZXJuYW1lIjoiemxhcWgifQ.ZxpQsmhy1_aphYnC1PRWGMMNWW5kJgDaMBr_aF_9SmxEGjU_qZNG3xqS5KhlVUG5Y2UpTGzjvUsuHDsUTo_HTr_q7Ob76qFovjCnKSFWFUVWxposQDm0oXED5WLpFyLdLWx5KWN2xuVxsM4jJGI4f9ZE40orsltyOy50FjiqNPY1M-nm0wstO1rVEEL4aI_1axoQBVKoPVnohvZNNOWJrUIaDhx8TsglYhimgSLBPKNy7rrHPct6BOZCEV4BAgVpodPs2tjcI4kmatH5vCQ9uUQAbu0EwiM4dd8LkzUdacxp-fnUwKDOWFl33XzaKDilNZEt8msN6hNC2ZcSyn121Q'
            }
        }).then(function successCallback(response) {
            console.log(response);
        }, function errorCallback(response) {
            console.log('error ', response);
        });
    }
}