$(function () {
    $("button").click(function() {
        let target = $(this).attr("value");

        $("button").removeClass("current");

        $(this).addClass("current");

        $("#list li").each(function() {
            $(this).animate({ "opacity": 0 }, 300, function() {
                $(this).hide();

                if($(this).hasClass(target) || target == "all"){
                    $(this).show().animate({ "opacity": 1 }, 300);
                }
            });
        });
    });
});