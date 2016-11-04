angular.module("bees",["ui.router"])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home',{
      url: "/",
      templateUrl: "home.html"
    })
    .state('instructions',{
      url: "/instructions",
      templateUrl: "instructions.html"
    })
    .state('play', {
      url: "/play",
      templateUrl: "play.html"
    })
    .state('victory', {
      url: "/victory",
      templateUrl: "victory.html"
    });
  $urlRouterProvider
    .otherwise("/");
});
