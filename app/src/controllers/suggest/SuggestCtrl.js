angular.module('pingPongApp')
	.controller('SuggestCtrl', function ($scope, boardState, Api) {
		$scope.boardState = boardState;

		boardState.recipes = null;
		Api.searchRecipes(_.pluck(boardState.ingredients, 'name'))
			.then(function(data){
				boardState.recipes = data;
			});
	});
