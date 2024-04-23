$(function() {
    const query = window.location.search;
    const urlParams = new URLSearchParams(query);
    var date = urlParams.get('date');
    var lekarz = urlParams.get('lekarz');

    if(date) { $("#godzina").val(date); }
});