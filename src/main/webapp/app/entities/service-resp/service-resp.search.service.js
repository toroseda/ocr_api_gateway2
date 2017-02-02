(function() {
    'use strict';

    angular
        .module('ocrApiGateway2App')
        .factory('ServiceRespSearch', ServiceRespSearch);

    ServiceRespSearch.$inject = ['$resource'];

    function ServiceRespSearch($resource) {
        var resourceUrl =  'api/_search/service-resps/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
