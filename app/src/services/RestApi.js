angular.module('pingPongApp')
	.factory('FoodConversation', function($resource, apiUrl) {
		return $resource(apiUrl + '/foodconversation/:id', null,  { 'update': {method: 'PUT'}});
	});