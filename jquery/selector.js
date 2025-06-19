// // if you wnat to select anyhting in jquery then use $('#heading')
// // .CSS method is used to manipulate
// $('#heading');
// $('#heading').css('color','red');

// Make sure DOM is loaded
$(document).ready(function () {
    // Select the heading and change color
    $('#heading').css('color', 'red');
});

// for selecting the items fav-movie
const lis = document.getElementsByClassName('fav-movie');

for (let li of lis) {
  li.style.color = 'purple';
}

// wirte this in console
// const styles={
//     color:'red',
//     fontSize:'20px',
//       backgroundColor:'blue'
// }
// console.log(styles);

$('#heading').css(styles);