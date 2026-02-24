async function retrievePokemon() {
    // Get user input
    let nameID = document.getElementById("nameID").value.toLowerCase();
    if (!nameID) {
        console.log("No pokemon name/id given");
        return;
    }

    // Check cache, call PokeAPI if necessary
    let cache = localStorage.getItem(nameID);
    if (!cache) {
        console.log("No cache, calling PokeAPI");
        try {
            await fetch(`https://pokeapi.co/api/v2/pokemon/${nameID}`)
                .then(response => response.json())
                .then(data => localStorage.setItem(nameID, JSON.stringify(data)));
        } 
        catch (error) {
        console.error(error.message);
        }
    }
    else {
        console.log("Cache detected, no need to call PokeAPI");
    }

    // Once we have the data, display image and sound, load movesets
    cache = JSON.parse(localStorage.getItem(nameID));
    let pokemonSprite = document.getElementById("pokemonSprite");
    let pokemonCry = document.getElementById("pokemonCry");

    pokemonSprite.src = cache.sprites.front_default;
    pokemonCry.src = cache.cries.latest;

    let pokemonMoves = [
        document.getElementById("move1"),
        document.getElementById("move2"),
        document.getElementById("move3"),
        document.getElementById("move4")
    ];

    // Clear dropdowns
    pokemonMoves.forEach(dropdown => {
        dropdown.innerHTML = "";
    });

    let moveList = cache.moves;

    // Initialize
    pokemonMoves.forEach(dropdown => {
        moveList.forEach(move => {
            let option = document.createElement("option");
            option.textContent =     move.move.name;
            dropdown.appendChild(option);
        });
    });
}

function addTeam() {
    // Get current sprite and selected moves
    let pokemonSprite = document.getElementById("pokemonSprite").src;
    let pokemonMoves = [
        document.getElementById("move1"),
        document.getElementById("move2"),
        document.getElementById("move3"),
        document.getElementById("move4")
    ];

    // Don't add to team if not loaded
    if (pokemonMoves[0].innerHTML == "") {
        console.log("No pokemon has been loaded");
        return;
    }

    let pokedex = document.getElementById("pokedex");
    let newPokemon = document.createElement("div");

    newPokemon.classList.add("teamMember");
    newPokemon.innerHTML = `
        <img align="left" src=${pokemonSprite} alt="Pokemon Sprite" width="150" height="150"><br>
        <ul>
            <li>${pokemonMoves[0].value}</li>
            <li>${pokemonMoves[1].value}</li>
            <li>${pokemonMoves[2].value}</li>
            <li>${pokemonMoves[3].value}</li>
        </ul>
    `;

    pokedex.append(newPokemon);
}