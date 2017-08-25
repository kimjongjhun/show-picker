angular.module('app.show', [])
    .component('show', {
        bindings: {
            title: '<'
        },
        controller: [ShowController],
        templateUrl: 'components/show/show.html'
    });

function ShowController () {
    angular.extend(this, {
        $onChanges: $onChanges,
        $onInit: $onInit
    });

    var showTitle;

    function $onInit() {
        showTitle = 'Yet to be determined ... '
    }

    function $onChanges(changes) {
        this.title = changes.title;
    }


}