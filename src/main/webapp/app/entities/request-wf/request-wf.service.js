(function() {
    'use strict';
    angular
        .module('ocrApiGateway2App')
        .factory('RequestWf', RequestWf);

    RequestWf.$inject = ['$resource'];

    function RequestWf ($resource) {
        var resourceUrl =  'api/request-wfs/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
