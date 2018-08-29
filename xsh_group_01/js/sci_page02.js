var angleStart = -360;

// jquery rotate animation
function rotate(li,d) {
    $({d:angleStart}).animate({d:d}, {
        step: function(now) {
            $(li)
               .css({ transform: 'rotate('+now+'deg)' })
               .find('label')
                  .css({ transform: 'rotate('+(-now)+'deg)' });
        }, duration: 0
    });
}

// show / hide the options
function toggleOptions(s) {
    //alert(123);
    $(s).toggleClass('open');
    var li = $(s).find('li');
    var deg = 360/li.length;
    for(var i=0; i<li.length; i++) {
        var d = i*deg;
        $(s).hasClass('open') ? rotate(li[i],d) : rotate(li[i],angleStart);
    }
}

$('.sci_selector button').click(function(e) {

    toggleOptions($(this).parent());
});

setTimeout(function() { toggleOptions('.sci_selector'); }, 100);