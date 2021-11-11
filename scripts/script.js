$(".e-list").slideUp(function() {
    $(".e-button").removeClass("open");
});
console.log("Hello")
$(".e-button").on("click", function() {
    if ($(this).hasClass("open")) {
        $(".e-list").slideUp(function() {
            $(".e-button").removeClass("open");
        });
    } else {
        $(this).addClass("open");
        setTimeout(function() {
            $(".e-list").stop().slideDown();
        }, 200);
    }
});