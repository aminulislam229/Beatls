$(function () {
    $(window).scrol (function(){
        let myscren = $(this).scrollTop();
        if (myscren > 300) {
            $(".navbar").addclass(".bg_scroll");
        } else {
            $(".navbar").removelass(".bg_scroll");
        }
    });
});
