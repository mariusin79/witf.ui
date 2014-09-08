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
				templateUrl: 'partials/main.html',
				controller: 'MainCtrl'
			})
			.state('board', {
				abstract: true,
				templateUrl: 'partials/board.html'
			})
			.state('board.detail', {
				url: '/board/:boardid',
				resolve: {
					boardState: function () {
						return {ingredients: [], recipes: []};
					}
				},
				views: {
					detail: {
						templateUrl: 'partials/board.detail.html',
						controller: 'BoardCtrl'
					},
					search: {
						templateUrl: 'partials/board.search.html',
						controller: 'SearchCtrl'
					}
				}
			})
	});
