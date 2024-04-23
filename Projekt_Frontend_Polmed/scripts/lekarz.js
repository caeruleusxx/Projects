$(function() {
    const query = window.location.search;
    const urlParams = new URLSearchParams(query);
    var lekarz = urlParams.get('lekarz');
    var date = urlParams.get('date');
    var cel = urlParams.get('cel');

    const dane = {"Piotr Nowak":          ["images/lekarz1.jpg", 
                                            '<span class="icon-user green"></span> Email: piotr.nowak@test.com <br />\
                                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspTelefon: wyświetl numer <br />\
                                            <span class="icon-location green"></span> Podgórska 36, 31-536 Kraków <br />',
                                            "200zł"],
                  "Katarzyna Kowalska":   ["images/lekarz2.jpg", 
                                            '<span class="icon-user green"></span> Email: kat.kowalska@interia.pl <br />\
                                            <span class="icon-location green"></span> Józefa Marcika 12,  30-167 Kraków <br />',
                                            "170zł"],
                  "Aneta Wiśniewska":         ["images/lekarz3.jpg", 
                                            '<span class="icon-user green"></span> Email: aneta.wisnia@gmail.com <br />\
                                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspTelefon: wyświetl numer <br />\
                                            <span class="icon-location green"></span> Przykładowa 12, 17-198 Kraków <br />',
                                            "250zł"],
                  "Adam Janicki":         ["images/lekarz4.jpg", 
                                            '<span class="icon-user green"></span> Email: ajanicki@test.com <br />\
                                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspTelefon: wyświetl numer <br />\
                                            <span class="icon-location green"></span> Podgórska 36, 31-536 Kraków <br />',
                                            "220zł"]
                                        };

    $("#zdjecie").attr("src", dane[lekarz][0])
    $(".media-info").html(dane[lekarz][1])
    $(".doc-name").html(lekarz)
    $(".termin-info").append(date)
    $(".cel-w-info").html(cel)
    $(".lekarz-name").append(lekarz)
    $(".cena-info").html(dane[lekarz][2])
});