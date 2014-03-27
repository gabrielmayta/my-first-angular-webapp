var app = angular.module('molinari-developers', [
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