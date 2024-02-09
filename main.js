const pokeAPI = 'https://pokeapi.co/api/v2/pokemon/';
const kanyeAPI = 'https://api.kanye.rest';

function capitalize(str) {
    return str[0].toUpperCase() + str.substring(1, str.length);
}

function getPokeMarkup(pokemon, quote) {
    return `
    <div class='poke-container'>
        <div>
            <div class="bubble">${quote}</div>
            <div class="pointer"></div>
        </div>
        <div class='pokemon'>
            <img src="${pokemon.sprites.front_shiny}" />
            <p>${capitalize(pokemon.name)}</p>
        </div>
    </div>
    `;
}

$(document).ready(function () {

    $('#surprise').click(function () {
        const randomPokemon = Math.ceil(Math.random() * 1017);
        let quote = '';

        fetch(kanyeAPI)
            .then(r => r.json())
            .then(kanye => quote = kanye.quote)
            .then(
                fetch(`${pokeAPI}${randomPokemon}`)
                    .then(r => r.json())
                    .then(pokemon => {
                        console.log('quote', quote);
                        console.log('pokemon', pokemon);

                        $('.poke-container').remove();
                        $('#pokemon').append(getPokeMarkup(pokemon, quote));
                        $('.container').show();
                    })
            )

    });

});