'use strict';

app.controller('VideosController',

    function VideosController($scope) {

        $scope.title = "Videos";

        $scope.videos = [
            { title: 'Design Decisions in AngularJS', src: 'https://www.youtube.com/embed/HCR7i5F5L8c' },
            { title: 'Android Design for UI Developers', src: 'https://www.youtube.com/embed/Jl3-lzlzOJI' },
            { title: 'The Myth of the Genius Programmer', src: 'https://www.youtube.com/embed/0SARbwvhupQ' },
            { title: 'Structure in Android App Design', src: 'https://www.youtube.com/embed/XpqyiBR0lJ4'},
            { title: 'HTML5 versus Android: Apps or Web for Mobile Development?', src: 'https://www.youtube.com/embed/4f2Zky_YyyQ'}
        ];

    });