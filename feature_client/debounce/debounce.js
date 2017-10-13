/******************************************************************
DEBOUNCE.JS

    @DESCRIPTION
        function to use e.g. on scroll or on resize to trigger less
        events at once.

    @USAGE
        $(window).on('scroll', debounce(myFunction, 250));
******************************************************************/


function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}