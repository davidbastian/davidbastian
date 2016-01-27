import zepto from 'npm-zepto'



function fullCarousel() {
    return {
        scope: true,
        link: function(scope, element, attrs) {

            function functionToBeCalled(e) {
               // console.log(e)
                if (!$('.wrap-a').last().hasClass('active')) {
                    $('.wrap-a.active').removeClass('active').next().addClass('active');
                } else {
                    $('.wrap-a.active').removeClass('active');
                    $('.wrap-a').first().addClass('active');

                }
            }
            element.on('click', functionToBeCalled);
        }
    };

}
export {

    fullCarousel
};
