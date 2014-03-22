app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/home', { templateUrl: 'app/views/home.html', controller: 'HomeController' })
            .when('/skill', { templateUrl: 'app/views/skill.html', controller: 'SkillController' })
            .otherwise({ redirectTo: '/home' });
    }]);