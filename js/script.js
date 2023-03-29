
const global = {
    currentPage: window.location.pathname
};

// Fetch Data from The Movie Database API
// This function will reach out to the server and get the data we need using the
// endpoint passed in. It will return the data as a JavaScript object.
async function fetchAPIData(endpoint){
    const API_KEY = '046cbad019d15b8e27aaba530c59eb0e';
    const API_URL = 'https://api.themoviedb.org/3/';
    const response =  await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);
    const data = await response.json();
    return data;
}


 async function displayPopularMovies(){
    //the {} around results changes the object to just give arrays of movie objects.
    // without it, it would give a lot more data other than results.
    const {results} =  await fetchAPIData('movie/popular');
    //the async/await is here becuase it has to wait on fetchAPIData

    results.forEach((movie)=>{
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <a href="movie-details.html?id=${movie.id}">
            ${
              movie.poster_path
                ? `<img
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
              class="card-img-top"
              alt="${movie.title}"
            />`
                : `<img
            src="../images/no-image.jpg"
            class="card-img-top"
            alt="${movie.title}"
          />`
            }
          </a>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${movie.release_date}</small>
            </p>
          </div>
        `;
        document.querySelector('#popular-movies').appendChild(div);
    })
}



//Highlight Active Link
function highlightActiveLink(){
    document.querySelectorAll(".nav-link").forEach((link)=>{
        if(link.getAttribute('href') === global.currentPage){;
            link.classList.add('active')
        }
    });
};

//Init App
function init (){

    switch(global.currentPage){
        case '/' :
        case '/index.html' :
            displayPopularMovies();
            break;
        case '/shows.html' :
            console.log('Shows');
            break;   
        case '/tv-details.html' :
            console.log('Tv Details');
            break;
        case '/movie-details.html' :
            console.log('Movie Details');
            break;
        case '/search.html' :
                console.log('Search');
                break;  
    }

    highlightActiveLink();
}

document.addEventListener("DOMContentLoaded", init);