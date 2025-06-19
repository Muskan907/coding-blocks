$('#btn').click(function(){
    console.log('Button clicked');
    // console.log($(this));
    $(this).css('border','3px solid red')
}) //it accepts the handler and callback function

$('input').keypress(function(){
    // console.log('KeyPressed');
    console.log($(this).val());
})