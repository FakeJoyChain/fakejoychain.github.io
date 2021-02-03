import("./jquery-3.5.1.min.js");

$("#stop-start").on("click", function () {
    dom = $("#stop-start");
    if (dom.attr("class") == "layui-icon layui-icon-pause") {
        dom.attr("class", "layui-icon layui-icon-play");
        document.getElementById("bgmusic").pause();
    } else {
        dom.attr("class", "layui-icon layui-icon-pause");
        document.getElementById("bgmusic").play();
    }
})