function zapiszDane(event) {
    event.preventDefault();
    let daneFormularza = {
        nazwaFirmy: document.getElementById('company').value,
        nip: document.getElementById('companyNIP').value,
        miasto: document.getElementById('City').value,
        ulica: document.getElementById('Street').value,
        numerDomu: document.getElementById('houseNumber').value,
        numerMieszkania: document.getElementById('flatNumber').value,
        kodPocztowy: document.getElementById('zipCode').value,
        uwagi: document.getElementById('exampleFormControlTextarea').value,
        branza: document.querySelector('.last-element').value,
        aktywny: document.getElementById('flexCheckDefault').checked
    };
    customerList.push(daneFormularza);
    displayCustomerList();

    document.getElementById('customerForm').style.display ="none";
    document.getElementById('customerList').style.display ="block";
    console.log(daneFormularza);
    
}

function wstawDane() {
    // Wstaw przykładowe dane do formularza
    document.getElementById('company').value = 'Firma XYZ';
    document.getElementById('companyNIP').value = '1234567890';
    document.getElementById('City').value = 'Warszawa';
    document.getElementById('Street').value = 'Nowa';
    document.getElementById('houseNumber').value = '12';
    document.getElementById('flatNumber').value = '34';
    document.getElementById('zipCode').value = '00-001';
    document.getElementById('exampleFormControlTextarea').value = 'Brak uwag';
    document.querySelector('.last-element').value = '1'; // IT
    document.getElementById('flexCheckDefault').checked = true;

    // Zablokuj wszystkie pola formularza
    // document.getElementById('company').disabled = true;
    // document.getElementById('companyNIP').disabled = true;
    // document.getElementById('City').disabled = true;
    // document.getElementById('Street').disabled = true;
    // document.getElementById('houseNumber').disabled = true;
    // document.getElementById('flatNumber').disabled = true;
    // document.getElementById('zipCode').disabled = true;
    // document.getElementById('exampleFormControlTextarea').disabled = true;
    // document.querySelector('.form-select').disabled = true;
    // document.getElementById('flexCheckDefault').disabled = true;
}
function showForm(){
const form = document.getElementById('customerForm').style.display ="block";
const list = document.getElementById('customerList').style.display ="none";
}

    var customerList= [];

function displayCustomerList() {
    let customerDataDiv = document.getElementById('customerData');
    customerDataDiv.innerHTML = ''; // Clear previous data

    // Iterate over the customerList array and display only the company names
    customerList.forEach((customer, index) => {
        customerDataDiv.innerHTML += `<p>${index + 1}. ${customer.nazwaFirmy}</p>`;
    });
}

