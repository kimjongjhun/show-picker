angular
    .module('app.episode', [])
    .component('episode', {
        bindings: {
            number: "<"
        },
        controller: [EpisodeController],
        templateUrl: 'components/episode/episode.html'
    });

function EpisodeController() {
    angular.extend(this, {
        $onChanges: $onChanges
    });

    this.episodeNumber;

    function $onChanges(changes) {
        this.episodeNumber = changes.number.currentValue.episode;
    }
}