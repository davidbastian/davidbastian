function pageAnimation() {
    return {
        enter: function(element, done, attr) {

            var tag = element[0].children[0].id;
            if (tag === 'tagSingle') {

                $('.page-switch').css('display', 'none');

            } else if (tag === 'tagHome') {


            } else if (tag === 'tagFull') {


            } else if (tag === 'tagAbout') {
                $('.page-switch').css('display', 'none');
                TweenMax.to($('#about'), 1, {
                    opacity: 1,
                    ease: Power4.easeOut,
                    onComplete: done
                });

            }
        },

        leave: function(element, done, attr) {

            var tag = element[0].children[0].id;

            if (tag === 'tagSingle') {

                TweenMax.to($('#single .appear'), 1, {
                    opacity: 0,
                    y: '20vh',
                    ease: Power4.easeOut,
                    onComplete: done
                });

            } else if (tag === 'tagHome') {
                $('.page-switch').css('display', 'none');
                TweenMax.to($('#home .appear'), 1, {
                    opacity: 0,
                    // y: '20vh',
                    ease: Power4.easeOut,
                    onComplete: done
                });

            } else if (tag === 'tagAbout') {

                TweenMax.to($('#about'), 1, {
                    opacity: 0,
                    // y: '20vh',
                    ease: Power4.easeOut,
                    onComplete: done
                });

            } else if (tag === 'tagFull') {
                $('.page-switch').css('display', 'none');

                TweenMax.to($('#full .appear'), 1.6, {
                    opacity: 0,
                    scale: '0.95',
                    ease: Power4.easeOut,
                    onComplete: done
                });

            }


        }
    }
}
export {
    pageAnimation
};
