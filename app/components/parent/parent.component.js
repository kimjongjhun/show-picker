angular
    .module('app.parent', [])
    .component('parent', {
        controller: ['tvdbService', ParentController],
        templateUrl: 'components/parent/parent.html'
    });

function ParentController(tvdbService) {
    angular.extend(this, {
        randomize: randomize
    });

    var showList = [
        {
            'title': 'House',
            'id': '73255',
            'description': 'Empty for now',
            'season': [1, 2, 3, 4, 5, 6, 7, 8],
            'episode': [22, 24, 24, 16, 24, 22, 23, 22]

        },
        {
            'title': 'Game of Thrones',
            'id': '121361',
            'description': 'Empty for now',
            'season': [1, 2, 3, 4, 5, 6, 7],
            'episode': [10, 10, 10, 10, 10, 10, 7]
        },
        {
            'title': 'Silicon Valley',
            'id': '277165',
            'description': 'Empty for now',
            'season': [1, 2, 3, 4],
            'episode': [8, 10, 10, 10]
        },
        {
            'title': 'Rick and Morty',
            'id': '275274',
            'description': 'Empty for now',
            'season': [1, 2, 3],
            'episode': [11, 10, 10]
        },
        {
            'title': 'Friends',
            'id': '79168',
            'description': 'Empty for now',
            'season': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            'episode': [24, 24, 25, 24, 24, 25, 24, 24, 24, 18]
        }

    ];

    this.show = {
        'name': 'PRESS',
        'id': 'tbd',
        'description': 'tbd',
        'season': 'THE',
        'episode': 'BUTTON'
    };

    function randomize() {
        var pick = Math.floor(Math.random() * showList.length);
        var show = {};
        show.name = showList[pick].title;
        show.id = showList[pick].id;
        show.season = Math.floor(Math.random() * showList[pick].season.length + 1);
        show.episode = Math.floor(Math.random() * showList[pick].episode[show.season - 1] + 1);

        tvdbService.getDescription(show.id, show.season, show.episode);
        this.show = show;
        console.log(this.show);

    }

}