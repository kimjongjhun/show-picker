angular
    .module('tvdb', [])
    .service('tvdbService', [tvdbController]);

function tvdbController() {
    angular.extend(this, {
        getDescription: getDescription
    });

    function getDescription(season, episode) {
        console.log(season, episode);
    }
}