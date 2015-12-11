(function ( $ ) {

    $.fn.openSub = function( options ) {

        // This is the easiest way to have default options.
        var o = $.extend({
            clickClass: 'clicked',
            hoverClass: 'hovered',
            animationSpeed: 'slow',
            disableHoverOnBreakpoint: true,
            breakpoint: 800,
        }, options );
        var $this = this;

        this.children('a').click(function() {
            $(this).toggleClass(o.clickClass);
            var child = $(this).next('ul');
            if ($(this).hasClass(o.clickClass)) {
                child.slideDown(o.animationSpeed);
            } else {
                child.slideUp(o.animationSpeed);
            }
        });

        if(o.disableHoverOnBreakpoint == true){
            if ($(window).width() >= o.breakpoint){
                this.mouseenter(function() {
                    var child = $(this).find('> ul');
                    $(this).addClass(o.hoverClass);
                    if ($(this).hasClass(o.hoverClass)) {
                        child.slideDown(o.animationSpeed);
                    }
                });

                this.mouseleave(function() {
                    var child = $(this).find('> ul');
                    $(this).removeClass(o.hoverClass);
                    if (!$(this).hasClass(o.hoverClass) && !$(this).hasClass(o.clickClass)) {
                        child.slideUp(o.animationSpeed);
                    }
                });
            }
        } else {
            this.mouseenter(function() {
                var child = $(this).find('> ul');
                $(this).addClass(o.hoverClass);
                if ($(this).hasClass(o.hoverClass)) {
                    child.slideDown(o.animationSpeed);
                }
            });

            this.mouseleave(function() {
                var child = $(this).find('> ul');
                $(this).removeClass(o.hoverClass);
                if (!$(this).hasClass(o.hoverClass) && !$(this).hasClass(o.clickClass)) {
                    child.slideUp(o.animationSpeed);
                }
            });
        }

        return this;
    };
}( jQuery ));
