var container=document.getElementById('container');
console.log(container);

var ptag=document.createElement('p');
ptag.innerText="Hello Dom";
ptag.style.color="blue";
console.log(ptag);

container.appendChild(ptag);