angular.module('FreeKernelJsDemoApp')

.config(function($stateProvider, $urlRouterProvider){
             
        // ~~~ Redirects and Otherwise
        $urlRouterProvider
            .otherwise( '/home' );

    
        // ~~~ State Configurations
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/home/page.html',
                controller: 'HomeViewController'
            })

            .state('signup', {
                url: '/signup',
                templateUrl: 'views/signup/page.html',
                controller: 'SignupViewController'
            })

            .state('about', {
                url: '/about',
                templateUrl: 'views/about/page.html',
                controller: 'AboutViewController'
            });
});