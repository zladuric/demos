'use strict';

/**
 * @ngdoc module
 * @name fkjs.widgets.panel
 *
 * @description
 * UI component which displays and manages a floating panel.
 */
angular.module('fkjs.widgets.panel', [])


/*
 * @ngdoc directive
 * @name floatingPanel
 * @module fkjs.widgets.panel
 * 
 * @param {string=} title The title to be displayed in the header of the panel.
 * @param {string=} hideCollapseTool Pass true if you whould like to hide the collapse/expand tool, default to false.
 * @param {string=} hideSettingsTool Pass true if you whould like to hide the settings tool, default to false.
 * 
 * @usage
 * <floating-panel data-title="Login Details" hide-collapse-tool="true" hide-settings-tool="true">
 *     Your content here...
 * </floating-panel>
 */
.directive('floatingPanel', function(){
    return {
        restrict: 'E',
        templateUrl: 'widgets/panel/template.html',
        transclude: true,
        
        scope: {
            title: '@',
            hideCollapseTool: '@',
            hideSettingsTool: '@'
        },
        
        controller: function($scope){
            // collapse or expand the panel body
            $scope.togglePanel = function(event){
                var button = event.target;
                var buttonEl = angular.element(button);
                var body = buttonEl.parents('.fkjs-panel').children('.fkjs-panel-body');
                var upCls = 'mdi-expand-less';
                var downCls = 'mdi-expand-more';
                
                if (buttonEl.hasClass(upCls)){
                    buttonEl.removeClass(upCls).addClass(downCls);
                    body.slideUp(200);
                } 
                else {
                    buttonEl.removeClass(downCls).addClass(upCls);
                    body.slideDown(200); 
                }
            };
        }
    };
});