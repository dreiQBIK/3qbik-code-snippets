/******************************************************************
COUNT-NUMBERS.JS

    @DESCRIPTION
        function to use together with 'ScrollReveal' library
        (https://scrollrevealjs.org/) to animate numbers when
        scrolling into view.

    @USAGE
        replace 'var $scrollRevealElements = $('.elements');'
        with your own class/element.
******************************************************************/


var numbersCounted = false;

function countNumbers() {

    // make sure numbers have not already been animated
    if (numbersCounted === false) {

        // define elements/numbers to animate
        var $scrollRevealElements = $('.elements');

        // loop through each element
        $scrollRevealElements.each(function () {
            var $this = $(this);
            var numbersToCount = $this.text();
            var multiplier;

            // set multiplier for smoother animations of smaller numbers (steps from 1 to 1000)
            if (numbersToCount < 100)  {
                multiplier = 1;
            } else if (numbersToCount > 100 && numbersToCount < 1000)  {
                multiplier = 10;
            } else if (numbersToCount > 1000 && numbersToCount < 10000) {
                multiplier = 100;
            } else {
                multiplier = 1000;
            }

            // animate numbers
            $this.prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 1500,
                easing: 'swing',
                step: function (now) {
                    $(this).text(formatNumber(Math.ceil(Math.round(now / multiplier) * multiplier)));
                }
            });
        });
        numbersCounted = true;
    }
}

// reduce amount of decimal places
function formatNumber (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
}