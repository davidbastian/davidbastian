function pageAnimation() {
        return {
            enter: function(element, done) {
                TweenMax.from(element, 1, {
                    opacity: 0,
                    x: 50,
                    onComplete: done
                })
            },
            leave: function(element, done) {
                TweenMax.to(element, 1, {
                    opacity: 0,
                    x: 50,
                    onComplete: done
                })
            }
        }
}
export {pageAnimation};