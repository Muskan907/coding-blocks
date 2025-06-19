// document.createElement() , append(),append child, prepend  ,rmeove(),remove child

// const strong = document.createElement('strong')
// strong
// strong.innerText='This is a strong tag' //strong is created
// // we now wnat to put this is strong tag at the end of the para tag
// const para=document.querySelector('p');
// para.appendChild(strong) //strong is appended to the para tag

// const strong = document.createElement('strong')
// strong.innerText='This is a strong tag'
// const para=document.querySelector('p');
// para.append(strong) //strong is appended to the para tag

// appendChild works for only html tag but append works for both HTML and text 
// append is at the last ;prepend is at the first

// Remove
const strong=document.querySelector('strong');
const para=document.querySelector('p');
// para.removeChild(strong)
strong.remove()
const h1 = document.querySelector('h1')
h1.remove()