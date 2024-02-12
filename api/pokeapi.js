let pokemonsList = document.getElementById("pokemons-list");
let links = document.getElementById("links");

function updatePokemons(url) {
    if (url) {
        //Reiniciamos pokemones actuales
        pokemonsList.innerHTML = "";
        // Llamamos a la API de pokemon con Fetch
        fetch(url)
            .then((respuesta) => respuesta.json())
            .then((respuesta) => {
                for (let i of respuesta.results) {
                    // Realizamos otra solicitud Fetch para obtener la imagen
                    fetch(i.url)
                        .then((x) => x.json())
                        .then((x) => {
                            pokemonsList.innerHTML += `<div class="card">
                                                    <img src="${x.sprites.front_default}" alt="">
                                                    <p>${x.name}</p>
                                                </div>`;
                        });
                        
                }
                links.innerHTML = respuesta.previous ? `<button onclick="updatePokemons('${respuesta.previous}')">Atrás</button>` : "";
                links.innerHTML += respuesta.next ? `<button onclick="updatePokemons('${respuesta.next}')">Siguiente</button>` : "";
            });
    }
}

updatePokemons("https://pokeapi.co/api/v2/pokemon/ditto");

