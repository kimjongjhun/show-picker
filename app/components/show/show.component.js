angular.module('app.show', [])
    .component('show', {
        controller: [ShowController],
        bindings: {
            title: '<'
        },
        templateUrl: 'components/show/show.html'
    });

function ShowController () {
    angular.extend(this, {
        $onChanges: $onChanges
    });

    this.title = 'TBD';

    function $onChanges(changes) {
        // this.title = changes.title.currentValue.name;
        // console.log('here', this.title);
        this.title = changes.title.currentValue;
        console.log('showing changes, ', changes);
    }


}