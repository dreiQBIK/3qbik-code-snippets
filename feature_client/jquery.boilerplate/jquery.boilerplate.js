/******************************************************************
JQUERY.BOILERPLATE.JS

    > PLUGIN_DEFAULTS
    > PLUGIN_CONSTRUCTOR
    > PLUGIN_METHODS
    > PLUGIN_PROTOTYPE
    > PLUGIN_WRAPPER

    @DESCRIPTION
        jquery plugin boilerplate.

    @USAGE
        use this boilerplate as a starting point of a jquery plugin.
        Advantages of writing a jquery plugin:
        - it is reusable in other projects
        - you can pass options to it and call it on multiple elements
        - it prevents function conflicts
        - jquery plugin functions are chainable
        - you can define private and public functions.
******************************************************************/

;( function( $, window, document, undefined ) {
    "use strict";


    /******************************************************************
        PLUGIN_DEFAULTS
    ******************************************************************/
        var pluginName = "jQueryPlugin",
            defaults = {
                customPropertyName: "value"
            };


    /******************************************************************
        PLUGIN_CONSTRUCTOR
    ******************************************************************/
        function Plugin ( element, options ) {
            this.$element = $(element);
            this.settings = $.extend( {}, defaults, options );
            this._defaults = defaults;
            this._name = pluginName;

            this.init();
        }


    /******************************************************************
        PLUGIN_METHODS
    ******************************************************************/
        var methods = {

            // init function
            init: function() {
                var self = this;

                // example call of your custom function
                self.yourCustomFunction( "jQuery Boilerplate" );
            },

            // your custom function
            yourCustomFunction: function( text ) {
                var self = this;

                // your custom logic
                $( self.$element ).text( text );
            }
        }


    /******************************************************************
        PLUGIN_PROTOTYPE

        Avoid Plugin.prototype conflicts
    ******************************************************************/
        $.extend( Plugin.prototype, methods );


    /******************************************************************
        PLUGIN_WRAPPER

        A really lightweight plugin wrapper around the constructor,
        preventing against multiple instantiations
    ******************************************************************/
        $.fn[ pluginName ] = function( options ) {
            return this.each( function() {
                if ( !$.data( this, "plugin_" + pluginName ) ) {
                    $.data( this, "plugin_" +
                        pluginName, new Plugin( this, options ) );
                }
            } );
        };

} )( jQuery, window, document );