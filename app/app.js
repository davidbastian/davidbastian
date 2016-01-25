import angular from 'angular'
import uirouter from 'angular-ui-router'
import nganimate from 'angular-animate'
import gsap from 'gsap'

import {pageAnimation} from  './pageAnimation'

import routing from './app.config'
import home from './home'
import about from './about'


angular
    .module("db", [uirouter, home, about, nganimate])
    .animation('.main-content',pageAnimation)
	.config(routing)
