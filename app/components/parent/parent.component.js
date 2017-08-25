angular.module('app.parent', [])
    .component('parent', {
        controller: [ParentController],
        templateUrl: 'components/parent/parent.html'
    });

function ParentController() {
    angular.extend(this, {
        randomize: randomize
    });

    var showList = [
        {
            "title": "House",
            "season": [1, 2, 3, 4, 5, 6, 7, 8],
            "episode": [20, 20, 20, 20, 20, 20, 20, 20]

        },
        {
            "title": "Game of Thrones",
            "season": [1, 2, 3, 4, 5, 6, 7, 8],
            "episode": [20, 20, 20, 20, 20, 20, 20, 20]
        },
        {
            "title": "Silicon Valley",
            "season": [1, 2, 3, 4, 5, 6, 7, 8],
            "episode": [20, 20, 20, 20, 20, 20, 20, 20]
        },
        {
            "title": "Rick and Morty",
            "season": [1, 2, 3, 4, 5, 6, 7, 8],
            "episode": [20, 20, 20, 20, 20, 20, 20, 20]
        },
        {
            "title": "Friends",
            "season": [1, 2, 3, 4, 5, 6, 7, 8],
            "episode": [20, 20, 20, 20, 20, 20, 20, 20]
        }

    ];
    var show;

    function randomize() {
        console.log('randomizing tv show pick ... ');
        var pick = Math.floor(Math.random()*showList.length);
        show = showList[pick];
        console.log(show);
    }


}