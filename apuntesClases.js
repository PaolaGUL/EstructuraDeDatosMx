// Resuloción del ejercicio num amigos


for (let j=1; j<1000; j++)
if (sonAmigos(i,j)==true)
  console.log(i + "," + j + " son amigos");

function sonAmigos(num1,num2){
if (num1!=num2 && sumDivs(num1)==num2 && sumDivs(num2)==num1)
return true;
else
return false;
}

function sumDivs(numero){
let suma=0;
for (let i=1;i<numero;i++)
if (numero % i ==0)
  suma +=i;
return suma;
}
