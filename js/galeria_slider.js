var licznik = 1;
pokazZdjecie(licznik, "zdjecieSlajd");
pokazZdjecie(licznik, "zdjecieSlajdDeser");

function przelaczZdjecieDeser(n) {
    licznik += n;
    pokazZdjecie(licznik, "zdjecieSlajdDeser");
}

function przelaczZdjecie(n) {
    licznik += n;
    pokazZdjecie(licznik, "zdjecieSlajd");
}

function pokazZdjecie(n, rodzajDania) {
    var i;
    var zdjecia = document.getElementsByClassName(rodzajDania);
    if (n > zdjecia.length) {
        licznik = 1
    }
    if (n < 1) {
        licznik = zdjecia.length;
    }
    for (i = 0; i < zdjecia.length; i++) {
        zdjecia[i].style.display = "none";
    }
    zdjecia[licznik - 1].style.display = "block";
}