import zepto from 'npm-zepto'
//import {toRight} from './toRight.js'
//import {toLeft} from './toLeft.js'


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
                    win = $(window).width() / 2;
                   
                //console.log(pos,win);
                if (pos < win) {
                      //  toLeft();
                } else {
                    //console.log('left');
                       // toRight();

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
