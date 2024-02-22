const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
        let currentPage = 1;
        // Cantidad de Pokémon por página
        const limit = 10; 
        // Máximo de botones de página visibles
        const maxPagesVisible = 5;

        async function fetchPokemons(page) {
            const offset = (page - 1) * limit;
            const url = `${baseUrl}?limit=${limit}&offset=${offset}`;
            const response = await fetch(url);
            const data = await response.json();

            displayPokemons(data.results);
            setupPagination(data.count, page);
        }

        async function displayPokemons(pokemons) {
            const pokemonContainer = document.getElementById('pokemonContainer');
            // Limpiar contenido anterior
            pokemonContainer.innerHTML = ''; 

            for (const pokemon of pokemons) {
                const response = await fetch(pokemon.url);
                const pokemonDetails = await response.json();

                const cardHtml = `
                    <div class="card">
                        <img src="${pokemonDetails.sprites.other["official-artwork"].front_default}" alt="${pokemonDetails.name}">
                        <h3>${pokemonDetails.name}</h3>
                        <p>ID: ${pokemonDetails.id}</p>
                        <p>Altura: ${pokemonDetails.height}</p>
                        <p>Peso: ${pokemonDetails.weight}</p>
                        <p>Tipo: ${pokemonDetails.types.map(type => type.type.name).join(', ')}</p>
                    </div>
                `;
                pokemonContainer.innerHTML += cardHtml;
            }
        }

        function setupPagination(totalItems, currentPage) {
            const totalPages = Math.ceil(totalItems / limit);
            const paginationContainer = document.getElementById('pagination');
            // Limpiar paginación anterior
            paginationContainer.innerHTML = ''; 

            // Agregar botón para retroceder
            const prevPage = currentPage - 1 > 0 ? currentPage - 1 : 1;
            const prevButton = document.createElement('button');
            prevButton.innerText = '<';
            prevButton.addEventListener('click', () => fetchPokemons(prevPage));
            paginationContainer.appendChild(prevButton);

            // Calcular rango de páginas visibles
            let startPage = currentPage - Math.floor(maxPagesVisible / 2);
            startPage = startPage < 1 ? 1 : startPage;
            let endPage = startPage + maxPagesVisible - 1;
            endPage = endPage > totalPages ? totalPages : endPage;

            // Ajustar inicio si estamos al final
            startPage = endPage - startPage < maxPagesVisible ? endPage - maxPagesVisible + 1 : startPage;
            startPage = startPage < 1 ? 1 : startPage;

            for (let i = startPage; i <= endPage; i++) {
                const button = document.createElement('button');
                button.innerText = i;
                button.addEventListener('click', () => {
                    fetchPokemons(i);
                });
                if (currentPage === i) button.disabled = true;
                paginationContainer.appendChild(button);
            }

            // Agregar botón para avanzar
            const nextPage = currentPage + 1 <= totalPages ? currentPage + 1 : totalPages;
            const nextButton = document.createElement('button');
            nextButton.innerText = '>';
            nextButton.addEventListener('click', () => fetchPokemons(nextPage));
            paginationContainer.appendChild(nextButton);
        }

        fetchPokemons(currentPage);



/* for (let i = 1; i <= 151; i++) {
    fetch(URL + i)
        .then((response) => response.json())
        .then(data => mostrarPokemon(data));
}

function mostrarPokemon(poke) {

    let tipos = poke.types.map(type => `<p class="${type.type.name} tipo">${type.type.name}</p>`);
    tipos = tipos.join('');

    let pokeId = poke.id.toString();

    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
    <div class="pokemon-imagen">
        <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
    </div>
    <div class="pokemon-info">
        <div class="nombre-contenedor">
            <p class="pokemon-id">#${pokeId}</p>
            <h2 class="pokemon-nombre">${poke.name}</h2>
        </div>
        <div class="pokemon-tipos">${tipos}</div>
        <div class="pokemon-stats">
            <p class="stat">${poke.height} mts</p>
            <p class="stat">${poke.weight} kg</p>
        </div>
    </div>
    `;
    listaPokemon.append(div);
} */
