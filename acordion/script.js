$(function() {

    $('dd[id!="acc1"]').css("width", "0px");

    $("a").click(function() {
        if(!$(this).hasClass("currentBtn")) {

            $(".current").animate({ "width": "0px"}, 300);

            $($(this).attr("href")).animate({ "width": "800px" }, 300);

            $("dd").removeClass("current");

            $($(this).attr("href")).addClass("current");

            $("a").removeClass("currentBtn");

            $(this).addClass("currentBtn");
        }

        return false;
    });
});