import zepto from 'npm-zepto'

function singleMouse() {
    return {
        scope: true,
        link: function(scope, element, attrs) {

            function functionToBeCalled(e) {
                var pos = e.clientX,
                    percent = (pos * 110) / $(window).width(),
                    move = (52 - (110 - percent)),
                    hola = ((move * 11) / 520);

                console.log(hola * 110);

                TweenMax.set($('.next'), {
                        x: (110 - (hola * 110)) + '%',
                    })



                $('.media-container').css(
                    '-webkit-filter', 'grayscale(' + (hola * 110) + '%)'
                )

                if ((percent >= '58') && (percent <= '110')) {

                    TweenMax.set($('.description, .media-container'), {
                        x: -move + '%',
                    })

                } else if (percent < '58') {
                    TweenMax.set($('.description, .media-container'), {
                        x: 0 + '%',
                    })

                }



            }


            element.on('mousemove', functionToBeCalled);

        }
    };

}
export {

    singleMouse
};
