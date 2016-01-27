import zepto from 'npm-zepto'

function pageLink() {
    return {
        scope: true,
        link: function(scope, element, attrs) {

            function functionToBeCalled(e) {
                //console.log(e);
                   $(this).find('a').click();



            }
            element.one('click', functionToBeCalled);


        }
    };

}
export {

    pageLink
};