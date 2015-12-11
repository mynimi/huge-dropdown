var menuSelector = 'section.menu div.mega-menu',
    bp = 900;

$(document).ready( function(){
    $('.menu-toggle, .toggle-close').click(function(){
        $('section.menu').toggleClass('open');
    });
});

$(window).on('resize',function() {
    $('.level-1 > li.parent').openSub({breakpoint: bp});
    $('.level-2 > li.parent').openSub({breakpoint: bp});
    $('.level-3 > li.parent').openSub({breakpoint: bp});

    if ($(window).width() < bp){
        if (!$('.toggle-bar').length && !$('.toggle-close').length){
            $('section.menu').before('<div class="toggle-bar"><span class="menu-toggle"><i class="fa fa-navicon"></i></span></div>');
            $('section.menu').prepend('<span class="toggle-close"><i class="fa fa-close"></i></span>');
        }
    } else {
        $('.toggle-bar').remove();
        $('.toggle-close').remove();
    }

    // wrapping every 13 elements in div

    $('.level-2').each(function(){
        var sub = $(this).children('li');
        if (sub.length > 13){
            var count = sub.length;
            for(var i = 0; i < count; i+=13){
                sub.slice(i, i+13).wrapAll("<div class='group' />");
            }
        }
    });

    $('.group').parent().addClass('group-parent');
    $('.group-parent').wrapInner('<div class="group-wrap" />');

}).trigger('resize');
