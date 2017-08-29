angular
    .module('app.parent', [])
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
            'title': 'House',
            'season': [1, 2, 3, 4, 5, 6, 7, 8],
            'episode': [22, 24, 24, 16, 24, 22, 23, 22]

        },
        {
            'title': 'Game of Thrones',
            'season': [1, 2, 3, 4, 5, 6, 7],
            'episode': [10, 10, 10, 10, 10, 10, 7]
        },
        {
            'title': 'Silicon Valley',
            'season': [1, 2, 3, 4],
            'episode': [8, 10, 10, 10]
        },
        {
            'title': 'Rick and Morty',
            'season': [1, 2, 3],
            'episode': [11, 10, 10]
        },
        {
            'title': 'Friends',
            'season': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            'episode': [24, 24, 25, 24, 24, 25, 24, 24, 24, 18]
        }

    ];

    this.show = {
        'name': 'PRESS',
        'season': 'THE',
        'episode': 'BUTTON'
    };

    function randomize() {
        var pick = Math.floor(Math.random() * showList.length);
        this.show.name = showList[pick].title;
        this.show.season = Math.floor(Math.random() * showList[pick].season.length + 1);
        this.show.episode = Math.floor(Math.random() * showList[pick].episode[this.show.season - 1] + 1);
        console.log(this.show);
    }


}