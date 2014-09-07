angular.module('pingPongApp')
	.service('Ingredients', function ($http, apiUrl) {
		return {
			search: function (term) {
				return $http.get(apiUrl + '/autocomplete', {params: {q: term}})
					.then(function (response) {
						return response.data.results;
					});
			}
		};
	});
