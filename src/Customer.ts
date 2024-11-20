function Customer(){
this.company = "Firma XYZ";
this.companyNIP = "1234567890";
this.city = "Warszawa";
this.street = "Nowa";
this.houseNumber = "12";
this.flatNumber = "34";
this.zipCode = "00-001";
this.exampleFormControlTextarea = "Brak uwag";
this.lastElement = "1"; // IT
this.flexCheckDefault = true;

}
function displayCompanyData() {
    console.log("Company:", this.company);
    console.log("Company NIP:", this.companyNIP);
    console.log("City:", this.city);
    console.log("Street:", this.street);
    console.log("House Number:", this.houseNumber);
    console.log("Flat Number:", this.flatNumber);
    console.log("Zip Code:", this.zipCode);
    console.log("Remarks:", this.exampleFormControlTextarea);
    console.log("Last Element:", this.lastElement);
    console.log("Checkbox Checked:", this.flexCheckDefault ? "Yes" : "No");
}



// function Supplier(accountNumber){
//     this.accountNumber= accountNumber;
//     this.invoice= [];
// }

// Supplier.prototype = new Customer();

