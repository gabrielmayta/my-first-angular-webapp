app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/home', { templateUrl: 'app/views/home.html', controller: 'HomeController', depth: 1 })
            .when('/videos', { templateUrl: 'app/views/videos.html', controller: 'VideosController', depth: 2 })
            .when('/books', { templateUrl: 'app/views/books.html', controller: 'BooksController', depth: 3 })
            .otherwise({ redirectTo: '/home' });
    }]);