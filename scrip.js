
//const h1 = document.querySelector('h1');
//const p = document.querySelectorAll('p');
//const parrafito = document.querySelector('.parrafito');
//const pid = document.querySelector('#pid');


// console.log(input.value);
// console.log ({
//   h1,
//   p,
//   parrafito,
//   pid,
//   input,
// })

// //h1.innerText = "Miguelito <br> Feo";
// console.log (h1.getAttribute('class'));
// //h1.setAttribute('class',"Rojo");
// //console.log (h1.getAttribute('class'));

// h1.classList.add ("Azul");

// h1.classList.remove ("verde");

// //h1.classList.toggle --- toogle a clase determinada
// //h1.classList.contains --- true o false si existe o no

// //input.value="456";


// console.log(document.createElement('spam'));

// const img = document.createElement('img');
// //img.setAttribute('src', 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/P7XPD43J75HHDBGCMPS7T2PYVE.jpg');
// //console.log(img); 

// //pid.append(img);


const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#calcular');
const result = document.querySelector('#resultado');
const form = document.querySelector('#formulario');
//console.log(result.insertAdjacentHTML);
//result.insertAdjacentHTML("Aca");
//btn.addEventListener('evento','funcion');
form.addEventListener('submit',sumarimputs);
console.log("no");
function sumarimputs(event) {
    event.preventDefault();
    console.log({event});
   resultado.append(`El Resultado es ${(Number(input1.value) + Number(input2.value))} `);
}







































