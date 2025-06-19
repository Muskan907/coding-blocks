// const buttons = document.querySelectorAll('button');

// for(let button of buttons){
//     button.addEventListener('click', function(e){
//         console.log(e.target.innerText);
//     });
// }

const buttons = document.querySelectorAll('button');

for(let button of buttons){
    button.addEventListener('click', function(e){
        
        const buttonText = e.target.innerText;

        if(buttonText=='C'){
            screen.value="";
        }
        else if(buttonText=='X'){
            screen.value += '*';
        }
        else if(buttonText=='='){
            try{
            screen.value = eval(screen.value);
        }
        catch(e){
            screen.value = "Error";
        }
       }
        else{
            screen.value += buttonText;
        }
    });
}