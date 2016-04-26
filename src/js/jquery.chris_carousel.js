;
(function($, window, document, undefined) {
    "use strict";
    var pluginName = "chrisCarousel",
        defaults = {
            rotationSpeed: 1000,
            screenTime: 1000
        };

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend(defaults, {}, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    $.extend(Plugin.prototype, {
        init: function () {
            this.myCarousel();
        },

        myCarousel: function () {
            var y, t;
            y = $(window).width();
            t = setInterval(function () {
                $("#my_carousel ul").animate({marginLeft: - y }, defaults.rotationSpeed, function () {
                    $(this).find(".picture_slide:last").after($(this).find(".picture_slide:first"));
                    $(this).css({marginLeft: 0});
                })
            }, defaults.screenTime);
            $(".picture_slide").css("width", y);
            $(".slider").css("width", y * 3);       
        }
    } );

    $.fn[ pluginName ] = function( options ) {
        return this.each( function() {
            if ( !$.data( this, "plugin_" + pluginName ) ) {
                $.data( this, "plugin_" +
                    pluginName, new Plugin( this, options ) );
            }
        } );
    };

} )( jQuery, window, document );
