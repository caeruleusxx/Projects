$(document).ready(function () {
    $("#wszyscy").addClass('selected');
    $("#wszyscy").click(function () {
        $(".lekarz_rodzinny").show();
        $(".lekarz_pediatra").show();
        $("#wszyscy").addClass('selected');
        $("#pediatrzy").removeClass('selected');
        $("#rodzinni").removeClass('selected');
    });
    $("#pediatrzy").click(function (){
        $(".lekarz_rodzinny").hide();
        $(".lekarz_pediatra").show();
        $("#wszyscy").removeClass('selected');
        $("#pediatrzy").addClass('selected');
        $("#rodzinni").removeClass('selected');
    });
    $("#rodzinni").click(function (){
        $(".lekarz_rodzinny").show();
        $(".lekarz_pediatra").hide();
        $("#wszyscy").removeClass('selected');
        $("#pediatrzy").removeClass('selected');
        $("#rodzinni").addClass('selected');
    });
});