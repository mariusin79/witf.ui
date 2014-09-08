angular.module('pingPongApp')
	.controller('SearchCtrl', function ($scope, boardState) {
		$scope.recipes = boardState.recipes;

		$scope.expand = function (){
			var detailDiv = $('.detail');
			detailDiv.css({'margin-top': 0});
		}
	});
