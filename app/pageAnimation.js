function pageAnimation() {
    return {
        enter: function(element, done, attr) {

            var tag = element[0].children[0].id;
            if (tag === 'tagSingle') {

                TweenMax.to($('#single .white'), 1, {
                    autoAlpha: 1,
                    ease: Power4.easeOut,
                    onComplete: done
                });
                TweenMax.to($('#single .white h1'), 0.6, {
                    y: '0vh',
                    opacity: 1,
                    ease: Power4.easeOut
                });

            } else if (tag === 'tagHome') {

                TweenMax.to($('#home .white'), 1, {
                    autoAlpha: 1,
                    ease: Power4.easeOut,
                    onComplete: done
                });
                TweenMax.to($('#home .white h1'), 0.6, {
                    y: '0vh',
                    opacity: 1,
                    ease: Power4.easeOut
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

                TweenMax.to($('#home .appear'), 1, {
                    opacity: 0,
                    y: '-20vh',
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
