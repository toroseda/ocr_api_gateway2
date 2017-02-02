(function() {
    'use strict';

    angular
        .module('ocrApiGateway2App')
        .factory('EdmsResponseSearch', EdmsResponseSearch);

    EdmsResponseSearch.$inject = ['$resource'];

    function EdmsResponseSearch($resource) {
        var resourceUrl =  'api/_search/edms-responses/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
