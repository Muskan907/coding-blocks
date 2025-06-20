axios.get('/gettodos')
    .then((todos) =>{
       console.log(todos);
    })
    .catch((err) =>{
        console.log(err);
    })