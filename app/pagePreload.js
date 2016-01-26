import zepto from 'npm-zepto'
var count = 0;


function pagePreload($timeout) {
    return {
        link: function(scope, element, attr) {
            $timeout(function() {

            	var sizeItem = $('.item').size();
                console.log(element)
     
                function checkLoad() {
                    if (element[0].readyState === 4 || element[0].complete === true) {
                    	count = count + 1;

                    	var done = ((count*100)/sizeItem);

                        setTimeout(function() {
                        	console.log(done) // show the percent 
                        	if (done === 100) {
                        		console.log('yes') // ready 
                        		count = 0; // reset counter
                        	}
                           
                        }, 500)

                    } else {
                        setTimeout(checkLoad, 100);
                    }
                }

                checkLoad();

            })
        }
    }
}
export {
    pagePreload
};
