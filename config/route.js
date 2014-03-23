app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/home', { templateUrl: 'app/views/home.html', controller: 'HomeController', depth: 1 })
            .when('/skill', { templateUrl: 'app/views/skill.html', controller: 'SkillController', depth: 2 })
            .when('/contacts', { templateUrl: 'app/views/contacts.html', controller: 'ContactsController', depth: 3 })
            .otherwise({ redirectTo: '/home' });
    }]);