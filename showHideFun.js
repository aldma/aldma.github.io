function showHideFun(id) {
    var x = document.getElementById(id);
    if (x.style.display != "block") {
    x.style.display = "block";
    } else {
    x.style.display = "none";
    }
}
$(document).ready(function()
{
$(".nopropagate").click(function (event)
{
event.stopPropagation();
});
});