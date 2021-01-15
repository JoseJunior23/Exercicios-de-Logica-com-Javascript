//2 - Crie uma função que receba dois valores inteiros como parâmetro e exiba todos
//os números ímpares entre estes dois número (sem incluí-los).
const elemNumber1 = document.querySelector('#number1');
const elemNumber2 = document.querySelector('#number2');
const elemBtn = document.querySelector('#btn');
const elemPreview = document.querySelector('#preview');


function oddNumbers(n1, n2,){
  n1 = Number(elemNumber1.value);
  n2 = Number(elemNumber2.value);

  if (n1 >= 0 && n1 < n2) {
    for (let i = n1 + 1 ; i <= n2 - 1; i++) {
      if (i % 2 != 0) {
        console.log(i)
      };
    };
  } else {
    alert('Digite um numero valido!!!');
  };
};

elemBtn.addEventListener('click', oddNumbers);



