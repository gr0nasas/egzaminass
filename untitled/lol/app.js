const apiUrl = 'https://www.omdbapi.com/?t=';
const key = 'e4db3ced'
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const searchButton = document.getElementById('searchAgain')

const main = document.getElementById("main");
const form = document.getElementById("form");

searchButton.addEventListener("click", showMovies)
function showMovies(){
    const search = document.getElementById("search").value;
    fetch(`${apiUrl}${search}&apikey=${key}`).then(res => res.json())
        .then(function(data){
            console.log(data);
            data.results.forEach(element => {
                const el = document.createElement('div');
                const image = document.createElement('img');
                const text = document.createElement('h2');

                text.innerHTML = `${element.title}`;
                image.src = IMGPATH + element.poster_path;
                el.appendChild(image);
                el.appendChild(text);
                main.appendChild(el);
            });
        });
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const searchTerm = search.value;

    if (searchTerm) {
        showMovies(SEARCHAPI + searchTerm);
        search.value = "";
    }
});