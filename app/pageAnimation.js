function pageAnimation() {
        return {
            /*enter: function(element, done) {
                TweenMax.from(element, .5, {
                    opacity: 0,
                   // y: 50,
                    onComplete: done
                })
            },*/
            leave: function(element, done) {
                TweenMax.to(element, .5, {
                    opacity: 0,
                    //y: -50,
                    onComplete: done
                })
            }
        }
}
export {pageAnimation};