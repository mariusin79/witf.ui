angular.module('pingPongApp', ['ui.router'])
	.constant('apiUrl', 'http://api.m0f0.net/api')
	.config(function ($stateProvider, $urlRouterProvider) {
		// For any unmatched url, redirect to /state1
		$urlRouterProvider.otherwise('/');
		//
		// Now set up the states
		$stateProvider
			.state('main', {
				url: '/',
				templateUrl: 'src/controllers/frontpage/frontpage.html',
				controller: 'FrontpageCtrl'
			})
			.state('board', {
				abstract: true,
				templateUrl: 'partials/board.html'
			})
			.state('board.detail', {
				url: '/board/:boardid',
				resolve: {
					boardState: function () {
						return {ingredients: [{name: 'ost'}], recipes: []};
					}
				},
				views: {
					detail: {
						templateUrl: 'src/controllers/ingredients/ingredients.html',
						controller: 'IngredientCtrl'
					},
					search: {
						templateUrl: 'src/controllers/search/search.html',
						controller: 'SearchCtrl'
					}
				}
			})
	});
