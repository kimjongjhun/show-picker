angular.module('app.episode', [])
    .component('episode', {
        bindings: {
            number: "<"
        },
        controller: [EpisodeController],
        templateUrl: 'components/episode/episode.html'
    });

function EpisodeController () {
    angular.extend(this, {
        $onChanges: $onChanges
    });

    var episodeNumber;

    function $onChanges() {
        episodeNumber = this.number;
    }
}