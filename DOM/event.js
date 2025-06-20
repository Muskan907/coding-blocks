const btn = document.getElementById('btn');
const h1 = document.querySelector('h1');

btn.onclick = function (){
    console.log('Someone clicked the button')
}

h1.onclick = function(){
    h1.style.color = 'red';
    h1.style.backgroundColor = 'aqua';
}