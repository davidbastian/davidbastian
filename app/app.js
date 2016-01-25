//load styles
import './app.scss'

//load angular
import angular from 'angular'
import ngroute from 'angular-route'
import nganimate from 'angular-animate'
import sanitize from 'angular-sanitize'

//load gsap & pageAnimation
import jquery from 'jquery'
import gsap from 'gsap'
import scrolltoplugin from '../node_modules/gsap/src/uncompressed/plugins/ScrollToPlugin.js'
import {pageAnimation} from  './pageAnimation'

//load routing
import {pageRouting} from  './pageRouting'

//load filters
import {toSlug} from  './toSlug'

//load controllers
import {HomeController} from  './home/home.controller'
import {AboutController} from  './about/about.controller'
import {SingleController} from  './single/single.controller'

//start app
angular
	.module("db", [ngroute, nganimate, sanitize])
	.animation('.main-container',pageAnimation)
	.config(['$routeProvider', '$locationProvider', pageRouting])
	.filter('toslug',toSlug)
	.controller('Home', HomeController)
	.controller('About', AboutController)
	.controller('Single', SingleController)
