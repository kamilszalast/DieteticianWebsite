function dodajPacjenta() {
    //utworzenie obiektu z polami dane email itd
    var pacjent = {};
    pacjent.dane = document.getElementById('name').value;
    pacjent.email = document.getElementById('email').value;
    pacjent.telefon = document.getElementById('tel').value;
    pacjent.masa = document.getElementById('masaCiala').value;
    pacjent.wzrost = document.getElementById('wzrostCiala').value;

    //tworzymy obiekt z łańcucha w formacie JSON
    var lista = JSON.parse(localStorage.getItem('lista'));
    if (lista === null) {
        lista = [];
    }
    //dodajemy pacjenta do listy
    lista.push(pacjent);
    // dodajemy liste z kluczem lista i wartością łańcucha JSON do localStorage
    localStorage.setItem('lista', JSON.stringify(lista));
}

function pokazListe() {
    //obiekt lista utworzony z łańcucha JSON
    var lista = JSON.parse(localStorage.getItem('lista'));
    // tworzymy obiekt z elementu o id = lista
    var el = document.getElementById('list');
    // element wyświetlający się dopiero po ukazaniu listy
    var listaWyswietlana = "<h2 class='font-weight-bold'>Lista pacjentów</h2>";

    if (lista === null || lista.length < 1) {
        el.innerHTML = listaWyswietlana + "<p>Niestety nie mamy żadnych pacjentów.</p>";
    } else {
        listaWyswietlana += "<table class='table'><thead><tr> <th scope='col'>Nr</th><th scope='col'>Imie i nazwisko</th><th id='inputMasa' scope='col'>Masa [kg]</th><th scope='col'>Wzrost [cm]</th> </tr></thead>";
        for (i = 0; i < lista.length; i++) {
            listaWyswietlana += "<tbody><tr><th scope='row'>" + (i + 1) + "</th><td>" + lista[i].dane + "</td><td>" + lista[i].masa + "</td><td>" + lista[i].wzrost + "</td><td><button id='usuwaniePrzycisk'class='btn btn-secondary' onclick='usunPacjenta(" + i + ")'>Usuń</button><br></td></tr></tbody>";
        }
        el.innerHTML = listaWyswietlana;
    }
}

function usunListe() {
    //usuwamy całą listę z localStorage
    localStorage.removeItem('lista');
    //aktualizacja widoku listy
    pokazListe();
}

function usunPacjenta(i) {
    // tworzymy obiekt z łańcucha JSON
    var lista = JSON.parse(localStorage.getItem('lista'));
    if (confirm("Usunąć pacjenta?")) {
        //usuwamy z tablicy lista jeden element spod indeksu i
        lista.splice(i, 1);
    }
    // zapisujemy w localstorage naszą liste w formacie łańcucha JSON
    localStorage.setItem('lista', JSON.stringify(lista));
    pokazListe();
}