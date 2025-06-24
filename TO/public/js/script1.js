const addtask = document.querySelector('#addTask');
const newtask = document.querySelector('#newTask');
const taskList = document.querySelector('.taskList');

function addToDom(todos){
    taskList.innerText = '';
    todos.forEach(element => {
        // 1.create a element 
        let li = document.createElement('li');
        //2. update the text inside the li 
        // li.innerText = element.name;
        li.innerHTML= `
        <span class = "taskname"> ${element.name}</span>
        <button atrid = ${element.id} class = "upBtn">⬆</button>         
        <button atrid = ${element.id} class = "downBtn">⬇</button>
        <button atrid = ${element.id} class = "delBtn">X</button>
        `
        // atrid is a random name given it is used for attribute id 
        // 3.Append this to the the tasklist
        taskList.appendChild(li);
       
    });
}

// this retain the list even after refreshing the page we will get todos
axios.get('/gettodos')
.then((res)=>{
    let todos = res.data;
    addToDom(todos);
})
.catch((err)=>{
    console.log(err);
})


addtask.addEventListener('click' , (ev)=>{
    ev.preventDefault();
    axios.post('/addtodos' ,{   //this part req the server
        name : newtask.value,
    })
    .then((res)=>{              //this part get res from the server
        let todos = res.data; //fetched the data key form res,now we can print this todo and will only get the data in console
        newtask.value = '';
        console.log(todos) 
        addToDom(todos);   
    })
    .catch((err)=>{
        console.log(err);
    })
})

// axios.get('/gettodos')
// .then((res)=>{
//     let todos = res.data;
//     addToDom(todos);
// })
// .catch((err)=>{
//     console.log(err);
// })

taskList.addEventListener('click' , (e)=>{
        // console.log(e);
        // console.log(e.target);
        let atrid = e.target.getAttribute('atrid');
        let btnName = e.target.className;
        // console.log(atrid);
        // console.log(btnName);
        if(btnName == "delBtn"){
        axios.post(`/deletetodos`,{id:atrid})
            .then((res)=>{
                let todos = res.data;
                console.log(todos)
                addToDom(todos);
            })
            .catch((err)=>
                {
                    console.log(err);
                })
                }
      if(btnName == "delBtn"){
       deletetodo(atrid);
    }
    else if(btnName == "upBtn"){
      // increrase priority
      axios.get(`/increasepriority?id=${atrid}` , {
        id: atrid,
      })
      .then((res)=>{
        let todos = res.data;
        addToDom(todos);    
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    else if (btnName == "downBtn"){
    // decrease priority
    axios.get(`/decreasepriority?id=${atrid}` , {
        id: atrid,
      })
      .then((res)=>{
        let todos = res.data;
        addToDom(todos);    
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    })