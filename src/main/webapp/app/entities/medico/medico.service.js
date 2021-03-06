(function() {
    'use strict';
    angular
        .module('hospitalApp')
        .factory('Medico', Medico);

    Medico.$inject = ['$resource'];

    function Medico ($resource) {
        var resourceUrl =  'api/medicos/:id';

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
