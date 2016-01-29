import zepto from 'npm-zepto'

function fullMouse() {
    return {
        scope: true,
        link: function(scope, element, attrs) {

            function functionToBeCalled(e) {
                var pos = e.clientX,
                    win = $(window).width() / 2;
                // console.log(pos);

                if (pos < win) {
                    // console.log('left');
                    $('.wrap-full').css('cursor', 'url(media/l.png),auto');
                } else {
                    $('.wrap-full').css('cursor', 'url(media/r.png),auto');

                }

            }


            element.on('mousemove', functionToBeCalled);

        }
    };

}
export {

    fullMouse
};
