//Capturando os elementos do HTML 
const elemName = document.querySelector("#name");
const elemEmail = document.querySelector("#email");
const elemPhone = document.querySelector("#phone");
const elemAge = document.querySelector("#age");
const elemStreet = document.querySelector("#street");
const elemHouseNumber = document.querySelector("#houseNumber");
const elemDistrict = document.querySelector("#district");
const elemCity = document.querySelector("#city");

const elemBtn = document.querySelector("#btn");
const elemPreview = document.querySelector("#preview");

let employees = [];

function personalData() {
  
  let name = elemName.value;
  let email = elemEmail.value;
  let phone = elemPhone.value;
  let age = elemAge.value;
  let street = elemStreet.value;
  let houseNumber = Number(elemHouseNumber.value);
  let district = elemDistrict.value;
  let city = elemCity.value;

 
  let employee = {
    name_employee: name,
    email_employee: email,
    phone_employee: phone,
    age_employee: age,
    street_employee: street,
    houseNumber_employee: houseNumber,
    district_employee: district,
    city_employee: city
  };

  employees.push(employee);

  //limpando inputs
  elemName.value='';
  elemEmail.value='';
  elemPhone.value='';
  elemAge.value='';
  elemStreet.value='';
  elemHouseNumber.value='';
  elemDistrict.value='';
  elemCity.value='';

  elemName.focus()

  // console.log(employees);
}

elemBtn.addEventListener("click", personalData);

function preview(){
  elemPreview.innerText = '';

  let info='';
  let parag,traco

  for(let information of employees){
    info = 'Dados Pessoais: ' + '<br>';
    info += 'Nome: ' + information.name_employee + '<br>';
    info += 'Email: ' + information.email_employee + '<br>';
    info += 'Phone: ' + information.phone_employee + '<br>';
    info += 'Data nascimento: ' + information.age_employee + '<br>';
    info += 'Endereço: ' + '<br>';
    info += 'Rua: ' + information.street_employee + '<br>';
    info += 'Numero: ' + information.houseNumber_employee + '<br>';
    info += 'Bairro: ' + information.district_employee + '<br>';
    info += 'Cidade: ' + information.city_employee + '<br>';
  }

  parag = document.createElement('p');
  parag.innerHTML = info;
  // Acrescentando o parágrafo à div 
  elemPreview.appendChild(parag)

    // Traço separador
    traco = document.createElement('hr');
    elemPreview.appendChild(traco); 

}

elemBtn.addEventListener('click', preview)
