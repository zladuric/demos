'use strict';

/**
 * Page Header Widget
 */
angular.module('fkjs.widgets.header', [])

.directive('fkjsHeader', function(){
    return {
        restrict: 'E',
        templateUrl: 'widgets/header/template.html',
        replace: true,
        
        link: function(scope, element, attrs){
            scope.$on('$stateChangeSuccess', function(event, current){
                scope.pageTitle = current.data.pageTitle;
            });
        }
    };
});