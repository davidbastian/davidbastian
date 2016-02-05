

//load styles
import './app.scss'
import './home/home.scss'
import './full/full.scss'
import './about/about.scss'
import './single/single.scss'
import './header/header.scss'
import './footer/footer.scss'

//load npm-modernizr
import modernizr from 'imports?this=>window!../node_modules/npm-modernizr/modernizr.js'
import detectizr from 'imports?this=>window!../node_modules/detectizr/dist/detectizr.js'

//load angular
import angular from 'angular'
import ngroute from 'angular-route'
import nganimate from 'angular-animate'
import sanitize from 'angular-sanitize'

//load gsap & pageAnimation
import zepto from 'npm-zepto'
import gsap from 'gsap'
import 'imports?this=>window!./pageDrag.js'
import Draggable from 'imports?this=>window!../node_modules/gsap/src/uncompressed/utils/Draggable.js'

import scrolltoplugin from '../node_modules/gsap/src/uncompressed/plugins/ScrollToPlugin.js'
import {pageAnimation} from  './pageAnimation'

//load routing
import {pageRouting} from  './pageRouting'

//load filters
import {toSlug} from  './toSlug'

//load controllers
import {AppController} from  './app.controller'
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

//import {fullCarousel} from  './full/fullCarousel'
import {singleMouse} from  './single/singleMouse'

//load directives Trigger Link
import {pageLink} from  './pageLink.js'

//load header & footer
import {headerApp} from  './header/header.directive'
import {footerApp} from  './footer/footer.directive'

//load directives SplitText for about
import {aboutSplit} from  './about/aboutSplit'


//start app
angular
	.module("db", [ngroute, nganimate, sanitize])

	.animation('.main-container',pageAnimation)

	.config(['$routeProvider', '$locationProvider', pageRouting])

	.filter('toslug',toSlug)

	.controller('AppController', ['$scope',AppController])
	.controller('Home', ['$scope',HomeController])
	.controller('Full', ['$scope',FullController])
	.controller('About', ['$scope', AboutController])
	.controller('Single', ['$scope','$routeParams',SingleController])
	
	//loaders
	.directive('homeLoader', ['$timeout',homePreload])
	.directive('fullLoader', ['$timeout',fullPreload])
	.directive('singleLoader', ['$timeout',singlePreload])

	//scrollers
	.directive('homeScroll', ['$timeout',homeScroll])
	.directive('singleScroll', ['$timeout',singleScroll])

	//slider Carousel
	//.directive('fullCarousel', fullCarousel)
	//.directive('singleMouse', singleMouse)

	//links trigger
	.directive('pageLink', pageLink)
	.directive('aboutSplit',['$timeout',aboutSplit])

	//header & footer
	.directive('headerApp', headerApp)
	.directive('footerApp', footerApp)


	.run(function() {
	  // add somethig before compilation ??
	})


