'use strict';

/**
 * @ngdoc module
 * @name fkjs.widgets.header
 *
 * @description
 * Page Header Widget.
 */
angular.module('fkjs.widgets.header', [])


/**
 * @ngdoc directive
 * @name fkjsHeader
 * @module fkjs.widgets.header
 *
 * @description
 * This page header is displaying the name of the page at the top of the screen.
 * 
 * @example usage
 * <fkjs-header sidnav-id="id"></fkjs-header>
 */
.directive('fkjsHeader', function($mdSidenav){
    return {
        restrict: 'E',
        templateUrl: 'widgets/header/template.html',
        replace: true,
        
        scope: {
            sidnavId: '@'
        },
        
        controller: function($scope){
            $scope.$on('navbarStateChange', function(event, stateText){
                $scope.pageTitle = stateText;
            });
            
            $scope.toggleSidenav = function(){
                $mdSidenav($scope.sidnavId).toggle(); 
            };
        }
    };
});