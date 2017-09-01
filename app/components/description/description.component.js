angular
    .module('app.description', [])
    .component('description', {
        bindings: {
            description: '<'
        },
        controller: [DescriptionController],
        templateUrl: 'components/description/description.html'
    });

function DescriptionController() {
    angular.extend(this, {
        $onChanges: $onChanges
    });

    this.episodeDescription = 'Empty for now';

    function $onChanges(changes) {
        this.episodeDescription = changes.description.currentValue.description;
    }
}