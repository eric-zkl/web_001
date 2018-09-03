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

//设置点击事件
var sci_video = document.getElementById("sci_video");

var flag;//定义一个标记位
//    设置图片出现的事件
function showImage(img_name,index) {
    if(flag){
        flag.style.transform="scale(0)";
    }
    var sci_page02_img = document.getElementById("sci_page02_img"+index);
    flag=sci_page02_img;

    sci_video.style.display = "none";
    sci_page02_img.style.backgroundImage = "url(../img/"+img_name+")";
    sci_page02_img.style.transform = "scale(1)";
}
function playPause() {
    if (sci_video.play()) {
        sci_video.pause();
    } else {
        sci_video.play();
    }
}

function showVideo(){
   $(".sci_page02_img").css({backgroundImage:"none"});
    $(".sci_page02_img").css({transform:"scale(0)"});
    $("#sci_video").css({display:"block"});
}

