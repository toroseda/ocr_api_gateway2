(function() {
    'use strict';

    angular
        .module('ocrApiGateway2App')
        .factory('EdmsDownloadSearch', EdmsDownloadSearch);

    EdmsDownloadSearch.$inject = ['$resource'];

    function EdmsDownloadSearch($resource) {
        var resourceUrl =  'api/_search/edms-downloads/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
