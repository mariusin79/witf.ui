angular.module('pingPongApp')
	.controller('SearchCtrl', function ($scope, boardState, Api) {
		$scope.recipes = boardState.recipes;
		Api.searchRecipes(_.pluck(boardState.ingredients, 'name'))
			.then(function(data){
				_.merge(boardState.recipes, data);
			});
	});
