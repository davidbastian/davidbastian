import angular from 'angular'
import uirouter from 'angular-ui-router'
import nganimate from 'angular-animate'
import gsap from 'gsap'

import {pageAnimation} from  './pageAnimation'
import {pageRouting} from  './pageRouting'


var db = angular
    .module("db", [uirouter, nganimate])
    .animation('.main-content',pageAnimation)
	.config(pageRouting)
