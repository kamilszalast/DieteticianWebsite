function obliczBMI() {
    var masa = parseFloat(document.getElementById('waga').value);
    var wzrost = parseFloat(document.getElementById('wzrost').value) / 100;
    var bmi = document.getElementById('bmi');
    var komunikat = document.querySelector('#komunikatOtylosci');

    if (masa >= 20 && wzrost >= 1.20 && wzrost <= 2.72 && masa <= 600) {
        bmi.value = (masa / Math.pow(wzrost, 2)).toFixed(2);

        if (bmi.value < 16) {
            komunikat.innerHTML = "Kwalifikujesz się jako osoba wygłodniała, zgłoś się do nas jak najszybciej";
            komunikat.style.color = "red";
        } else if (bmi.value < 17) {
            komunikat.innerHTML = "Kwalifikujesz się jako osoba wychudzona, zgłoś się do nas już jutro";
            komunikat.style.color = "orange";
        } else if (bmi.value < 18.5) {
            komunikat.innerHTML = "Masz niedowagę, nie jest źle, ale musisz pomyśleć nad dietą";
            komunikat.style.color = "#ebcc12";
        } else if (bmi.value < 25) {
            komunikat.innerHTML = "Gratulacje, masz prawidłowe BMI";
            komunikat.style.color = "green";
        } else if (bmi.value < 30) {
            komunikat.innerHTML = "Niestety, masz nadwagę, ale z pewnością coś zaradzimy";
            komunikat.style.color = "#ebcc12";
        } else if (bmi.value < 35) {
            komunikat.innerHTML = "Masz pierwszy stopień otyłości";
            komunikat.style.color = "orange";
        } else if (bmi.value < 40) {
            komunikat.innerHTML = "Masz drugi stopień otyłości";
            komunikat.style.color = "red";
        } else {
            komunikat.innerHTML = "Masz skrajną otyłość, zadzwoń do nas jak najszybciej!";
            komunikat.style.color = "red";
        }

    } else {
        alert("Wprowadzone dane są niepoprawne.\nWprowadź wagę min. 20 kg, max. 600 kg\noraz wzrost min. 120 cm, max. 272 cm");
    }
}