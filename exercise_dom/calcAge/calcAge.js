let x; //variable storage age
//create Element to input year of birth 
const input = document.createElement('input');
input.setAttribute("placeholder", "nhập năm sinh");
input.setAttribute('type', 'number');

//create element for calculate age
const button = document.createElement('button');
button.innerHTML = "Tính tuổi";

//create element for show age
const p= document.createElement('p');

button.addEventListener('click', function() {
  const date = new Date();
  x = date.getFullYear() - input.value;
  p.innerHTML = "Tuổi của bạn là: "+ x;
})

document.body.appendChild(input);
document.body.appendChild(button);
document.body.appendChild(p);
