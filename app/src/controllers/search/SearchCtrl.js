angular.module('pingPongApp')
	.controller('SearchCtrl', function ($scope, boardState, Api) {
		$scope.boardState = boardState;

		Api.searchRecipes(_.pluck(boardState.ingredients, 'name'))
			.then(function(data){
				boardState.recipes = data;
			});
	});
