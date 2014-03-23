var app = angular.module('Mayta', [
    'ngRoute',
    'ngAnimate'
]);

app.run(function ($rootScope) {

    $rootScope.$on('$routeChangeStart', function (event, next, current) {

        $rootScope.direction = 'rtl';

        if (current && next && (current.depth > next.depth)) {
            $rootScope.direction = 'ltr';
        }
    });
});