
const global = {
    currentPage: window.location.pathname
};

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
            console.log('Home');
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