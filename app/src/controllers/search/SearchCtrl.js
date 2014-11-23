angular.module('pingPongApp')
	.controller('SearchCtrl', function ($scope, $state, boardState, Api) {
		$scope.boardState = boardState;

		boardState.recipes = null;
		Api.searchRecipes(_.pluck(boardState.ingredients, 'name'))
			.then(function(data){
				boardState.recipes = data;
			});

		$scope.suggest = function (){
			$state.go('suggest', null, {reload: true});
		}
	});
