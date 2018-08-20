var isTouch = window.DocumentTouch && document instanceof DocumentTouch;

jQuery(document).ready(function($){

    var header             = $('#header');
    var threshold = header.offset().top;

    function scrollHeader() {
        if( window.pageYOffset > threshold )
            header.addClass('scrolled');

        if( window.pageYOffset < threshold )
            header.removeClass('scrolled');
    }

    // ON SCROLL EVENTS
    if (!isTouch){
        $(document).scroll(function() {
            scrollHeader();
        });
    };

    // Also set 'scrolled' when clicking a menu item.
    $(document).on('click', 'ul.navigation > li > a', function() {
        header.addClass('scrolled');
    });

    // Or when clicking on the main icon.
    $(document).on('click', '.overlay-button', function() {
        header.addClass('scrolled');
    });

    // TOUCH SCROLL
    $(document).on({
        'touchmove': function(e) {
            scrollHeader(); // Replace this with your code.
        }
    });

    //Smooth scroll to top
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });
    // Responsive Menu

});


