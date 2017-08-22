/******************************************************************
CALC_EQUAL_HEIGHT.JS

    > VARS
    > SETTINGS
    > FUNTIONS

    @DESCRIPTION
        function to set equal height on bootstrap row elements

    @USAGE
        adjust breakpoints (961, 481) and apply classes
        (e.g. '.h-equal-01') to your elements
******************************************************************/


/******************************************************************
    VARS
******************************************************************/

// get variables for setting js breakpoints equal to css breakpoints
var $breakpointJS     = $('#h-breakpoint-js');
var breakpointJSWidth = $breakpointJS.width();
var $container        = $('.container');
var $window           = $(window);


/******************************************************************
    SETTINGS
******************************************************************/

// set js breakpoints equal to css breakpoints
$window.resize(function() {
    breakpointJSWidth = $breakpointJS.width();
});

// set card height on document.ready for fast results
if(!$container.hasClass('h-container--dom-rdy')) {
    equalHeight('.h-equal-01', 961);
    equalHeight('.h-equal-02', 481);

// BUGFIX: set height after fully loading the DOM including images
} else {
    $window.load(function() {
        equalHeight('.h-equal-01', 961);
        equalHeight('.h-equal-02', 481);
    });
}

// set card height on resize
$window.resize(function() {
    equalHeight('.h-equal-01', 961);
    equalHeight('.h-equal-02', 481);
});


/******************************************************************
    FUNCTIONS
******************************************************************/

function equalHeight(
    equalHeightItem,                // set itemGroup-class for equalHeight     ['.class']
    breakpoinCSStWidth              // set breakpoint for using equalHeight    [INT]
) {

    // BUGFIX: avoid overflowing Content on resize
    $(equalHeightItem).css('height', 'auto');

    if (breakpointJSWidth >= breakpoinCSStWidth) {
        // Cache the highest
        var highestBox = 0;

        // Select and loop the elements you want to equalise
        $(equalHeightItem).each(function(){

            // If this box is higher than the cached highest then store it
            if($(this).height() > highestBox) {
                highestBox = $(this).height();
            }
        });
        // Set the height of all those children to which was highest
        $(equalHeightItem).height(highestBox);

    }
}