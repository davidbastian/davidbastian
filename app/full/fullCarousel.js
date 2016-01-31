import zepto from 'npm-zepto'

function fullCarousel() {
    return {
        scope: true,
        link: function(scope, element, attrs) {

            function functionToBeCalled(e) {
                // console.log(e)
                /*if (!wrapA.last().hasClass('active')) {
                    wrapActive.removeClass('active').next().addClass('active');
                } else {
                    wrapActive.removeClass('active');
                    wrapA.first().addClass('active');
                }*/

                var pos = e.clientX,
                    win = $(window).width() / 2,
                    wrapActive = $('.wrap-a.active'),
                    wrapA = $('.wrap-a'),
                    wrapNext = $('.next');

                   
                //console.log(pos,win);
                if (pos < win) {

                    //console.log('right');
                     wrapNext.css('display', 'none');
                    if (!wrapA.first().hasClass('active')) {

                        TweenMax.set(wrapActive, {
                            left: '0vw'
                        });
                        TweenMax.set(wrapActive.next(), {
                            left: '100vw'
                        });
                        TweenMax.set(wrapActive.prev(), {
                            left: '-100vw'
                        });

                        TweenMax.to(wrapActive, .8, {
                            left: '100vw',
                            ease: Power4.easeOut,
                            onComplete: function() {
                                wrapActive.removeClass('active').prev().addClass('active');
                                wrapNext.css('display', 'block');
                            }
                        });
                        TweenMax.to(wrapActive.prev(), .8, {
                            left: '0vw',
                            ease: Power4.easeOut,
                        });

                    } else {
                        TweenMax.set(wrapA.last(), {
                            left: '-100vw'
                        });

                        TweenMax.to(wrapA.last(), .8, {
                            left: '0vw',
                            ease: Power4.easeOut,
                        });

                        TweenMax.to(wrapA.first(), .8, {
                            left: '100vw',
                            ease: Power4.easeOut,

                            onComplete: function() {
                                wrapActive.removeClass('active');
                                wrapA.last().addClass('active');
                                wrapNext.css('display', 'block');
                            }
                        });

                    }

                } else {
                    //console.log('left');
                         wrapNext.css('display', 'none');
                    if (!wrapA.last().hasClass('active')) {

                        TweenMax.set(wrapActive, {
                            left: '0vw'
                        });
                        TweenMax.set(wrapActive.next(), {
                            left: '100vw'
                        });
                        TweenMax.set(wrapActive.prev(), {
                            left: '-100vw'
                        });

                        TweenMax.to(wrapActive, .8, {
                            left: '-100vw',
                            ease: Power4.easeOut,
                            onComplete: function() {
                                wrapActive.removeClass('active').next().addClass('active');
                                wrapNext.css('display', 'block');
                            }
                        });
                        TweenMax.to(wrapActive.next(), .8, {
                            left: '0vw',
                            ease: Power4.easeOut,
                        });

                    } else {
                        TweenMax.set(wrapA.first(), {
                            left: '100vw'
                        });

                        TweenMax.to(wrapA.first(), .8, {
                            left: '0vw',
                            ease: Power4.easeOut,
                        });

                        TweenMax.to(wrapA.last(), .8, {
                            left: '-100vw',
                            ease: Power4.easeOut,

                            onComplete: function() {
                                wrapActive.removeClass('active');
                                wrapA.first().addClass('active');
                                wrapNext.css('display', 'block');
                            }
                        });
                        /*wrapActive.removeClass('active');
                        wrapA.first().addClass('active');*/
                    }

                }


              


                /*var x = e.clientX - this.offsetLeft,
                    w = document.body.offsetWidth,*/
                //console.log(e.clientX)
                /*var toSu = ((wrapA.size()*100)/10),
                      suSize =  $(window).width()/ wrapA.size(),
                      suEq = (Math.floor(((e.clientX*toSu)/$(window).width())/10));

                 wrapA.removeClass('active');
                 wrapA.eq(suEq).addClass('active');*/
            }
            //element.on('mousemove', functionToBeCalled);
            element.on('click', functionToBeCalled);
        }
    };

}
export {

    fullCarousel
};




/*$('.slides').mousemove(function(e){
                        var x = e.clientX - this.offsetLeft,
                            w = document.body.offsetWidth,
                            per = ((x*100)/w),
                            slidesSize = $('.slideItem').size(),
                            cpos = $('.container').offset().left - $(window).scrollLeft(),
                            slideWidth = $('.slideItem').width(),
                            average = ((slidesSize*slideWidth) + (cpos - 20)) - w;

                       TweenMax.to( $(window), 4, {scrollTo:{x:(per*average)/100}, ease:Power3.easeOut});

        });*/
