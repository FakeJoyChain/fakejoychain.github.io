import("./jquery-3.5.1.min.js");
import("../css/layui.all.js");
import("../css/layui.js")

var layer = layui.layer;

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

$("#top").on("click", function () {
    window.scrollTo(0, 0);
})

$("#top").mouseenter(function () {
    layer.tips("点击我快速回到顶部", $(this));
})

$("#player").mouseenter(function () {
    layer.tips("听听音乐吧", $(this));
})