'use strict';

/**
 * @ngdoc module
 * @name fkjs.widgets.navbar
 *
 * @description
 * Navigation bar for the application, displays on the left.
 */
angular.module('fkjs.widgets.navbar', [])


/*
 * @ngdoc directive
 * @name fkjsNavbar
 * @module fkjs.widgets.navbar
 *
 * @description
 * Set a list of pages in bar, manage click on each of the items in list.
 * 
 * @example usage
 * <fkjs-navbar cssPrefix="prefix" app-title="title" sidnav-id="id"></fkjs-navbar>
 */
.directive('fkjsNavbar', function($state, $rootScope){
    return {
        restrict: 'E',
        templateUrl: 'widgets/navbar/template.html',

        scope: {
            cssPrefix: '@',
            appTitle: '@',
            sidnavId: '@'
        },

        controller: function($scope){
            /*
             * set "active" css on selected menu item,
             * fire event to notify header regarding this change.
             */
            $scope.$on('$stateChangeSuccess', function(event, current){
                var stateName = $state.$current.self.name;
                var items = $scope.navbarItems;
                var i, stateText, len=items.length;
                for(i=0 ; i<len ; i++){
                    if(items[i].pageUrl === stateName){
                        stateText = items[i].text;
                        $scope.navbarItems[i].isActive = true;
                    }
                    else{
                        $scope.navbarItems[i].isActive = false;
                    }
                }

                $rootScope.$broadcast('navbarStateChange', stateText);
            });
        },
        
        link: function(scope){
            scope.navbarItems = [{
                pageUrl: 'home',
                text: 'Home',
                icon: 'mdi-home',
                isActive: true
            },{
                pageUrl: 'signup',
                text: 'Sign Up',
                icon: 'mdi-mode-edit'
            },{
                pageUrl: 'about',
                text: 'About',
                icon: 'mdi-info-outline'
            }];
        }
    };
});