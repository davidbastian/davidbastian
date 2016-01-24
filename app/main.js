import angular from 'angular'
import uirouter from 'angular-ui-router'
import nganimate from 'angular-animate'
import gsap from 'gsap'

var app = angular.module("testApp", [uirouter, nganimate]);

app.animation('.main-content', function(){
  return {
    enter: function(element, done) {
      TweenMax.from(element, 1, {opacity:0, x:50, onComplete:done})
    },
    leave: function(element, done) {
      TweenMax.to(element, 1, {opacity:0, x:50, onComplete:done})
    }
  }
})

app.config(function($stateProvider, $urlRouterProvider){    
      $stateProvider
          .state("list", {
              url: "/list",
              template: '<h4>Lots of list items will go here33</h4>'
          })
          .state("detail", {
              url: "/detail",
              template: '<h4>This is a super nice detail view</h4>'
          })
      
          $urlRouterProvider.otherwise("/list");
})


