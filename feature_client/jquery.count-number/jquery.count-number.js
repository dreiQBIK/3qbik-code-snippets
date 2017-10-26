/******************************************************************
JQUERY.COUNT-NUMBERS.JS

    > PLUGIN_DEFAULTS
    > PLUGIN_CONSTRUCTOR
    > PLUGIN_METHODS
    > PLUGIN_PROTOTYPE
    > PLUGIN_WRAPPER

    @DESCRIPTION
        function to to animate numbers.

    @USAGE
        call it on an element that contains a number, e.g.
        $number.countNumber({
            duration: 2000,
            multiplierSteps: 100
        });
******************************************************************/

;
(function ($, window, document, undefined) {
    "use strict";


    /******************************************************************
        PLUGIN_DEFAULTS
    ******************************************************************/
    var pluginName = "countNumber",
        defaults = {
            // time the whole animation takes
            duration: 1000,
            // steps, in which the animation counts
            multiplierSteps: 10
        };


    /******************************************************************
        PLUGIN_CONSTRUCTOR
    ******************************************************************/
    function Plugin(element, options) {
        this.$element = $(element);
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;

        this.number;

        this.init();
    }


    /******************************************************************
        PLUGIN_METHODS
    ******************************************************************/
    var methods = {

        // init function
        init: function () {
            var self = this;

            // get text/number of element
            self.number = self.getText();

            // animate number
            self.animateNumber(self.number);
        },

        // get text of element
        getText: function () {
            var self = this;
            return self.$element.text();
        },

        // animate the given number
        animateNumber: function (number) {
            var self = this;
            var multiplier = self.settings.multiplierSteps;
            var durationTime = self.settings.duration;

            // animate numbers
            self.$element.prop('Counter', 0).animate({
                Counter: self.$element.text()
            }, {
                duration: durationTime,
                easing: 'swing',
                step: function (now) {
                    self.$element.text(Math.ceil(Math.round(now / multiplier) * multiplier));
                }
            });
        }
    }


    /******************************************************************
        PLUGIN_PROTOTYPE

        Avoid Plugin.prototype conflicts
    ******************************************************************/
    $.extend(Plugin.prototype, methods);


    /******************************************************************
        PLUGIN_WRAPPER

        A really lightweight plugin wrapper around the constructor,
        preventing against multiple instantiations
    ******************************************************************/
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" +
                    pluginName, new Plugin(this, options));
            }
        });
    };

})(jQuery, window, document);