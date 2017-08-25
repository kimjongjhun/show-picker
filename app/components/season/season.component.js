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

    var seasonNumber;

    function $onChanges() {
        seasonNumber = this.number;
    }
}