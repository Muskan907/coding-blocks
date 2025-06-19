const h1 = document.querySelector('#heading')
h1
h1.style.color='purple';
h1.style.border='4px solid black';
h1.style.padding='16px'

const h1= document.getElementById('heading')
h1
h1.classList.add('heading-class'); //used to directly link css

h1.classList.add('one');
h1.classList.remove('heading-class');
h1.classList.toggle('heading-class');


// 
h1.classList.includes('one');
h1.classList.contains('one');

