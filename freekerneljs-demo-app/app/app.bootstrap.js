/**
 * 1. Load all JS dependencies, then bootstrap the application.
 */
$script([
    //services 
    'services/utils.js',
    
    //widgets
    'widgets/navbar/module.js',
    'widgets/header/module.js',
    'widgets/notification/module.js',
    'widgets/tile/module.js',
    'widgets/panel/module.js',
    
    //views
    'views/main/controller.js',
    'views/home/controller.js',
    'views/signup/controller.js',
    'views/about/controller.js'

], 'appDependencies');


/*
 * 2. Take some actions after all dependencies were loaded
 */
$script.ready('appDependencies', function(){
    
    // 2.1 Declare modules dependencies for this application
    angular.module('FreeKernelJsDemoApp', [
        //angular modules
        'ngMaterial',
        'ngAnimate',
        'ui.router',
        
        //app services
        'fkjs.services.utils',

        //app widgets
        'fkjs.widgets.navbar',
        'fkjs.widgets.header',
        'fkjs.widgets.notification',
        'fkjs.widgets.tile',
        'fkjs.widgets.panel',

        //app views
        'fkjs.views.main',
        'fkjs.views.home',
        'fkjs.views.signup',
        'fkjs.views.about'
    ]);
    
    $script([
        // 2.2 load routes
        'app.routes.js'

    ], function(){
        // 2.3 finally bootstrap the application
        angular.bootstrap(document, ['FreeKernelJsDemoApp']);
    });
});