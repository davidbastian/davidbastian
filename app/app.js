//load angular
import angular from 'angular'
import ngroute from 'angular-route'
import nganimate from 'angular-animate'
import sanitize from 'angular-sanitize'


//load gsap & pageAnimation
import gsap from 'gsap'
import {pageAnimation} from  './pageAnimation'


//load routing
import {pageRouting} from  './pageRouting'


//load filters
import {toSlug} from  './toSlug'


//load controllers
import {HomeController} from  './home/home.controller'
import {AboutController} from  './about/about.controller'
import {SingleController} from  './single/single.controller'


//start angular
angular
	.module("db", [ngroute, nganimate, sanitize])
	.animation('.main-content',pageAnimation)
	.config(['$routeProvider', '$locationProvider', pageRouting])
	.filter('toslug',toSlug)
	.controller('Home', HomeController)
	.controller('About', AboutController)
	.controller('Single', SingleController)
