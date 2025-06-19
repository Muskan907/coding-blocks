// .text(),.html(),.altr(),.last(),.first(),.val()
// addClass(),removeClass(),toggleClass()

$('h1').addClass('one'); 
$('h1').addClass('two');

// .text()
$('p').text() //paste on console
$('p').text("this is now para") //this will chnge the para 

// .html()
$('p').html() //paste on console
$('p').html('<span>this is a span</span>')

// .val()
$('input').val() //paste on console
$('input').val('Muskan')

// .attr()
$('input').attr('type') //paste on console
// .attr() to add attribute
$('input').attr('type','color')
$('input').attr('type','date')

// .last()
$('h2+ul li')
$('h2+ul li').first().css('color','red')
$('h2+ul li').last().css('color','red')

