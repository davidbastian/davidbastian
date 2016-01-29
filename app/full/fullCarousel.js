import zepto from 'npm-zepto'

function fullCarousel() {
    return {
        scope: true,
        link: function(scope, element, attrs) {

            function functionToBeCalled(e) {
                // console.log(e)
                /*if (!$('.wrap-a').last().hasClass('active')) {
                    $('.wrap-a.active').removeClass('active').next().addClass('active');
                } else {
                    $('.wrap-a.active').removeClass('active');
                    $('.wrap-a').first().addClass('active');
                }*/


                var pos = e.clientX,
                    win = $(window).width() / 2;

                   

                //console.log(pos,win);
                if (pos < win) {
                    //console.log('right');
                     $('.next').css('display', 'none');
                    if (!$('.wrap-a').first().hasClass('active')) {

                        TweenMax.set($('.wrap-a.active'), {
                            left: '0vw'
                        });
                        TweenMax.set($('.wrap-a.active').next(), {
                            left: '100vw'
                        });
                        TweenMax.set($('.wrap-a.active').prev(), {
                            left: '-100vw'
                        });

                        TweenMax.to($('.wrap-a.active'), .8, {
                            left: '100vw',
                            ease: Power4.easeOut,
                            onComplete: function() {
                                $('.wrap-a.active').removeClass('active').prev().addClass('active');
                                $('.next').css('display', 'block');
                            }
                        });
                        TweenMax.to($('.wrap-a.active').prev(), .8, {
                            left: '0vw',
                            ease: Power4.easeOut,
                        });

                    } else {
                        TweenMax.set($('.wrap-a').last(), {
                            left: '-100vw'
                        });

                        TweenMax.to($('.wrap-a').last(), .8, {
                            left: '0vw',
                            ease: Power4.easeOut,
                        });

                        TweenMax.to($('.wrap-a').first(), .8, {
                            left: '100vw',
                            ease: Power4.easeOut,

                            onComplete: function() {
                                $('.wrap-a.active').removeClass('active');
                                $('.wrap-a').last().addClass('active');
                                $('.next').css('display', 'block');
                            }
                        });
                        /*$('.wrap-a.active').removeClass('active');
                        $('.wrap-a').first().addClass('active');*/
                    }

                } else {
                    //console.log('left');
                         $('.next').css('display', 'none');
                    if (!$('.wrap-a').last().hasClass('active')) {

                        TweenMax.set($('.wrap-a.active'), {
                            left: '0vw'
                        });
                        TweenMax.set($('.wrap-a.active').next(), {
                            left: '100vw'
                        });
                        TweenMax.set($('.wrap-a.active').prev(), {
                            left: '-100vw'
                        });

                        TweenMax.to($('.wrap-a.active'), .8, {
                            left: '-100vw',
                            ease: Power4.easeOut,
                            onComplete: function() {
                                $('.wrap-a.active').removeClass('active').next().addClass('active');
                                $('.next').css('display', 'block');
                            }
                        });
                        TweenMax.to($('.wrap-a.active').next(), .8, {
                            left: '0vw',
                            ease: Power4.easeOut,
                        });

                    } else {
                        TweenMax.set($('.wrap-a').first(), {
                            left: '100vw'
                        });

                        TweenMax.to($('.wrap-a').first(), .8, {
                            left: '0vw',
                            ease: Power4.easeOut,
                        });

                        TweenMax.to($('.wrap-a').last(), .8, {
                            left: '-100vw',
                            ease: Power4.easeOut,

                            onComplete: function() {
                                $('.wrap-a.active').removeClass('active');
                                $('.wrap-a').first().addClass('active');
                                $('.next').css('display', 'block');
                            }
                        });
                        /*$('.wrap-a.active').removeClass('active');
                        $('.wrap-a').first().addClass('active');*/
                    }

                }


              


                /*var x = e.clientX - this.offsetLeft,
                    w = document.body.offsetWidth,*/
                //console.log(e.clientX)
                /*var toSu = (($('.wrap-a').size()*100)/10),
                      suSize =  $(window).width()/ $('.wrap-a').size(),
                      suEq = (Math.floor(((e.clientX*toSu)/$(window).width())/10));

                 $('.wrap-a').removeClass('active');
                 $('.wrap-a').eq(suEq).addClass('active');*/
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
