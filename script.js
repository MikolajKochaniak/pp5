function zapiszDane() {
    const daneFormularza = {
        nazwaFirmy: document.getElementById('company').value,
        nip: document.getElementById('companyNIP').value,
        miasto: document.getElementById('City').value,
        ulica: document.getElementById('Street').value,
        numerDomu: document.getElementById('houseNumber').value,
        numerMieszkania: document.getElementById('flatNumber').value,
        kodPocztowy: document.getElementById('zipCode').value,
        uwagi: document.getElementById('exampleFormControlTextarea').value,
        branza: document.querySelector('.form-select').value,
        aktywny: document.getElementById('flexCheckDefault').checked
    };

    console.log(daneFormularza);
}