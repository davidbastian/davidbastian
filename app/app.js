import angular from 'angular'
//import uirouter from 'angular-ui-router'
import ngroute from 'angular-route'
import nganimate from 'angular-animate'
import sanitize from 'angular-sanitize'

import gsap from 'gsap'
import {pageAnimation} from  './pageAnimation'
import {pageRouting} from  './pageRouting'
import {toSlug} from  './toSlug'

//load controllers
import {HomeController} from  './home/home.controller'
import {AboutController} from  './about/about.controller'
import {SingleController} from  './single/single.controller'


angular.module("db", [ngroute, nganimate, sanitize])
	.animation('.main-content',pageAnimation)
	.config(['$routeProvider', '$locationProvider', pageRouting])    
	.run(function () {})
	.filter('toslug',toSlug)
	.controller('Home', HomeController)
	.controller('About', AboutController)
	.controller('Single', SingleController)

/*
import {pageAnimation} from  './pageAnimation'
import {toSlug} from  './toSlug'


import routing from './app.config'
import home from './home'
import about from './about'
import single from './single'


angular
    .module("db", [uirouter, home, about, single, nganimate])
    .animation('.main-content',pageAnimation)
	.config(routing)
	.filter('toslug',toSlug);

*/
