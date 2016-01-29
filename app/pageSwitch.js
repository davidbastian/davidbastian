import zepto from 'npm-zepto'

function pageSwitch() {
    return {
        scope: true,
        link: function(scope, element, attrs) {

            function functionToBeCalled(e) {
                //console.log(e);
                  // $(this).find('a').click();

                  console.log('hola');
                  if ($(this).hasClass('active')) {

                            $(this).removeClass('active');

                            TweenMax.to($(this).find('.w'), .8, {
                                opacity: '0',
                                scale:'0.5',
                                ease: Power4.easeOut,
                            });

                  } else {
                            $(this).addClass('active');
                            TweenMax.to($(this).find('.w'), .8, {
                                opacity: '1',
                                scale:'1',
                                ease: Power4.easeOut,
                            });
                  }



            }
            element.on('click', functionToBeCalled);


        }
    };

}
export {

    pageSwitch
};