angular.module('app.season', [])
    .component('season', {
        bindings: {
            number: "<"
        },
        controller: [SeasonController],
        templateUrl: 'components/season/season.html'
    });

function SeasonController() {
    angular.extend(this, {
        $onChanges: $onChanges
    });

    this.seasonNumber;

    function $onChanges(changes) {
        this.seasonNumber = changes.number.currentValue.season;
    }
}