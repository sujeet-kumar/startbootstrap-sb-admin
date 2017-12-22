$(function () {
    /* set active nav link */
    var setActiveNav = function (url) {
        $('ul.nav a').filter(function () {
            
            return (this.href == url || this.href.indexOf(url.href) == 0);
            
        }).addClass('active').parent().addClass('active').parent().addClass('in').parent('li').addClass('active');
    };
    setActiveNav(window.location);
    
    /* optimize style on load and resize */
    $(window).bind('load resize', function () {
        var top_offset = parseInt($('body').css('margin-top')) || 42;
        var offset = top_offset + parseInt($('#page-footer').outerHeight());
        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - offset;
        if (height < 1) {
            height = 1;
        }
        if (height > offset) {
            $('#page-wrapper').css('min-height', (height) + 'px');
        }
        
        /*var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').removeClass('in');
        }*/
    });
});
