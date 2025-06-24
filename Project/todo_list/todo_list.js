//to give a strike through line
$('ul').on('click','li',function(){
    $(this).toggleClass('completed');
});


//to add new item in the list
$('#inp').keypress(function(e){
const todoText = $(this).val(); //to get input value

if(e.which === 13){
    $('#list').append(`<li><span>X</span> ${todoText}</li>`);
     $(this).val(""); // Clear input after adding
}
});

// to delete any item
$('ul').on('click','span',function(e){
    $(this).parent().fadeOut(function(){  //wil remove slowly
        $(this).remove();  
    })
    e.stopPropagation();
    
    // $(this).parent().remove(); it removes instantly 
});


// Toggling the input field visibility
$('#plus').click(function(){
    $('#inp').fadeToggle(1000);
})