import zepto from 'npm-zepto'





function aboutSplit($timeout) {
    return {
        link: function(scope, element, attr) {
            $timeout(function() {

              
               
                $('#about h2').each(function() {

                    var $el = $(this).find('span'),
                        txt = $el.text(),
                        txtLen = txt.length,
                        timeOut,
                        char = 0;

                    $el.text('.');

                    function typeIt() {

                        var humanize = Math.round(Math.random() * (60 - 20)) + 20;
                        timeOut = setTimeout(function() {
                            char++;
                            var type = txt.substring(0, char);
                            // console.log(type);
                            $el.text(type);
                            typeIt();

                            if (char == txtLen) {
                                $el.text($el.text().slice(0, -1)); // remove the '|'
                                clearTimeout(timeOut);
                            }

                        }, humanize);
                    }

                    typeIt();


                })





            })

        }
    };

}
export {

    aboutSplit
};
