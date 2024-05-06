// Claus
const keys = {
    api_key: '',
    session_id: '',
    account_id: ''
}

let moviesResult = document.getElementById("moviesResult");

// Variable para el scroll infinito
let total_pages = 0;
let current_page = 1;

async function setFav(id, favBool){
    // Llama a la API para marcar la película como favorita
    // Simulación de la llamada a la API
    await markAsFavorite(id, favBool);
    console.log(`id marked as ${favBool}`);
    showFavs();
}

async function showFavs(){
    moviesResult.innerHTML = "";

    // Simulación de la llamada a la API para obtener las películas favoritas del usuario
    const favoriteMovies = await fetchFavoriteMovies();
    favoriteMovies.forEach(movie => printMovie(movie, true, false));
}

async function searchMovies(query){
    // Realiza la búsqueda de películas
    // Simulación de la llamada a la API para buscar películas
    const searchResults = await searchMoviesAPI(query);

    // Obtiene el total de páginas y actualiza la variable total_pages
    total_pages = searchResults.total_pages;

    // Imprime las películas encontradas
    searchResults.results.forEach(movie => printMovie(movie, false, false));
}

/* FUNCIONS D'INTERACCIÓ AMB EL DOM */

// Click Favorites
document.getElementById("showFavs").addEventListener("click", async function(){
    removeActive();
    this.classList.add("active");

    await showFavs();
})

// Click Watchlist
document.getElementById("showWatch").addEventListener("click", function(){
    removeActive();
    this.classList.add("active");

    //showWatch();
})

/* Funcions per detectar la cerca d'una pel·lícula */
// Intro a l'input
document.getElementById("search").addEventListener('keypress', async function (e) {
    if (e.key === 'Enter') {
        await searchMovies(this.value);
    }
});

// Click a la lupa
document.querySelector(".searchBar i").addEventListener("click", async () => {
    await searchMovies(document.getElementById("search").value);
});

// Netejar l'input
document.getElementById("search").addEventListener('click', () => clearInput()); 

function clearInput(){
    document.getElementById("search").value="";
}

// Elimina l'atribut active del menú
function removeActive(){
    document.querySelectorAll(".menu li a").forEach(el=>el.classList.remove("active"));
}

/* Funció per printar les pel·lícules */
function printMovie(movie, fav, watch){

    let favIcon = fav ? 'iconActive' : 'iconNoActive';
    let watchIcon = watch ? 'iconActive' : 'iconNoActive';

    moviesResult.innerHTML += `<div class="movie">
                                    <img src="https://image.tmdb.org/t/p/original${movie.poster_path}">
                                    <h3>${movie.original_title}</h3>
                                    <div class="buttons">
                                        <a id="fav" onClick="setFav(${movie.id}, ${!fav})"><i class="fa-solid fa-heart ${favIcon}"></i></a>
                                        <a id="watch" onClick="setWatch(${movie.id}, ${!watch})"><i class="fa-solid fa-eye ${watchIcon}"></i></a>
                                    </div>`;
}

// Simulación de la llamada a la API para marcar una película como favorita
async function markAsFavorite(movieId, favBool){
    // Aquí iría el código para llamar a la API y marcar la película como favorita
    // Simulación de una espera de 1 segundo
    await new Promise(resolve => setTimeout(resolve, 1000));
}

// Simulación de la llamada a la API para obtener las películas favoritas del usuario
async function fetchFavoriteMovies(){
    // Aquí iría el código para llamar a la API y obtener las películas favoritas del usuario
    // Simulación de una espera de 1 segundo
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Suponiendo que devuelve un array de películas favoritas
    return [
        { id: 1, title: "Movie 1", poster_path: "/path/to/poster1.jpg" },
        { id: 2, title: "Movie 2", poster_path: "/path/to/poster2.jpg" },
        // Otros objetos de películas...
    ];
}

// Simulación de la llamada a la API para buscar películas
async function searchMoviesAPI(query){
    // Aquí iría el código para llamar a la API y buscar películas según el query
    // Simulación de una espera de 1 segundo
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Suponiendo que devuelve un objeto con resultados de búsqueda
    return {
        total_pages: 5, // Suponiendo un total de 5 páginas
        results: [
            { id: 3, title: "Movie 3", poster_path: "/path/to/poster3.jpg" },
            { id: 4, title: "Movie 4", poster_path: "/path/to/poster4.jpg" },
            // Otros objetos de películas...
        ]
    };
}

// Scroll infinito
window.addEventListener('scroll', async () => {
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5 && current_page < total_pages) {
        current_page++;
        await searchMovies(document.getElementById("search").value);
    }
});
