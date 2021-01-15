//2 - Crie uma função que receba dois valores inteiros como parâmetro e exiba todos
//os números ímpares entre estes dois número (sem incluí-los).
const elemNumber1 = document.querySelector("#number1");
const elemNumber2 = document.querySelector("#number2");
const elemBtn = document.querySelector("#btn");
const elemPreview = document.querySelector("#preview");

let oddNumber = [];
function oddNumbers() {

  let number1 = Number(elemNumber1.value);
  let number2 = Number(elemNumber2.value);
 
  if (number1 >= 0 && number1 < number2) {
    for (let i = number1 + 1; i <= number2 - 1; i++) {
      if (i % 2 != 0) {
        oddNumber[i] = i;
      };
    };
  } else {
    alert("Numero 1 deve ser maior que 0 e menor que numero 2 !!! ");
  }
  return oddNumber;
}
elemBtn.addEventListener("click", oddNumbers);


function preview() {
  elemPreview.innerText = '';

  let info = '';
  let parag;


  info = 'Os numeros impares entre: ' + elemNumber1.value + ' e ' + elemNumber2.value + '<br>';
  info += 'São: ' + oddNumbers()


  parag = document.createElement('p');
  parag.innerHTML = info;

  elemPreview.appendChild(parag);
 

}

elemBtn.addEventListener('click', preview)
