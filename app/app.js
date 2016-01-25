import angular from 'angular'
import uirouter from 'angular-ui-router'
import nganimate from 'angular-animate'
import gsap from 'gsap'

import {pageAnimation} from  './pageAnimation'

import routing from './app.config'
import home from './home'
import about from './about'
import single from './single'

//console.log(data);


angular
    .module("db", [uirouter, home, about, single, nganimate])
    .animation('.main-content',pageAnimation)
	.config(routing)
