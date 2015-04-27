'use strict';

/**
 * @ngdoc module
 * @name fkjs.services.ajax
 *
 * @description
 * Handle ajax actions
 */
angular.module('fkjs.services.ajax', [])


/*
 * @ngdoc service
 * @name ajaxService
 * @module fkjs.services.ajax
 * 
 * @description
 * Manage Ajax requests
 * 
 * @example usage 
 * ajaxService.get('url.json').then(function(data){ console.log(data); });
 */
.service('ajaxService', function($http, $q, $log, $rootScope){
    this.get = function(url){
        $rootScope.$broadcast('beforeAjaxRequest');

        var deferred = $q.defer();

        $http.get(url)

        .success(function(res){
            deferred.resolve(res);
            $rootScope.$broadcast('ajaxRequestSuccess');
        })
        .error(function(msg, code){
            deferred.reject(msg);
            $log.error(msg, code);
            $rootScope.$broadcast('ajaxRequestError');
        });

        return deferred.promise;
    };
});