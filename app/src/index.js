//ugly, fix
document.write('<div ng-app="pingPongApp" ui-view></div>');

angular.module('pingPongApp', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
      .state('main', {
        url: "/",
        templateUrl: "partials/main.html"
      })
      .state('board', {
        abstract: true,
        templateUrl: "partials/board.html"
      })
      .state('board.detail', {
        url: "/board/:boardid",
        views: {
          detail: {
            templateUrl: "partials/board.detail.html",
            controller: function ($scope) {
              $scope.ingredients = ["A", "List", "Of", "Ingredients"];
            }
          },
          search: {
            templateUrl: "partials/board.search.html",
            controller: function ($scope) {
              console.log('woo');
              $scope.recipes = ["A", "List", "Of", "Recipes"];
            }
          }
        }
      })
  });
console.log('wooo');
