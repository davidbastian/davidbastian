

//load styles
import './app.scss'
import './home/home.scss'
import './full/full.scss'
import './about/about.scss'
import './single/single.scss'

//load angular
import angular from 'angular'
import ngroute from 'angular-route'
import nganimate from 'angular-animate'
import sanitize from 'angular-sanitize'

//load gsap & pageAnimation
import zepto from 'npm-zepto'
import gsap from 'gsap'
import scrolltoplugin from '../node_modules/gsap/src/uncompressed/plugins/ScrollToPlugin.js'
import {pageAnimation} from  './pageAnimation'

//load routing
import {pageRouting} from  './pageRouting'

//load filters
import {toSlug} from  './toSlug'

//load controllers
import {HomeController} from  './home/home.controller'
import {FullController} from  './full/full.controller'
import {AboutController} from  './about/about.controller'
import {SingleController} from  './single/single.controller'

//load directives Preload
import {singlePreload} from  './single/singlePreload'
import {homePreload} from  './home/homePreload'
import {fullPreload} from  './full/fullPreload'

//load directives Scroll
import {homeScroll} from  './home/homeScroll'
import {singleScroll} from  './single/singleScroll'

import {fullCarousel} from  './full/fullCarousel.js'
import {fullMouse} from  './full/fullMouse.js'

//load directives Trigger Link
import {pageLink} from  './pageLink.js'


//load directives SplitText
import {aboutSplit} from  './about/aboutSplit.js'


//start app
angular
	.module("db", [ngroute, nganimate, sanitize])

	.animation('.main-container',pageAnimation)

	.config(['$routeProvider', '$locationProvider', pageRouting])

	.filter('toslug',toSlug)

	.controller('Home', HomeController)
	.controller('Full', FullController)
	.controller('About', AboutController)
	.controller('Single', SingleController)
	
	//loaders
	.directive('homeLoader', homePreload)
	.directive('fullLoader', fullPreload)
	.directive('singleLoader', singlePreload)

	//scrollers
	.directive('homeScroll', homeScroll)
	.directive('singleScroll', singleScroll)

	.directive('fullCarousel', fullCarousel)

	.directive('fullMouse', fullMouse)

	//links trigger
	.directive('pageLink', pageLink)
	.directive('aboutSplit', aboutSplit)


	.run(function() {
	  // add somethig before compilation ??
	})


