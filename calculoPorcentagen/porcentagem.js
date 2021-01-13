// Crie uma função que calcula 5% de desconto retornando o valor do desconto.
const elemPrice = document.querySelector("#price");
const elemDiscount = document.querySelector("#discount");
const elemNewPrice = document.querySelector("#newPrice");
const elemCalculate = document.querySelector("#calc")

let valueDiscount;
function discount(price, discount, newPrice){
  price = elemPrice.value;
  discount = elemDiscount.value;
 
  valueDiscount =  (price * (discount/ 100));
  newPrice = price - valueDiscount

 return(newPrice)
}  

//limpar os dados
 elemPrice.value ='';
 elemDiscount.value= '';
 elemNewPrice.value='';

 elemPrice.focus();


 elemCalculate.addEventListener('click', discount);

 function newPrice(){

   
   let info= '';
   let parag, traco;

   info ='Valor digitado: R$: ' + elemPrice.value + ' reais'+ '<br>';
   info +='Valor do desconto: '+ elemDiscount.value + '%' +'<br>';
   info += 'Total de desconto R$: ' + valueDiscount + ' reais'+'<br>';
   info += 'Valor com desconto R$: ' + discount() +' reais';

   parag = document.createElement('p');
   parag.innerHTML = info

   elemNewPrice.appendChild(parag);

   traco = document.createElement('hr');
   elemNewPrice.appendChild(traco)
   }

   elemCalculate.addEventListener('click', newPrice)

