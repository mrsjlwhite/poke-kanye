const pokeAPI = 'https://pokeapi.co/api/v2/pokemon/';

function capitalize(str) {
    return str[0].toUpperCase() + str.substring(1, str.length);
}

$(document).ready(function () {

    $('.container').hide();


    $('#surprise').click(function () {
        const randomPokemon = Math.ceil(Math.random() * 1017)

        fetch(`${pokeAPI}${randomPokemon}`)
            .then(r => r.json())
            .then(pokemon => {
                console.log('pokemon', pokemon);
                
                $('.poke-container').remove();

                const pokeMarkup = `
                <div class='poke-container'>
                    <img src="${pokemon.sprites.front_shiny}" />
                    <p>${capitalize(pokemon.name)}</p>
                </div>
                `;

                console.log('pokeMarkup', pokeMarkup.trim());

                $('#pokemon').append(pokeMarkup);

                $('.container').show();
            })

    });

});