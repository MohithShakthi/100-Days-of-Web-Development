$("button").addClass("buttonColor");
$("h1").addClass("big-title");

$("button").click(function () {
    $("h1").css("color", "purple");
    setTimeout(() => {
        $("h1").css("color", "black");
    }, 500);
})

$(document).keydown(function (event) {
    $("h1").text(event.key);
});