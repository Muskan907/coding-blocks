document.getElementsByTagName('section')
const sections = document.getElementsByTagName('section')
sections[0]

const favMovies = document.getElementsByClassName('fav-movie');
favMovies
for(let movie of favMovies){
    movie.computedStyleMap.color='purple';
    movie.computedStyleMap.fontWeight='bold';
}
