import zepto from 'npm-zepto'

function fullCarousel() {
    return {
        scope: true,
        link: function(scope, element, attrs) {

            function functionToBeCalled(e) {
               // console.log(e)
               /* if (!$('.wrap-a').last().hasClass('active')) {
                    $('.wrap-a.active').removeClass('active').next().addClass('active');
                } else {
                    $('.wrap-a.active').removeClass('active');
                    $('.wrap-a').first().addClass('active');

                }*/
                 /*var x = e.clientX - this.offsetLeft,
                     w = document.body.offsetWidth,*/
                  //console.log(e.clientX)
                  var toSu = (($('.wrap-a').size()*100)/10),
                      suSize =  $(window).width()/ $('.wrap-a').size(),
                      suEq = (Math.floor(((e.clientX*toSu)/$(window).width())/10));

                 $('.wrap-a').removeClass('active');
                 $('.wrap-a').eq(suEq).addClass('active');



            }
            element.on('mousemove', functionToBeCalled);
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
