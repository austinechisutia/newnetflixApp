const main = document.getElementById('main');

fetch(genres_list_http + new URLSearchParams({
    api_key: api_key
}))
    .then(res => res.json())
    .then(data=> {
        data.genres.forEach(item=>{
            fetchMoviesListByGenres(item.id, item.name);
        })
    }
    
    );

    const fetchMoviesListByGenres = (id, genres) => {
        fetch(movie_genres_http + new URLSearchParams({
            api_key: api_key,
            with_genres: id,
            page: Math.floor(Math.random() * 3) + 1

        }))
        .then(res => res.json())    
        .then(data=>{
            makeCategoryElement(`${genres}_movies`, data.results);
        })
        .catch(error => console.log(error));
    };

    const makeCategoryElement = (category, data) => {
        main.innerHTML += `
            <div class="movie-list">
            <button class="pre-btn">
                <img src="images/pre.png" alt="">
            </button>
            <h1 class="movie-category">Popular Movies</h1>
            <div class="movie-container">
                
            </div>

            <button class="nxt-btn">
                <img src="images/pre.png" class="nxt" alt="">
            </button>


        </div>
        `
    }