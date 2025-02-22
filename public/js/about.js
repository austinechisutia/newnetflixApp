let movie_id = location.pathname;


fetch(`${movie_detail_http}${movie_id}?` + new URLSearchParams({
    api_key: api_key
}))
.then(res=>res.json())
.then(data=>{
    setupMovieInfo(data);
})

const setupMovieInfo = (data) => {
    const movieName = document.querySelector('.movie-name');
    const genres = document.querySelector('.genres');
    const des = document.querySelector('.des');
    const title = document.querySelector('title');
    const backdrop = document.querySelector('.movie-info');

    title.innerHTML = movieName.innerHTML = data.title;
    genres.innerHTML = `${data.release_date.split('-')[0]} |  `;
    for (let i = 0; i < data.genres.length; i++) {
        genres.innerHTML += `${data.genres[i].name + formatString(i, data.genres.length)}`;
    }

    if(data.adult == true){
        genres.innerHTML += ' | +18';
    }
    if(data.backdrop_path == null){
        data.backdrop_path = data.poster_path;
    }
    des.innerHTML = data.overview.substring(0, 200) + '...';
    backdrop.style.backgroundImage = `url(${image_url}${data.backdrop_path})`;
}

const formatString = (currentIndex, maxIndex) => {
    return (currentIndex == maxIndex - 1) ? '' : ', ';
}


// fetching cast info

fetch(`${movie_detail_http}${movie_id}/credits?` + new URLSearchParams({
    api_key: api_key
}))
.then(res=>res.json())
.then(data=>{
    console.log(data);
    const cast = document.querySelector('.starring');
    for (let i = 0; i < 5; i++) {
        cast.innerHTML += `${data.cast[i].name + formatString(i, 5)}`;
    }
})
// fetching videos

fetch(`${movie_detail_http}${movie_id}/videos?` + new URLSearchParams({
    api_key: api_key
}))

.then(res=>res.json())
.then(data=>{
    console.log(data);
    let  trailerContainer = document.querySelector('.trailerContainer');
    
})