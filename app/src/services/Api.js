angular.module('pingPongApp')
	.service('Api', function ($http, apiUrl) {
		return {
			searchIngredients: function (term) {
				return $http.get(apiUrl + '/autocomplete', {params: {q: term}})
					.then(function (response) {
						return response.data.results;
					});
			},
			searchRecipes: function (ingredients){
				return $http.get(apiUrl + '/findRecipes', {params: {q: ingredients.join(';')}})
					.then(function (response) {
						return response.data.results;
					});
			}
		};
	});
